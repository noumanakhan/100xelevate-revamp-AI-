import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ShopifyPlus } from "@/components/core/services/shopifyPlusDevelopment/ShopifyPlus";
import { TrustedByBestSection } from "@/components/core/services/shopifyUXandUIDesign/TrustedByBestSection";
import { WhyChooseShopifyPlus } from "@/components/core/services/WhyChooseShopifyPlus";
import { ShopifySolutionsHeading } from "@/components/core/services/shopifyPlusDevelopment/ShopifySolutionsHeading";
import { ShopifySolutionsContent } from "@/components/core/services/shopifyPlusDevelopment/ShopifySolutionsContent";
import { DevelopmentProcess } from "@/components/core/services/DevelopmentProcess";
import { WhychooseShopifyPlusGrid } from "@/components/core/services/shopifyPlusDevelopment/WhychooseShopifyPlusGrid";
import { RealResults } from "@/components/core/services/shopifyUXandUIDesign/RealResults";
import { OurWork } from "@/components/core/services/shopifyUXandUIDesign/OurWork";
import { WorkGrid } from "@/components/core/services/shopifyUXandUIDesign/WorkGrid";
import { FAQsSection } from "@/components/core/services/shopifyUXandUIDesign/FAQsSection";
import { SHOPIFY_PLUS_DEVELOPMENT_FAQS } from "@/constants/services/shopifyPlusDevelopmentService.constants";
import { LetsTalk } from "@/components/core/services/shopifyPlusDevelopment/LetsTalk";
import AskAISection from "@/components/core/home/AskAISection";

export const metadata: Metadata = buildMetadata({
  title: "Shopify Plus Development - 100xelevate",
  description:
    "Shopify Plus development for high-growth brands. Scalable storefronts, custom features, optimized checkout, and integrations for growth.",
  path: "/services/shopify-plus-development/",
});

export default function Page() {
  return (
    <main>
      <ShopifyPlus />
      <TrustedByBestSection
        descriptionMaxWidthClass="max-w-[512px]"
        title="Trusted by the Best"
        description="We’ve helped the world’s most innovative brands to build stronger storefronts and improve long-term results."
      />
      <div className="bg-[#F7F7F7]">
        <WhyChooseShopifyPlus />
      </div>
      <ShopifySolutionsHeading />
      <ShopifySolutionsContent />
      <DevelopmentProcess />
      <WhychooseShopifyPlusGrid />
      <RealResults
        heading="What 8 & 9 Figure Brand Owners Say About Us"
        headingMaxWidthClass="max-w-full"
      />
      <div>
        <OurWork />
        <WorkGrid />
      </div>
      <div className="bg-[#f7f7f7]">
        <FAQsSection faqs={SHOPIFY_PLUS_DEVELOPMENT_FAQS} />
      </div>
      <LetsTalk />
      <AskAISection />
    </main>
  );
}
