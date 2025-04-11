"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface MagnetOption {
  label: string;
  href: string;
  src: string;
  alt: string;
}

const magnetOptions: MagnetOption[] = [
  {
    label: "14pt Magnets",
    href: "/print-products/magnets/14pt-magnets",
    src: "https://d12ufawtd6351k.cloudfront.net/magnets-1.webp",
    alt: "14pt Magnets",
  },
  {
    label: "30mil Car Magnets",
    href: "/print-products/magnets/30mil-car-magnets",
    src: "https://d12ufawtd6351k.cloudfront.net/car-magnet-1.webp",
    alt: "30 Mil Car Magnets",
  },
  {
    label: "30mil Cut To Shape Magnets",
    href: "/print-products/magnets/30mil-magnets",
    src: "https://d12ufawtd6351k.cloudfront.net/contour-cut-4.webp",
    alt: "30 Mil Cut To Shape Magnets",
  },
  {
    label: "20mil Cut To Shape Magnets",
    href: "/print-products/magnets/20mil-magnets",
    src: "https://d12ufawtd6351k.cloudfront.net/20mil-cut-to-shape-magnets-1.png",
    alt: "20 Mil Cut To Shape Magnets",
  },
];

const MagnetsIndexPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Magnets</h1>
      <p className="mb-8 text-center text-lg text-gray-700">
        Explore our selection of magnets available in a variety of finishes and styles.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {magnetOptions.map((option, index) => (
          <Link key={index} href={option.href}>
            <div className="border rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer">
              <div className="relative w-full h-80">
                <Image
                  src={option.src}
                  alt={option.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center">{option.label}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MagnetsIndexPage;