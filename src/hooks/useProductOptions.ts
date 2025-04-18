// src/hooks/useProductOptions.ts

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '@/lib/api/options'
import { OptionGroup } from '@/types/options'

interface UpdatePriceData {
  productId: number
  optionIds: number[]
}

// If your API returns price as a string, update the type definition to match.
interface UpdatePriceResponse {
  price: string // Changed from number to string
}

// Hook: Fetch product options
export const useProductOptions = (productId: number) => {
  return useQuery<OptionGroup[]>({
    queryKey: ['productOptions', productId],
    queryFn: () => api.getProductOptions(productId),
  })
}

// Hook: Update price
export const useUpdatePrice = () => {
  const queryClient = useQueryClient()

  return useMutation<UpdatePriceResponse, unknown, UpdatePriceData>({
    mutationFn: (data: UpdatePriceData) => api.getProductPrice(data.productId, data.optionIds.map(id => id.toString())),
    onSuccess: (data) => {
      console.log('Updated price:', data.price) // This will now work with string
    },
    onError: (error) => {
      console.error('Failed to update price:', error)
    },
  })
}
