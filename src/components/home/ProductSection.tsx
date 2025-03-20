import React, { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ProductSectionProps {
  title: string;
  viewAllLink: string;
  children: ReactNode;
}

const ProductSection = ({ title, viewAllLink, children }: ProductSectionProps) => {
  return (
    <div className="my-8 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <Link
            href={viewAllLink}
            className="flex items-center text-xs text-[#bd5a2c]"
          >
            <span>Selengkapnya</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ProductSection;
