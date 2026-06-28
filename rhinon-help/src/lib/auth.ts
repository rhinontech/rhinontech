/**
 * Auth seam for the docs site.
 *
 * The PUBLIC guides (`/<product>/guide/...`) are open to everyone. The DEVELOPER
 * docs (`/<product>/developers/...`) are gated: a visitor enters an email, the
 * backend checks it against the admin-managed allowlist, and on success we issue
 * a short, HMAC-signed session cookie that `proxy.ts` verifies on every request.
 *
 * Edge-compatible: uses Web Crypto / btoa / atob only (no Node APIs), so the
 * same verify logic runs inside the Next proxy (edge runtime).
 */

/** Cookie carrying the signed docs session. */
export const SESSION_COOKIE = "rhinon_session";

/** How long a docs session stays valid. */
export const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

/** Paths always reachable without a session. */
export const PUBLIC_PATHS = ["/login"];

/**
 * Optional master gate. When `true`, the ENTIRE site requires a session (not
 * just the developer docs). Off by default — only the developer track is gated.
 */
export const GATE_ENABLED = process.env.NEXT_PUBLIC_GATE_ENABLED === "true";

const DEV_FALLBACK_SECRET = "rhinon-help-dev-secret-change-me";

function getSecret(): string {
  const s = process.env.DOCS_SESSION_SECRET;
  if (!s) {
    console.warn(
      "[auth] DOCS_SESSION_SECRET is not set — using an insecure dev fallback. Set it in production."
    );
    return DEV_FALLBACK_SECRET;
  }
  return s;
}

/* -------------------------------------------------------------------------- */
/*  Path gating                                                                */
/* -------------------------------------------------------------------------- */

/** A developer-docs path is any URL whose track segment is `developers`. */
export function isDeveloperDocsPath(pathname: string): boolean {
  const seg = pathname.split("/").filter(Boolean);
  return seg.length >= 2 && seg[1] === "developers";
}

/* -------------------------------------------------------------------------- */
/*  Signed session token (HMAC-SHA256, edge-safe)                              */
/* -------------------------------------------------------------------------- */

function toB64Url(data: Uint8Array): string {
  let s = "";
  for (const b of data) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromB64Url(input: string): Uint8Array {
  const str = input.replace(/-/g, "+").replace(/_/g, "/");
  const padded = str + "=".repeat((4 - (str.length % 4)) % 4);
  const bin = atob(padded);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

/** Coerce a Uint8Array to a BufferSource (works around TS ArrayBufferLike strictness). */
function asBuffer(u: Uint8Array): BufferSource {
  return u as BufferSource;
}

async function getKey(): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    asBuffer(new TextEncoder().encode(getSecret())),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

/** Mint a signed session token for an allowed email. */
export async function signSession(
  email: string,
  ttlMs: number = SESSION_TTL_MS
): Promise<string> {
  const payload = { email: email.toLowerCase(), exp: Date.now() + ttlMs };
  const payloadBytes = new TextEncoder().encode(JSON.stringify(payload));
  const key = await getKey();
  const sig = new Uint8Array(
    await crypto.subtle.sign("HMAC", key, asBuffer(payloadBytes))
  );
  return `${toB64Url(payloadBytes)}.${toB64Url(sig)}`;
}

/** Verify a session token's signature + expiry. Returns the email or null. */
export async function verifySession(
  token: string | undefined | null
): Promise<{ email: string } | null> {
  if (!token) return null;
  const [p, s] = token.split(".");
  if (!p || !s) return null;
  try {
    const payloadBytes = fromB64Url(p);
    const sig = fromB64Url(s);
    const key = await getKey();
    const ok = await crypto.subtle.verify(
      "HMAC",
      key,
      asBuffer(sig),
      asBuffer(payloadBytes)
    );
    if (!ok) return null;
    const payload = JSON.parse(new TextDecoder().decode(payloadBytes));
    if (typeof payload?.email !== "string") return null;
    if (typeof payload?.exp !== "number" || payload.exp < Date.now()) return null;
    return { email: payload.email };
  } catch {
    return null;
  }
}

/* -------------------------------------------------------------------------- */
/*  Backend allowlist check (server runtime only)                             */
/* -------------------------------------------------------------------------- */

/**
 * Ask the Rhinon backend whether an email is on the developer-docs allowlist.
 * Used by the login route handler (Node runtime). Returns false on any error.
 */
export async function checkEmailAllowed(email: string): Promise<boolean> {
  const base = process.env.RHINON_API_URL;
  if (!base) {
    console.error("[auth] RHINON_API_URL is not set — cannot verify docs access.");
    return false;
  }
  try {
    const res = await fetch(`${base.replace(/\/$/, "")}/public/docs-access/check`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.toLowerCase() }),
      cache: "no-store",
    });
    if (!res.ok) return false;
    const data = (await res.json()) as { allowed?: boolean };
    return Boolean(data?.allowed);
  } catch (err) {
    console.error("[auth] docs-access check failed:", err);
    return false;
  }
}
