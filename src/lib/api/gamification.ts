import { Achievement, UserAchievement, Leaderboard } from '@/types/gamification'

// Fetch all achievements
export const getAchievements = async (): Promise<Achievement[]> => {
  const res = await fetch('/api/v1/achievement')
  if (!res.ok) throw new Error('Failed to fetch achievements')
  return res.json()
}

// Fetch leaderboard data
export const getLeaderboard = async (): Promise<Leaderboard[]> => {
  const res = await fetch('/api/v1/leaderboard')
  if (!res.ok) throw new Error('Failed to fetch leaderboard')
  return res.json()
}

// Add achievement to user
export const addUserAchievement = async (userId: string, achievementId: string): Promise<UserAchievement> => {
  const res = await fetch('/api/v1/userAchievement', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, achievementId }),
  })
  if (!res.ok) throw new Error('Failed to add achievement')
  return res.json()
}

// Update leaderboard entry
export const updateLeaderboard = async (userId: string, points: number): Promise<Leaderboard> => {
  const res = await fetch('/api/v1/leaderboard', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, points }),
  })
  if (!res.ok) throw new Error('Failed to update leaderboard')
  return res.json()
}
