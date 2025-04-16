// src/components/Orders.tsx
import React, { useState } from 'react'
import { useOrders } from '@/hooks/useOrders'
import { useCreateOrder } from '@/hooks/useCreateOrder'
import { useUpdateOrderStatus } from '@/hooks/useUpdateOrderStatus'

// ✅ Import Prisma type
import type { Order } from '@prisma/client'

const Orders: React.FC = () => {
  const { data: orders, isLoading, isError } = useOrders()
  const { mutate: createOrder } = useCreateOrder()
  const { mutate: updateOrderStatus } = useUpdateOrderStatus()
  const [status, setStatus] = useState<Order['status']>('pending')

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading orders</p>

  const handleCreateOrder = () => {
    const newOrder = {
      customerId: 1,  // Assuming the customerId is a number in your database
      items: [{ productId: 1, quantity: 2, price: 25.0 }],
      totalPrice: '50.00',
    }
    createOrder(newOrder)
  }

const handleUpdateOrderStatus = (orderId: number) => {
  updateOrderStatus({
    orderId,   // Pass orderId inside an object
    status,    // Pass status inside an object
  });
}


  return (
    <div>
      <h1>Orders</h1>
      <button onClick={handleCreateOrder}>Create New Order</button>

      <ul>
        {orders?.map((order) => (
          <li key={order.id}>
            <div>
              <h2>Order #{order.id}</h2>
              <p>Status: {order.status}</p>
              <p>Customer ID: {order.customerId}</p> {/* Make sure customerId is displayed correctly */}
              <button onClick={() => handleUpdateOrderStatus(order.id)}>
                Update Status to "{status}"
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Orders;
