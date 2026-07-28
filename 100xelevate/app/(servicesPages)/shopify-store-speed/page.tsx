import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { BoostShopify } from "@/components/core/services/shopifyStoreSpeed/BoostShopify";
import { LogosSection } from "@/components/core/services/shopifyStoreSpeed/LogosSection";
import { StatsFlipGrid } from "@/components/core/services/shopifyStoreSpeed/StatsFlipGrid";
import { BookACallToday } from "@/components/core/services/shopifyStoreSpeed/BookACallToday";
import { ImageOptimization } from "@/components/core/services/shopifyStoreSpeed/ImageOptimization";
import RecentShopifyStoresSlider from "@/components/core/services/buildNewShopifyStore/RecentShopifyStoresSlider";
import { BrandsLogo } from "@/components/core/services/shopifyStoreSpeed/BrandsLogo";
import { ImageOptimizationTip } from "@/components/core/services/shopifyStoreSpeed/ImageOptimizationTip";
import { WhySpeedOptimization } from "@/components/core/services/shopifyStoreSpeed/WhySpeedOptimization";
import { RealResults } from "@/components/core/services/shopifyUXandUIDesign/RealResults";
import AskAISection from "@/components/core/home/AskAISection";

export const metadata: Metadata = buildMetadata({
  title: "Shopify Store Speed - 100xelevate",
  description:
    "Boost your Shopify store speed with 100xelevate. Optimize images, apps, and themes for faster load times, higher conversions, and smoother customer experiences.",
  path: "/shopify-store-speed/",
});

export default function Page() {
  return (
    <main>
      <BoostShopify />
      <LogosSection />
      <StatsFlipGrid />
      <BookACallToday />
      <ImageOptimization />
      <RecentShopifyStoresSlider
        heading="Our Speed Optimization Results"
        ajustwidth={true}
        mainpadding="md:py-[96px] py-8"
      />
      <BrandsLogo />
      <ImageOptimizationTip />
      <WhySpeedOptimization />
      <RealResults
        cardBg="bg-[#F7F7F7]"
        heading="Reviews"
        sectionBg="bg-white"
      />
      <AskAISection />
    </main>
  );
}
