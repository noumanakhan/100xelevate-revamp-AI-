import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import SalesforceToShopifyHeroSection from "@/components/core/services/migration/salesforceToShopify/SalesforceToShopifyHeroSection";
import WhySwitchTabbedSection from "@/components/core/services/migration/salesforceToShopify/WhySwitchTabbedSection";
import PlatformComparisonTable from "@/components/core/services/migration/salesforceToShopify/PlatformComparisonTable";
import SecuritySection from "@/components/core/services/migration/salesforceToShopify/SecuritySection";
import WhyChoose100xElevate from "@/components/core/services/migration/salesforceToShopify/WhyChoose100xElevate";
import HowToMigrateSalesforce from "@/components/core/services/migration/salesforceToShopify/HowToMigrateSalesforce";
import RecentShopifyStoresSlider from "@/components/core/services/buildNewShopifyStore/RecentShopifyStoresSlider";
import { FAQsSection } from "@/components/core/services/shopifyUXandUIDesign/FAQsSection";
import { SHOPIFY_SALESFORCE_TO_SHOPIFY_FAQS } from "@/constants/services/salesforceToShopifyService.constants";
import AskAISection from "@/components/core/home/AskAISection";

export const metadata: Metadata = buildMetadata({
  title: "Salesforce Commerce Cloud to Shopify Migration | 100xElevate",
  description:
    "Seamlessly migrate from Salesforce Commerce Cloud (SFCC) to Shopify Plus with zero data loss, maintained SEO rankings, and zero downtime.",
  path: "/services/migration/salesforce-to-shopify/",
});

export default function Page() {
  return (
    <main>
      {/* 1. Hero Section */}
      <SalesforceToShopifyHeroSection />

      {/* 2. "Why Shopify?" Tabbed Section */}
      <WhySwitchTabbedSection />

      {/* 3. Platform Capabilities Comparison Table */}
      <PlatformComparisonTable />

      {/* 4. Security Section */}
      <SecuritySection />

      {/* 5. "Why Choose 100xelevate?" Section */}
      <WhyChoose100xElevate />

      {/* 6. "Our Proven Migration Process" */}
      <HowToMigrateSalesforce />

      {/* 7. Migration Case Studies */}
      <RecentShopifyStoresSlider
        containerMaxWidth="max-w-[1200px]"
        mainpadding="xl:py-[90px] md:py-[86px] pt-8 pb-[62px]"
        sectionpadding="md:px-8 px-4"
        heading="Migration Case Studies"
      />

      {/* 8. FAQ Section */}
      <div className="bg-[#f7f7f7]">
        <FAQsSection faqs={SHOPIFY_SALESFORCE_TO_SHOPIFY_FAQS} />
      </div>

      {/* 9 & 10. Bottom CTA & AI/Newsletter Section */}
      <AskAISection />
    </main>
  );
}

