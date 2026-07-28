import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import Shopify_2_0_Development from "@/components/core/services/shopify-2-0-Development/Shopify_2_0_DevelopmentHeroSection";
import { TrustedByBestSection } from "@/components/core/services/shopifyUXandUIDesign/TrustedByBestSection";
import WhyBrandsNeedShopify2 from "@/components/core/services/shopify-2-0-Development/WhyBrandsNeedShopify2";
import Shopify2_0DevelopmentServicesWeOffer from "@/components/core/services/shopify-2-0-Development/Shopify2_0DevelopmentServicesWeOffer";
import { Shopify_2_0_DevelopmentSetupProcess } from "@/components/core/services/shopify-2-0-Development/Shopify_2_0_DevelopmentSetupProcess";
import WhyBrandhooseShopify_2_0_Development from "@/components/core/services/shopify-2-0-Development/WhyBrandhooseShopify_2_0_Development";
import { RealResults } from "@/components/core/services/shopifyUXandUIDesign/RealResults";
import AskAISection from "@/components/core/home/AskAISection";
import { LetsTalkAnalytics } from "@/components/core/services/shopifyAnalyticsTrackingSetup/LetsTalkAnalytics";
import { FAQsSection } from "@/components/core/services/shopifyUXandUIDesign/FAQsSection";
import { WorkGrid } from "@/components/core/services/shopifyUXandUIDesign/WorkGrid";
import { OurWork } from "@/components/core/services/shopifyUXandUIDesign/OurWork";
import { SHOPIFY_2_0_SERVICES_FAQS } from "@/constants/services/shopify2.0DevelopmentService.constants";
import { LetsTalk } from "@/components/core/services/shopifyPlusDevelopment/LetsTalk";

export const metadata: Metadata = buildMetadata({
  title: "Shopify 2.0 Development - 100xelevate",
  description: "Shopify 2.0 Development services that improve speed, structure, stability, and flexibility. Full migrations, custom themes, sections, metafields, and performance upgrades built for long-term growth.",
  path: "/services/shopify-2-0-development/",
});

export default function Page() {
  return <main>
    <Shopify_2_0_Development />
    <TrustedByBestSection
      descriptionMaxWidthClass="max-w-[512px]"
      description="We partner with brands that value dependable development, clear structure, and a Shopify 2.0 foundation their teams can manage confidently."
    />
    <WhyBrandsNeedShopify2 />
    <Shopify2_0DevelopmentServicesWeOffer />
    <Shopify_2_0_DevelopmentSetupProcess />
    <WhyBrandhooseShopify_2_0_Development />
    <RealResults
      heading="Trusted by Fast-Growing Brands at Every Scale"
      headingMaxWidthClass="max-w-full"
      mainContainergapClass="wmd:gap-[50px] md:gap-[64px] gap-8"
    />
    <div>
      <OurWork />
      <WorkGrid />
    </div>
    <div className="bg-[#f7f7f7]">
      <FAQsSection faqs={SHOPIFY_2_0_SERVICES_FAQS} />
    </div>
    <LetsTalk
          mainContainerClass="max-w-[1200px] mx-auto md:py-[86px] py-[30px]"
          title="Let’s talk Shopify 2.0 Development."
          description="We help brands move to faster, cleaner, and more scalable Shopify 2.0 stores. Whether you need a full migration, a new theme, or a stronger foundation for growth, our team can guide you through every step. Share your goals with us and see what your store can become."
        />
    <AskAISection />
  </main>;
}
