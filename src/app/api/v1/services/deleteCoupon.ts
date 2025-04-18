// src/app/api/v1/coupon/services/deleteCoupon.ts
import { prisma } from '@/lib/prisma'

export const deleteCoupon = async (code: string) => {
  return prisma.coupon.delete({
    where: { code },
  })
}
