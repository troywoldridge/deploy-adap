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

const postcardsData: Sublink[] = [
  {
    label: "Matte Finish Postcards",
    href: "/print-products/postcards/matte-finish",
    src: "https://d12ufawtd6351k.cloudfront.net/14pt-matte-finish-pc.webp",
    alt: "Matte Finish Postcards",
    sublinks: [
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
    ],
  },
  {
    label: "UV High Gloss Postcards",
    href: "/print-products/postcards/uv-high-gloss",
    src: "https://d12ufawtd6351k.cloudfront.net/uv-high-gloss.png",
    alt: "UV High Gloss Postcards",
    sublinks: [
      {
        label: "14pt UV",
        href: "/print-products/postcards/uv-high-gloss/14pt",
        src: "https://d12ufawtd6351k.cloudfront.net/14pt-uv-pc.png",
        alt: "14pt UV Postcards",
      },
      {
        label: "16pt UV",
        href: "/print-products/postcards/uv-high-gloss/16pt",
        src: "https://d12ufawtd6351k.cloudfront.net/16pt-uv-pc.png",
        alt: "16pt UV Postcards",
      },
    ],
  },
  {
    label: "Lamination Postcards",
    href: "/print-products/postcards/lamination",
    src: "https://d12ufawtd6351k.cloudfront.net/silk-lam-pc-1.webp",
    alt: "Lamination Postcards",
    sublinks: [
      {
        label: "18pt Gloss Lamination",
        href: "/print-products/postcards/lamination/18pt-gloss",
        src: "https://d12ufawtd6351k.cloudfront.net/gloss-lam-pc-1.webp",
        alt: "18pt Gloss Lamination Postcards",
      },
      {
        label: "18pt Matte Silk Lamination",
        href: "/print-products/postcards/lamination/18pt-silk",
        src: "https://d12ufawtd6351k.cloudfront.net/silk-lam-pc-3.webp",
        alt: "18pt Silk Lamination Postcards",
      },
    ],
  },
  {
    label: "AQ Postcards",
    href: "/print-products/postcards/aq",
    src: "https://d12ufawtd6351k.cloudfront.net/aq-pc-1.webp",
    alt: "AQ Postcards",
    sublinks: [
      {
        label: "10pt AQ",
        href: "/print-products/postcards/aq/10pt",
        src: "https://d12ufawtd6351k.cloudfront.net/aq-pc-1.webp",
        alt: "10pt AQ Postcards",
      },
      {
        label: "14pt AQ",
        href: "/print-products/postcards/aq/14pt",
        src: "https://d12ufawtd6351k.cloudfront.net/aq-pc-2.webp",
        alt: "14pt AQ Postcards",
      },
      {
        label: "16pt AQ",
        href: "/print-products/postcards/aq/16pt",
        src: "https://d12ufawtd6351k.cloudfront.net/aq-pc-3.webp",
        alt: "16pt AQ Postcards",
      },
    ],
  },
  {
    label: "Writable Postcards",
    href: "/print-products/postcards/writable",
    src: "https://d12ufawtd6351k.cloudfront.net/linen-pc.png",
    alt: "Writable Postcards",
    sublinks: [
      {
        label: "13pt Enviro Uncoated",
        href: "/print-products/postcards/writable/13pt-enviro",
        src: "https://d12ufawtd6351k.cloudfront.net/13pt-enviro-pc.png",
        alt: "13pt Enviro Uncoated Postcards",
      },
      {
        label: "13pt Linen Uncoated",
        href: "/print-products/postcards/writable/13pt-linen",
        src: "https://d12ufawtd6351k.cloudfront.net/13pt-linen-pc.png",
        alt: "13pt Linen Postcards",
      },
      {
        label: "14pt Writable + AQ",
        href: "/print-products/postcards/writable/14pt-writable-aq",
        src: "https://d12ufawtd6351k.cloudfront.net/14pt-writable-aq-ia.png",
        alt: "14pt Writable + AQ Postcards",
      },
      {
        label: "14pt Writable + UV",
        href: "/print-products/postcards/writable/14pt-writable-uv",
        src: "https://d12ufawtd6351k.cloudfront.net/14pt-writable-aq-pc.png",
        alt: "14pt Writable + UV",
      },
    ],
  },
  {
    label: "Specialty Postcards",
    href: "/print-products/postcards/specialty",
    src: "https://d12ufawtd6351k.cloudfront.net/specialty-pc.png",
    alt: "Specialty Postcards",
    sublinks: [
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
    ],
  },
];

const PostcardsPage: React.FC = () => {
  const renderSublinks = (sublinks: Sublink[]) => (
    <ul className="ml-4 border-l border-gray-300 pl-4 mt-2">
      {sublinks.map((sublink, index) => (
        <li key={index} className="mb-2">
          <Link href={sublink.href}>
            <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
              <Image
                src={sublink.src}
                alt={sublink.alt}
                width={100}
                height={100}
                className="w-16 h-16 object-cover rounded"
              />
              <span className="font-medium text-lg">{sublink.label}</span>
            </div>
          </Link>
          {sublink.sublinks && renderSublinks(sublink.sublinks)}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Postcards</h1>
      <p className="mb-4 text-lg">
        Explore our range of high-quality postcards, available in various finishes and styles to suit your needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {postcardsData.map((category, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4">
            <Link href={category.href}>
              <div className="cursor-pointer">
                <Image
                  src={category.src}
                  alt={category.alt}
                  width={164}
                  height={164}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold text-center mb-2">
                  {category.label}
                </h2>
              </div>
            </Link>
            {category.sublinks && renderSublinks(category.sublinks)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostcardsPage;
