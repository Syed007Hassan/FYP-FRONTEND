
import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";
import { parseJwt } from "@/lib/Constants";
import Cookies from "js-cookie";

export function middleware(req: NextRequest) {
  const cookies = cookie.parse(req.headers.get("Cookie") || "");
  const token = cookies.token;

  let tokenData;
  if (token) {
    tokenData = parseJwt(token.toString());
  }

  if (!token && req.nextUrl.pathname.startsWith("/recruiter")) {
    return NextResponse.rewrite(new URL("/login", req.url));
  }

  if (
    token &&
    req.nextUrl.pathname.startsWith("/recruiter") && tokenData.role === "employer"
  ) {
    return NextResponse.next();
  }

  if(token && req.nextUrl.pathname.startsWith("/recruiter") && tokenData.role !== "employer"){
    // console.log("tokenRole: ", tokenData.role);
    // Cookies.remove("token");
    return NextResponse.rewrite(new URL("/login", req.url));
  }

  return NextResponse.next();
}
