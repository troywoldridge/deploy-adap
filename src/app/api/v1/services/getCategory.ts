// src/app/api/v1/services/getCategory.ts
import { prisma } from '@/lib/prisma'

export const getCategoryById = async (id: string) => {
  return prisma.category.findUnique({
    where: { id },
  })
}
