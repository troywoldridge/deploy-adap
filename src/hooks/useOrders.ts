// hooks/useOrders.ts
import { useQuery } from '@tanstack/react-query'
import { fetchOrders } from '@/lib/api/orders'

export function useOrders() {
  return useQuery({ queryKey: ['orders'], queryFn: fetchOrders })
}
