// src/hooks/useReviews.ts

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '@/lib/api/review'
import { CreateReviewPayload } from '@/types/review'

export const useReviews = (productId: string) => {
  const queryClient = useQueryClient()

  // Fetch reviews
  const reviewsQuery = useQuery(['reviews', productId], () => api.getReviews(productId))

  // Create review mutation
  const createReviewMutation = useMutation((data: CreateReviewPayload) => api.createReview(data), {
    onSuccess: () => {
      // Invalidate and refetch reviews after a new review is created
      queryClient.invalidateQueries(['reviews', productId])
    },
  })

  // Delete review mutation
  const deleteReviewMutation = useMutation((reviewId: string) => api.deleteReview(reviewId), {
    onSuccess: () => {
      // Invalidate and refetch reviews after a review is deleted
      queryClient.invalidateQueries(['reviews', productId])
    },
  })

  return {
    reviews: reviewsQuery.data,
    isLoading: reviewsQuery.isLoading,
    createReview: createReviewMutation.mutate,
    deleteReview: deleteReviewMutation.mutate,
  }
}
