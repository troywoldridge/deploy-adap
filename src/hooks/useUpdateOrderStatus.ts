// src/hooks/useUpdateOrderStatus.ts
import { useMutation } from 'react-query'
import * as api from '@/lib/api/orders'

export const useUpdateOrderStatus = () => {
  return useMutation(api.updateOrderStatus)
}
