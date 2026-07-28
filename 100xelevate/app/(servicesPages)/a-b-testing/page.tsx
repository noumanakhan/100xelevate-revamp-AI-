import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ShopifyAgency } from "@/components/core/services/shopifyAppDevelopmentAgency/ShopifyAgency";
import { WhyTestNow } from "@/components/core/services/a/BTesting/WhyTestNow";
import { ShopLift } from "@/components/core/services/a/BTesting/ShopLift";
import { RealResults } from "@/components/core/services/shopifyAudit/RealResults";
import { AbTestDrive } from "@/components/core/services/a/BTesting/AbTestDrive";
import { TestFirst } from "@/components/core/services/a/BTesting/TestFirst";
import { HowItWorks } from "@/components/core/services/a/BTesting/HowItWorks";
import { TestingFaq } from "@/components/core/services/a/BTesting/TestingFaq";
import AskAISection from "@/components/core/home/AskAISection";
//rebuild
export const metadata: Metadata = buildMetadata({
  title: "A/B Testing - 100xelevate",
  description:
    "Increase Shopify Plus sales with 100xelevate's expert A/B testing. Run data-driven experiments powered by Shoplift.",
  path: "/a-b-testing/",
});

const ILLUSTRATION_URL = "/images/2025/10/Group-14-e1762550441519.webp";

const heading = (
  <>
    Stop guessing. <br />
    <span className="text-[#6f6f6f] inline">Start growing. </span>
  </>
);

const description = (
  <>
    With 100xelevate, you get the fastest path to higher CVR, RPV, and AOV on
    Shopify Plus. Our team designs, launches, and runs high-impact A/B tests
    powered by Shoplift, the only Shopify Plus Certified testing app. Every
    tweak, every change, every idea is backed by real proof, not hunches.
  </>
);

const mainImage = {
  src: ILLUSTRATION_URL,
  alt: "Shoplift and 100xelevate running Shopify Plus A/B test for product conversion",
  width: 905,
  height: 717,
};

export default function Page() {
  return (
    <main>
      <ShopifyAgency
        showLogo={false}
        showquote={false}
        showSubHeading={false}
        buttonText="Start the A/B test drive"
        buttonHref="/book-a-demo"
        heading={heading}
        headingMaxWidthClass="wmd:max-w-[590px] md:max-w-full max-w-[300px]"
        bgColor="bg-white"
        description={description}
        mainImage={mainImage}
        descriptionMaxWidthClass="max-w-[550px]"
        leftContentJustifyClass="xl:justify-center"
        buttonMarginTopClass="md:mt-[30px] mt-[10px] md:mb-0 mb-[20px]"
      />

      <WhyTestNow />
      <ShopLift />
      <div className="bg-[#F7F7F7] md:pb-[96px] pb-[32px]">
        <RealResults
          badgeBgColor="bg-white"
          maxWidth="max-w-[1400px]"
          sliderMaxW="max-w-full"
        />
      </div>
      <AbTestDrive />
      <TestFirst />
      <HowItWorks />
      <TestingFaq />
      <AskAISection />
    </main>
  );
}
