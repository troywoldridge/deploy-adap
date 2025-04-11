// src/types/review.ts

export interface Review {
    id: string;
    productId: string;
    userId: string;
    rating: number;
    comment: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface CreateReviewPayload {
    productId: string;
    rating: number;
    comment: string;
  }
  