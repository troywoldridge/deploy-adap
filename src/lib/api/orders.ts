// lib/api/orders.ts
import { Order } from '@prisma/client'

export async function fetchOrders(): Promise<Order[]> {
  const res = await fetch('/api/v1/orders')
  if (!res.ok) throw new Error('Failed to fetch orders')
  return res.json()
}

export async function createOrder(order: any): Promise<Order> {
  const res = await fetch('/api/v1/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  })
  if (!res.ok) throw new Error('Failed to create order')
  return res.json()
}

export async function updateOrderStatus({
  orderId,
  status,
}: {
  orderId: number
  status: string
}): Promise<Order> {
  const res = await fetch(`/api/v1/orders/${orderId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  })
  if (!res.ok) throw new Error('Failed to update order status')
  return res.json()
}
