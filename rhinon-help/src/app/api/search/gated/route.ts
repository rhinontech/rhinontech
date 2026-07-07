import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE, verifySession } from "@/lib/auth";
import { getGatedSearchIndex } from "@/lib/search";

/**
 * Gated search entries (developer-track docs). Returned only to requests
 * carrying a valid signed session — everyone else gets an empty list, so
 * gated titles/headings never reach unauthenticated clients.
 */
export async function GET(req: NextRequest) {
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  const session = await verifySession(token);
  if (!session) {
    return NextResponse.json({ docs: [] });
  }
  return NextResponse.json({ docs: getGatedSearchIndex() });
}
