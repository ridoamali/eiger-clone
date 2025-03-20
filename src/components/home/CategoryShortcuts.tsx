"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    name: "Bags",
    image: "https://ext.same-assets.com/985428126/100206447.jpeg",
    link: "/bags",
  },
  {
    id: 2,
    name: "Sepatu",
    image: "https://ext.same-assets.com/3699942739/4118636014.jpeg",
    link: "/footwear/shoes",
  },
  {
    id: 3,
    name: "Aksesoris",
    image: "https://ext.same-assets.com/3877812965/564846439.jpeg",
    link: "/accessories",
  },
  {
    id: 4,
    name: "Sendal",
    image: "https://ext.same-assets.com/3103417410/832913212.jpeg",
    link: "/footwear/sandal",
  },
  {
    id: 5,
    name: "Kemeja",
    image: "https://ext.same-assets.com/3724337720/4195311481.jpeg",
    link: "/apparel/shirt",
  },
  {
    id: 6,
    name: "Celana",
    image: "https://ext.same-assets.com/2261465316/221454402.jpeg",
    link: "/apparel/pants",
  },
  {
    id: 7,
    name: "Jaket",
    image: "https://ext.same-assets.com/3071176111/2706981362.jpeg",
    link: "/apparel/jacket",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const CategoryShortcuts = () => {
  return (
    <div className="my-6 px-4">
      <div className="container mx-auto">
        <motion.div
          className="flex overflow-x-auto pb-4 no-scrollbar gap-3 justify-between"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center min-w-[80px]"
            >
              <Link
                href={category.link}
                className="flex flex-col items-center"
              >
                <motion.div
                  className="rounded-full overflow-hidden w-16 h-16 mb-2 border border-gray-200"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
                <motion.span
                  className="text-xs font-medium text-center"
                  whileHover={{ color: "#bd5a2c" }}
                >
                  {category.name}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CategoryShortcuts;
