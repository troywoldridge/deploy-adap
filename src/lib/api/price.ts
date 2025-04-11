import { PricingResponse } from '@/types/price'

// Fetch the price for a product based on selected options (hashed)
export const getPrice = async (productId: string, optionIds: string[]): Promise<PricingResponse> => {
  const query = optionIds.map((id) => `option_ids[]=${id}`).join('&')
  const res = await fetch(`/api/v1/products/${productId}/price?${query}`)

  if (!res.ok) {
    throw new Error('Failed to fetch price')
  }

  return res.json()
}
