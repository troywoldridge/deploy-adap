// src/app/api/v1/coupon/services/getCoupon.ts
import { prisma } from '@/lib/prisma'

export const getCouponByCode = async (code: string) => {
  return prisma.coupon.findUnique({
    where: { code },
  })
}
