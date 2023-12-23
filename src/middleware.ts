import { NextRequest, NextResponse } from "next/server";
import { getSession } from "next-auth/react";

export { default } from "next-auth/middleware";

// export const config = { matcher: ["/dashboard/:path*"] };

export async function middleware(req: any) {
  let session = (await getSession()) as any;

  if (req.nextUrl.pathname.startsWith("/oauth")) {
    //console.log("req: ", req.nextUrl);
    const token: string = req.nextUrl.searchParams.get("token");
    console.log("token: ", token);

    if (!session) {
      session = token;
    }
    // console.log("session: ", session);

    return NextResponse.redirect(new URL("/demo", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/dashboard") && !session) {
    return NextResponse.redirect(new URL("/login", req.url));
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
