import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("session");

  if (!cookie || !isValidSession(cookie.value)) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  return NextResponse.next();
}

function isValidSession(sessionId: string): boolean {
  return true;
}

export const config = {
  matcher: ["/", "/settings/:path*", "/workspace/:path*"],
};
