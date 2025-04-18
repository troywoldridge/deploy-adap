import { NextRequest, NextResponse } from 'next/server'
import {
  cartGETHandler,
  cartPOSTHandler,
  cartPUTHandler,
  cartDELETEHandler,
} from './handlers/cartHandlers'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { searchParams } = new URL(req.url) // Get the query params
  const id = searchParams.get('id') // Assuming you're using a query param 'id'

  // If you want to handle dynamic routes like [id], you can use URL's path segments
  const pathSegments = req.url.split('/')
  const dynamicId = pathSegments[pathSegments.length - 1] // Get the dynamic `id` from URL

  // Pass the `id` to the handler function
  return cartGETHandler(req, { id: dynamicId })
}

export async function POST(req: NextRequest) {
  return cartPOSTHandler(req)
}

export async function PUT(req: NextRequest) {
  return cartPUTHandler(req)
}

export async function DELETE(req: NextRequest) {
  return cartDELETEHandler(req)
}
