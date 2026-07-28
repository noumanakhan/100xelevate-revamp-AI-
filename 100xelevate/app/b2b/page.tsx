import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/core/services/b2b/HeroSection";
import CompanyFeaturesMarquee from "@/components/core/services/b2b/CompanyFeaturesMarquee";
import { LogosSection } from "@/components/core/services/shopifyStoreSpeed/LogosSection";
import { StrategicDevelopment } from "@/components/core/services/b2b/StrategicDevelopment";
import { ExpertB2BShopifyConsulting } from "@/components/core/services/b2b/ExpertB2BShopifyConsulting";
import { BTwoBDesignService } from "@/components/core/services/b2b/BTwoBDesignService";
import { BtoBdevelopmentSerivice } from "@/components/core/services/b2b/BtoBdevelopmentSerivice";
import AskAISection from "@/components/core/home/AskAISection";
import { ReadyToElevate } from "@/components/core/services/b2b/ReadyToElevate";
import { BtoBMigrationService } from "@/components/core/services/b2b/BtoBMigrationService";

export const metadata: Metadata = buildMetadata({
  title: "B2B - 100xelevate",
  description: "Transform your Shopify B2B Ecommerce setup with strategic guidance, smooth migration, and custom solutions built for growth.",
  path: "/b2b/",
});

export default function Page() {
  return <main>
    <HeroSection />
    <CompanyFeaturesMarquee />
    <div className="bg-[#F7F7F7]">
      <LogosSection
        containerMaxWidth="max-w-[1200px]"
        paddingClass="px-[0px]"
        innerDivPAddingClass="p-0"    />
    </div>
    <StrategicDevelopment />
    <ExpertB2BShopifyConsulting />
    <BTwoBDesignService />
    <BtoBMigrationService />
    <BtoBdevelopmentSerivice />
    <ReadyToElevate />
    <AskAISection />
  </main>;
}
