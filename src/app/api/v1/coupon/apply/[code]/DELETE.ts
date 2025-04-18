// src/app/api/v1/coupon/apply/[code]/DELETE.ts
import { NextRequest, NextResponse } from 'next/server'
import { deleteCoupon } from '@/app/api/v1/coupon/services/deleteCoupon'

export async function DELETE(req: NextRequest, { params }: { params: { code: string } }) {
  const { code } = params

  try {
    const deletedCoupon = await deleteCoupon(code)

    if (!deletedCoupon) {
      return NextResponse.json({ message: 'Coupon not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Coupon deleted successfully', deletedCoupon })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
