import { NextResponse, type NextRequest } from "next/server";
import {
  GATE_ENABLED,
  PUBLIC_PATHS,
  SESSION_COOKIE,
  hasValidSession,
} from "@/lib/auth";

/**
 * Private gate (Next 16 `proxy`, formerly `middleware`).
 * Redirects unauthenticated requests to /login. Disabled until the auth
 * backend is wired up — see `src/lib/auth.ts`.
 */
export function proxy(request: NextRequest) {
  if (!GATE_ENABLED) return NextResponse.next();

  const { pathname } = request.nextUrl;
  if (PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION_COOKIE)?.value;
  if (hasValidSession(token)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = "/login";
  url.searchParams.set("from", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  // Run on everything except static assets / images.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
