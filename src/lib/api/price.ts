// src/lib/api/price.ts

import apiClient from '@/lib/api-client'
import { PricingResponse } from '@/types/price'

/**
 * Fetch the price for a given product and its options.
 * @param productId - The ID of the product.
 * @param optionIds - The IDs of the pricing options for the product.
 * @returns A Promise that resolves with the pricing data.
 */
export const getPrice = async (productId: string, optionIds: string[]): Promise<PricingResponse> => {
  try {
    // Assuming your API expects both productId and optionIds as query parameters
    const response = await apiClient.get<PricingResponse>(`/prices/${productId}`, {
      params: { optionIds: optionIds.join(',') }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching price:', error)
    throw new Error('Failed to fetch price data')
  }
}
