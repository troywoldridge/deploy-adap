// src/hooks/useGamification.ts

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '@/lib/api/gamification'
import { Achievement, Leaderboard, UserAchievement } from '@/types/gamification'

// Hook to fetch achievements
export const useAchievements = () => {
  return useQuery<Achievement[]>({
    queryKey: ['achievements'],
    queryFn: api.getAchievements,
  })
}

// Hook to fetch leaderboard
export const useLeaderboard = () => {
  return useQuery<Leaderboard[]>({
    queryKey: ['leaderboard'],
    queryFn: api.getLeaderboard,
  })
}

// Hook to add user achievement
export const useAddUserAchievement = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: { userId: string; achievementId: string }) =>
      api.addUserAchievement(data.userId, data.achievementId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userAchievements'] })
    },
  })
}

// Hook to update leaderboard
export const useUpdateLeaderboard = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: { userId: string; points: number }) =>
      api.updateLeaderboard(data.userId, data.points),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leaderboard'] })
    },
  })
}
