import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = new URL(req.url).pathname.split('/').pop()
    if (!id) {
      return NextResponse.json({ error: 'Missing cart item ID in URL' }, { status: 400 })
    }

    const data = await req.json()

    if (typeof data.quantity !== 'number') {
      return NextResponse.json(
        { error: 'Invalid input: "quantity" should be a number.' },
        { status: 400 }
      )
    }

    const updatedCartItem = await prisma.cartItem.update({
      where: { id },
      data: { quantity: data.quantity },
    })

    return NextResponse.json(updatedCartItem, { status: 200 })
  } catch (error: any) {
    console.error(`[PATCH /api/v1/cart/item/${new URL(req.url).pathname}] Error:`, error)
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}

/**
 * @swagger
 * /api/endpoint:
 *   get:
 *     description: GET handler
 */

/**
 * @swagger
 * /api/endpoint:
 *   post:
 *     description: POST handler
 */

/**
 * @swagger
 * /api/endpoint:
 *   put:
 *     description: PUT handler
 */

/**
 * @swagger
 * /api/endpoint:
 *   delete:
 *     description: DELETE handler
 */

/**
 * @swagger
 * /api/endpoint:
 *   get:
 *     description: GET handler
 */

/**
 * @swagger
 * /api/endpoint:
 *   post:
 *     description: POST handler
 */

/**
 * @swagger
 * /api/endpoint:
 *   put:
 *     description: PUT handler
 */

/**
 * @swagger
 * /api/endpoint:
 *   delete:
 *     description: DELETE handler
 */

/**
 * @swagger
 * /api/endpoint:
 *   get:
 *     description: GET handler
 */
export async function GET(req: NextRequest, context: { params: { id: string } }) {
  try {
    return NextResponse.json({ message: 'GET OK' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

/**
 * @swagger
 * /api/endpoint:
 *   post:
 *     description: POST handler
 */
export async function POST(req: NextRequest, context: { params: { id: string } }) {
  try {
    // const schema = z.object({
    //   name: z.string(),
    //   price: z.number(),
    // });
    // const body = await req.json();
    // const validated = schema.parse(body);
    return NextResponse.json({ message: 'POST OK' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

/**
 * @swagger
 * /api/endpoint:
 *   put:
 *     description: PUT handler
 */
export async function PUT(req: NextRequest, context: { params: { id: string } }) {
  try {
    // const schema = z.object({
    //   name: z.string(),
    //   price: z.number(),
    // });
    // const body = await req.json();
    // const validated = schema.parse(body);
    return NextResponse.json({ message: 'PUT OK' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

/**
 * @swagger
 * /api/endpoint:
 *   delete:
 *     description: DELETE handler
 */
export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
  try {
    return NextResponse.json({ message: 'DELETE OK' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
