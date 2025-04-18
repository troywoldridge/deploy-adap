// src/types/order.ts
export interface Order {
  id: number
  customerId: number
  items: OrderItem[]
  totalPrice: string
  status: OrderStatus
  createdAt: string
  updatedAt: string
}

export interface OrderItem {
  id: number
  productId: number
  quantity: number
  price: string
}

export type OrderStatus = 'pending' | 'completed' | 'cancelled'
