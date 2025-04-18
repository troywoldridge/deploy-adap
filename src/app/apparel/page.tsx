'use client'

import { useState, useEffect } from 'react'

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-05-01T00:00:00').getTime()
    const now = new Date().getTime()
    const timeLeft = targetDate - now

    return {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeLeft / (1000 * 60)) % 60),
      seconds: Math.floor((timeLeft / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-6">
      <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
      <p className="text-lg mb-6">We&apos;re working on something amazing. Stay tuned!</p>

      <div className="flex space-x-4 text-2xl font-semibold">
        <div className="p-4 bg-white text-black rounded-lg">
          {timeLeft.days} <span className="text-sm block">Days</span>
        </div>
        <div className="p-4 bg-white text-black rounded-lg">
          {timeLeft.hours} <span className="text-sm block">Hours</span>
        </div>
        <div className="p-4 bg-white text-black rounded-lg">
          {timeLeft.minutes} <span className="text-sm block">Minutes</span>
        </div>
        <div className="p-4 bg-white text-black rounded-lg">
          {timeLeft.seconds} <span className="text-sm block">Seconds</span>
        </div>
      </div>

      <p className="mt-6">Follow us for updates!</p>
      <div className="flex space-x-4 mt-3">
        <a href="#" className="text-xl hover:opacity-80 transition">
          🚀 Twitter
        </a>
        <a href="#" className="text-xl hover:opacity-80 transition">
          📘 Facebook
        </a>
        <a href="#" className="text-xl hover:opacity-80 transition">
          📸 Instagram
        </a>
      </div>
    </div>
  )
}

export default ComingSoon
