"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const banners = [
  {
    id: 1,
    image: "https://ext.same-assets.com/2473132610/3134971611.webp",
    link: "/products?collection=28",
    alt: "Special Member Maret",
  },
  {
    id: 2,
    image: "https://ext.same-assets.com/2907027575/450310292.webp",
    link: "/products?discount=all",
    alt: "Sale up to 50%",
  },
  {
    id: 3,
    image: "https://ext.same-assets.com/608418744/204645089.webp",
    link: "/products?discount=all",
    alt: "Extra voucher up to 50k",
  },
  {
    id: 4,
    image: "https://ext.same-assets.com/1206535349/2325355909.webp",
    link: "/products?discount=all",
    alt: "Eiger Promotion",
  },
  {
    id: 5,
    image: "https://ext.same-assets.com/1778184927/4175892967.webp",
    link: "/products?collection=62",
    alt: "Eiger Collection",
  },
  {
    id: 6,
    image: "https://ext.same-assets.com/1617868419/113064308.webp",
    link: "/lebaran-series",
    alt: "Lebaran Series",
  },
];

// Add animation variants
const imageVariants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 500
    }
  }
};

const HeroCarousel = () => {
  // Client-side only component to avoid hydration issues
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return null on the first render to avoid hydration mismatch
  }

  return (
    <div className="relative w-full overflow-hidden">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <Link href={banner.link}>
                <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                  <motion.div
                    className="w-full h-full"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={imageVariants}
                  >
                    <Image
                      src={banner.image}
                      alt={banner.alt}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <motion.div
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <CarouselPrevious className="hidden md:flex" />
        </motion.div>
        <motion.div
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <CarouselNext className="hidden md:flex" />
        </motion.div>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
