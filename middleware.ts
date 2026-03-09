import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {

  const student = req.cookies.get("student")

  const hasSupabaseSession = req.cookies
    .getAll()
    .some(cookie => cookie.name.startsWith("sb-"))

  const isLoggedIn = student || hasSupabaseSession

  const protectedRoutes = [
    "/lobby",
    "/modules",
    "/quest",
    "/games",
    "/student-leaderboard"
  ]

  const isProtected = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  )

  if (isProtected && !isLoggedIn) {
    return NextResponse.redirect(
      new URL("/login", req.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/lobby/:path*",
    "/modules/:path*",
    "/quest/:path*",
    "/games/:path*",
    "/student-leaderboard/:path*"
  ],
}