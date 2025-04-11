// src/components/Orders.tsx
import React, { useState } from 'react'
import { useOrders } from '@/hooks/useOrders'
import { useCreateOrder } from '@/hooks/useCreateOrder'
import { useUpdateOrderStatus } from '@/hooks/useUpdateOrderStatus'

const Orders: React.FC = () => {
  const { data: orders, isLoading, isError } = useOrders()
  const { mutate: createOrder } = useCreateOrder()
  const { mutate: updateOrderStatus } = useUpdateOrderStatus()
  const [status, setStatus] = useState<'pending' | 'completed' | 'cancelled'>('pending')

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading orders</p>

  const handleCreateOrder = () => {
    const newOrder = {
      customerId: 1,
      items: [{ productId: 1, quantity: 2, price: '25.00' }],
      totalPrice: '50.00',
    }
    createOrder(newOrder)
  }

  const handleUpdateOrderStatus = (orderId: number) => {
    updateOrderStatus(orderId, status)
  }

  return (
    <div>
      <h1>Orders</h1>
      <button onClick={handleCreateOrder}>Create New Order</button>

      <ul>
        {orders?.map((order: Order) => (
          <li key={order.id}>
            <div>
              <h2>Order #{order.id}</h2>
              <p>Status: {order.status}</p>
              <button onClick={() => handleUpdateOrderStatus(order.id)}>Update Status</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Orders
