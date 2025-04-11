import React from "react";
import Link from "next/link";
import Image from "next/image";

interface AluminumType {
  label: string;
  href: string;
  src: string;
  alt: string;
  description: string;
}

const aluminumItems: AluminumType[] = [
  {
    label: "Aluminum Signs 3mm",
    href: "/large-format/aluminum-signs/3mm-signs",
    src: "https://d12ufawtd6351k.cloudfront.net/aluminum-signs-1.png",
    alt: "Aluminum Signs 3mm",
    description: "Durable 3mm aluminum signs for outdoor or indoor branding."
  },
  {
    label: "Aluminum Floor Graphics 20mil",
    href: "/large-format/aluminum-signs/floor-graphics",
    src: "https://d12ufawtd6351k.cloudfront.net/aluminum-floor-graphics.webp",
    alt: "Aluminum Floor Graphics 20mil",
    description: "Sturdy 20mil aluminum floor graphics for high-traffic areas."
  }
];

const AluminumIndex: React.FC = () => {
  return (
    <div className="container py-8">
      <h1 className="mb-4 text-center">Aluminum Signs</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {aluminumItems.map((item, index) => (
          <div key={index} className="col">
            <div className="card h-100 text-center">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "200px", overflow: "hidden" }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={200}
                  height={200}
                  style={{ objectFit: "contain" }}
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
  );
};

export default AluminumIndex;
