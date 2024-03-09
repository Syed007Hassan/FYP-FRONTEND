import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";
// import Cookies from "cookies";
import { parseJwt } from "@/lib/Constants";
// import Cookies from "cookies";
// import Cookies from "js-cookie";

export function middleware(req: NextRequest) {
  const cookies = cookie.parse(req.headers.get("Cookie") || "");
  const token = cookies.token;
  const tokenFromOauth = req.cookies.get("token");

  let tokenData;

  // jwt normal auth token

  if (token) {
    tokenData = parseJwt(token.toString());
  }

  // jwt token from oauth

  if (tokenFromOauth) {
    tokenData = parseJwt(tokenFromOauth.value.toString());
  }

  // if signout
  if (req.nextUrl.pathname.startsWith("/signout")) {
    console.log("signout");
    const url = req.nextUrl.clone();
    url.pathname = "/";
    const response = NextResponse.next();
    response.cookies.set({
      name: "token",
      value: "",
      maxAge: -1, // this will delete the cookie
    });
    return NextResponse.redirect(url.toString());
  }

  // if no token and trying to access recruiter page

  if (
    !token &&
    !tokenFromOauth &&
    req.nextUrl.pathname.startsWith("/recruiter")
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // if no token and trying to access applicant page

  if (
    !token &&
    !tokenFromOauth &&
    req.nextUrl.pathname.startsWith("/applicant")
  ) {
    return NextResponse.redirect(new URL("/login-applicant", req.url));
  }

  // if token but not recruiter and trying to access recruiter page

  if (
    token &&
    tokenData.role !== "employer" &&
    req.nextUrl.pathname.startsWith("/recruiter")
  ) {
    return NextResponse.redirect(new URL("/applicant", req.url));
  }

  // if token but not applicant and trying to access applicant page

  if (
    token &&
    tokenData.role !== "employee" &&
    req.nextUrl.pathname.startsWith("/applicant")
  ) {
    return NextResponse.redirect(new URL("/recruiter", req.url));
  }

  // redirected from oauth with token in url params and trying to access recruiter page

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

  // if token and trying to access applicant page

  if (
    (token || tokenFromOauth) &&
    tokenData.role === "employee" &&
    req.nextUrl.pathname.startsWith("/applicant")
  ) {
    return NextResponse.next();
  }

  // if token and trying to access recruiter page

  if (
    (token || tokenFromOauth) &&
    tokenData.role === "employer" &&
    req.nextUrl.pathname.startsWith("/recruiter")
  ) {
    return NextResponse.next();
  }

  //   const res: NextResponse = NextResponse.next();

  //     // add the CORS headers to the response
  //     res.headers.append('Access-Control-Allow-Origin', '*') // replace this your actual origin
  //     res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
  //     res.headers.append(
  //         'Access-Control-Allow-Headers',
  //         'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  //     )

  // return res;

  return NextResponse.next();
}
