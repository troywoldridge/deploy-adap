import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  _req: NextRequest,
  { params }: { params: { productid: string } }
) {
  const { productid } = params

  try {
    return NextResponse.json({ message: `GET product ${productid}` })
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
