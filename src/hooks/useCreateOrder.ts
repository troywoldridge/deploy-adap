// src/hooks/useCreateOrder.ts
import { useMutation } from 'react-query'
import * as api from '@/lib/api/orders'
import { Order } from '@/types/order'

export const useCreateOrder = () => {
  return useMutation(api.createOrder)
}

