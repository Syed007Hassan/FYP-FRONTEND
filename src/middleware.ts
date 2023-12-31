import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";
// import Cookies from "cookies";
import { parseJwt } from "@/lib/Constants";
import Cookies from "cookies";
// import Cookies from "js-cookie";

export function middleware(req: NextRequest) {
  const cookies = cookie.parse(req.headers.get("Cookie") || "");
  const token = cookies.token;

  let tokenData;
  // console.log("token: ", token);
  if (token) {
    tokenData = parseJwt(token.toString());
  }

  if (!token && req.nextUrl.pathname.startsWith("/recruiter")) {
    console.log("cant enter recruiter ");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/demo")) {
    const res = NextResponse.next();

    // const newCookies = new Cookies(req, res);

    // // Set a cookie
    // newCookies.set(
    //   "token",
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWNydWl0ZXJJZCI6MSwiZW1haWwiOiJoYXNzYW5AZ21haWwuY29tIiwibmFtZSI6Imhhc3NhbiIsImNvbXBhbnlJZCI6MSwicm9sZSI6ImVtcGxveWVyIiwiaWF0IjoxNzAzMzYzOTI1LCJleHAiOjE3MDM2MjMxMjV9.yjTR-1a3U-PWAqxO6rDFNHZ1zbk7il2QTwu1QHrkORM",
    //   {
    //     httpOnly: true, // true by default
    //   }
    // );

    // res.cookies.set({
    //   name: "token",
    //   value:
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWNydWl0ZXJJZCI6MSwiZW1haWwiOiJoYXNzYW5AZ21haWwuY29tIiwibmFtZSI6Imhhc3NhbiIsImNvbXBhbnlJZCI6MSwicm9sZSI6ImVtcGxveWVyIiwiaWF0IjoxNzAzMzYzOTI1LCJleHAiOjE3MDM2MjMxMjV9.yjTR-1a3U-PWAqxO6rDFNHZ1zbk7il2QTwu1QHrkORM",
    //   maxAge: 60 * 60 * 24 * 7,
    //   httpOnly: true,
    // });

    res.cookies.set(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWNydWl0ZXJJZCI6MSwiZW1haWwiOiJoYXNzYW5AZ21haWwuY29tIiwibmFtZSI6Imhhc3NhbiIsImNvbXBhbnlJZCI6MSwicm9sZSI6ImVtcGxveWVyIiwiaWF0IjoxNzAzMzYzOTI1LCJleHAiOjE3MDM2MjMxMjV9.yjTR-1a3U-PWAqxO6rDFNHZ1zbk7il2QTwu1QHrkORM"
    );

    // response.headers.set(
    //   "Set-Cookie",
    //   cookie.serialize(
    //     "token",
    //     String(
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWNydWl0ZXJJZCI6MSwiZW1haWwiOiJoYXNzYW5AZ21haWwuY29tIiwibmFtZSI6Imhhc3NhbiIsImNvbXBhbnlJZCI6MSwicm9sZSI6ImVtcGxveWVyIiwiaWF0IjoxNzAzMzYzOTI1LCJleHAiOjE3MDM2MjMxMjV9.yjTR-1a3U-PWAqxO6rDFNHZ1zbk7il2QTwu1QHrkORM"
    //     ),
    //     {
    //       httpOnly: true,
    //       maxAge: 60 * 60 * 24 * 7, // 1 week
    //     }
    //   )
    // );

    // Get a cookie

    // console.log("cookies: ", newCookies.get("myCookieName"));
    // return NextResponse.redirect(new URL("/login", req.url));
    return res;
  }

  if (req.nextUrl.pathname.startsWith("/oauth")) {
    const oAuthToken = req.nextUrl.searchParams.get("token") || "";

    if (oAuthToken.length > 0) {
      console.log("token in oauth: ", JSON.stringify(oAuthToken));

      // const response = NextResponse.next();

      // response.headers.set("Cookie", `${oAuthToken}`);

      // response.cookies.set({
      //   name: "token",
      //   value: oAuthToken.toString(),
      //   maxAge: 60 * 60 * 24 * 7,
      // });

      // console.log(req.cookies.getAll());

      // Cookies.set("token", oAuthToken.toString(), { expires: 7 });
      // console.log("cookies: ", Cookies.get("token"));
      return NextResponse.redirect(new URL("/recruiter", req.url));
    }
  }

  // role based auth
  // if (
  //   token &&
  //   req.nextUrl.pathname.startsWith("/recruiter") &&
  //   tokenData.role === "employer"
  // ) {
  //   return NextResponse.next();
  // }

  // if (
  //   token &&
  //   req.nextUrl.pathname.startsWith("/recruiter") &&
  //   tokenData.role !== "employer"
  // ) {
  //   // console.log("tokenRole: ", tokenData.role);
  //   // Cookies.remove("token");
  //   return NextResponse.rewrite(new URL("/login", req.url));
  // }

  return NextResponse.next();
}
