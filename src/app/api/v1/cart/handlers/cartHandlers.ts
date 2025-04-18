import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET handler to fetch all cart items or a specific item based on `id`
export async function cartGETHandler(req: NextRequest, params: { id: string }) {
  try {
    if (params.id) {
      const cartItem = await prisma.cartItem.findUnique({
        where: { id: params.id },
      })
      if (!cartItem) {
        return NextResponse.json({ message: 'Cart item not found' }, { status: 404 })
      }
      return NextResponse.json(cartItem)
    }
    
    const cartItems = await prisma.cartItem.findMany()
    return NextResponse.json(cartItems)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

// POST handler to add a new item to the cart
export async function cartPOSTHandler(req: NextRequest) {
  try {
    const body = await req.json()

    // Assuming you have validated the body before
    const newItem = await prisma.cartItem.create({
      data: body,
    })
    return NextResponse.json(newItem, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

// PUT handler to update an existing cart item
export async function cartPUTHandler(req: NextRequest) {
  try {
    const { id } = await req.json() // assuming `id` is sent in the request body
    const body = await req.json()

    const updatedItem = await prisma.cartItem.update({
      where: { id },
      data: body,
    })

    return NextResponse.json(updatedItem)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

// DELETE handler to remove a cart item
export async function cartDELETEHandler(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get('id') // extracting `id` from query parameters
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }
    
    const deletedItem = await prisma.cartItem.delete({
      where: { id },
    })

    return NextResponse.json({ message: `Deleted cart item ${id}` })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
