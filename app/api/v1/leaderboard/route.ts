import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const leaderboard = await prisma.leaderboard.findMany({
      include: {
        user: true,
      },
      orderBy: {
        points: 'desc',
      },
    })
    return NextResponse.json(leaderboard, { status: 200 })
  } catch (error: any) {
    console.error('[GET /api/v1/leaderboard] Error:', error)
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { userId, points } = await request.json()

    if (!userId || typeof points !== 'number') {
      return NextResponse.json({ error: 'userId and points are required.' }, { status: 400 })
    }

    const leaderboardEntry = await prisma.leaderboard.upsert({
    where: { userId }, // This works only if userId is marked @unique
    update: { points },
    create: { userId, points },
  })

    return NextResponse.json(leaderboardEntry, { status: 201 })
  } catch (error: any) {
    console.error('[POST /api/v1/leaderboard] Error:', error)
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}
