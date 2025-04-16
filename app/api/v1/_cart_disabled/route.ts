import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

export const dynamic = 'force-dynamic' // 👈 Crucial for dynamic route behavior

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const userId = String(session.user.id)

    const cart = await prisma.cart.findFirst({
      where: { userId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    })

    return NextResponse.json(cart || { items: [] }, { status: 200 })
  } catch (error) {
    console.error('GET /api/v1/cart error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const userId = String(session.user.id)
    const { productId, quantity } = await request.json()

    if (!productId || typeof quantity !== 'number' || quantity < 1) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }

    const product = await prisma.product.findUnique({ where: { id: productId } })
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    let cart = await prisma.cart.findFirst({ where: { userId } })
    if (!cart) {
      cart = await prisma.cart.create({ data: { userId } })
    }

    const existingItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId: product.id,
      },
    })

    if (existingItem) {
      await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + quantity },
      })
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId: product.id,
          quantity,
        },
      })
    }

    return NextResponse.json({ message: 'Item added to cart' }, { status: 201 })
  } catch (error) {
    console.error('POST /api/v1/cart error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { itemId, quantity } = await request.json()

    if (!itemId || typeof quantity !== 'number' || quantity < 1) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }

    await prisma.cartItem.update({
      where: { id: itemId },
      data: { quantity },
    })

    return NextResponse.json({ message: 'Cart item updated' }, { status: 200 })
  } catch (error) {
    console.error('PATCH /api/v1/cart error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const userId = String(session.user.id)
    const { itemId } = await request.json()

    if (itemId) {
      await prisma.cartItem.delete({ where: { id: itemId } })
      return NextResponse.json({ message: 'Cart item removed' }, { status: 200 })
    }

    const cart = await prisma.cart.findFirst({ where: { userId } })

    if (cart) {
      await prisma.cartItem.deleteMany({ where: { cartId: cart.id } })
    }

    return NextResponse.json({ message: 'Cart cleared' }, { status: 200 })
  } catch (error) {
    console.error('DELETE /api/v1/cart error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
