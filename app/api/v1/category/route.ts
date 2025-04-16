// src/app/api/v1/category/route.ts

import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Here, you can fetch data for categories, for example, from a database
    const categories = [{ id: 1, name: 'Category 1' }, { id: 2, name: 'Category 2' }]
    
    return NextResponse.json(categories, { status: 200 })
  } catch (error: unknown) {
  console.error('[GET /api/v1/category] Error:', error)

  const err = error as Error
  return NextResponse.json(
    { error: err.message || 'Internal Server Error' },
    { status: 500 }
  )
}

}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Logic to create a new category (e.g., saving to database)
    const newCategory = { id: Date.now(), ...data }

    return NextResponse.json(newCategory, { status: 201 })
  } catch (error: unknown) {
  console.error('[POST /api/v1/category] Error:', error)

  const err = error as Error
  return NextResponse.json(
    { error: err.message || 'Internal Server Error' },
    { status: 500 }
  )
}

}
