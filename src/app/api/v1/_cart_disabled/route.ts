import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth/options'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic' // 👈 Crucial for dynamic route behavior

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { itemId, quantity } = await req.json()

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
export async function GET(req: NextRequest) {
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
export async function POST(req: NextRequest) {
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
export async function PUT(req: NextRequest) {
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
export async function DELETE(req: NextRequest) {
  try {
    return NextResponse.json({ message: 'DELETE OK' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
