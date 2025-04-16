// src/app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"; // Optional: another provider

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // Optional: add Google or others
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/auth/signin", // Optional: custom sign-in page
    signOut: "/auth/signout", // Optional
    error: "/auth/error", // Optional error page
  },
  callbacks: {
    async session({ session, token, user }) {
      // Add custom session handling if needed
      return session;
    },
    async jwt({ token, user }) {
      // Modify JWT if needed
      return token;
    },
  },
});

export { handler as GET, handler as POST };
