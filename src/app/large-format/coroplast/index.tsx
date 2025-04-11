import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CoroplastType {
  label: string;
  href: string;
  src: string;
  alt: string;
  description: string;
}

const coroplastTypes: CoroplastType[] = [
  {
    label: "4mm",
    href: "/large-format/coroplast/4mm",
    src: "https://d12ufawtd6351k.cloudfront.net/coroplast-7.png",
    alt: "4mm Coroplast",
    description: "4mm coroplast sheets perfect for indoor signage and lightweight displays."
  },
  {
    label: "6mm",
    href: "/large-format/coroplast/6mm",
    src: "https://d12ufawtd6351k.cloudfront.net/coroplast-8.png",
    alt: "6mm Coroplast",
    description: "6mm coroplast offering extra durability for outdoor signage."
  },
  {
    label: "8mm",
    href: "/large-format/coroplast/8mm",
    src: "https://d12ufawtd6351k.cloudfront.net/coroplast-9.png",
    alt: "8mm Coroplast",
    description: "8mm coroplast for robust signage solutions with enhanced stiffness."
  },
  {
    label: "10mm",
    href: "/large-format/coroplast/10mm",
    src: "https://d12ufawtd6351k.cloudfront.net/10mm-coroplast-signs-ridersign.webp",
    alt: "10mm Coroplast",
    description: "10mm coroplast for heavy-duty signage and long-lasting outdoor use."
  }
];

const CoroplastIndex: React.FC = () => {
  return (
    <div className="container py-8">
      <h1 className="mb-4 text-center">Coroplast</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {coroplastTypes.map((type, index) => (
          <div key={index} className="col">
            <div className="card h-100 text-center">
              <div 
                className="d-flex align-items-center justify-content-center" 
                style={{ height: "200px", overflow: "hidden" }}
              >
                <Image 
                  src={type.src} 
                  alt={type.alt} 
                  width={200} 
                  height={200} 
                  style={{ objectFit: "contain" }} 
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
  );
};

export default CoroplastIndex;
