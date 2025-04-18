// src/app/api/v1/coupon/apply/[code]/POST.ts
import { NextRequest, NextResponse } from 'next/server'
import { applyCoupon } from '@/app/api/v1/services/applyCoupon'
export async function POST(req: NextRequest, { params }: { params: { code: string } }) {
  const { code } = params

  try {
    const body = await req.json()

    // Assuming the userId is sent in the request body
    const { userId } = body

    if (!userId) {
      return NextResponse.json({ message: 'User ID is required' }, { status: 400 })
    }

    const appliedCoupon = await applyCoupon(code, userId)

    return NextResponse.json({ message: 'Coupon applied successfully', appliedCoupon })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
