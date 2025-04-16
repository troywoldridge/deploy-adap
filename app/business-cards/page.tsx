import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CategoryCard {
  label: string;
  href: string;
  src: string;
  alt: string;
  description: string;
}

const categories: CategoryCard[] = [
  {
    label: "Standard",
    href: "/business-cards/standard",
    src: "https://d12ufawtd6351k.cloudfront.net/business-card-endurace.webp",
    alt: "Standard Business Cards",
    description: "Explore our range of standard business cards."
  },
  {
    label: "Specialty",
    href: "/business-cards/specialty",
    src: "https://d12ufawtd6351k.cloudfront.net/magestic_duo_raised_gold_foil_and_raised_spuv_2_group.webp",
    alt: "Specialty Business Cards",
    description: "Discover our unique specialty business cards."
  }
];

const BusinessCardsIndex: React.FC = () => {
return (
    <div className="container py-8">
    <h1 className="mb-4 text-center">Business Cards</h1>
    <div className="row row-cols-1 row-cols-md-2 g-4">
        {categories.map((cat, index) => (
        <div key={index} className="col">
            <div className="card h-100 text-center">
            <div 
                className="d-flex align-items-center justify-content-center pt-10" 
                style={{ height: "200px", overflow: "hidden" }}
            > 
                <Image 
                src={cat.src} 
                alt={cat.alt} 
                width={200} 
                height={200} 
                style={{ objectFit: "contain" }} 
            />
        </div>

            <div className="card-body">
                <h5 className="card-title">{cat.label}</h5>
                <p className="card-text">{cat.description}</p>
            </div>
            <div className="card-footer bg-white border-0">
                <Link href={cat.href} className="btn btn-primary">
                Browse {cat.label}
                </Link>
            </div>
            </div>
        </div>
        ))}
    </div>
    </div>
  );
};

export default BusinessCardsIndex;

