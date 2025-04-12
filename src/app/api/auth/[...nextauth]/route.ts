// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth" // Import authOptions from lib/auth

const handler = NextAuth(authOptions)  // Use the imported authOptions

export { handler as GET, handler as POST }  // Export GET and POST handlers
