import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ShopifyMaintenanceHeroSection from "@/components/core/services/shopifyMaintenanceAndSupport/ShopifyMaintenanceHeroSection";
import { TrustedByBestSection } from "@/components/core/services/shopifyUXandUIDesign/TrustedByBestSection";
import { WhyNeedShopifyMaintenance } from "@/components/core/services/shopifyMaintenanceAndSupport/WhyNeedShopifyMaintenance";
import ShopifyMaintenanceSerivcesWeOffer from "@/components/core/services/shopifyMaintenanceAndSupport/ShopifyMaintenanceSerivcesWeOffer";
import ShopifyMaintenanceSetupProcess from "@/components/core/services/shopifyMaintenanceAndSupport/ShopifyMaintenanceSetupProcess";
import WhyBrandsChooseShopifyMaintenance from "@/components/core/services/shopifyMaintenanceAndSupport/WhyBrandsChooseShopifyMaintenance";
import { RealResults } from "@/components/core/services/shopifyUXandUIDesign/RealResults";
import { WorkGrid } from "@/components/core/services/shopifyUXandUIDesign/WorkGrid";
import { OurWork } from "@/components/core/services/shopifyUXandUIDesign/OurWork";
import { SHOPIFY_MAINTENANCE_FAQS } from "@/constants/services/shopifyMaintenanceService.constants";
import { FAQsSection } from "@/components/core/services/shopifyUXandUIDesign/FAQsSection";
import { LetsTalkAnalytics } from "@/components/core/services/shopifyAnalyticsTrackingSetup/LetsTalkAnalytics";
import AskAISection from "@/components/core/home/AskAISection";

export const metadata: Metadata = buildMetadata({
  title: "Shopify Maintenance and Support - 100xelevate",
  description: "Shopify maintenance and support services to keep your store fast, secure, and reliable with updates, fixes, performance checks, and support.",
  path: "/services/shopify-maintenance-and-support/",
});

export default function Page() {
  return <main>
    <ShopifyMaintenanceHeroSection />
    <TrustedByBestSection
      descriptionMaxWidthClass="max-w-[597px]"
      description="We partner with brands that value consistent technical care, dependable maintenance, and a stable foundation for long-term performance."
    />
    <WhyNeedShopifyMaintenance />
    <ShopifyMaintenanceSerivcesWeOffer />
    <ShopifyMaintenanceSetupProcess />
    <WhyBrandsChooseShopifyMaintenance />
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
      <FAQsSection faqs={SHOPIFY_MAINTENANCE_FAQS} />
    </div>
    <LetsTalkAnalytics
      heading="Let’s talk Shopify Maintenance and Support."
      description="We help brands keep Shopify stores fast, secure, and dependable with ongoing maintenance and proactive issue prevention. If you want long-term stability and fewer interruptions, share your goals, and we’ll guide you to the support level that suits your store."
    />
    <AskAISection />
  </main>;
}
