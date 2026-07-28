import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ShopifyAgency } from "@/components/core/services/shopifyAppDevelopmentAgency/ShopifyAgency";
import { LogoSection } from "@/components/core/services/LogoSection";
import { With100x } from "@/components/core/services/shopifyAppDevelopmentAgency/With100x";
import { CustomShopifyHeading } from "@/components/core/services/shopifyAppDevelopmentAgency/CustomShopifyHeading";
import { CustomShopifySection } from "@/components/core/services/shopifyAppDevelopmentAgency/CustomShopifySection";
import { DevelopmentProcess } from "@/components/core/services/DevelopmentProcess";
import {
  SHOPIFY_APP_DEVELOPMENT_PROCESS_ITEMS,
  SHOPIFY_APP_FEATURES_ITEMS,
} from "@/constants/services/shopifyAppDevelopmentAgencyService.constants";
import { WhyChooseShopifyPlus } from "@/components/core/services/WhyChooseShopifyPlus";
import { RealResults } from "@/components/core/services/shopifyUXandUIDesign/RealResults";
import { TechnologiesWeUse } from "@/components/core/services/shopifyAppDevelopmentAgency/TechnologiesWeUse";
import { CaseStudies } from "@/components/core/services/shopifyAppDevelopmentAgency/CaseStudies";
import { FAQsSEction } from "@/components/core/services/shopifyAppDevelopmentAgency/FAQsSEction";
import { LetsChat } from "@/components/core/book-a-demo/LetsChat";
import { LocationsSection } from "@/components/core/services/shopifyAppDevelopmentAgency/LocationsSection";
import AskAISection from "@/components/core/home/AskAISection";

export const metadata: Metadata = buildMetadata({
  title: "Shopify App Development Agency - 100xelevate",
  description:
    "Build powerful, scalable solutions with our Custom Shopify App development agency, from private apps to advanced Shopify Plus integrations.",
  path: "/shopify-app-development-agency/",
});

export default function Page() {
  return (
    <main>
      <div className="bg-[#F7F7F7]">
        <ShopifyAgency />
      </div>
      <LogoSection />
      <With100x />
      <CustomShopifyHeading />
      <CustomShopifySection />
      <DevelopmentProcess
        stickyHeading={false}
        heading="Our Shopify App Development Process"
        processItems={SHOPIFY_APP_DEVELOPMENT_PROCESS_ITEMS}
      />
      <WhyChooseShopifyPlus
        title="Why 100xelevate is the Best Shopify App Development Agency in USA"
        benefits={SHOPIFY_APP_FEATURES_ITEMS}
      />
      <RealResults
        heading="What 8 & 9 Figure Brand Owners Say About Us"
        headingMaxWidthClass="max-w-full"
        button={true}
        buttonText="Talk to our app experts"
        buttonUrl="#Schedule-a-call"
        mainContainergapClass="md:gap-[64px] gap-8"
      />
      <TechnologiesWeUse />
      <div className="bg-[#F7F7F7]">
        <CaseStudies />
      </div>

      <FAQsSEction />

      <div className="bg-[#F7F7F7]">
        <LetsChat
          heading="Ready to Build a Custom Shopify App in USA?"
          description="Whether you need automation, analytics, or entirely new store functionality, 100xelevate can help you build an app that scales."
          description2="Our Shopify App Development team in USA will design, code, and maintain an app tailored to your business goals."
          isList={false}
          calendarBG="bg-white"
        />
      </div>

      <LocationsSection />

      <AskAISection />
    </main>
  );
}
