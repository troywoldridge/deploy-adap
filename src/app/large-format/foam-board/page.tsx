import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface CoroplastType {
  label: string
  href: string
  src: string
  alt: string
  description: string
}

const coroplastTypes: CoroplastType[] = [
  {
    label: 'Foam Board',
    href: '/large-format/foam-board',
    src: 'https://d12ufawtd6351k.cloudfront.net/foamboard-1.jpg',
    alt: 'Foam Board',
    description: 'High-quality foam board for displays and presentations.',
  },
]

const FoamBoardIndex: React.FC = () => {
  return (
    // Limit the container’s maximum width so the card does not stretch the whole screen
    <div className="container py-4" style={{ maxWidth: '600px' }}>
      <h1 className="mb-4 text-center">Foam Board</h1>
      <div className="row row-cols-1 row-cols-sm-1">
        {coroplastTypes.map((type, index) => (
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

export default FoamBoardIndex
