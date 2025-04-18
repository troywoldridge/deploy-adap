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
    label: '24pt',
    href: '/large-format/display-board/24pt',
    src: 'https://d12ufawtd6351k.cloudfront.net/display-board-24-pt-a.jpg',
    alt: '6ft table cover',
    description:
      'Printed on very thick semi-gloss card stock. Best suited for posters, signage and POP advertising',
  },
  {
    label: '40pt',
    href: '/large-format/display-board/40pt',
    src: 'https://d12ufawtd6351k.cloudfront.net/display-board-40-pt-a.jpg',
    alt: 'Display Board 40 pt',
    description:
      'Printed on very thick semi-gloss card stock. Best suited for posters, signage and POP advertising.',
  },
]
const DisplayBoardIndex: React.FC = () => {
  return (
    <div className="container py-8">
      <h1 className="mb-4 text-center">Floor Graphics</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
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

export default DisplayBoardIndex
