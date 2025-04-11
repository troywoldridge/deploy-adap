"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ClingOption {
  label: string;
  href: string;
  src: string;
  alt: string;
}

const clingsOptions: ClingOption[] = [
  {
    label: "Transparent Clings",
    href: "/print-products/clings/transparent-clings",
    src: "https://d12ufawtd6351k.cloudfront.net/transparent-clings.jpg",
    alt: "Transparent Clings",
  },
  {
    label: "White Opaque Clings",
    href: "/print-products/clings/white-opaque-clings",
    src: "https://d12ufawtd6351k.cloudfront.net/opaque-clings.jpg",
    alt: "White Opaque Clings",
  },
];

const ClingsIndexPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Clings</h1>
      <p className="mb-8 text-center text-lg text-gray-700">
        Choose your type of clings.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clingsOptions.map((option, index) => (
          <Link key={index} href={option.href}>
            <div className="border rounded-lg shadow-lg p-4 hover:shadow-2xl transition transform hover:scale-105 cursor-pointer">
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

export default ClingsIndexPage;
