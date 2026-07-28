import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ExploreMigrationExpertise from "@/components/core/services/migration/ExploreMigrationExpertise";
import { MigrationHeroSec } from "@/components/core/services/migration/MigrationHeroSec";
import { TransformYourStore } from "@/components/core/services/migration/TransformYourStore";
import { ProductSection } from "@/components/core/services/migration/ProductSection";
import { ProvenMigration } from "@/components/core/services/migration/ProvenMigration";
import { WhyShopifyMigration } from "@/components/core/services/migration/WhyShopifyMigration";
import { TrustedBySection } from "@/components/core/services/migration/TrustedBySection";
import { PromiseSection } from "@/components/core/services/migration/PromiseSection";
import RecentShopifyStoresSlider from "@/components/core/services/buildNewShopifyStore/RecentShopifyStoresSlider";
import { TrustedByMostInovative } from "@/components/core/services/migration/TrustedByMostInovative";
import AskAISection from "@/components/core/home/AskAISection";

export const metadata: Metadata = buildMetadata({
  title: "Platform Migration to Shopify | 100xElevate",
  description:
    "Risk-free platform migration to Shopify handled by certified experts. Zero downtime, full data integrity, and a try-before-you-buy demo migration.",
  path: "/services/migration/",
});

export default function Page() {
  return (
    <main>
      <MigrationHeroSec />
      <ExploreMigrationExpertise />
      <TransformYourStore />
      <ProductSection />
      <ProvenMigration />
      <WhyShopifyMigration />
      <TrustedBySection />
      <PromiseSection />
      <RecentShopifyStoresSlider
        heading="Migration Case Studies"
        ajustwidth={true}
        mainpadding="md:py-[96px] py-8"
      />
      <TrustedByMostInovative />
      <AskAISection />
    </main>
  );
}
