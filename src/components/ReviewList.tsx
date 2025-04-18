'use client'

import { useReviews } from '@/hooks/useReviews'
import { Review } from '@/types/review'

interface ReviewListProps {
  productId: string
}

export default function ReviewList({ productId }: ReviewListProps) {
  const { reviews, isLoading } = useReviews(productId)

  // Mock error handling if your hook doesn't provide it
  const isError = !reviews && !isLoading

  if (isLoading) {
    return <p>Loading reviews...</p>
  }

  if (isError) {
    return <p className="text-red-600">Error: Failed to load reviews.</p>
  }

  return (
    <div>
      <h2>Reviews</h2>
      {reviews && reviews.length > 0 ? (
        reviews.map((review: Review) => (
          <div key={review.id}>
            <p>{review.comment}</p>
            <span>Rating: {review.rating}</span>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  )
}
