// src/lib/api/orders.ts

import { Order, OrderItem } from '@/types/order'

export const createOrder = async (order: {
  customerId: number
  items: { productId: number; quantity: number; price: string }[]
  totalPrice: string
}): Promise<Order> => {
  const res = await fetch('/api/v1/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })
  if (!res.ok) throw new Error('Failed to create order')
  return res.json()
}

export const getOrders = async (): Promise<Order[]> => {
  const res = await fetch('/api/v1/orders')
  if (!res.ok) throw new Error('Failed to fetch orders')
  return res.json()
}

export const updateOrderStatus = async (
  orderId: number,
  status: 'pending' | 'completed' | 'cancelled'
): Promise<Order> => {
  const res = await fetch(`/api/v1/orders/${orderId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status }),
  })
  if (!res.ok) throw new Error('Failed to update order status')
  return res.json()
}
