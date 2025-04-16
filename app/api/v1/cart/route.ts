import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET: Fetch all cart items for a user
export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
  }

  try {
    const cartItems = await prisma.cartItem.findMany({
      where: { userId: userId },
      include: { product: true },
    });

    return NextResponse.json(cartItems, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching cart items:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST: Add an item to the cart
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { userId, productId, quantity } = body;

  if (!userId || !productId || !quantity) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const cartItem = await prisma.cartItem.upsert({
      where: {
        cartId_productId: {
          cartId: userId,
          productId,
        },
      },
      update: {
        quantity: {
          increment: quantity,
        },
      },
      create: {
        userId,
        productId,
        quantity,
      },
    });

    return NextResponse.json(cartItem, { status: 201 });
  } catch (error: any) {
    console.error('Error adding item to cart:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE: Remove item from cart
export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const { userId, productId } = body;

  if (!userId || !productId) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    await prisma.cartItem.deleteMany({
      where: {
        userId,
        productId,
      },
    });

    return NextResponse.json({ message: 'Item removed from cart' }, { status: 200 });
  } catch (error: any) {
    console.error('Error deleting cart item:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
