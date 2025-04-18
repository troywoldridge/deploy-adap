// Removed duplicate import of NextAuth
import { OAuthConfig } from 'next-auth/providers'
import GitHubProvider, { GithubProfile } from 'next-auth/providers/github'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth'

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET || !process.env.NEXTAUTH_SECRET) {
  throw new Error('Missing required environment variables for NextAuth')
}

const options: NextAuthOptions = {
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
    async session({ session }: { session: any }) {
      return session
    },
    async jwt({ token }: { token: any }) {
      return token
    },
  },
}

const handler = (req: any, res: any) => handleNextAuth(req, res, options)

export { handler as GET, handler as POST }
function handleNextAuth(req: any, res: any, options: NextAuthOptions) {
  return NextAuth(req, res, options)
}
