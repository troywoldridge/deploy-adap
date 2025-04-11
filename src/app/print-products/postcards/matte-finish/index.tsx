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
    label: "10pt Matte Finish",
    href: "/print-products/postcards/matte-finish/10pt",
    src: "https://d12ufawtd6351k.cloudfront.net/10pt-matte-finish-pc.webp",
    alt: "10pt Matte Finish Post Cards",
  },
  {
    label: "14pt Matte Finish",
    href: "/print-products/postcards/matte-finish/14pt",
    src: "https://d12ufawtd6351k.cloudfront.net/14pt-matte-finish-pc.webp",
    alt: "14pt Matte Finish Post Cards",
  },
  {
    label: "16pt Matte Finish",
    href: "/print-products/postcards/matte-finish/16pt",
    src: "https://d12ufawtd6351k.cloudfront.net/16pt-matte-finish-pc.webp",
    alt: "16pt Matte Finish Post Cards",
  },
];

const MatteFinishPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {/* Outer container with a max width */}
      <div className="max-w-8xl w-full px-4 mb-24">
        <h1 className="text-center text-6xl font-bold mb-6">
          Matte Finish Postcards
        </h1>
        <p className="text-center text-xl font-medium mb-8">
          Explore our range of high-quality matte finish postcards, perfect for
          an elegant, velvety look and feel.
        </p>

        {/* Grid for 3 cards */}
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

export default MatteFinishPage;
