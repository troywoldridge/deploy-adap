// src/types/gamification.ts

export interface Achievement {
    id: string
    title: string
    description: string
    points: number
  }
  
  export interface UserAchievement {
    id: string
    userId: string
    achievementId: string
    achievedAt: string
    achievement: Achievement
  }
  
  export interface User {
    id: string
    email: string
    name: string
    achievements: UserAchievement[]
  }
  
  export interface Leaderboard {
    id: string
    userId: string
    points: number
    user: User
  }
  