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
  const couponQuery = useQuery({
    queryKey: COUPONS_QUERY_KEY,
    queryFn: api.getCoupons,
  })

  // Apply coupon mutation
  const applyCouponMutation = useMutation({
    mutationFn: (code: string) => api.applyCoupon(code),
    onSuccess: () => {
      // Invalidate the coupons query to refetch updated data
      queryClient.invalidateQueries({ queryKey: COUPONS_QUERY_KEY })
    },
    onError: (error: unknown) => {
      console.error('Failed to apply coupon:', error)
    },
  })

  return {
    coupons: couponQuery.data,
    isLoading: couponQuery.isLoading,
    isError: couponQuery.isError,
    applyCoupon: applyCouponMutation.mutate,
    applyCouponError: applyCouponMutation.error,
    isApplyingCoupon: applyCouponMutation.isPending, // was `isLoading`
  }
}
