import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /admin routes
  if (pathname.startsWith("/admin")) {
    // Allow public access to login page
    if (pathname === "/admin/login") {
      const existingSession =
        request.cookies.get("ksf-admin-session")?.value ||
        request.cookies.get("sb-access-token")?.value ||
        request.cookies.get("supabase-auth-token")?.value;

      if (existingSession) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
      return NextResponse.next();
    }

    // Check for authenticated session token
    const authSession =
      request.cookies.get("ksf-admin-session")?.value ||
      request.cookies.get("sb-access-token")?.value ||
      request.cookies.get("supabase-auth-token")?.value;

    if (!authSession) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Set RBAC claim header for downstream Server Components
    const response = NextResponse.next();
    response.headers.set("x-ksf-rbac-role", authSession === "super_admin" ? "super_admin" : "trustee");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
