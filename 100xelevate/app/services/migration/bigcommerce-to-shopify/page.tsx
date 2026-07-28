import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import BigcommerceToShopifyHeroSection from "@/components/core/services/migration/bigcommerceToShopify/BigcommerceToShopifyHeroSection";
import SwitchSection from "@/components/core/services/migration/bigcommerceToShopify/SwitchSection";
import HighRevenue from "@/components/core/services/migration/bigcommerceToShopify/HighRevenue";
import HundredsOfBrandsMarquee from "@/components/core/services/migration/bigcommerceToShopify/HundredsOfBrandsMarquee";
import FasterThanBigcommerce from "@/components/core/services/migration/bigcommerceToShopify/FasterThanBigcommerce";
import ShopifyConvertsBetterThenOthers from "@/components/core/services/migration/bigcommerceToShopify/ShopifyConvertsBetterThenOthers";
import WhyShopifyDiff from "@/components/core/services/migration/bigcommerceToShopify/WhyShopifyDiff";
import SiteSpeedComparison from "@/components/core/services/migration/bigcommerceToShopify/SiteSpeedComparison";
import MigrationRatio from "@/components/core/services/migration/bigcommerceToShopify/MigrationRatio";
import ShopifyVsBigcommerce from "@/components/core/services/migration/bigcommerceToShopify/ShopifyVsBigcommerce";
import HowToMigrate from "@/components/core/services/migration/bigcommerceToShopify/HowToMigrate";
import RecentShopifyStoresSlider from "@/components/core/services/buildNewShopifyStore/RecentShopifyStoresSlider";
import { FAQsSection } from "@/components/core/services/shopifyUXandUIDesign/FAQsSection";
import { SHOPIFY_BIGCOMMERCE_TO_SHOPIFY_FAQS } from "@/constants/services/bigcommerceToShopifyService.constants";
import AskAISection from "@/components/core/home/AskAISection";

export const metadata: Metadata = buildMetadata({
  title: "BigCommerce to Shopify - 100xelevate",
  description: "Migrate from BigCommerce to Shopify without losing data, SEO, or revenue. 100xelevate handles secure, scalable Shopify migrations built for growth.",
  path: "/services/migration/bigcommerce-to-shopify/",
});

export default function Page() {
  return (
    <main>
      <BigcommerceToShopifyHeroSection />
      <SwitchSection />
      <HighRevenue />
      <HundredsOfBrandsMarquee />
      <WhyShopifyDiff />
      <FasterThanBigcommerce />
      <SiteSpeedComparison />
      <ShopifyConvertsBetterThenOthers />
      <MigrationRatio />
      <ShopifyVsBigcommerce />
      <HowToMigrate />
      <RecentShopifyStoresSlider
        containerMaxWidth="max-w-[1200px]"
        mainpadding="xl:py-[90px] md:py-[86px] pt-8 pb-[62px]"
        sectionpadding="md:px-8 px-4"
        heading="Migration Case Studies"
      />
      <div className="bg-[#f7f7f7]">
        <FAQsSection faqs={SHOPIFY_BIGCOMMERCE_TO_SHOPIFY_FAQS} />
      </div>
      <AskAISection/>
    </main>
  );
}
