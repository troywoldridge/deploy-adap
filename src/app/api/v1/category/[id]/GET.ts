// src/app/api/v1/category/[id]/GET.ts
import { NextRequest, NextResponse } from 'next/server'
import { getCategoryById } from '@/app/api/v1/services/getCategory'

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params

  try {
    const category = await getCategoryById(id)

    if (!category) {
      return NextResponse.json({ message: 'Category not found' }, { status: 404 })
    }

    return NextResponse.json({ message: `GET category ${id}`, category })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
