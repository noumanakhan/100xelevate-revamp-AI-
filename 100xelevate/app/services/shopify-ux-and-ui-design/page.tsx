import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import Banner from "@/components/core/services/shopifyUXandUIDesign/Banner";
import ShopifyUxAndUiDesignProcess from "@/components/core/services/shopifyUXandUIDesign/ShopifyUxAndUiDesignProcess";
import ShopifyUxAndUiDesignServiceOffer from "@/components/core/services/shopifyUXandUIDesign/ShopifyUxAndUiDesignServiceOffer";
import { TrustedByBestSection } from "@/components/core/services/shopifyUXandUIDesign/TrustedByBestSection";
import { ShopifyUXOptimization } from "@/components/core/services/shopifyUXandUIDesign/ShopifyUXOptimization";
import { WhyChoose100x } from "@/components/core/services/shopifyUXandUIDesign/WhyChoose100x";
import { RealResults } from "@/components/core/services/shopifyUXandUIDesign/RealResults";
import { BrandingIdentity } from "@/components/core/services/shopifyUXandUIDesign/BrandingIdentity";
import { UserFlow } from "@/components/core/services/shopifyUXandUIDesign/UserFlow";
import { ShopifyAppSection } from "@/components/core/services/shopifyUXandUIDesign/ShopifyAppSection";
import { OurWork } from "@/components/core/services/shopifyUXandUIDesign/OurWork";
import { WorkGrid } from "@/components/core/services/shopifyUXandUIDesign/WorkGrid";
import { FAQsSection } from "@/components/core/services/shopifyUXandUIDesign/FAQsSection";
import { WorkTogether } from "@/components/core/services/shopifyUXandUIDesign/WorkTogether";
import AskAISection from "@/components/core/home/AskAISection";

export const metadata: Metadata = buildMetadata({
  title: "Shopify UX and UI Design - 100xelevate",
  description:
    "Professional Shopify UX and UI design for better structure, smoother flows, and higher conversions. Optimize your store for mobile and desktop performance.",
  path: "/services/shopify-ux-and-ui-design/",
});

export default function Page() {
  return (
    <main>
      <Banner />
      <TrustedByBestSection />
      <ShopifyUxAndUiDesignServiceOffer />
      <ShopifyUXOptimization />
      <ShopifyUxAndUiDesignProcess />
      <WhyChoose100x />
      <RealResults />
      <BrandingIdentity />
      <UserFlow />
      <ShopifyAppSection />
      <div className="bg-[#f7f7f7]">
        <OurWork />
        <WorkGrid />
      </div>
      <FAQsSection />
      <div className="bg-[#F7F7F7]">
        <WorkTogether />
      </div>
      <AskAISection />
    </main>
  );
}
