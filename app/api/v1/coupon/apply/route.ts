// src/app/api/v1/coupon/apply/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const { code } = await request.json()

    if (!code) {
      return NextResponse.json(
        { error: 'Coupon code is required' },
        { status: 400 }
      )
    }

    // Fetch the coupon by its code
    const coupon = await prisma.coupon.findUnique({
      where: { code },
    })

    if (!coupon || !coupon.isActive) {
      return NextResponse.json(
        { error: 'Invalid or inactive coupon code' },
        { status: 400 }
      )
    }

    // Ensure coupon is within valid date range
    const now = new Date()
    if (coupon.validFrom > now || coupon.validUntil < now) {
      return NextResponse.json(
        { error: 'Coupon is not valid at this time' },
        { status: 400 }
      )
    }

    return NextResponse.json(coupon, { status: 200 })
  } catch (error: any) {
    console.error('[POST /api/v1/coupon/apply] Error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}
