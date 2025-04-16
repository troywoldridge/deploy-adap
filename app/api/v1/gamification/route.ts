// app/api/v1/gamification/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // Extract userId from query or request headers
    const userId = request.nextUrl.searchParams.get('userId'); 

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Example: Get gamification data for a specific user
    const gamificationData = await prisma.gamification.findUnique({
      where: { userId: userId },  // userId is expected to be a string
    });

    if (!gamificationData) {
      return NextResponse.json({ error: 'No gamification data found for the user' }, { status: 404 });
    }

    return NextResponse.json(gamificationData, { status: 200 });
  } catch (error: any) {
    console.error('[GET /api/v1/gamification] Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
