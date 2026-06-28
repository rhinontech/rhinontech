import { NextResponse, type NextRequest } from "next/server";
import {
  GATE_ENABLED,
  PUBLIC_PATHS,
  SESSION_COOKIE,
  isDeveloperDocsPath,
  verifySession,
} from "@/lib/auth";

/**
 * Access gate (Next 16 `proxy`, formerly `middleware`).
 *
 * Public guides stay open. Developer docs (`/<product>/developers/...`) require
 * a valid signed session — unauthenticated requests are redirected to /login.
 * Set NEXT_PUBLIC_GATE_ENABLED=true to gate the whole site instead.
 */
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Always allow the login screen (and any other public paths).
  if (PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return NextResponse.next();
  }

  const needsAuth = GATE_ENABLED || isDeveloperDocsPath(pathname);
  if (!needsAuth) return NextResponse.next();

  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const session = await verifySession(token);
  if (session) return NextResponse.next();

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
