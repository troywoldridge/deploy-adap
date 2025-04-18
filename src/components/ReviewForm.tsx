'use client'

import React, { useState } from 'react'
import { useReviews } from '@/hooks/useReviews'

interface ReviewFormProps {
  productId: string
}

export default function ReviewForm({ productId }: ReviewFormProps) {
  const { createReview } = useReviews(productId)

  const [rating, setRating] = useState<number>(5)
  const [comment, setComment] = useState<string>('')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState<boolean | null>(null)

  const handleSubmit = () => {
    setSubmitting(true)
    setSuccess(null)

    createReview(
      { productId: Number(productId), rating, comment },
      {
        onSuccess: () => {
          setSuccess(true)
          setComment('')
          setRating(5)
        },
        onError: () => {
          setSuccess(false)
        },
        onSettled: () => {
          setSubmitting(false)
        },
      }
    )
  }

  return (
    <div className="space-y-4">
      <h3>Leave a Review</h3>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your review"
        className="w-full border p-2 rounded"
      />
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(+e.target.value)}
        min={1}
        max={5}
        className="w-full border p-2 rounded"
      />
      <button
        onClick={handleSubmit}
        disabled={submitting}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {submitting ? 'Submitting...' : 'Submit Review'}
      </button>

      {success === true && <p className="text-green-600">Review submitted!</p>}
      {success === false && <p className="text-red-600">Failed to submit review.</p>}
    </div>
  )
}
