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

const bookmarksData: Sublink = {
  label: "Bookmarks",
  href: "/print-products/bookmarks",
  src: "https://d12ufawtd6351k.cloudfront.net/matte-finish-bm.jpg",
  alt: "Bookmarks",
  sublinks: [
    {
      label: "Matte Bookmarks",
      href: "/print-products/bookmarks/matte",
      src: "https://d12ufawtd6351k.cloudfront.net/matte-finish-bm.jpg",
      alt: "Matte Finish Bookmarks",
      sublinks: [
        {
          label: "10pt Matte Finish",
          href: "/print-products/bookmarks/matte/10pt",
          src: "https://d12ufawtd6351k.cloudfront.net/10pt-matte-finish-bm.jpg",
          alt: "10pt Matte Finish Bookmarks",
        },
        {
          label: "14pt Matte Finish",
          href: "/print-products/bookmarks/matte/14pt",
          src: "https://d12ufawtd6351k.cloudfront.net/14pt-matte-finish-bm.jpg",
          alt: "14pt Matte Finish Bookmarks",
        },
        {
          label: "16pt Matte Finish",
          href: "/print-products/bookmarks/matte/16pt",
          src: "https://d12ufawtd6351k.cloudfront.net/16pt-matte-finish-bm.jpg",
          alt: "16pt Matte Finish Bookmarks",
        },
      ],
    },
    {
      label: "UV (High Gloss) Bookmarks",
      href: "/print-products/bookmarks/uv",
      src: "https://d12ufawtd6351k.cloudfront.net/uv-bm.jpg",
      alt: "UV High Gloss Bookmarks",
      sublinks: [
        {
          label: "14pt UV (High Gloss)",
          href: "/print-products/bookmarks/uv/14pt",
          src: "https://d12ufawtd6351k.cloudfront.net/14pt-uv-bm.jpg",
          alt: "14pt UV High Gloss Bookmarks",
        },
        {
          label: "16pt UV (High Gloss)",
          href: "/print-products/bookmarks/uv/16pt",
          src: "https://d12ufawtd6351k.cloudfront.net/16pt-uv-bm.jpg",
          alt: "16pt UV High Gloss Bookmarks",
        },
      ],
    },
    {
      label: "Lamination Bookmarks",
      href: "/print-products/bookmarks/lamination",
      src: "https://d12ufawtd6351k.cloudfront.net/lamination-bm.jpg",
      alt: "Lamination Bookmarks",
      sublinks: [
        {
          label: "18pt Matte With Silk Lamination",
          href: "/print-products/bookmarks/lamination/18pt-matte-silk",
          src: "https://d12ufawtd6351k.cloudfront.net/18pt-silk-lam-bm.jpg",
          alt: "18pt Matte Silk Lamination Bookmarks",
        },
        {
          label: "18pt Gloss Lamination",
          href: "/print-products/bookmarks/lamination/18pt-gloss-lamination",
          src: "https://d12ufawtd6351k.cloudfront.net/18pt-gloss-lam-bm.jpg",
          alt: "18pt Gloss Lamination Bookmarks",
        },
      ],
    },
    {
      label: "Specialty Bookmarks",
      href: "/print-products/bookmarks/specialty",
      src: "https://d12ufawtd6351k.cloudfront.net/specialty-bm.jpg",
      alt: "Specialty Bookmarks",
      sublinks: [
        {
          label: "13pt Enviro Uncoated Bookmarks",
          href: "/print-products/bookmarks/specialty/13pt-enviro-bm",
          src: "https://d12ufawtd6351k.cloudfront.net/13pt-enviro-bm.jpg",
          alt: "13pt Enviro Uncoated Bookmarks",
        },
        {
          label: "13pt Linen Uncoated Bookmarks",
          href: "/print-products/bookmarks/specialty/13pt-linen-bm",
          src: "https://d12ufawtd6351k.cloudfront.net/13pt-linen-bm.jpg",
          alt: "13pt Linen Bookmarks",
        },
        {
          label: "14pt Writable + UV (C1S)",
          href: "/print-products/bookmarks/specialty/14pt-writable-uv",
          src: "https://d12ufawtd6351k.cloudfront.net/14pt-writable-uv-bm.jpg",
          alt: "14pt Writable + UV Bookmarks",
        },
        {
          label: "18pt Matte Lam + Spot UV",
          href: "/print-products/bookmarks/specialty/18pt-matte-lam-spot-uv",
          src: "https://d12ufawtd6351k.cloudfront.net/18pt-matte-lam-spot-uv-bm.jpg",
          alt: "18pt Matte Lam + Spot UV Bookmarks",
        },
      ],
    },
  ],
};

const renderSublinks = (sublinks: Sublink[]) => (
  <ul className="ml-6 border-l border-gray-300 pl-4 mt-2">
    {sublinks.map((sublink, index) => (
      <li key={index} className="mb-2">
        <Link href={sublink.href}>
          <div className="flex items-center gap-2 hover:bg-gray-100 p-1 rounded transition">
            <Image
              src={sublink.src}
              alt={sublink.alt}
              width={48}
              height={48}
              className="w-12 h-12 object-cover rounded"
            />
            <span className="text-sm font-medium">{sublink.label}</span>
          </div>
        </Link>
        {sublink.sublinks && renderSublinks(sublink.sublinks)}
      </li>
    ))}
  </ul>
);

const BookmarksPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">{bookmarksData.label}</h1>
      <p className="mb-8 text-center text-lg text-gray-700">
        Explore our range of bookmarks available in a variety of finishes and styles.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bookmarksData.sublinks &&
          bookmarksData.sublinks.map((category, index) => (
            <div key={index} className="border rounded-lg shadow-lg p-4">
              <Link href={category.href}>
                <div className="cursor-pointer">
                  <Image
                    src={category.src}
                    alt={category.alt}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-xl font-semibold text-center mb-2">{category.label}</h2>
                </div>
              </Link>
              {category.sublinks && renderSublinks(category.sublinks)}
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookmarksPage;
