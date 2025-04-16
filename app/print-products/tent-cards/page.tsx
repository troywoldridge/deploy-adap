"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Sublink {
  label: string;
  href: string;
  src: string;
  alt: string;
  sublinks?: Sublink[];
}

const TentCardsData: Sublink[] = [
  {
    label: "Tent Cards",
    href: "/print-products/tent-cards",
    src: "https://d12ufawtd6351k.cloudfront.net/tent-card-1.webp",
    alt: "Tent Cards",
    sublinks: [
      {
        label: "14pt Matte Finish",
        href: "/print-products/tent-cards/14pt",
        src: "https://d12ufawtd6351k.cloudfront.net/tent-card-2.webp",
        alt: "14pt Tent Cards",
      },
    ],
  },
];

const renderSublinks = (sublinks: Sublink[]) => (
  <ul className="ml-6 border-l border-gray-300 pl-4 mt-2">
    {sublinks.map((sublink, index) => (
      <li key={index} className="mb-2">
        <Link href={sublink.href}>
          <div className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded transition">
            <Image
              src={sublink.src}
              alt={sublink.alt}
              width={300}
              height={300}
              unoptimized
              className="w-32 h-32 object-cover rounded"

            />
            <span className="text-xl font-bold">{sublink.label}</span>
          </div>
        </Link>
        {sublink.sublinks && renderSublinks(sublink.sublinks)}
      </li>
    ))}
  </ul>
);

const TentCardsPage: React.FC = () => {
  const category = TentCardsData[0];
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-6xl font-extrabold mb-6 text-center">Tent Cards</h1>
      <p className="mb-8 text-center text-2xl font-extrabold text-gray-700">
        Tent cards are multi-dimensional print products that can be conveniently placed on tables for promotional purposes. They offer a smooth look and feel.
      </p>
      <div className="flex justify-center">
        <div className="border rounded-lg shadow-lg p-4 w-full max-w-md">
          <Link href={category.href}>
            <div className="cursor-pointer">
              <Image
                src={category.src}
                alt={category.alt}
                width={300}
                height={300}
                className="w-full h-72 object-cover rounded-lg mb-4"
                unoptimized
              />
              <h2 className="text-3xl font-semibold text-center mb-2">
                {category.label}
              </h2>
            </div>
          </Link>
          {category.sublinks && renderSublinks(category.sublinks)}
        </div>
      </div>
    </div>
  );
};

export default TentCardsPage;
