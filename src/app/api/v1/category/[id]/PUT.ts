// src/app/api/v1/category/[id]/PUT.ts
// src/app/api/v1/category/[id]/PUT.ts
import { NextRequest, NextResponse } from 'next/server'
import { updateCategory } from '@/app/api/v1/services/updateCategory'

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params

  try {
    const body = await req.json()
    const updatedCategory = await updateCategory(id, body)

    if (!updatedCategory) {
      return NextResponse.json({ message: 'Category not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'PUT OK', updatedCategory })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

