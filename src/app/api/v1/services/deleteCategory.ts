// src/app/api/v1/services/deleteCategory.ts
import { prisma } from '@/lib/prisma'

export const deleteCategory = async (id: string) => {
  return prisma.category.delete({
    where: { id },
  })
}
