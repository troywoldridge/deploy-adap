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


const DigitalSheetsData: Sublink[] = [
{
                label: "Digital Sheets",
                href: "/print-products/digital-sheets",
                src: "https://d12ufawtd6351k.cloudfront.net/digital-sheets.jpg",
                alt: "Digital Sheets",
                sublinks: [
                  {
                    label: "Matte Digital Sheets",
                    href: "/print-products/digital-sheets/matte",
                    src: "https://d12ufawtd6351k.cloudfront.net/matte-digital-sheets.jpg",
                    alt: "Matte Digital Sheets",
                  },
                  {
                    label: "Specialty Digital Sheets",
                    href: "/print-products/digital-sheets/specialty",
                    src: "https://d12ufawtd6351k.cloudfront.net/specialty-digital-sheets.jpg",
                    alt: " Specialty Digital Sheets",
                    sublinks: [
                      {
                        label: "80lb Enviro Uncoated",
                        href: "/print-products/digital-sheets/matte/80lb-enviro-digital-sheets",
                        src: "https://d12ufawtd6351k.cloudfront.net/80lb-enviro-digital-sheets.jpg",
                        alt: "80lb Enviro Digital Sheets",
                      },
                      {
                        label: "13pt Enviro Uncoated",
                        href: "/print-products/digital-sheets/matte/13pt-enviro-digital-sheets",
                        src: "https://d12ufawtd6351k.cloudfront.net/13pt-enviro-digital-sheets",
                        alt: "13pt Enviro Digital Sheets",
                      },
                      {
                        label: "100lb Gloss Text",
                        href: "/print-products/digital-sheets/matte/100lb-gloss-text-digital-sheets",
                        src: "https://d12ufawtd6351k.cloudfront.net/100lb-gloss-text-digital-sheets",
                        alt: "80lb Gloss Text Digital Sheets",
                      },
                    ],
                  },
                ],
              },



];

// Wall Calendars Page Component
const DigitalSheetsPage: React.FC = () => {
  console.log("DigitalSheetsPage loaded successfully");

  // Recursive function to render sublinks
  const renderSublinks = (sublinks: Sublink[]) => (
    <ul className="ml-6 border-l border-gray-300 pl-4">
      {sublinks.map((sublink, index) => (
        <li key={index} className="mb-4">
          <Link href={sublink.href}>
            <div className="flex items-start gap-4 hover:bg-gray-100 p-2 rounded-lg transition">
              <Image
                src={sublink.src}
                alt={sublink.alt}
                width={64}
                height={64}
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
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Digital Sheets</h1>
      <p className="mb-8 text-center text-lg text-gray-700">
        Digital Sheets are a cost-effective option for resellers who trim and bind in-house. Get the high-quality printing for a variety of products on 18” x 12” Digital Sheets.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DigitalSheetsData.map((category, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4">
            <Link href={category.href}>
              <div className="cursor-pointer">
                <Image
                  src={category.src}
                  alt={category.alt}
                  width={150}
                    height={150}
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

export default DigitalSheetsPage;
