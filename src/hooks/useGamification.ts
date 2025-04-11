import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '@/lib/api/gamification'
import { Achievement, Leaderboard, UserAchievement } from '@/types/gamification'

// Hook to fetch achievements
export const useAchievements = () => {
  return useQuery<Achievement[]>(['achievements'], api.getAchievements)
}

// Hook to fetch leaderboard
export const useLeaderboard = () => {
  return useQuery<Leaderboard[]>(['leaderboard'], api.getLeaderboard)
}

// Hook to add user achievement
export const useAddUserAchievement = () => {
  const queryClient = useQueryClient()
  return useMutation(
    (data: { userId: string; achievementId: string }) => api.addUserAchievement(data.userId, data.achievementId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['userAchievements'])
      },
    }
  )
}

// Hook to update leaderboard
export const useUpdateLeaderboard = () => {
  const queryClient = useQueryClient()
  return useMutation(
    (data: { userId: string; points: number }) => api.updateLeaderboard(data.userId, data.points),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['leaderboard'])
      },
    }
  )
}
