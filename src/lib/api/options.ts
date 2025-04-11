// src/lib/api/options.ts

import { OptionGroup, Product } from '@/types/options'

// Fetch options for a given product
export const getProductOptions = async (productId: number): Promise<OptionGroup[]> => {
  const res = await fetch(`/api/v1/products/${productId}/options`)
  if (!res.ok) throw new Error('Failed to fetch product options')
  return res.json()
}

// Fetch updated price based on selected options
export const getProductPrice = async (productId: number, optionIds: number[]): Promise<{ price: string }> => {
  const query = optionIds.map(id => `option_ids[]=${id}`).join('&')
  const res = await fetch(`/api/v1/products/${productId}/price?${query}`)
  if (!res.ok) throw new Error('Failed to fetch price')
  return res.json()
}
