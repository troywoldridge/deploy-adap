import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Subcategory {
  label: string
  href: string
  src: string
  alt: string
  description: string
}

const subcategories: Subcategory[] = [
  {
    label: 'Coroplast',
    href: '/large-format/coroplast',
    src: 'https://d12ufawtd6351k.cloudfront.net/coroplast-group-1.png',
    alt: 'Coroplast',
    description: 'Durable, lightweight signage for indoor and outdoor use.',
  },
  {
    label: 'Floor Graphics',
    href: '/large-format/floor-graphics',
    src: 'https://d12ufawtd6351k.cloudfront.net/floor-graphic.png',
    alt: 'Floor Graphics',
    description: 'Attention-grabbing floor graphics to promote your brand.',
  },
  {
    label: 'Foam Board',
    href: '/large-format/foam-board',
    src: 'https://d12ufawtd6351k.cloudfront.net/foamboard-1.jpg',
    alt: 'Foam Board',
    description: 'High-quality foam board for displays and presentations.',
  },
  {
    label: 'Banners',
    href: '/large-format/banners',
    src: 'https://d12ufawtd6351k.cloudfront.net/banners-1.png',
    alt: 'Banners',
    description: 'Custom banners perfect for any event or promotion.',
  },
  {
    label: 'Pull Up Banners',
    href: '/large-format/pull-up-banners',
    src: 'https://d12ufawtd6351k.cloudfront.net/pull-up-banner-1.png',
    alt: 'Pull Up Banners',
    description: 'Portable pull up banners for quick setup and impact.',
  },
  {
    label: 'Aluminum Signs',
    href: '/large-format/aluminum-signs',
    src: 'https://d12ufawtd6351k.cloudfront.net/aluminum-signs-1.jpg',
    alt: 'Aluminum Signs',
    description: 'Durable aluminum signs ideal for outdoor display.',
  },
  {
    label: 'Table Covers',
    href: '/large-format/table-covers',
    src: 'https://d12ufawtd6351k.cloudfront.net/tablecloth-1.png',
    alt: 'Table Covers',
    description: 'Customized table covers to showcase your brand.',
  },
  {
    label: 'Adhesive Vinyl',
    href: '/large-format/adhesive-vinyl',
    src: 'https://d12ufawtd6351k.cloudfront.net/adhesive-vinyl.jpg',
    alt: 'Adhesive Vinyl',
    description: 'High-quality adhesive vinyl for signage and decals.',
  },
  {
    label: 'Window Graphics',
    href: '/large-format/window-graphics',
    src: 'https://d12ufawtd6351k.cloudfront.net/window-graphics-2.jpg',
    alt: 'Window Graphics',
    description: 'Impactful window graphics to attract attention.',
  },
  {
    label: 'Styrene Signs',
    href: '/large-format/styrene-signs',
    src: 'https://d12ufawtd6351k.cloudfront.net/styrene-1.jpg',
    alt: 'Styrene Signs',
    description: 'Cost-effective styrene signs for indoor and outdoor use.',
  },
  {
    label: 'Display Board',
    href: '/large-format/display-board',
    src: 'https://d12ufawtd6351k.cloudfront.net/display-board-40-pt-a.jpg',
    alt: 'Display Board',
    description: 'Versatile display boards for presentations and events.',
  },
  {
    label: 'Canvas',
    href: '/large-format/canvas',
    src: 'https://d12ufawtd6351k.cloudfront.net/canvas-1.jpg',
    alt: 'Canvas',
    description: 'Premium canvas prints for art and advertising.',
  },
  {
    label: 'Sintra / PVC',
    href: '/large-format/sintra',
    src: 'https://d12ufawtd6351k.cloudfront.net/sintra-4.jpg',
    alt: 'Sintra / PVC',
    description: 'Durable Sintra and PVC materials for long-lasting signage.',
  },
  {
    label: 'A-Frame Signs',
    href: '/large-format/a-frame',
    src: 'https://d12ufawtd6351k.cloudfront.net/a-frame-1.jpg',
    alt: 'A-Frame Signs',
    description: 'Flexible A-Frame signs for storefronts and events.',
  },
  {
    label: 'Wall Decals',
    href: '/large-format/wall-decals',
    src: 'https://d12ufawtd6351k.cloudfront.net/wall-decal-1.jpg',
    alt: 'Wall Decals',
    description: 'Custom wall decals to enhance any space.',
  },
  {
    label: 'A Frame Stands',
    href: '/large-format/a-frame-stands',
    src: 'https://d12ufawtd6351k.cloudfront.net/a-frame-stands.jpg',
    alt: 'A Frame Stands',
    description: 'Sturdy A Frame stands for effective promotions.',
  },
  {
    label: 'H Stands',
    href: '/large-format/h-stands',
    src: 'https://d12ufawtd6351k.cloudfront.net/h-stands.jpg',
    alt: 'H Stands',
    description: 'Professional H stands for trade shows and exhibitions.',
  },
]

const LargeFormatIndex: React.FC = () => {
  return (
    <div className="container py-8">
      <h1 className="mb-4 text-center">Large Format</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {subcategories.map((subcat, index) => (
          <div key={index} className="col">
            <div className="card h-100 text-center">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: '200px', overflow: 'hidden' }}
              >
                <Image
                  src={subcat.src}
                  alt={subcat.alt}
                  width={200}
                  height={200}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{subcat.label}</h5>
                <p className="card-text">{subcat.description}</p>
              </div>
              <div className="card-footer bg-white border-0">
                <Link href={subcat.href} className="btn btn-primary">
                  Browse {subcat.label}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LargeFormatIndex
