import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const cart = await prisma.cart.findFirst({
    where: { userId: session.user.id },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  })

  return NextResponse.json(cart || { items: [] }, { status: 200 })
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { productId, quantity } = await request.json()

  if (!productId || typeof quantity !== 'number' || quantity < 1) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }

  const product = await prisma.product.findUnique({ where: { id: productId } })
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  let cart = await prisma.cart.findFirst({
    where: { userId: session.user.id },
  })

  if (!cart) {
    cart = await prisma.cart.create({
      data: { userId: session.user.id },
    })
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
}

export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
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
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { itemId } = await request.json()

  if (itemId) {
    await prisma.cartItem.delete({
      where: { id: itemId },
    })
    return NextResponse.json({ message: 'Cart item removed' }, { status: 200 })
  }

  const cart = await prisma.cart.findFirst({
    where: { userId: session.user.id },
  })

  if (cart) {
    await prisma.cartItem.deleteMany({ where: { cartId: cart.id } })
  }

  return NextResponse.json({ message: 'Cart cleared' }, { status: 200 })
}
