import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET handler: Fetch all active coupons

// POST handler: Create a new coupon

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
export async function GET(req: Request, { params }: { params: { id: string } }) {
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
export async function POST() {
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
export async function PUT() {
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
export async function DELETE() {
  try {
    return NextResponse.json({ message: 'DELETE OK' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
