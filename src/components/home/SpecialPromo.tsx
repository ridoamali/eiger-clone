"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SpecialPromo = () => {
  return (
    <div className="my-8 px-4">
      <div className="container mx-auto">
        <motion.div
          className="bg-gray-100 rounded-lg overflow-hidden p-6 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left content */}
            <div className="mb-6 md:mb-0 md:w-2/3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  HEMAT REBUTAN <span className="text-[#bd5a2c]">GANDA</span>
                </h2>
                <p className="text-gray-600 mb-4">EXTRA VOUCHER KOK 30%</p>
                <p className="text-sm text-gray-500 mb-6">7 - 20 MARET 2025</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  className="bg-[#bd5a2c] hover:bg-[#a94e26] text-white rounded-md"
                >
                  <Link href="/shop">SHOP NOW</Link>
                </Button>
              </motion.div>
            </div>

            {/* Right content - Voucher */}
            <div className="flex items-center space-x-4">
              <motion.div
                className="flex flex-col items-center p-4 bg-white border border-gray-300 rounded-lg"
                initial={{ rotate: -5, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <span className="text-xs uppercase text-gray-500">Voucher</span>
                <span className="text-xs uppercase text-gray-500">Discount</span>
                <motion.span
                  className="text-5xl font-bold text-gray-800"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  8%
                </motion.span>
                <span className="text-xs text-gray-500">Min Purchase Rp300,000</span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center p-4 bg-white border border-gray-300 rounded-lg"
                initial={{ rotate: 5, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <span className="text-xs uppercase text-gray-500">Up To</span>
                <motion.span
                  className="text-6xl font-bold text-gray-800"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  20%
                </motion.span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SpecialPromo;
