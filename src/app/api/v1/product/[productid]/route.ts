import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  _req: NextRequest,
  context: { params: { productid: string } } // <- MUST match `[productid]` exactly
) {
  const { productid } = context.params

  try {
    return NextResponse.json({ message: `Product ID is ${productid}` })
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
export async function POST(req: NextRequest) {  // Added req parameter
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
export async function PUT(req: NextRequest) {  // Added req parameter
  try {
    // const body = await req.json();
    // const schema = z.object({
    //   name: z.string(),
    //   price: z.number(),
    // });
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
export async function DELETE(req: NextRequest) {  // Added req parameter
  try {
    // Implement delete logic here
    return NextResponse.json({ message: 'DELETE OK' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
