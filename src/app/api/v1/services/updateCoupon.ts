// src/app/api/v1/coupon/services/updateCoupon.ts
import { prisma } from '@/lib/prisma'

export const updateCoupon = async (code: string, data: { name: string; discount: number }) => {
  return prisma.coupon.update({
    where: { code },
    data,
  })
}
