"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Poster {
  label: string;
  href: string;
  src: string;
  alt: string;
}

const posterOptions: Poster[] = [
  {
    label: "100lb Gloss Text",
    href: "/print-products/posters/100lb-gloss",
    src: "https://d12ufawtd6351k.cloudfront.net/gloss-book-posters.webp",
    alt: "100lb Gloss Text Poster",
  },
  {
    label: "100lb Matte Finish",
    href: "/print-products/posters/100lb-matte",
    src: "https://d12ufawtd6351k.cloudfront.net/gloss-book-poster_b_w.webp",
    alt: "100lb Matte Finish Poster",
  },
  {
    label: "100lb UV (High Gloss)",
    href: "/print-products/posters/100lb-uv",
    src: "https://d12ufawtd6351k.cloudfront.net/photo_gloss_posters_three.webp",
    alt: "100lb UV Poster",
  },
  {
    label: "80lb Enviro Uncoated",
    href: "/print-products/posters/80lb-enviro",
    src: "https://d12ufawtd6351k.cloudfront.net/dull-book-poster_b_w_2.webp",
    alt: "80lb Enviro Uncoated Poster",
  },
  {
    label: "8pt C2S Stock Large Format",
    href: "/print-products/posters/large-format",
    src: "https://d12ufawtd6351k.cloudfront.net/backlit-posters.webp",
    alt: "8pt C2S Stock Large Format Poster",
  },
];

const PostersPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Posters</h1>
      <p className="mb-8 text-center text-lg text-gray-700">
        Posters are a great way to promote events and advertising with bold imagery.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {posterOptions.map((poster, index) => (
          <Link key={index} href={poster.href}>
            <div className="border rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer">
              <div className="relative w-full h-56">
                <Image
                  src={poster.src}
                  alt={poster.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center">{poster.label}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostersPage;


