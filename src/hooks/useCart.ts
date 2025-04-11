import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '@/lib/api/cart'

export const useCart = () => {
  const queryClient = useQueryClient()

  const cartQuery = useQuery(['cart'], api.getCart)

  const addMutation = useMutation(api.addToCart, {
    onSuccess: () => queryClient.invalidateQueries(['cart']),
  })

  const updateMutation = useMutation(api.updateCartItem, {
    onSuccess: () => queryClient.invalidateQueries(['cart']),
  })

  const removeMutation = useMutation(api.removeCartItem, {
    onSuccess: () => queryClient.invalidateQueries(['cart']),
  })

  const clearMutation = useMutation(api.clearCart, {
    onSuccess: () => queryClient.invalidateQueries(['cart']),
  })

  return {
    cart: cartQuery.data,
    isLoading: cartQuery.isLoading,
    error: cartQuery.error,
    addToCart: addMutation.mutate,
    updateCartItem: updateMutation.mutate,
    removeCartItem: removeMutation.mutate,
    clearCart: clearMutation.mutate,
  }
}