"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CalendarType {
  label: string;
  href: string;
  src: string;
  alt: string;
}

const calendarTypes: CalendarType[] = [
  {
    label: "Self-Cover Calendars",
    href: "/print-products/calendars/self-cover",
    src: "https://d12ufawtd6351k.cloudfront.net/Calendars .png", // Ensure the URL is correct (remove extra spaces)
    alt: "Self-Cover Calendars",
  },
  {
    label: "Hard-Cover Calendars",
    href: "/print-products/calendars/hard-cover",
    src: "https://d12ufawtd6351k.cloudfront.net/hard-cover-calendars2.webp",
    alt: "Hard-Cover Calendars",
  },
  {
    label: "Spiral Calendars",
    href: "/print-products/calendars/spiral",
    src: "https://d12ufawtd6351k.cloudfront.net/spiral-bind-calendars_1.webp",
    alt: "Spiral Calendars",
  },
  {
    label: "12 x 12 Calendars",
    href: "/print-products/calendars/12x12",
    src: "https://d12ufawtd6351k.cloudfront.net/hard-cover-calendars_1.webp",
    alt: "12 x 12 Calendars",
  },
  {
    label: "11 x 8.5 Calendars",
    href: "/print-products/calendars/11x8.5",
    src: "https://d12ufawtd6351k.cloudfront.net/Calendars .png",
    alt: "11 x 8.5 Calendars",
  },
  {
    label: "9 x 12 Calendars",
    href: "/print-products/calendars/9x12",
    src: "https://d12ufawtd6351k.cloudfront.net/spiral-bind-calendars2.webp",
    alt: "9 x 12 Calendars",
  },
];

const CalendarsIndexPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Calendars</h1>
      <p className="mb-8 text-center text-lg text-gray-700">
        Choose from our range of high-quality calendars to suit your needs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {calendarTypes.map((type, index) => (
          <Link key={index} href={type.href}>
            <div className="border rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer">
              <div className="relative w-full h-56">
                <Image
                  src={type.src}
                  alt={type.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center">{type.label}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CalendarsIndexPage;
