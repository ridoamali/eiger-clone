import HeroCarousel from "@/components/home/HeroCarousel";
import CategoryShortcuts from "@/components/home/CategoryShortcuts";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import SaleBanner from "@/components/home/SaleBanner";
import PopularItems from "@/components/home/PopularItems";
import ActivitySection from "@/components/home/ActivitySection";
import LegacyBanner from "@/components/home/LegacyBanner";
import PromoGrid from "@/components/home/PromoGrid";
import SpecialPromo from "@/components/home/SpecialPromo";

export default function Home() {
  return (
    <div className="pb-10">
      <HeroCarousel />
      <SpecialPromo />
      <CategoryShortcuts />
      <FeaturedProducts />
      <SaleBanner />
      <PopularItems />
      <ActivitySection />
      <LegacyBanner />
      <PromoGrid />
    </div>
  );
}
