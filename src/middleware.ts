import { NextRequest, NextResponse } from "next/server";
import { getSession } from "next-auth/react";
export { default } from "next-auth/middleware";

// export const config = { matcher: ["/dashboard/:path*"] };

export async function middleware(req: any) {
  let session = (await getSession()) as any;

  if (req.nextUrl.pathname.startsWith("/oauth")) {
    const token: string = req.nextUrl.searchParams.get("token");

    if (!session) {
      session = token;
    }

    // Redirect to dashboard and set the cookie on the redirect response
    const response = NextResponse.redirect(new URL("/dashboard", req.url));
    response.cookies.set({
      name: "session",
      value: session,
      path: "/dashboard",
    });

    return response;
  }

  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    const cookie = req.cookies.get("session");
    console.log("cookie: in dashboard ", cookie);
    session = cookie;

    if (!cookie) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

// import { withAuth } from "next-auth/middleware";
// import { NextRequest, NextResponse } from "next/server";

// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.
//   function middleware(req) {
//     console.log("token: ", req.nextauth.token);

//     if (req.nextUrl.pathname.startsWith("/admin") && req.nextauth.token?.role !== "admin")
//       return NextResponse.rewrite(
//         new URL("/auth/login?message=You Are Not Authorized!", req.url)
//       );
//     if (req.nextUrl.pathname.startsWith("/user") && req.nextauth.token?.role !== "user")
//       return NextResponse.rewrite(
//         new URL("/auth/login?message=You Are Not Authorized!", req.url)
//       );
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => !!token,
//     },
//   }
// );

// export const config = {
//   matcher: ["/admin/:path*", "/user/:path*"],
// };
