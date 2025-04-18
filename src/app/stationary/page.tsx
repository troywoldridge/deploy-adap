import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface StationaryItem {
  label: string
  href: string
  src: string
  alt: string
  description: string
}

const stationaryItems: StationaryItem[] = [
  {
    label: 'Letterhead',
    href: '/stationary/letterhead',
    src: 'https://d12ufawtd6351k.cloudfront.net/letterhead-1.webp',
    alt: 'Letterhead',
    description: 'Professional letterhead to elevate your brand.',
  },
  {
    label: 'Envelopes',
    href: '/stationary/envelopes',
    src: 'https://d12ufawtd6351k.cloudfront.net/envelopes-1.jpg', // Replace with your actual image path or URL
    alt: 'Envelopes',
    description: 'Branded envelopes that complete your corporate identity.',
  },
  {
    label: 'Note Pads',
    href: '/stationary/note-pads',
    src: 'https://d12ufawtd6351k.cloudfront.net/notepads-main.jpg', // Replace with your actual image path or URL
    alt: 'Note Pads',
    description: 'Custom note pads for quick memos and promotions.',
  },
  {
    label: 'NCR Forms',
    href: '/stationary/ncr-forms',
    src: 'https://d12ufawtd6351k.cloudfront.net/ncr-1.webp', // Replace with your actual image path or URL
    alt: 'NCR Forms',
    description: 'Carbonless forms for efficient record-keeping.',
  },
]

const StationaryIndex: React.FC = () => {
  return (
    <div className="container py-8">
      <h1 className="mb-4 text-center">Stationary</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {stationaryItems.map((item, index) => (
          <div key={index} className="col">
            <div className="card h-100 text-center">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: '200px', overflow: 'hidden' }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={200}
                  height={200}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.label}</h5>
                <p className="card-text">{item.description}</p>
              </div>
              <div className="card-footer bg-white border-0">
                <Link href={item.href} className="btn btn-primary">
                  Browse {item.label}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StationaryIndex
