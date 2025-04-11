// src/hooks/useCoupon.ts

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '@/lib/api/coupon'
import { Coupon } from '@/types/coupon'

// Define a constant for the query key
const COUPONS_QUERY_KEY = ['coupons']

// Custom hook to interact with coupons
export const useCoupons = () => {
  const queryClient = useQueryClient()

  // Fetch coupons
  const couponQuery = useQuery<Coupon[]>(COUPONS_QUERY_KEY, api.getCoupons)

  // Apply coupon mutation
  const applyCouponMutation = useMutation(api.applyCoupon, {
    onSuccess: () => {
      // Invalidate the coupons query to refetch updated data
      queryClient.invalidateQueries(COUPONS_QUERY_KEY)
    },
    onError: (error: unknown) => {
      console.error('Failed to apply coupon:', error)
      // Optionally, you can handle error state or show a notification
    },
  })

  return {
    coupons: couponQuery.data,
    isLoading: couponQuery.isLoading,
    isError: couponQuery.isError,
    applyCoupon: applyCouponMutation.mutate,
    applyCouponError: applyCouponMutation.error,
    isApplyingCoupon: applyCouponMutation.isLoading,
  }
}
