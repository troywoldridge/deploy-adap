// app/api/v1/gamification/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // Example: Get user's gamification data (like points or badges)
    const gamificationData = await prisma.gamification.findMany();

    return NextResponse.json(gamificationData, { status: 200 });
  } catch (error: any) {
    console.error('[GET /api/v1/gamification] Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
