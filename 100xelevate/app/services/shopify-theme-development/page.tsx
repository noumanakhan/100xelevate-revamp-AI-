import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ShopifyThemeDevelopmentHeroSection from "@/components/core/services/shopifyThemeDevelopment/ShopifyThemeDevelopmentHeroSection";
import { TrustedByBestSection } from "@/components/core/services/shopifyUXandUIDesign/TrustedByBestSection";
import ShopifyThemeDevelopmentServicesWeOffer from "@/components/core/services/shopifyThemeDevelopment/ShopifyThemeDevelopmentServicesWeOffer";
import ThemeDevelopmentProcess from "@/components/core/services/shopifyThemeDevelopment/ThemeDevelopmentProcess";
import WhyChooseShopifyThemeDevelopment from "@/components/core/services/shopifyThemeDevelopment/WhyChooseShopifyThemeDevelopment";
import { RealResults } from "@/components/core/services/shopifyUXandUIDesign/RealResults";
import ShopifyThemeDevelopmentBuildFOrPerformance from "@/components/core/services/shopifyThemeDevelopment/ShopifyThemeDevelopmentBuildFOrPerformance";
import ThemeOngoingOptimization from "@/components/core/services/shopifyThemeDevelopment/ThemeOngoingOptimization";
import LayoutAndUXImprovements from "@/components/core/services/shopifyThemeDevelopment/LayoutAndUXImprovements";
import { OurWork } from "@/components/core/services/shopifyUXandUIDesign/OurWork";
import { WorkGrid } from "@/components/core/services/shopifyUXandUIDesign/WorkGrid";
import { FAQsSection } from "@/components/core/services/shopifyUXandUIDesign/FAQsSection";
import { SHOPIFY_THEME_DEVELOPMENT_FAQS } from "@/constants/services/shopifyThemeDevelopmentService.constant";
import { LetsTalkAnalytics } from "@/components/core/services/shopifyAnalyticsTrackingSetup/LetsTalkAnalytics";
import AskAISection from "@/components/core/home/AskAISection";

export const metadata: Metadata = buildMetadata({
  title: "Shopify Theme Development - 100xelevate",
  description: "Professional Shopify theme development focused on speed, clarity, and better shopping experiences for growing ecommerce brands",
  path: "/services/shopify-theme-development/",
});

export default function Page() {
  return <main>

    <ShopifyThemeDevelopmentHeroSection />
    <TrustedByBestSection
      descriptionMaxWidthClass="max-w-[512px]"
      description="We partner with brands that value structured design, dependable development, and a clearer path to higher conversions."
    />
    <ShopifyThemeDevelopmentServicesWeOffer />
    <ThemeDevelopmentProcess />
    <WhyChooseShopifyThemeDevelopment />
    <RealResults
      heading="Reviews"
      headingMaxWidthClass="max-w-full"
      mainContainergapClass="wmd:gap-[50px] md:gap-[64px] gap-8"
      sectionBg="bg-white"
      cardBg="bg-[#F7F7F7]"
    />
    <ShopifyThemeDevelopmentBuildFOrPerformance />
    <ThemeOngoingOptimization />
    <LayoutAndUXImprovements />
    <div>
      <OurWork />
      <WorkGrid />
    </div>
    <div className="bg-[#f7f7f7]">
      <FAQsSection faqs={SHOPIFY_THEME_DEVELOPMENT_FAQS} />
    </div>
    <LetsTalkAnalytics 
    heading="Let’s talk Shopify Theme Development." 
    description="We help brands strengthen their stores with reliable, well-built Shopify themes. Whether you need a new theme, a modern upgrade, or performance improvements, our team can guide you through each step. Tell us what you’re working on and where you want your store to go next."
    />
    <AskAISection />
  </main>;
}
