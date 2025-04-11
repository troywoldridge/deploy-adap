// src/lib/api/review.ts

import { Review, CreateReviewPayload } from '@/types/review'

export const getReviews = async (productId: string): Promise<Review[]> => {
  const res = await fetch(`/api/v1/reviews/${productId}`)
  if (!res.ok) throw new Error('Failed to fetch reviews')
  return res.json()
}

export const createReview = async (data: CreateReviewPayload): Promise<Review> => {
  const res = await fetch('/api/v1/reviews', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Failed to create review')
  return res.json()
}

export const deleteReview = async (reviewId: string): Promise<{ message: string }> => {
  const res = await fetch(`/api/v1/reviews/${reviewId}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Failed to delete review')
  return res.json()
}
