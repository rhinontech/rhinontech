/**
 * Auth seam — private/invite-only gate.
 *
 * The real authentication backend is TBD; this file is the single place that
 * decides "is this request allowed in?". When the backend is ready, swap the
 * body of `hasValidSession` (and flip GATE_ENABLED on) and nothing else needs
 * to change — `proxy.ts` and the login page already route through here.
 */

/** Cookie that will carry the session token once the backend is wired up. */
export const SESSION_COOKIE = "rhinon_session";

/**
 * Master switch for the gate. Off by default so the preview build is browsable.
 * Set NEXT_PUBLIC_GATE_ENABLED=true (and wire `hasValidSession`) to lock it down.
 */
export const GATE_ENABLED = process.env.NEXT_PUBLIC_GATE_ENABLED === "true";

/** Paths reachable without a session. */
export const PUBLIC_PATHS = ["/login"];

/**
 * TODO(backend): validate `token` against the Rhinon auth backend
 * (verify signature / call the session endpoint). For now, any non-empty
 * cookie counts as a session.
 */
export function hasValidSession(token: string | undefined | null): boolean {
  return Boolean(token);
}
