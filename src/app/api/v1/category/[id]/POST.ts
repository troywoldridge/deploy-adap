// src/app/api/v1/category/[id]/POST.ts
import { NextRequest, NextResponse } from 'next/server'
import { createCategory } from '@/app/api/v1/services/createCategory'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const newCategory = await createCategory(body)

    return NextResponse.json({ message: 'POST OK', newCategory })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
