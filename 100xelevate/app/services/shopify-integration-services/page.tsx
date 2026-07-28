import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import IntegrationServicesHeroSection from "@/components/core/services/shopifyIntegrationServices/IntegrationServicesHeroSection";
import { TrustedByBestSection } from "@/components/core/services/shopifyUXandUIDesign/TrustedByBestSection";
import WhyNeedShopifyIntegrationServices from "@/components/core/services/shopifyIntegrationServices/WhyNeedShopifyIntegrationServices";
import ShopifyIntegrationServicesWeOffer from "@/components/core/services/shopifyIntegrationServices/ShopifyIntegrationServicesWeOffer";
import ShopifyIntegrationSetupProcess from "@/components/core/services/shopifyIntegrationServices/ShopifyIntegrationSetupProcess";
import WhyBrandsChooseShopifyIntegration from "@/components/core/services/shopifyIntegrationServices/WhyBrandsChooseShopifyIntegration";
import WhoWeIntegrateWith from "@/components/core/services/shopifyIntegrationServices/WhoWeIntegrateWith";
import { WorkGrid } from "@/components/core/services/shopifyUXandUIDesign/WorkGrid";
import { OurWork } from "@/components/core/services/shopifyUXandUIDesign/OurWork";
import { RealResults } from "@/components/core/services/shopifyUXandUIDesign/RealResults";
import { FAQsSection } from "@/components/core/services/shopifyUXandUIDesign/FAQsSection";
import { SHOPIFY_INTEGRATION_FAQS } from "@/constants/services/shopifyIntegrationService.constants";
import { LetsTalkAnalytics } from "@/components/core/services/shopifyAnalyticsTrackingSetup/LetsTalkAnalytics";
import AskAISection from "@/components/core/home/AskAISection";

export const metadata: Metadata = buildMetadata({
  title: "Shopify Integration Services - 100xelevate",
  description: "Shopify integration services connecting your store with ERPs, CRMs, 3PLs, accounting, and marketing tools to automate workflows and scale.",
  path: "/services/shopify-integration-services/",
});

export default function Page() {
  return <main>
    <IntegrationServicesHeroSection />
    <TrustedByBestSection
      descriptionMaxWidthClass="max-w-[597px]"
      description="We partner with brands that rely on accurate data, stable system connections, and seamless Shopify integrations to support smooth operations and consistent growth."
    />
    <WhyNeedShopifyIntegrationServices />
    <ShopifyIntegrationServicesWeOffer />
    <WhoWeIntegrateWith />
    <ShopifyIntegrationSetupProcess />
    <WhyBrandsChooseShopifyIntegration />
    <RealResults
      heading="Trusted by Fast-Growing Brands at Every Scale"
      headingMaxWidthClass="max-w-full"
      mainContainergapClass="wmd:gap-[50px] md:gap-[64px] gap-8"
      sectionBg="bg-white"
      cardBg="bg-[#F7F7F7]"
    />
    <div>
      <OurWork />
      <WorkGrid />
    </div>
    <div className="bg-[#f7f7f7]">
      <FAQsSection faqs={SHOPIFY_INTEGRATION_FAQS} />
    </div>
    <LetsTalkAnalytics
      heading="Let’s talk Shopify Integrations."
      description="We help brands create smooth, accurate, and scalable operations by connecting Shopify with the systems that run their business. Whether you need an ERP, CRM, 3PL, accounting, or marketing integration, our team can guide you from planning to launch. Tell us what you want to improve and see how far your operations can go."
    />
    <AskAISection />
  </main>;
}
