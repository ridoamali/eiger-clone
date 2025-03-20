"use client";

import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

interface Product {
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

interface ProductGridProps {
  products: Product[];
  columns?: number;
}

// Animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  }
};

const ProductGrid = ({ products, columns = 4 }: ProductGridProps) => {
  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
  };

  const colsClass = gridCols[columns as keyof typeof gridCols] || gridCols[4];

  return (
    <div className={`grid ${colsClass} gap-4`}>
      {products.map((product) => (
        <motion.div
          key={product.id}
          variants={itemVariants}
        >
          <ProductCard {...product} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;
