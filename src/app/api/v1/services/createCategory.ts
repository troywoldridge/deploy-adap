// src/app/api/v1/services/createCategory.ts
import { prisma } from '@/lib/prisma'

export const createCategory = async (data: { name: string, description: string }) => {
  return prisma.category.create({
    data,
  })
}
