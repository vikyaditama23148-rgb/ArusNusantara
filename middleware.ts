import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {

  const student = req.cookies.get("student")

  const protectedRoutes = [
    "/quest",
    "/modules",
    "/student-leaderboard"
  ]

  const isProtected = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  )

  if (isProtected && !student) {

    return NextResponse.redirect(
      new URL("/login-student", req.url)
    )

  }

  return NextResponse.next()

}

export const config = {
  matcher: [
    "/quest/:path*",
    "/modules/:path*",
    "/student-leaderboard/:path*"
  ],
}