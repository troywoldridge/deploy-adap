// src/app/api/v1/cart/item/[id]/route.ts

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PATCH({ params, request }: { params: { id: string }, request: Request }) {
  try {
    const { id } = params
    const data = await request.json()

    // Ensure quantity is a valid number
    if (typeof data.quantity !== 'number') {
      return NextResponse.json({ error: 'Invalid input: "quantity" should be a number.' }, { status: 400 })
    }

    const updatedCartItem = await prisma.cartItem.update({
      where: { id },
      data: { quantity: data.quantity },
    })

    return NextResponse.json(updatedCartItem, { status: 200 })
  } catch (error: any) {
    console.error(`[PATCH /api/v1/cart/item/${params.id}] Error:`, error)
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}
export async function DELETE({ params }: { params: { id: string } }) {
  try {
    const { id } = params

    await prisma.cartItem.delete({
      where: { id },
    })

    return NextResponse.json({ message: 'Cart item deleted' }, { status: 200 })
  } catch (error: any) {
    console.error(`[DELETE /api/v1/cart/item/${params.id}] Error:`, error)
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}