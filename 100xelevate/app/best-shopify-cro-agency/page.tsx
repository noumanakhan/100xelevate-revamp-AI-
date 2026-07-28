import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { LogoSection } from "@/components/core/services/LogoSection";
import { CROAgencyHeroSec } from "@/components/core/services/bestCROAgency/CROAgencyHeroSec";
import { ExpertCROSpeciallist } from "@/components/core/services/bestCROAgency/ExpertCROSpeciallist";
import { CROServiceWork } from "@/components/core/services/bestCROAgency/CROServiceWork";
import { RealResults } from "@/components/core/services/shopifyUXandUIDesign/RealResults";
import { WhoYouAllWork } from "@/components/core/services/bestCROAgency/WhoYouAllWork";
import { LetsChat } from "@/components/core/book-a-demo/LetsChat";
import { CROCaseStudies } from "@/components/core/services/bestCROAgency/CROCaseStudies";
import { CROFaqs } from "@/components/core/services/bestCROAgency/CROFaqs";
import { LocationsSection } from "@/components/core/services/shopifyAppDevelopmentAgency/LocationsSection";
import AskAISection from "@/components/core/home/AskAISection";

export const metadata: Metadata = buildMetadata({
  title: "Best Shopify CRO Agency - 100xelevate",
  description:
    "Work with the Best Shopify CRO Agency for data-driven audits, testing, and optimization that improve conversions and store performance",
  path: "/best-shopify-cro-agency/",
});

export default function Page() {
  return (
    <main className="scroll-smooth">
      <CROAgencyHeroSec />

      <LogoSection />

      <ExpertCROSpeciallist />

      <CROServiceWork />

      <RealResults
        heading="What 8 & 9 Figure Brand Owners Say About Us"
        headingMaxWidthClass="max-w-full"
        button={true}
        buttonText="Schedule a free CRO audit"
        buttonUrl="#Schedule-a-call"
        mainContainergapClass="md:gap-[64px] gap-8"
      />
      <WhoYouAllWork />

      <div className="bg-[#F7F7F7]" id="Schedule-a-call">
        <LetsChat
          calendarBG="bg-white"
          headingSize="xl:text-[48px] xl:leading-[58px] wmd:text-[32px] wmd:leading-[40px] md:text-[40px] md:leading-[46px] text-[32px] leading-[38px]"
        />
      </div>

      <CROCaseStudies />

      <div className="bg-[#F7F7F7]">
        <CROFaqs />
      </div>

      <div className="bg-[#F7F7F7] pt-[10px]">
        <LocationsSection
          baseUrl="best-shopify-cro-agency"
          baseText="Shopify CRO Agency in"
        />
      </div>
      <AskAISection />
    </main>
  );
}
