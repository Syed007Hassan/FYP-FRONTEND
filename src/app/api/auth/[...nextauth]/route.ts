import { Backend_URL } from "@/lib/Constants";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

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
        companyName: { label: "Company Name", type: "text" },
      },
      async authorize(credentials, req) {

        if (!credentials?.email || !credentials?.password || !credentials?.companyName ) return null;
        const { email, password, companyName } = credentials;
        // const companyName = "Dasda";
        const role = "employer"
        const res = await fetch(Backend_URL + "/auth/loginEmployer", {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            companyName,
            role,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        // console.log(res);
        // console.log(res.success + "status");
        if (res.status == 401) {
          console.log(res.statusText + 'nulllllll');

          return null;
        }
        const user = await res.json();
        if (!user.success) return null;
        // const user = response.data.jwt;
        console.log(user);
        console.log(user);
        return user;
        // const user = await res.json();
        // return user;
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
