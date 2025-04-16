import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CardItem {
  label: string;
  href: string;
  src: string;
  alt: string;
}

const matteCardsData: CardItem[] = [
  {
    label: "Metallic Foil",
    href: "/print-products/postcards/specialty/metallic-foil",
    src: "https://d12ufawtd6351k.cloudfront.net/foil-pc-1.webp",
    alt: "Metallic Foil Postcards",
  },
  {
    label: "Spot UV",
    href: "/print-products/postcards/specialty/spot-uv",
    src: "https://d12ufawtd6351k.cloudfront.net/spot-uv-pc-1.webp",
    alt: "Spot UV Postcards",
  },
  {
    label: "Kraft Paper",
    href: "/print-products/postcards/specialty/kraft-paper",
    src: "https://d12ufawtd6351k.cloudfront.net/kraft-paper-2.webp",
    alt: "Kraft Paper Postcards",
  },
  {
    label: "Pearl Paper",
    href: "/print-products/postcards/specialty/pearl-paper",
    src: "https://d12ufawtd6351k.cloudfront.net/pearl-paper-pc-1.webp",
    alt: "Pearl Paper Postcards",
  },
  {
    label: "Durable",
    href: "/print-products/postcards/specialty/durable-pc",
    src: "https://d12ufawtd6351k.cloudfront.net/durable-pc-1.webp",
    alt: "Durable Postcards",
  },
];

const SpecialtyPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {/* Outer container with a max width */}
      <div className="max-w-8xl w-full px-4 mb-24">
        <h1 className="text-center text-6xl font-bold mb-6">
          Specialty Postcards
        </h1>
        <p className="text-center text-xl font-medium mb-8">
          Discover our unique range of specialty postcards, each crafted with a distinct finish to elevate your message. Whether its the luminous shimmer of metallic foil, the eye-catching shine of spot UV, the natural charm of kraft paper, the subtle elegance of pearl paper, or the enduring quality of our durable collection, every postcard is designed to make a lasting impression.
        </p>

        {/* Grid for cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {matteCardsData.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg p-4 flex flex-col items-center text-center bg-white"
            >
              <Link href={item.href}>
                <div className="cursor-pointer">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={205}
                    height={250}
                    className="mx-auto object-cover rounded-lg mb-2"
                  />
                  <h2 className="text-xl font-semibold">{item.label}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialtyPage;
