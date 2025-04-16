// src/types/coupon.ts

export interface Coupon {
    id: string
    code: string
    discount: number
    validFrom: Date
    validUntil: Date
    isActive: boolean
  }
  