// src/app/api/v1/coupon/services/applyCoupon.ts
import { prisma } from '@/lib/prisma'

export const applyCoupon = async (code: string, userId: string) => {
  // Assuming a coupon can be applied to a user
  const coupon = await prisma.coupon.findUnique({
    where: { code },
  })

  if (!coupon) {
    throw new Error('Coupon not found')
  }

  // Here we can apply the coupon logic (e.g., discount calculation)
  const appliedCoupon = await prisma.userCoupon.create({
    data: {
      userId,
      couponId: coupon.id,
    },
  })

  return appliedCoupon
}
