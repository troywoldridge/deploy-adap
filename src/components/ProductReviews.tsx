// src/components/ProductReviews.tsx

import React, { useState } from 'react'
import { useReviews } from '@/hooks/useReviews'
import { CreateReviewPayload } from '@/types/review'

interface Props {
  productId: string
}

const ProductReviews: React.FC<Props> = ({ productId }) => {
  const { reviews, isLoading, createReview, deleteReview } = useReviews(productId)
  const [newReview, setNewReview] = useState<CreateReviewPayload>({
    productId: Number(productId),
    rating: 1,
    comment: '',
  })

  const handleCreateReview = () => {
    createReview(newReview)
    setNewReview({ productId: Number(productId), rating: 1, comment: '' })
  }

  const handleDeleteReview = (reviewId: number) => {
    deleteReview(reviewId.toString())
  }

  if (isLoading) return <p>Loading reviews...</p>

  return (
    <div>
      <h2>Product Reviews</h2>
      {reviews && reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id} className="review">
            <p>{review.comment}</p>
            <span>Rating: {review.rating}</span>
            <button onClick={() => handleDeleteReview(review.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}

      <div>
        <h3>Leave a Review</h3>
        <textarea
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          placeholder="Write your review here"
        />
        <input
          type="number"
          value={newReview.rating}
          onChange={(e) => setNewReview({ ...newReview, rating: +e.target.value })}
          min="1"
          max="5"
        />
        <button onClick={handleCreateReview}>Submit Review</button>
      </div>
    </div>
  )
}

export default ProductReviews
