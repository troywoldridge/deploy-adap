import { NextRequest, NextResponse } from 'next/server'
import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET || !process.env.NEXTAUTH_SECRET) {
  throw new Error('Missing required environment variables for NextAuth')
}

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
  },
  callbacks: {
    async session({ session, token, user }) {
      return session
    },
    async jwt({ token, user }) {
      return token
    },
  },
})

export { handler as GET } // NextAuth handles all HTTP methods internally, so we just export as GET

// Remove any extra handlers like handlePOST, POST, PUT, DELETE, etc.
// This file is meant solely for [...nextauth] catch-all auth handling
