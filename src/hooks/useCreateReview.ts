// src/hooks/useCreateReview.ts

import { useMutation } from '@tanstack/react-query'
import * as api from '@/lib/api/reviews'
import { CreateReviewPayload, Review } from '@/types/review'

export function useCreateReview() {
  return useMutation<Review, unknown, CreateReviewPayload>({
    mutationFn: async (data: CreateReviewPayload) => {
      // Convert productId to a number (if it's passed as a string)
      const reviewData = {
        ...data,
        productId: Number(data.productId), // Ensure it's a number
      }
      return api.createReview(reviewData)
    },
    onSuccess: (data) => {
      console.log('Review created successfully:', data)
    },
    onError: (error) => {
      console.error('Error creating review:', error)
    },
  })
}
