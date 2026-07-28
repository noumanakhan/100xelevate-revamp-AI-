import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ShopifyLandingPageHeroSection from "@/components/core/services/shopifyLandingPageDesign/ShopifyLandingPageHeroSection";
import { TrustedByBestSection } from "@/components/core/services/shopifyUXandUIDesign/TrustedByBestSection";
import BuildToConvert from "@/components/core/services/shopifyLandingPageDesign/BuildToConvert";
import WhyBrandNeedsDedicatedLandingPage from "@/components/core/services/shopifyLandingPageDesign/WhyBrandNeedsDedicatedLandingPage";
import LandingPageSerivicesWeOffer from "@/components/core/services/shopifyLandingPageDesign/LandingPageSerivicesWeOffer";
import LandingPageProcess from "@/components/core/services/shopifyLandingPageDesign/LandingPageProcess";
import WhyBrandsChooseShopifyLandingPage from "@/components/core/services/shopifyLandingPageDesign/WhyBrandsChooseShopifyLandingPage";
import { RealResults } from "@/components/core/services/shopifyUXandUIDesign/RealResults";
import { WorkGrid } from "@/components/core/services/shopifyUXandUIDesign/WorkGrid";
import { OurWork } from "@/components/core/services/shopifyUXandUIDesign/OurWork";
import TrustedToolsForShopifyLandingPage from "@/components/core/services/shopifyLandingPageDesign/TrustedToolsForShopifyLandingPage";
import { SHOPIFY_LANDING_PAGE_FAQS } from "@/constants/services/shopifyLandingPageService.constants";
import { FAQsSection } from "@/components/core/services/shopifyUXandUIDesign/FAQsSection";
import { LetsTalkAnalytics } from "@/components/core/services/shopifyAnalyticsTrackingSetup/LetsTalkAnalytics";
import { LetsTalk } from "@/components/core/services/shopifyPlusDevelopment/LetsTalk";
import AskAISection from "@/components/core/home/AskAISection";

export const metadata: Metadata = buildMetadata({
  title: "Shopify Landing Page Design - 100xelevate",
  description: "Shopify Landing Page Design services that boost clarity, speed, structure, and conversions for ads, launches, and daily sales.",
  path: "/services/shopify-landing-page-design/",
});

export default function Page() {
  return <main>
    <ShopifyLandingPageHeroSection />
    <TrustedByBestSection
      descriptionMaxWidthClass="max-w-[512px]"
      description="We partner with brands that value structured design, dependable development, and a clearer path to higher conversions."
    />
    <BuildToConvert />
    <WhyBrandNeedsDedicatedLandingPage />
    <LandingPageSerivicesWeOffer />
    <LandingPageProcess />
    <WhyBrandsChooseShopifyLandingPage />
    <RealResults
      heading="Trusted by Fast-Growing Brands at Every Scale"
      headingMaxWidthClass="max-w-full"
      mainContainergapClass="wmd:gap-[50px] md:gap-[64px] gap-8"
      sectionBg="bg-white"
      cardBg="bg-[#F7F7F7]"
    />
    <TrustedToolsForShopifyLandingPage />

    <div>
      <OurWork />
      <WorkGrid />
    </div>

    <div className="bg-[#f7f7f7]">
      <FAQsSection faqs={SHOPIFY_LANDING_PAGE_FAQS} />
    </div>

    <LetsTalk
      mainContainerClass="max-w-[1200px] mx-auto md:py-[86px] py-[30px]"
      title="Let’s Build a High-Converting Shopify Landing Page."
      description="We design landing pages that help visitors understand your offer faster and take action. Whether you need a new page, a redesign, or a performance-focused upgrade, we’ll walk you through the process and help you reach stronger results."
    />
    <AskAISection />
  </main>;
}
