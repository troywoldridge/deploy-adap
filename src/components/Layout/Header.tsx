"use client"; // ✅ Ensure this is a client component

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import algoliasearch from "algoliasearch/lite";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaUser, FaShoppingCart, FaTruck } from "react-icons/fa";

// ✅ Import InstantSearch correctly
import { InstantSearch, Configure, useSearchBox } from "react-instantsearch";

/** 
 * 1) Create an Algolia search client 
 */
const searchClient = algoliasearch("12N0JD5MJD", "198c6e8c46b1332bc153a07585c84872");

/** 
 * 2) A small custom SearchBox component
 */
function HeaderSearchBox() {
  const { query, refine } = useSearchBox();
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (query.trim().length > 0) {
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <input
        className="w-full p-2 rounded text-black placeholder-gray-600 focus:outline-none border"
        type="search"
        value={query}
        onChange={(e) => refine(e.target.value)}
        placeholder="Quick search..."
      />
      <div className="ml-2 flex items-center">
        <Image src="/images/Algolia-logo-blue.svg" alt="Powered by Algolia" width={80} height={50} />
      </div>
    </form>
  );
}

/** 
 * 3) The main Header component 
 */
export default function Header() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <header className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold p-2 flex items-center justify-between">
      {/* Left: Logo / Brand */}
      <div className="flex items-center">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer ml-2">AdapNow</span>
        </Link>
      </div>

      {/* 🔥 Render Algolia InstantSearch only if ready (to avoid hydration issues) */}
      {isReady && (
        <InstantSearch
          searchClient={searchClient}
          indexName="products"
          future={{ preserveSharedStateOnUnmount: true }}
        >
          <Configure hitsPerPage={5} />
          <HeaderSearchBox />
        </InstantSearch>
      )}

      {/* Right: Social / User / Cart icons */}
      <nav className="flex items-center gap-3 text-lg mr-2">
        <Link href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="cursor-pointer hover:text-gray-200" />
        </Link>
        <Link href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="cursor-pointer hover:text-gray-200" />
        </Link>
        <Link href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <span className="cursor-pointer hover:text-gray-200">
            <FaInstagram />
          </span>
        </Link>
        <Link href="/user-account" aria-label="User Account">
          <span className="cursor-pointer hover:text-gray-200">
            <FaUser />
          </span>
        </Link>
        <Link href="/cart" aria-label="Shopping Cart">
          <FaShoppingCart className="cursor-pointer hover:text-gray-200" />
        </Link>
        <Link href="/shipping-info" aria-label="Shipping Information">
          <div className="cursor-pointer hover:text-gray-200">
            <FaTruck {...{}} />
          </div>
        </Link>

        <Link href="/search" className="ml-4 text-white hover:underline">
          Advanced Search
        </Link>
      </nav>
    </header>
  );
}
