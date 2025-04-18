// src/app/api/v1/services/updateCategory.ts
import { prisma } from '@/lib/prisma'

export const updateCategory = async (id: string, data: { name: string, description: string }) => {
  return prisma.category.update({
    where: { id },
    data,
  })
}
