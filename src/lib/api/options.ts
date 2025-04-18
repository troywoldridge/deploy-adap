import apiClient from '@/lib/api-client'
import { OptionGroup } from '@/types/options'

// Function to fetch all available options
export const getOptions = async (): Promise<OptionGroup[]> => {
  try {
    const response = await apiClient.get('/options')
    return response.data as OptionGroup[] // Adjust based on the actual API response structure
  } catch (error) {
    console.error('Error fetching options:', error)
    throw new Error('Failed to fetch options')
  }
}

// Function to fetch options by product ID (as an example)
export const getOptionsByProduct = async (productId: string): Promise<OptionGroup[]> => {
  try {
    const response = await apiClient.get(`/options/${productId}`)
    return response.data as OptionGroup[] // Ensure the API response matches this type
  } catch (error) {
    console.error('Error fetching product options:', error)
    throw new Error('Failed to fetch product options')
  }
}

// Function to fetch product options
export const getProductOptions = async (productId: string | number): Promise<OptionGroup[]> => {
  try {
    const response = await apiClient.get(`/products/${productId}/options`)
    return response.data as OptionGroup[]
  } catch (error) {
    console.error('Error fetching product options:', error)
    throw new Error('Failed to fetch product options')
  }
}

// Function to fetch product price based on product ID and selected options
export const getProductPrice = async (productId: string | number, optionIds: string[]): Promise<{ price: string }> => {
  try {
    // Assuming the price API endpoint takes the productId and optionIds as query params or in the body
    const response = await apiClient.get<{ price: string }>(`/products/${productId}/price`, { params: { optionIds } })
    return { price: response.data.price }
  } catch (error) {
    console.error('Error fetching product price:', error)
    throw new Error('Failed to fetch product price')
  }
}
