// src/lib/api/reviews.ts

import { PrismaClient } from '@prisma/client'
import { CreateReviewPayload } from '@/types/review'
import apiClient from '@/lib/api-client' // Ensure this path is correct
import { Review } from '@prisma/client' // Import the Review type from Prisma

const prisma = new PrismaClient()

// Function to create a review
export async function createReview(data: CreateReviewPayload) {
  try {
    // Ensure productId is a number before creating a review
    const productId = Number(data.productId)

    const newReview = await prisma.review.create({
      data: {
        productId,
        rating: data.rating,
        comment: data.comment,
        userId: data.userId ?? '', // Ensure userId is a string, defaulting to an empty string if undefined
      },
    })

    return newReview
  } catch (error) {
    console.error('Error creating review:', error)
    throw new Error('Failed to create review')
  }
}

export const deleteReview = async (reviewId: string): Promise<void> => {
  try {
    await apiClient.delete(`/reviews/${reviewId}`)
  } catch (error) {
    console.error('Error deleting review:', error)
    throw new Error('Failed to delete review')
  }
}

// Function to fetch reviews for a specific product
export async function getReviewsByProductId(productId: number) {
  try {
    const reviews = await prisma.review.findMany({
      where: {
        productId,
      },
    })

    return reviews
  } catch (error) {
    console.error('Error fetching reviews:', error)
    throw new Error('Failed to fetch reviews')
  }
}

export const getProductReviews = async (productId: number): Promise<Review[]> => {
  try {
    const response = await apiClient.get(`/products/${productId}/reviews`)
    return response.data as Review[]
  } catch (error) {
    console.error('Error fetching product reviews:', error)
    throw new Error('Failed to fetch product reviews')
  }
}

// Function to update a review's status or content (example)
export async function updateReview(reviewId: number, data: Partial<CreateReviewPayload>) {
  try {
    const updatedReview = await prisma.review.update({
      where: { id: reviewId },
      data: {
        ...data,
        userId: data.userId ?? undefined,
      },
    })

    return updatedReview
  } catch (error) {
    console.error('Error updating review:', error)
    throw new Error('Failed to update review')
  }
}
