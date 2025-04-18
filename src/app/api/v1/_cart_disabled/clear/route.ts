import { NextRequest, NextResponse } from 'next/server'

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
