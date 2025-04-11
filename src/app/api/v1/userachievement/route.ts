import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const userAchievements = await prisma.userAchievement.findMany({
      include: {
        achievement: true,
        user: true,
      },
    })
    return NextResponse.json(userAchievements, { status: 200 })
  } catch (error: any) {
    console.error('[GET /api/v1/userAchievement] Error:', error)
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { userId, achievementId } = await request.json()

    if (!userId || !achievementId) {
      return NextResponse.json({ error: 'userId and achievementId are required.' }, { status: 400 })
    }

    const userAchievement = await prisma.userAchievement.create({
      data: {
        userId,
        achievementId,
      },
    })
    return NextResponse.json(userAchievement, { status: 201 })
  } catch (error: any) {
    console.error('[POST /api/v1/userAchievement] Error:', error)
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}
