"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Sublink {
  label: string;
  href: string;
  src: string;
  alt: string;
}

// Data for the Numbered Tickets page
const NumberedTicketsData: Sublink[] = [
  {
    label: "14pt Numbered Tickets",
    href: "/print-products/numbered-tickets/14pt",
    src: "https://d12ufawtd6351k.cloudfront.net/numbered-tickets.png",
    alt: "14pt Numbered Tickets",
  },
];

const NumberedTicketsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-6xl font-bold mb-6 text-center">Numbered Tickets</h1>
      <p className="mb-8 text-center text-2xl font-medium text-gray-700">
        Explore our selection of numbered tickets available in various styles,
        perfect for concerts, raffles, and events.
      </p>
      {/* Center the card with flex and limit max width */}
      <div className="flex justify-center">
        {NumberedTicketsData.map((category, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4 w-full max-w-md">
            <Link href={category.href}>
              <div className="cursor-pointer">
                <Image
                  src={category.src}
                  alt={category.alt}
                  width={256}
                  height={160}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold text-center mb-2">
                  {category.label}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberedTicketsPage;
