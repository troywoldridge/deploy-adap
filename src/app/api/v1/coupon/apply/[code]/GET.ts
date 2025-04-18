// src/app/api/v1/coupon/apply/[code]/GET.ts
import { NextRequest, NextResponse } from 'next/server'
import { getCouponByCode } from '@/app/api/v1/coupon/services/getCoupon'

export async function GET(_req: NextRequest, { params }: { params: { code: string } }) {
  const { code } = params

  try {
    const coupon = await getCouponByCode(code)

    if (!coupon) {
      return NextResponse.json({ message: 'Coupon not found' }, { status: 404 })
    }

    return NextResponse.json({ message: `GET coupon ${code}`, coupon })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
