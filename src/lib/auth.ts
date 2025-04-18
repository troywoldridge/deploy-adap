import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth/options'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

/**
 * Returns the current server session from NextAuth.
 */
export const getAuthSession = () => {
  return getServerSession(authOptions)
}

/**
 * Wrapper to get the session from inside an API Route (Edge-friendly).
 */
export async function getSessionFromRequest(req: NextRequest) {
  const cookie = req.headers.get('cookie') ?? ''
  const session = await getServerSession(authOptions)
  return session
}

/**
 * Middleware-like helper to protect API routes.
 */
export async function requireAuth(req: NextRequest) {
  const session = await getSessionFromRequest(req)

  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return session
}
