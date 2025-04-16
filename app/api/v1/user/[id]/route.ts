// app/api/v1/user/[id]/route.ts

import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/lib/prisma'

// Define a custom request type that includes the route parameters
type RequestWithParams = NextRequest & { params: { id: string } }

export async function GET(req: RequestWithParams) {
  // Destructure the id from the request's params
  const { id } = req.params

  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        wishlist: true,
        reviews: true,
        orders: true,
        achievements: true,
        Gamification: true,
      },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (error: any) {
    console.error('Error fetching user:', error)
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}
