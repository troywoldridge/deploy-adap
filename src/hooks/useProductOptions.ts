// src/hooks/useProductOptions.ts

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '@/lib/api/options'
import { OptionGroup } from '@/types/options'

export const useProductOptions = (productId: number) => {
  return useQuery<OptionGroup[]>(['productOptions', productId], () => api.getProductOptions(productId))
}

export const useUpdatePrice = () => {
  const queryClient = useQueryClient()
interface UpdatePriceData {
    productId: number
    optionIds: number[]
}

interface UpdatePriceResponse {
    price: number
}

return useMutation<UpdatePriceResponse, unknown, UpdatePriceData>(
    (data: UpdatePriceData) => api.getProductPrice(data.productId, data.optionIds),
    {
        onSuccess: (data: UpdatePriceResponse) => {
            // Optionally, you can invalidate or update a query if needed
            console.log('Updated price:', data.price)
        },
        onError: (error: unknown) => {
            console.error('Failed to update price:', error)
        },
    }
)
}
