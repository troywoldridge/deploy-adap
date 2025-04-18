'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface CartItem {
  id: number
  product: {
    id: number
    name: string
    price: number
    weight: number
  }
  quantity: number
}

interface ShippingAddress {
  address: string
  city: string
  state: string
  zip: string
}

interface ShippingRate {
  method: string
  price: number
  estimated_days: number
}

const CheckoutPage: React.FC = () => {
  const router = useRouter()
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    address: '',
    city: '',
    state: '',
    zip: '',
  })
  const [shippingMethod, setShippingMethod] = useState<string>('standard')
  const [paymentToken, setPaymentToken] = useState<string>('')
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [shippingRates, setShippingRates] = useState<ShippingRate[] | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get<CartItem[]>('/api/cart')
        setCartItems(response.data)
      } catch {
        setError('Failed to load cart items')
      }
    }
    fetchCartItems()
  }, [])

  const handleShippingCalculation = async () => {
    if (!shippingAddress.zip) {
      setError('Please enter a ZIP code.')
      return
    }

    setLoading(true)
    try {
      const response = await axios.post<ShippingRate[]>('/api/checkout/calculate-shipping', {
        zip: shippingAddress.zip,
        weight: cartItems.reduce((total, item) => total + item.product.weight * item.quantity, 0),
        length: 10, // Example values
        width: 10,
        height: 10,
      })
      setShippingRates(response.data)
    } catch {
      setError('Failed to calculate shipping rates')
    } finally {
      setLoading(false)
    }
  }

  const handleCheckout = async () => {
    if (!paymentToken) {
      setError('Payment method is required')
      return
    }

    setLoading(true)
    try {
      const response = await axios.post<{ order: { id: number } }>('/api/checkout/process', {
        shipping_address: shippingAddress,
        shipping_method: shippingMethod,
        payment_method: 'credit_card', // Example method
        payment_token: paymentToken,
      })
      router.push(`/order/${response.data.order.id}`)
    } catch {
      setError('Failed to process checkout')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      {error && <div className="error">{error}</div>}

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.product.name}</p>
              <p>Price: ${item.product.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))
        )}
      </div>

      <h2>Shipping Address</h2>
      <input
        type="text"
        value={shippingAddress.address}
        onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
        placeholder="Address"
      />
      <input
        type="text"
        value={shippingAddress.city}
        onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
        placeholder="City"
      />
      <input
        type="text"
        value={shippingAddress.state}
        onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
        placeholder="State"
      />
      <input
        type="text"
        value={shippingAddress.zip}
        onChange={(e) => setShippingAddress({ ...shippingAddress, zip: e.target.value })}
        placeholder="ZIP Code"
      />

      <button onClick={handleShippingCalculation} disabled={loading}>
        {loading ? 'Calculating Shipping...' : 'Calculate Shipping'}
      </button>

      {shippingRates && (
        <div className="shipping-options">
          <h3>Available Shipping Methods</h3>
          {shippingRates.map((rate, index) => (
            <div key={index}>
              <input
                type="radio"
                name="shippingMethod"
                value={rate.method}
                checked={shippingMethod === rate.method}
                onChange={() => setShippingMethod(rate.method)}
              />
              <label>
                {rate.method} - ${rate.price.toFixed(2)} (Est. {rate.estimated_days} days)
              </label>
            </div>
          ))}
        </div>
      )}

      <h2>Payment</h2>
      <input
        type="text"
        value={paymentToken}
        onChange={(e) => setPaymentToken(e.target.value)}
        placeholder="Payment Token"
      />

      <button onClick={handleCheckout} disabled={loading}>
        {loading ? 'Processing Order...' : 'Complete Purchase'}
      </button>
    </div>
  )
}

export default CheckoutPage
