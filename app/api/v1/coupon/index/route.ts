// src/app/api/v1/coupon/index/route.ts

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET handler: Fetch all active coupons
export async function GET() {
  try {
    const coupons = await prisma.coupon.findMany({
      where: { isActive: true },
    })
    return NextResponse.json(coupons, { status: 200 })
  } catch (error: any) {
    console.error('[GET /api/v1/coupon] Error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}

// POST handler: Create a new coupon
export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validation checks for required fields
    if (!data.code || typeof data.discount !== 'number' || !data.validFrom || !data.validUntil) {
      return NextResponse.json(
        { error: 'Invalid input: "code" (string), "discount" (number), "validFrom" (Date), and "validUntil" (Date) are required.' },
        { status: 400 }
      )
    }

    // Valid date range check: Ensure validFrom is before validUntil
    const validFromDate = new Date(data.validFrom)
    const validUntilDate = new Date(data.validUntil)
    if (validFromDate >= validUntilDate) {
      return NextResponse.json(
        { error: '"validFrom" must be before "validUntil"' },
        { status: 400 }
      )
    }

    // Create the new coupon in the database
    const newCoupon = await prisma.coupon.create({
      data: {
        code: data.code,
        discount: data.discount,
        validFrom: validFromDate,
        validUntil: validUntilDate,
        isActive: data.isActive ?? true,
      },
    })

    return NextResponse.json(newCoupon, { status: 201 })
  } catch (error: any) {
    console.error('[POST /api/v1/coupon] Error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}
