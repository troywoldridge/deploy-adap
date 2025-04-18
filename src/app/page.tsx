'use client'

import React from 'react'
import HeroSection from '@/components/HeroSection'
import NewsletterSignup from '@/components/NewsletterSignup'
import FeaturedCategories from '@/components/FeaturedCategories'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <main className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-6xl font-bold mb-6">Welcome to American Design And Printing</h1>
        <p className="text-4xl mb-4">
          Explore our range of cutting-edge products and services designed to empower your business.
        </p>
        {/* Additional home page content can be added here */}
      </main>

      <FeaturedCategories />
      <NewsletterSignup />
    </>
  )
}

export default HomePage
