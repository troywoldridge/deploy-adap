// src/hooks/useCreateOrder.ts

import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '@/lib/api/orders'
import { Order } from '@/types/order'

export const useCreateOrder = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: any) => api.createOrder(data), // Replace `any` with your order payload type
    onSuccess: (newOrder: Order) => {
      // Optionally invalidate or update queries here
      // queryClient.invalidateQueries({ queryKey: ['orders'] })
      console.log('Order created successfully:', newOrder)
    },
    onError: (error) => {
      console.error('Failed to create order:', error)
    },
  })
}
