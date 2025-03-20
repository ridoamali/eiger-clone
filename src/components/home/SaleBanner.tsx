"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SaleBanner = () => {
  return (
    <div className="my-8">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-lg">
          <div className="bg-[#084080] text-white relative">
            <div className="relative w-full h-[150px] md:h-[200px]">
              <Image
                src="https://ext.same-assets.com/2907027575/450310292.webp"
                alt="Sale up to 50%"
                fill
                className="object-cover"
              />

              {/* Overlay content - positioned absolutely */}
              <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start md:pl-20 text-center md:text-left">
                <div className="space-y-3">
                  <motion.h2
                    className="text-xl md:text-3xl font-bold uppercase"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    SALE <motion.span
                        className="text-[#ff5722]"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        UP TO 50%
                      </motion.span>
                  </motion.h2>

                  <motion.p
                    className="text-sm md:text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    EXTRA VOUCHER up to 50k
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.5,
                      duration: 0.3,
                      type: "spring",
                      stiffness: 400
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      className="bg-[#bd5a2c] hover:bg-[#a94e26] rounded-md text-white"
                    >
                      <Link href="/products?discount=all">SHOP NOW</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleBanner;
