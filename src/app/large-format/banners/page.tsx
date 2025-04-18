import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface bannersType {
  label: string
  href: string
  src: string
  alt: string
  description: string
}

const bannersTypes: bannersType[] = [
  {
    label: '13oz-matte',
    href: '/large-format/banners/13oz-matte',
    src: 'https://d12ufawtd6351k.cloudfront.net/vinyl-banner-2.webp',
    alt: '13oz matte banners',
    description: '13oz matte banners.',
  },
  {
    label: '13oz-glossy',
    href: '/large-format/banners/13oz-gloss',
    src: 'https://d12ufawtd6351k.cloudfront.net/vinyl-banner-1.webp',
    alt: '13oz-glossy banners',
    description: 'gloss Vinyl banners offering extra durability for outdoor signage.',
  },
  {
    label: '8oz-mesh',
    href: '/large-format/banners/mesh',
    src: 'https://d12ufawtd6351k.cloudfront.net/mesh-banner.webp',
    alt: '8oz mesh banners',
    description: '8mm banners for robust signage solutions with enhanced stiffness.',
  },
]

const BannersIndex: React.FC = () => {
  return (
    <div className="container py-8">
      <h1 className="mb-4 text-center">banners</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {bannersTypes.map((type, index) => (
          <div key={index} className="col">
            <div className="card h-100 text-center">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: '200px', overflow: 'hidden' }}
              >
                <Image
                  src={type.src}
                  alt={type.alt}
                  width={200}
                  height={200}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{type.label}</h5>
                <p className="card-text">{type.description}</p>
              </div>
              <div className="card-footer bg-white border-0">
                <Link href={type.href} className="btn btn-primary">
                  Browse {type.label}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BannersIndex
