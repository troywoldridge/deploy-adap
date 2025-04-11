import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET({ params }: { params: { productId: string } }) {
  try {
    const productId = parseInt(params.productId)

    const optionGroups = await prisma.optionGroup.findMany({
      where: { productId },
      include: {
        options: true, // Include the options within each group
      },
    })

    interface Option {
      id: number
      name: string
      price: number
    }

    interface OptionGroup {
      name: string
      options: Option[]
    }

    interface FormattedOptionGroup {
      group: string
      options: Option[]
    }

    const formattedOptionGroups: FormattedOptionGroup[] = optionGroups.map((group: OptionGroup) => ({
      group: group.name,
      options: group.options.map((opt: Option) => ({
        id: opt.id,
        name: opt.name,
        price: opt.price,
      })),
    }))

    return NextResponse.json(formattedOptionGroups, { status: 200 })
  } catch (error: any) {
    console.error('[GET /api/v1/products/[productId]/options] Error:', error)
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}
