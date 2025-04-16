import { useMutation } from '@tanstack/react-query';
import * as api from '@/lib/api/reviews';
import { CreateReviewPayload, Review } from '@/types/review';

// UseMutation hook with proper configuration
export const useCreateReview = () => {
  return useMutation<Review, unknown, CreateReviewPayload>({
    mutationFn: async (data: CreateReviewPayload) => {
      return api.createReview(data); // The API call to create the review
    },
    onSuccess: (data) => {
      console.log('Review created successfully:', data);
    },
    onError: (error) => {
      console.error('Error creating review:', error);
    },
  });
};
