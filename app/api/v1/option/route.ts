// app/api/v1/option/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // Fetch all options from the database
    const options = await prisma.option.findMany();
    
    // Return the options as a JSON response
    return NextResponse.json(options, { status: 200 });
  } catch (error: any) {
    console.error('[GET /api/v1/option] Error:', error);
    
    // Return a JSON response with an error message
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming JSON request body
    const data = await request.json();

    // Validate that necessary fields are present
    if (!data.name || !data.value) {
      return NextResponse.json({ error: 'Missing required fields: name or value' }, { status: 400 });
    }

    // Create a new option in the database using Prisma
    const newOption = await prisma.option.create({
      data: {
        name: data.name,
        value: data.value,
        // Add more fields if necessary (e.g., description, productId, etc.)
      },
    });

    // Return the newly created option
    return NextResponse.json(newOption, { status: 201 });
  } catch (error: any) {
    console.error('[POST /api/v1/option] Error:', error);
    
    // Return a JSON response with an error message
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

