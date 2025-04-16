import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Subcategory {
  label: string;
  href: string;
  src: string;
  alt: string;
  description: string;
}

const subcategories: Subcategory[] = [
  {
    label: "Bookmarks",
    href: "/print-products/bookmarks",
    src: "/images/bookmarks-main.jpg",
    alt: "Bookmarks",
    description: "Custom printed bookmarks to keep your brand in your reader's hands."
  },
  {
    label: "Brochures",
    href: "/print-products/brochures",
    src: "/images/brochure-main.jpg",
    alt: "Brochures",
    description: "Eye-catching brochures for all your marketing needs."
  },
  {
    label: "Clings",
    href: "/print-products/clings",
    src: "/images/clings-main.jpg",
    alt: "Clings",
    description: "High-quality printed clings for windows and displays."
  },
  {
    label: "Digital Sheets",
    href: "/print-products/digital-sheets",
    src: "/images/digital-sheets.jpg",
    alt: "Digital Sheets",
    description: "Vibrant digital prints on premium paper."
  },
  {
    label: "Door Hangers",
    href: "/print-products/door-hangers",
    src: "/images/door-hanger.jpg",
    alt: "Door Hangers",
    description: "Creative door hangers that capture attention."
  },
  {
    label: "Flyers",
    href: "/print-products/flyers",
    src: "/images/flyer.png",
    alt: "Flyers",
    description: "Versatile flyers to boost your event or promotion."
  },
  {
    label: "Folded Business Cards",
    href: "/print-products/folded-business-cards",
    src: "/images/folded-business-cards.jpg",
    alt: "Folded Business Cards",
    description: "Innovative folded business cards that make an impact."
  },
  {
    label: "Greeting Cards",
    href: "/print-products/greeting-cards",
    src: "/images/greeting-cards.png",
    alt: "Greeting Cards",
    description: "Beautifully printed greeting cards for every occasion."
  },
  {
    label: "Magnets",
    href: "/print-products/magnets",
    src: "/images/30mil-cut-to-shape-magnets-3.png",
    alt: "Magnets",
    description: "Custom magnets to keep your brand on display."
  },
  {
    label: "Numbered Tickets",
    href: "/print-products/numbered-tickets",
    src: "/images/numbered-tickets.png",
    alt: "Numbered Tickets",
    description: "High-quality tickets for events with secure numbering."
  },
  {
    label: "Plastics",
    href: "/print-products/plastics",
    src: "/images/plastics.jpg",
    alt: "Plastics",
    description: "Durable plastic prints for a modern look."
  },
  {
    label: "Postcards",
    href: "/print-products/postcards",
    src: "/images/postcards.png",
    alt: "Postcards",
    description: "Versatile postcards in a range of finishes and sizes."
  },
  {
    label: "Posters",
    href: "/print-products/posters",
    src: "/images/posters.jpg",
    alt: "Posters",
    description: "Large format posters for high impact visual communication."
  },
  {
    label: "Tent Cards",
    href: "/print-products/tent-cards",
    src: "/images/tent-cards.jpg",
    alt: "Tent Cards",
    description: "Attention-grabbing tent cards for table-top displays."
  },
  {
    label: "Variable Printing",
    href: "/print-products/variable-printing",
    src: "/images/variable-printing.png",
    alt: "Variable Printing",
    description: "Customizable prints for personalized marketing solutions."
  },
  {
    label: "Wall Calendars",
    href: "/print-products/calendars",
    src: "/images/wall-calendars.png",
    alt: "Wall Calendars",
    description: "Customizable prints for personalized marketing solutions."
  },
];

const PrintProductsLanding: React.FC = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Print Products</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {subcategories.map((subcat, index) => (
          <div key={index} className="col">
            <div className="card h-100 text-center">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "200px", overflow: "hidden" }}
              >
                <Image
                  src={subcat.src}
                  alt={subcat.alt}
                  width={200}
                  height={200}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{subcat.label}</h5>
                <p className="card-text">{subcat.description}</p>
              </div>
              <div className="card-footer bg-white border-0">
                <Link href={subcat.href} className="btn btn-primary">
                  Browse {subcat.label}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrintProductsLanding;
