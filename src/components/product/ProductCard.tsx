"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory: string;
  discount?: number;
  colorOptions?: Array<{ color: string; colorCode: string }>;
  href: string;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// Animation variants
const cardVariants = {
  initial: {
    y: 0,
    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)"
  },
  hover: {
    y: -5,
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const badgeVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 300
    }
  }
};

const ProductCard = ({
  name,
  image,
  price,
  originalPrice,
  category,
  subcategory,
  discount,
  colorOptions,
  href,
}: ProductCardProps) => {
  return (
    <Link href={href} className="block">
      <motion.div
        className="bg-white rounded-lg overflow-hidden h-full flex flex-col"
        initial="initial"
        whileHover="hover"
        variants={cardVariants}
      >
        {/* Product image */}
        <div className="relative h-48 overflow-hidden">
          <motion.div variants={imageVariants} className="h-full w-full">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>
          {discount && (
            <motion.div variants={badgeVariants}>
              <Badge className="absolute top-2 left-2 bg-[#bd5a2c] hover:bg-[#a94e26]">
                Diskon {discount}%
              </Badge>
            </motion.div>
          )}
        </div>

        {/* Product details */}
        <div className="p-3 flex flex-col flex-grow">
          {/* Category & Subcategory */}
          <div className="text-xs text-gray-500 mb-1">
            {category}
            {subcategory && <span>{subcategory}</span>}
          </div>

          {/* Product name */}
          <h3 className="font-medium text-sm mb-1 line-clamp-2 flex-grow">{name}</h3>

          {/* Pricing */}
          <motion.div
            className="mt-2"
            variants={{
              hover: {
                x: 3,
                transition: {
                  delay: 0.1,
                  duration: 0.2
                }
              }
            }}
          >
            {originalPrice && originalPrice > price ? (
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">{formatPrice(price)}</span>
                <span className="text-xs text-gray-500 line-through">
                  {formatPrice(originalPrice)}
                </span>
              </div>
            ) : (
              <span className="text-sm font-bold">{formatPrice(price)}</span>
            )}
          </motion.div>

          {/* Color options */}
          {colorOptions && colorOptions.length > 0 && (
            <motion.div
              className="flex mt-2 space-x-1"
              variants={{
                hover: {
                  y: 2,
                  transition: {
                    delay: 0.15,
                    duration: 0.2
                  }
                }
              }}
            >
              {colorOptions.map((option, index) => (
                <motion.div
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: option.colorCode }}
                  title={option.color}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
