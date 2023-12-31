import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";
// import Cookies from "cookies";
import { parseJwt } from "@/lib/Constants";
import Cookies from "cookies";
// import Cookies from "js-cookie";

export function middleware(req: NextRequest) {
  const cookies = cookie.parse(req.headers.get("Cookie") || "");
  const token = cookies.token;
  const tokenFromOauth = req.cookies.get("token");

  let tokenData;

  if (token) {
    tokenData = parseJwt(token.toString());
  }

  if (tokenFromOauth) {
    tokenData = parseJwt(tokenFromOauth.value.toString());
  }

  if (
    !token &&
    !tokenFromOauth &&
    req.nextUrl.pathname.startsWith("/recruiter")
  ) {
    console.log("cant enter recruiter ");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/oauth")) {
    const oAuthToken = req.nextUrl.searchParams.get("token") || "";

    if (oAuthToken.length > 0) {
      // console.log("token in oauth: ", JSON.stringify(oAuthToken));

      const response = NextResponse.next();

      response.cookies.set({
        name: "token",
        value: oAuthToken.toString(),
        maxAge: 60 * 60 * 24 * 7,
      });

      return NextResponse.redirect(new URL("/recruiter", req.url));
    }
  }

  // role based auth
  if (
    token ||
    (tokenFromOauth &&
      req.nextUrl.pathname.startsWith("/recruiter") &&
      tokenData.role === "employer")
  ) {
    return NextResponse.next();
  }

  if (
    token ||
    (tokenFromOauth &&
      req.nextUrl.pathname.startsWith("/recruiter") &&
      tokenData.role !== "employer")
  ) {
    return NextResponse.rewrite(new URL("/login", req.url));
  }

  return NextResponse.next();
}
