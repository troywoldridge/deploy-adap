import '@/styles/globals.css'
import Header from '@/components/Layout/Header'
import NavbarCategories from '@/components/Layout/NavbarCategories'
import Footer from '@/components/Layout/Footer'
import SEO from '@/components/Layout/SEO'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SEO />
        <Header />
        <NavbarCategories />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
