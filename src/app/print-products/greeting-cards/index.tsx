"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface GreetingCardCategory {
  label: string;
  href: string;
  src: string;
  alt: string;
}

const greetingCardsCategories: GreetingCardCategory[] = [
  {
    label: "Matte Greeting Cards",
    href: "/print-products/greeting-cards/matte",
    src: "https://d12ufawtd6351k.cloudfront.net/14pt-matte-gc.jpg",
    alt: "14pt Matte Finish Greeting Cards",
  },
  {
    label: "14pt + UV (High Gloss)",
    href: "/print-products/greeting-cards/14pt-high-gloss",
    src: "https://d12ufawtd6351k.cloudfront.net/14pt-uv-gc.jpg",
    alt: "14pt + UV (High Gloss) Greeting Cards",
  },
  {
    label: "14pt + AQ",
    href: "/print-products/greeting-cards/14pt-aq",
    src: "https://d12ufawtd6351k.cloudfront.net/14pt-aq-gc.jpg",
    alt: "14pt AQ Greeting Cards",
  },
  {
    label: "Writable Greeting Cards",
    href: "/print-products/greeting-cards/writable",
    src: "https://d12ufawtd6351k.cloudfront.net/writable-gc.jpg",
    alt: "Writable Greeting Cards",
  },
  {
    label: "Specialty Greeting Cards",
    href: "/print-products/greeting-cards/specialty",
    src: "https://d12ufawtd6351k.cloudfront.net/specialty-gc.png",
    alt: "Specialty Greeting Cards",
  },
];

const GreetingCardsStandardIndexPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Greeting Cards</h1>
      <p className="mb-8 text-center text-lg text-gray-700">
        Discover our premium greeting cards available in a variety of finishes.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {greetingCardsCategories.map((cat, index) => (
          <Link key={index} href={cat.href}>
            <div className="border rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer">
              <div className="relative w-full h-56">
                <Image
                  src={cat.src}
                  alt={cat.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center">{cat.label}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GreetingCardsStandardIndexPage;
