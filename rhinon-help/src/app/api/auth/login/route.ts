import { NextResponse } from "next/server";
import {
  SESSION_COOKIE,
  SESSION_TTL_MS,
  checkEmailAllowed,
  signSession,
} from "@/lib/auth";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Email-only docs login. Verifies the email against the backend allowlist and,
 * if allowed, sets the signed `rhinon_session` cookie the proxy checks.
 */
export async function POST(req: Request) {
  let email = "";
  try {
    const body = await req.json();
    email = (body?.email ?? "").toString().trim().toLowerCase();
  } catch {
    /* invalid body */
  }

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Enter a valid email address." },
      { status: 400 }
    );
  }

  const allowed = await checkEmailAllowed(email);
  if (!allowed) {
    return NextResponse.json(
      { ok: false, message: "This email doesn't have access to the developer docs." },
      { status: 403 }
    );
  }

  const token = await signSession(email);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: Math.floor(SESSION_TTL_MS / 1000),
  });
  return res;
}
