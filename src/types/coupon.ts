// src/types/coupon.ts

export interface Coupon {
  id: number
  code: string
  discountType: 'percentage' | 'fixed'
  discountAmount: number
  usageLimit: number | null
  usedCount: number
  expiresAt: string | null
  createdAt: string
  updatedAt: string
}
