import apiClient from '@/lib/api-client'
import { Achievement, Leaderboard, UserAchievement } from '@/types/gamification'

// Fetch achievements
export async function getAchievements(): Promise<Achievement[]> {
  const res = await apiClient.get<Achievement[]>('/api/v1/gamification/achievements')
  return res.data
}

// Fetch user achievements
export async function getUserAchievements(): Promise<UserAchievement[]> {
  const res = await apiClient.get<UserAchievement[]>('/api/v1/gamification/user-achievements')
  return res.data
}

// Fetch leaderboard
export async function getLeaderboard(): Promise<Leaderboard[]> {
  const res = await apiClient.get<Leaderboard[]>('/api/v1/gamification/leaderboard')
  return res.data
}

// Claim an achievement
export async function claimAchievement(id: string): Promise<UserAchievement> {
  const res = await apiClient.post<UserAchievement>('/api/v1/gamification/claim', { id })
  return res.data
}

// Add a user achievement
export async function addUserAchievement(
  userId: string,
  achievementId: string
): Promise<UserAchievement> {
  const res = await apiClient.post<UserAchievement>('/api/v1/gamification/user-achievements', {
    userId,
    achievementId,
  })
  return res.data
}

// Update leaderboard points
export async function updateLeaderboard(userId: string, points: number): Promise<Leaderboard> {
  const res = await apiClient.put<Leaderboard>('/api/v1/gamification/leaderboard', {
    userId,
    points,
  })
  return res.data
}
