import { NextRequest, NextResponse } from "next/server";
import { getSession } from "next-auth/react";
export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import { IncomingMessage } from "http";

// export const config = { matcher: ["/dashboard/:path*"] };

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  console.log("token in middleware: ", token?.data?.jwt);

  var session = await getSession({ req: req as unknown as IncomingMessage });

  console.log("session in middleware first: ", JSON.stringify(session));
  // if (req.nextUrl.pathname.startsWith("/oauth")) {
  //   const token: string = req.nextUrl.searchParams.get("token");
  //   if (!session) {
  //     session = token;
  //   }
  //   // Redirect to dashboard and set the cookie on the redirect response
  //   const response = NextResponse.redirect(new URL("/dashboard", req.url));
  //   response.cookies.set({
  //     name: "session",
  //     value: session,
  //     path: "/dashboard",
  //   });
  //   return response;
  // }
  if (req.nextUrl.pathname.startsWith("/dashboard") && session) {
    console.log("session in allowing dashboard: ", JSON.stringify(session));

    return NextResponse.next();
  }
  if (req.nextUrl.pathname.startsWith("/dashboard") && session == null) {
    console.log("session in not allowing dashboard: ", JSON.stringify(session));
    const testHandler = await handler(req);
    console.log("testHandler: ", JSON.stringify(testHandler));
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  runtime: "experimental-edge",
};

async function handler(req: NextRequest) {
  const resSession = await fetch(
    process.env.NEXTAUTH_URL + "/api/auth/session",
    {
      headers: {
        "Content-Type": "application/json",
        Cookie: req.headers.get("cookie") || "",
      },
      method: "GET",
    }
  );
  const session = await resSession.json();

  if (!session) {
    return new Response(
      JSON.stringify({ text: "Not signed in.", status: 401 }),
      { status: 401 }
    );
  }

  console.log({ session });

  return new Response(JSON.stringify({ session }), { status: 200 });
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
