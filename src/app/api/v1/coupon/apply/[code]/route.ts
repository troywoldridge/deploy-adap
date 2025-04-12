// src/app/api/v1/coupon/apply/[code]/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  const { code } = request.params;  // Extract 'code' from the params directly

  try {
    const coupon = await prisma.coupon.findUnique({
      where: { code },
    });

    if (!coupon) {
      return NextResponse.json({ error: 'Coupon not found' }, { status: 404 });
    }

    const currentDate = new Date();

    // Check if coupon is active and within the valid date range
    if (!coupon.isActive || currentDate < coupon.validFrom || currentDate > coupon.validUntil) {
      return NextResponse.json({ error: 'Coupon is not valid or expired' }, { status: 400 });
    }

    return NextResponse.json(coupon, { status: 200 });
  } catch (error: any) {
    console.error(`[POST /api/v1/coupon/apply/${code}] Error:`, error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
