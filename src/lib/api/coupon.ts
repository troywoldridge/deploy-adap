import { Coupon } from '@/types/coupon'

// Fetch all active coupons
export const getCoupons = async (): Promise<Coupon[]> => {
  const res = await fetch('/api/v1/coupon')
  if (!res.ok) throw new Error('Failed to fetch coupons')
  return res.json()
}

// Apply a coupon based on its code
export const applyCoupon = async (code: string): Promise<Coupon> => {
  const res = await fetch('/api/v1/coupon/apply', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code }), // Sending the code as a JSON body
  })
  if (!res.ok) throw new Error('Failed to apply coupon')
  return res.json()
}

