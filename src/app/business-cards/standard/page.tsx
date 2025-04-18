import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Product {
  label: string
  href: string
  src: string
  alt: string
  description: string
}

const standardProducts: Product[] = [
  {
    label: '13pt Enviro',
    href: '/business-cards/standard/13pt-enviro',
    src: 'https://d12ufawtd6351k.cloudfront.net/business-card-suede-2.webp',
    alt: '13pt Enviro Business Card',
    description: 'Eco-friendly standard cards with robust 13pt thickness.',
  },
  {
    label: '13pt Linen',
    href: '/business-cards/standard/13pt-linen',
    src: 'https://d12ufawtd6351k.cloudfront.net/4over-bc_linen-020123.webp',
    alt: '13pt Linen Business Card',
    description: 'Classic textured finish in a durable 13pt board.',
  },
  {
    label: '14pt AQ',
    href: '/business-cards/standard/14pt-aq',
    src: 'https://d12ufawtd6351k.cloudfront.net/business-card-suede.webp',
    alt: '14pt AQ Business Card',
    description: 'High-quality 14pt cards for a professional finish.',
  },
  {
    label: '14pt Matte',
    href: '/business-cards/standard/14pt-matte',
    src: 'https://d12ufawtd6351k.cloudfront.net/business-card-suede-2.webp',
    alt: '14pt Matte Business Card',
    description: 'Smooth matte finish for an elegant look.',
  },
  {
    label: '14pt Profit Maximizer',
    href: '/business-cards/standard/14pt-profit-maximizer',
    src: 'https://d12ufawtd6351k.cloudfront.net/PR_3197-01.png',
    alt: '14pt Profit Maximizer Business Card',
    description: 'Designed to maximize impact with every detail.',
  },
  {
    label: '14pt UV',
    href: '/business-cards/standard/14pt-uv',
    src: 'https://d12ufawtd6351k.cloudfront.net/PR_3191-01.png',
    alt: '14pt UV Business Card',
    description: 'Vibrant UV finish for dynamic designs.',
  },
  {
    label: '14pt Writable AQ',
    href: '/business-cards/standard/14pt-writable-aq',
    src: 'https://d12ufawtd6351k.cloudfront.net/PR_3192-01.png',
    alt: '14pt Writable AQ Business Card',
    description: 'Writable surface on a premium 14pt card.',
  },
  {
    label: '14pt Writable UV',
    href: '/business-cards/standard/14pt-writable-uv',
    src: 'https://d12ufawtd6351k.cloudfront.net/bc2_1_dual_lt_halo_and_uv.webp',
    alt: '14pt Writable UV Business Card',
    description: 'Combines durability with a writable finish and UV gloss.',
  },
  {
    label: '16pt AQ',
    href: '/business-cards/standard/16pt-aq',
    src: 'https://d12ufawtd6351k.cloudfront.net/PR_3191-01.png',
    alt: '16pt AQ Business Card',
    description: 'Premium 16pt cards offering superior sturdiness.',
  },
  {
    label: '16pt Matte',
    href: '/business-cards/standard/16pt-matte',
    src: 'https://d12ufawtd6351k.cloudfront.net/PR_3197-01.png',
    alt: '16pt Matte Business Card',
    description: 'Elegant matte finish in a robust 16pt design.',
  },
  {
    label: '16pt UV',
    href: '/business-cards/standard/16pt-uv',
    src: 'https://d12ufawtd6351k.cloudfront.net/PR_3180-01.png',
    alt: '16pt UV Business Card',
    description: 'Striking high-gloss UV finish on a thick 16pt card.',
  },
  {
    label: '18pt Gloss Laminated',
    href: '/business-cards/standard/18pt-gloss-laminated',
    src: 'https://d12ufawtd6351k.cloudfront.net/business-card-silk.webp',
    alt: '18pt Gloss Laminated Business Card',
    description: 'Luxurious gloss laminated finish on an 18pt board.',
  },
  {
    label: '18pt Writable',
    href: '/business-cards/standard/18pt-writable',
    src: 'https://d12ufawtd6351k.cloudfront.net/18pt-writable-business-cards-a.jpg',
    alt: '18pt Writable Business Card',
    description: 'Versatile 18pt cards with a writable surface for personalization.',
  },
]

const StandardBusinessCards: React.FC = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Standard Business Cards</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {standardProducts.map((card, index) => (
          <div key={index} className="col">
            <div className="card h-100 text-center">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: '200px', overflow: 'hidden' }}
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={200}
                  height={200}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{card.label}</h5>
                <p className="card-text">{card.description}</p>
              </div>
              <div className="card-footer bg-white border-0">
                <Link href={card.href} className="btn btn-primary">
                  Browse {card.label}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StandardBusinessCards
