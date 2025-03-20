import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const LegacyBanner = () => {
  return (
    <div className="my-12 px-4">
      <div className="container mx-auto">
        <div className="relative rounded-lg overflow-hidden">
          <div className="bg-[#f4f6f5] relative">
            <div className="relative w-full h-[200px] md:h-[250px]">
              <Image
                src="https://ext.same-assets.com/3244557444/849522504.jpeg"
                alt="Our Legacy Guides Our Future"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 flex items-center">
                <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col items-center text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full border-2 border-[#bd5a2c] flex items-center justify-center">
                      <span className="text-[#bd5a2c] font-bold">50</span>
                    </div>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-center uppercase mb-2">Our Legacy Guides Our Future</h2>

                  <p className="text-sm mb-4 text-gray-600">
                    Since our founding in 1993, EIGER has been committed to creating durable, high-quality outdoor gear for all your adventures.
                  </p>

                  <Button
                    asChild
                    className="bg-[#24292e] hover:bg-gray-800"
                  >
                    <Link href="/about">LEARN MORE</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegacyBanner;
