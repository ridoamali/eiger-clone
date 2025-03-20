import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PromoGrid = () => {
  return (
    <div className="my-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Sustainability Report Banner */}
          <div className="relative rounded-lg overflow-hidden bg-[#e9f0e6]">
            <div className="relative h-[200px]">
              <Image
                src="https://ext.same-assets.com/1025698671/3042756423.webp"
                alt="Sustainability Report"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 p-6 flex flex-col justify-center">
                <div className="space-y-3 max-w-[70%]">
                  <h3 className="text-lg font-bold">SUSTAINABILITY REPORT</h3>
                  <p className="text-xs text-gray-700 mb-2">
                    Learn about our commitment to sustainable practices and environmental responsibility.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-white hover:bg-gray-100 text-black border-gray-300"
                    size="sm"
                  >
                    <Link href="/sustainability">LEARN MORE</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Order Banner */}
          <div className="relative rounded-lg overflow-hidden bg-[#f4f6f5]">
            <div className="relative h-[200px]">
              <Image
                src="https://ext.same-assets.com/2026398102/3607789434.webp"
                alt="Corporate Order"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 p-6 flex flex-col justify-center">
                <div className="space-y-3 max-w-[70%]">
                  <h3 className="text-lg font-bold">CORPORATE ORDER</h3>
                  <p className="text-xs text-gray-700 mb-2">
                    Custom orders for your team or corporate events with special pricing and personalization.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-white hover:bg-gray-100 text-black border-gray-300"
                    size="sm"
                  >
                    <Link href="/corporate-order">LEARN MORE</Link>
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

export default PromoGrid;
