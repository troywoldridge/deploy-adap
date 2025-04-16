import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as api from '@/lib/api/reviews';
import { CreateReviewPayload, Review } from '@/types/review';

export const useReviews = (productId: string) => {
  const queryClient = useQueryClient();

  // Fetch reviews
  const { data: reviews, isLoading } = useQuery<Review[]>({
    queryKey: ['reviews', productId],
    queryFn: () => api.getProductReviews(productId),
  });

  // Create a review
  const createReviewMutation = useMutation({
    mutationFn: (data: CreateReviewPayload) => api.createReview(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews', productId] });
    },
  });

  // Delete a review
  const deleteReviewMutation = useMutation({
    mutationFn: (reviewId: string) => api.deleteReview(reviewId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews', productId] });
    },
  });

  return {
    reviews,
    isLoading,
    createReview: createReviewMutation.mutate,
    deleteReview: deleteReviewMutation.mutate,
  };
};
