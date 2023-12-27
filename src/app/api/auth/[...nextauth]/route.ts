import { Backend_URL } from "@/lib/Constants";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { LoginResponse } from "@/lib/LoginResponse";
import authOptions from "./authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
