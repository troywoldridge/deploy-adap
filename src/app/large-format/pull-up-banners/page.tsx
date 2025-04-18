import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface BannerType {
  label: string
  href: string
  src: string
  alt: string
  description: string
}

const bannerOptions: BannerType[] = [
  {
    label: 'Standard',
    href: '/large-format/pull-up-banners/standard',
    src: 'https://d12ufawtd6351k.cloudfront.net/standard_pull_up-banner.jpg',
    alt: '13oz matte banner',
    description: 'A durable 13oz matte banner for everyday indoor/outdoor use.',
  },
  {
    label: 'Premium',
    href: '/large-format/pull-up-banners/premium',
    src: 'https://d12ufawtd6351k.cloudfront.net/premium-regular-pull-up.png',
    alt: '13oz glossy banner',
    description: 'A glossy vinyl banner offering extra durability for outdoor signage.',
  },
  {
    label: 'Table-Top',
    href: '/large-format/pull-up-banners/table-top',
    src: 'https://d12ufawtd6351k.cloudfront.net/table-top-banner.png',
    alt: 'table-top banner',
    description: 'A compact tabletop banner, perfect for smaller displays and events.',
  },
  {
    label: 'Wide Premium',
    href: '/large-format/pull-up-banners/wide-premium',
    src: 'https://d12ufawtd6351k.cloudfront.net/premium-wide-banner.png',
    alt: 'wide premium banner',
    description: 'A wider premium banner for robust signage with enhanced stiffness.',
  },
  {
    label: 'Double-Sided',
    href: '/large-format/pull-up-banners/double-sided',
    src: 'https://d12ufawtd6351k.cloudfront.net/double-sided-banner.png',
    alt: 'double-sided banner',
    description: 'A double-sided banner for maximum visibility in high-traffic areas.',
  },
  {
    label: 'X-Frame',
    href: '/large-format/pull-up-banners/x-frame',
    src: 'https://d12ufawtd6351k.cloudfront.net/x-frame-1.jpg',
    alt: 'x-frame banner',
    description: 'An X-frame banner stand designed for easy setup and portability.',
  },
]

const PullUpBannersIndex: React.FC = () => {
  return (
    <div className="container py-8" style={{ maxWidth: '1200px' }}>
      <h1 className="mb-4 text-center">Pull Up Banners</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {bannerOptions.map((banner, index) => (
          <div key={index} className="col">
            <div className="card h-100 text-center">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: '200px', overflow: 'hidden' }}
              >
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  width={200}
                  height={200}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{banner.label}</h5>
                <p className="card-text">{banner.description}</p>
              </div>
              <div className="card-footer bg-white border-0">
                <Link href={banner.href} className="btn btn-primary">
                  Browse {banner.label}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PullUpBannersIndex
