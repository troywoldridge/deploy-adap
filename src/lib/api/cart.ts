// src/lib/api/cart.ts

import { NextResponse } from 'next/server'

// Example cart data structure in memory, but you can modify this to interact with your database or session.
let cart: Array<{ productId: number; quantity: number; price: number }> = []

// Get cart items
export async function getCart() {
  try {
    return NextResponse.json(cart) // Return current cart in JSON format
  } catch (err) {
    console.error('Error fetching cart:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

// Add item to cart
export async function addToCart(productId: number, quantity: number, price: number) {
  try {
    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex((item) => item.productId === productId)

    if (existingProductIndex >= 0) {
      // If product already exists, update the quantity
      cart[existingProductIndex].quantity += quantity
    } else {
      // Otherwise, add the new item to the cart
      cart.push({ productId, quantity, price })
    }

    return NextResponse.json({ message: 'Item added to cart', cart })
  } catch (err) {
    console.error('Error adding item to cart:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

// Update item quantity in cart
export async function updateCartItem(itemId: string, data: { quantity: number }) {
  const res = await fetch(`/api/v1/cart/${itemId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return res.json()
}

// Remove item from cart
export async function removeFromCart(productId: number) {
  try {
    cart = cart.filter((item) => item.productId !== productId)

    return NextResponse.json({ message: 'Item removed from cart', cart })
  } catch (err) {
    console.error('Error removing item from cart:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

// Clear the entire cart
export async function clearCart() {
  try {
    cart = [] // Empty the cart
    return NextResponse.json({ message: 'Cart cleared', cart })
  } catch (err) {
    console.error('Error clearing cart:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
export async function removeCartItem(itemId: string): Promise<unknown> {
  try {
    // Assuming itemId corresponds to productId in the cart
    cart = cart.filter((item) => item.productId.toString() !== itemId)

    return NextResponse.json({ message: 'Item removed from cart', cart })
  } catch (err) {
    console.error('Error removing item from cart:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
