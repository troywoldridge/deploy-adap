import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: NextRequest) {
  const url = new URL(request.url)
  const code = url.pathname.split('/').pop()

  if (!code) {
    return NextResponse.json({ error: 'Missing coupon code' }, { status: 400 })
  }

  try {
    const coupon = await prisma.coupon.findUnique({
      where: { code },
    })

    if (!coupon) {
      return NextResponse.json({ error: 'Coupon not found' }, { status: 404 })
    }

    const currentDate = new Date()

    if (!coupon.isActive || currentDate < coupon.validFrom || currentDate > coupon.validUntil) {
      return NextResponse.json({ error: 'Coupon is not valid or expired' }, { status: 400 })
    }

    return NextResponse.json(coupon, { status: 200 })
  } catch (error) {
    const err = error as Error
    console.error(`[POST /api/v1/coupon/apply/${code}] Error:`, err)
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 })
  }
}
