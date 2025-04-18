// hooks/useUpdateOrderStatus.ts
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateOrderStatus } from '@/lib/api/orders'

export function useUpdateOrderStatus() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateOrderStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] })
    },
  })
}
