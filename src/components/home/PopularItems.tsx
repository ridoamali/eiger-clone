"use client";

import ProductSection from "./ProductSection";
import ProductGrid from "../product/ProductGrid";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

// Sample product data for popular items
const products = [
  {
    id: "5",
    name: "EIGER 1989 BACKPACK 25L",
    image: "https://ext.same-assets.com/2813554289/4270215435.jpg",
    price: 429000,
    category: "Bags",
    subcategory: "Backpack",
    href: "/d/eiger-1989-backpack-25l",
  },
  {
    id: "6",
    name: "NAVIGATOR WAIST BAG 3L",
    image: "https://ext.same-assets.com/2874720680/3414023860.jpg",
    price: 249000,
    category: "Bags",
    subcategory: "Waist Bag",
    href: "/d/navigator-waist-bag-3l",
  },
  {
    id: "7",
    name: "ULTRALIGHT DAYPACK 10L",
    image: "https://ext.same-assets.com/4033577555/3121772678.jpg",
    price: 469000,
    category: "Bags",
    subcategory: "Daypack",
    href: "/d/ultralight-daypack-10l",
  },
  {
    id: "8",
    name: "DIGI PROTECT 12L SLING BAG",
    image: "https://ext.same-assets.com/3053602283/2811247799.jpg",
    price: 329000,
    category: "Bags",
    subcategory: "Sling Bag",
    href: "/d/digi-protect-12l-sling-bag",
  },
  {
    id: "9",
    name: "BORNEO SANDALS",
    image: "https://ext.same-assets.com/3061084395/159620623.jpg",
    price: 289000,
    originalPrice: 359000,
    category: "Footwear",
    subcategory: "Sandals",
    discount: 20,
    href: "/d/borneo-sandals",
  },
];

const PopularItems = () => {
  return (
    <div className="relative">

      <ProductSection title="EIGER HOT ITEMS" viewAllLink="/products?order=popular">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          <ProductGrid products={products} />
        </motion.div>
      </ProductSection>
    </div>
  );
};

export default PopularItems;
