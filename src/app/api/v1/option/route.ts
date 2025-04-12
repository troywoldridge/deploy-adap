// app/api/v1/option/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const options = await prisma.option.findMany();
    return NextResponse.json(options, { status: 200 });
  } catch (error: any) {
    console.error('[GET /api/v1/option] Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const newOption = await prisma.option.create({
      data: data,
    });

    return NextResponse.json(newOption, { status: 201 });
  } catch (error: any) {
    console.error('[POST /api/v1/option] Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
