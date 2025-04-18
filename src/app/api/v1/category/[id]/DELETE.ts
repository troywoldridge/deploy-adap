// src/app/api/v1/category/[id]/DELETE.ts
import { NextRequest, NextResponse } from 'next/server'
import { deleteCategory } from '@/app/api/v1/services/deleteCategory'

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params

  try {
    const deletedCategory = await deleteCategory(id)

    if (!deletedCategory) {
      return NextResponse.json({ message: 'Category not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'DELETE OK', deletedCategory })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
