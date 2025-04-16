import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/lib/prisma'

export async function PATCH(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split('/').pop()
    if (!id) {
      return NextResponse.json({ error: 'Missing cart item ID in URL' }, { status: 400 })
    }

    const data = await request.json()

    if (typeof data.quantity !== 'number') {
      return NextResponse.json({ error: 'Invalid input: "quantity" should be a number.' }, { status: 400 })
    }

    const updatedCartItem = await prisma.cartItem.update({
      where: { id },
      data: { quantity: data.quantity },
    })

    return NextResponse.json(updatedCartItem, { status: 200 })
  } catch (error: any) {
    console.error(`[PATCH /api/v1/cart/item/${request.nextUrl.pathname}] Error:`, error)
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split('/').pop()
    if (!id) {
      return NextResponse.json({ error: 'Missing cart item ID in URL' }, { status: 400 })
    }

    await prisma.cartItem.delete({
      where: { id },
    })

    return NextResponse.json({ message: 'Cart item deleted' }, { status: 200 })
  } catch (error: any) {
    console.error(`[DELETE /api/v1/cart/item/${request.nextUrl.pathname}] Error:`, error)
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}
