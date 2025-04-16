import React from "react";
import Link from "next/link";
import Image from "next/image";




interface Product {
  label: string;
  href: string;
  src: string;
  alt: string;
  description: string;
}



const specialtyProducts: Product[] = [
  {
    label: "Die-Cut",
    href: "/business-cards/specialty/die-cut",
    src: "leaf-business-cards.webp",
    alt: "Die-Cut Business Card",
    description: "Unique shapes that make your business card truly stand out."
  },
  {
    label: "Durable",
    href: "/business-cards/specialty/durable",
    src: "https://d12ufawtd6351k.cloudfront.net/business-card-endurace.webp",
    alt: "Durable Business Card",
    description: "Extra sturdy cards built to last through everyday wear."
  },
  {
    label: "Kraft-Paper",
    href: "/business-cards/specialty/kraft-paper",
    src: "https://d12ufawtd6351k.cloudfront.net/business-card-brown-kraft.webp",
    alt: "Kraft Paper Business Card",
    description: "Natural kraft paper cards that offer an eco-friendly appeal."
  },
  {
    label: "Metallic-Foil",
    href: "/business-cards/specialty/metallic-foil",
    src: "https://d12ufawtd6351k.cloudfront.net/foil-worx-business-cards.webp",
    alt: "Metallic Foil Business Card",
    description: "Striking metallic foil details for a luxurious finish."
  },
  {
    label: "Painted-edge",
    href: "/business-cards/specialty/painted-edge",
    src: "https://d12ufawtd6351k.cloudfront.net/painted-edge-business-cards.webp",
    alt: "Painted Edge Business Card",
    description: "Artfully painted edges that add a creative twist to your card."
  },
  {
    label: "Pearl--Paper",
    href: "/business-cards/specialty/pearl-paper",
    src: "https://d12ufawtd6351k.cloudfront.net/business-card-pearl1.webp",
    alt: "Pearl Paper Business Card",
    description: "Elegant pearl paper cards exuding sophistication and charm."
  },
  {
    label: "Soft-Touch",
    href: "/business-cards/specialty/soft-touch",
    src: "https://d12ufawtd6351k.cloudfront.net/business-card-suede-2.webp",
    alt: "Soft Touch Business Card",
    description: "Premium soft-touch cards that feel as good as they look."
  },
  {
    label: "Spot-UV",
    href: "/business-cards/specialty/spot-uv",
    src: "https://d12ufawtd6351k.cloudfront.net/magestic_duo_gold_foil_and_spotuv_2.webp",
    alt: "Spot UV Business Card",
    description: "Eye-catching spot UV details that highlight your design."
  },
  {
    label: "Ultrs-Smooth",
    href: "/business-cards/specialty/ultrs-smooth",
    src: "https://d12ufawtd6351k.cloudfront.net/business-card-silk2.webp",
    alt: "Ultrs Smooth Business Card",
    description: "Exceptionally smooth cards for a refined, upscale look."
  }
];

const SpecialtyBusinessCards: React.FC = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Specialty Business Cards</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {specialtyProducts.map((card, index) => (
          <div key={index} className="col">
            <div className="card h-100 text-center">
              <div 
                className="d-flex align-items-center justify-content-center" 
                style={{ height: "200px", overflow: "hidden" }}
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={200}
                  height={200}
                  style={{ objectFit: "contain" }}
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
  );
};

export default SpecialtyBusinessCards;
