// src/lib/api/coupon.ts

import { Coupon } from '@/types/coupon'

const API_BASE = '/api/v1/coupons'

export async function getCoupons(): Promise<Coupon[]> {
  const res = await fetch(API_BASE)
  if (!res.ok) throw new Error('Failed to fetch coupons')
  return res.json()
}

export async function getCouponByCode(code: string): Promise<Coupon | null> {
  const res = await fetch(`${API_BASE}/code/${code}`)
  if (!res.ok) throw new Error('Failed to fetch coupon')
  return res.json()
}

export async function createCoupon(
  data: Omit<Coupon, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Coupon> {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Failed to create coupon')
  return res.json()
}

export async function deleteCoupon(id: number): Promise<void> {
  const res = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Failed to delete coupon')
}

export async function updateCoupon(id: number, data: Partial<Coupon>): Promise<Coupon> {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Failed to update coupon')
  return res.json()
}

export async function applyCoupon(
  code: string
): Promise<{ success: boolean; discount?: number; message?: string }> {
  const res = await fetch(`${API_BASE}/apply`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code }),
  })
  if (!res.ok) throw new Error('Failed to apply coupon')
  return res.json()
}
