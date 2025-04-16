"use client";

import Link from "next/link";
import Image from "next/image";

const IndexPage = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-10">Labels And Packaging</h1>

      {/* Roll Labels Section */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Roll Labels</h2>
        <Link href="/roll-labels">
          <Image
            src="https://d12ufawtd6351k.cloudfront.net/roll-label-3.webp"
            alt="Roll Labels"
            className="mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
            width={500}
            height={300}
          />
        </Link>
      </div>

      {/* Product Boxes Section */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Product Boxes</h2>
        <Link href="/product-boxes">
          <Image
            src="https://d12ufawtd6351k.cloudfront.net/productbox-1.webp"
            alt="Product Boxes"
            className="mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
            width={500}
            height={300}
            />  
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;
