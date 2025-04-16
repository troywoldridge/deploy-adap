import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
// import GoogleProvider from 'next-auth/providers/google'; // Optional

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET || !process.env.NEXTAUTH_SECRET) {
  throw new Error('Missing required environment variables for NextAuth');
}

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
  },
  callbacks: {
    async session({ session, token, user }) {
      // You can customize session here, e.g., add user role
      return session;
    },
    async jwt({ token, user }) {
      // You can attach user info to token here
      return token;
    },
  },
});

export { handler as GET, handler as POST };
