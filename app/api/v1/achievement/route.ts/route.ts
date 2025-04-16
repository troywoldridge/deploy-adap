import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const achievements = await prisma.achievement.findMany()
    return NextResponse.json(achievements, { status: 200 })
  } catch (error: any) {
    console.error('[GET /api/v1/achievement] Error:', error)
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}
