import React from "react";
import Link from "next/link";
import Image from "next/image";

// Each card’s data
interface CardItem {
  label: string;
  href: string;
  src: string;
  alt: string;
}

// AQ postcard options
const AQData: CardItem[] = [
  {
    label: "10pt AQ",
    href: "/print-products/postcards/aq/10pt",
    src: "https://d12ufawtd6351k.cloudfront.net/aq-pc-1.webp",
    alt: "10pt AQ Postcards",
  },
  {
    label: "14pt AQ",
    href: "/print-products/postcards/aq/14pt",
    src: "https://d12ufawtd6351k.cloudfront.net/aq-pc-2.webp", // Fixed extension
    alt: "14pt AQ Postcards",
  },
  {
    label: "16pt AQ",
    href: "/print-products/postcards/aq/16pt",
    src: "https://d12ufawtd6351k.cloudfront.net/aq-pc-3.webp",
    alt: "16pt AQ Postcards",
  },
];

const AQPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-8xl w-full px-4 mb-24">
        <h1 className="text-center text-6xl font-bold mb-6">AQ Postcards</h1>
        <p className="text-center text-3xl mb-8">
          Discover our AQ postcards featuring a brilliant high-gloss finish that captivates at first glance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AQData.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg p-4 flex flex-col items-center text-center bg-white"
            >
              <Link href={item.href}>
                <div className="cursor-pointer">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={350}
                    height={250}
                    className="mx-auto object-cover rounded-lg mb-2"
                  />
                  <h2 className="text-2xl font-semibold">{item.label}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AQPage;

