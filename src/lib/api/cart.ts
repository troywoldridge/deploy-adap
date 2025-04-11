import { Cart, CartItem } from '@/types/cart'

const fetcher = async (url: string, options?: RequestInit) => {
  const res = await fetch(url, options)
  if (!res.ok) throw new Error(await res.text() || 'Something went wrong')
  return res.json()
}

export const getCart = (): Promise<Cart> => fetcher('/api/v1/cart', { next: { tags: ['cart'] } })

export const addToCart = (productId: string, quantity: number = 1): Promise<Cart> => {
  if (!productId || quantity <= 0) throw new Error('Invalid product or quantity')
  return fetcher('/api/v1/cart', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId, quantity }),
  })
}

export const updateCartItem = (itemId: string, quantity: number): Promise<Cart> => {
  if (!itemId || quantity <= 0) throw new Error('Invalid item or quantity')
  return fetcher(`/api/v1/cart/item/${itemId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quantity }),
  })
}

export const removeCartItem = (itemId: string): Promise<Cart> => {
  if (!itemId) throw new Error('Invalid item')
  return fetcher(`/api/v1/cart/item/${itemId}`, { method: 'DELETE' })
}

export const clearCart = (): Promise<Cart> => fetcher('/api/v1/cart/clear', { method: 'DELETE' })
