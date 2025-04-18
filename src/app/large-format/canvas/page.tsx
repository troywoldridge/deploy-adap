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
    label: 'Rolled Canvas',
    href: '/large-format/canvas/rolled',
    src: 'https://d12ufawtd6351k.cloudfront.net/canvas-2.webp',
    alt: '6ft table cover',
    description:
      'Canvas prints are typically used for photography and canvas art pieces. Our canvas prints on solvent ink printers and the canvas is acid free.',
  },
  {
    label: 'Stretched Canvas',
    href: '/large-format/canvas/stretched',
    src: 'https://d12ufawtd6351k.cloudfront.net/canvas-1.webp',
    alt: 'Display Board 40 pt',
    description:
      'These ready-to-use custom canvas prints are stretched over 1.5” wooden frames made from high quality North American basswood.',
  },
]
const CanvasIndex: React.FC = () => {
  return (
    <div className="container py-8">
      <h1 className="mb-4 text-center">Canvas</h1>
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

export default CanvasIndex
