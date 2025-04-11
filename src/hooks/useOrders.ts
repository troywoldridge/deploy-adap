// src/hooks/useOrders.ts
import { useQuery } from 'react-query'
import * as api from '@/lib/api/orders'
import { Order } from '@/types/order'

export const useOrders = () => {
  return useQuery<Order[]>('orders', api.getOrders)
}
