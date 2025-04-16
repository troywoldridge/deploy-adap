// src/hooks/useOrders.ts
import { useQuery } from '@tanstack/react-query'
import * as api from '@/lib/api/orders'
import { Order } from '@/types/order'

export const useOrders = () => {
  return useQuery<Order[]>({
    queryKey: ['orders'],  // Explicitly pass queryKey as an array
    queryFn: api.getOrders,  // Specify the query function
  })
}
