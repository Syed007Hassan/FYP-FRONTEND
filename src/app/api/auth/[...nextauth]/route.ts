import { Backend_URL } from "@/lib/Constants";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { getSession } from "next-auth/react";
import axios from "axios";

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch(Backend_URL + "/auth/refresh", {
    method: "POST",
    headers: {
      authorization: `Refresh ${token.backendTokens.refreshToken}`,
    },
  });
  console.log("refreshed");

  const response = await res.json();

  return {
    ...token,
    backendTokens: response,
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;
        const { email, password } = credentials;
        const role = "employer";

        try {
          const response = await axios.post(
            `${Backend_URL}/auth/loginEmployer`,
            {
              email,
              password,
              role,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (response.status === 401) {
            throw new Error("Unauthorized request");
          }

          const user = response.data;
          if (!user.success) return null;

          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],

  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) return { ...token, ...user };

  //     if (new Date().getTime() < token.backendTokens.expiresIn)
  //       return token;

  //     return token;
  //     return await refreshToken(token);
  //   },

  //   async session({ token, session }) {
  //     // console.log(session);
  //     session.user = token.user;
  //     session.backendTokens = token.backendTokens;

  //     return session;
  //   },
  // },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
