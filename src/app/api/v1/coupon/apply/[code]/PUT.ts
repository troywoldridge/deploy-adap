// src/app/api/v1/coupon/apply/[code]/PUT.ts
import { NextRequest, NextResponse } from 'next/server'
import { updateCoupon } from '@/app/api/v1/coupon/services/updateCoupon'

export async function PUT(req: NextRequest, { params }: { params: { code: string } }) {
  const { code } = params

  try {
    const body = await req.json()

    const updatedCoupon = await updateCoupon(code, body)

    return NextResponse.json({ message: 'Coupon updated successfully', updatedCoupon })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
