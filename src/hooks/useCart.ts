import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '@/lib/api/cart'

export const useCart = () => {
  const queryClient = useQueryClient()

  const cartQuery = useQuery({
    queryKey: ['cart'],
    queryFn: api.getCart,
  })

  const addMutation = useMutation({
    mutationFn: ({ productId, quantity, price }: { productId: number; quantity: number; price: number }) =>
      api.addToCart(productId, quantity, price),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
  })

  const updateMutation = useMutation({
    mutationFn: ({ itemId, quantity }: { itemId: string; quantity: number }) =>
      api.updateCartItem(itemId, { quantity }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
  })

  const removeMutation = useMutation({
    mutationFn: (itemId: string) => api.removeCartItem(itemId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
  })

  const clearMutation = useMutation({
    mutationFn: api.clearCart,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
  })

  return {
    cart: cartQuery.data,
    isLoading: cartQuery.isLoading,
    isError: cartQuery.isError,
    error: cartQuery.error,

    addToCart: addMutation.mutate,
    updateCartItem: updateMutation.mutate,
    removeCartItem: removeMutation.mutate,
    clearCart: clearMutation.mutate,
  }
}
export const removeCartItem = async (itemId: string): Promise<void> => {
  const response = await fetch(`/api/cart/items/${itemId}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('Failed to remove item from cart')
  }
}