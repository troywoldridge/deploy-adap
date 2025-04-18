// src/pages/cart-review.tsx

'use client'

import React from 'react'
import { useRouter } from 'next/router'

const CartReviewPage: React.FC = () => {
  const router = useRouter()
  const product = { name: '14pt AQ Business Cards', price: '$42.00' } // Example product
  const shippingDetails = { method: 'Standard', cost: '$5.00' } // Example shipping

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-center mb-8">Cart Review</h1>
      <div className="space-y-6 max-w-md mx-auto">
        <div>
          <h3 className="font-semibold">Product</h3>
          <p>
            {product.name} - {product.price}
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Shipping</h3>
          <p>
            {shippingDetails.method} - {shippingDetails.cost}
          </p>
        </div>
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => router.push('/checkout')}
            className="bg-green-600 text-white px-5 py-2 rounded"
          >
            Proceed to Checkout
          </button>
          <button
            onClick={() => router.push('/product-detail')}
            className="bg-gray-600 text-white px-5 py-2 rounded"
          >
            Edit Product Options
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartReviewPage
