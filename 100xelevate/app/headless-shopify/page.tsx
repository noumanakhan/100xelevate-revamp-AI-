import type { Metadata } from "next";
import HeadlessShopifyHeroSection from "../../components/core/services/headlessShopify/HeadlessShopifyHeroSection";
import { buildMetadata } from "@/lib/metadata";
import HighPerformanceHeadless from "../../components/core/services/HighPerformanceHeadless";
import LightningFast from "@/components/core/services/headlessShopify/LightningFast";
import FullControl from "@/components/core/services/headlessShopify/FullControl";
import HeadlessShopifyAgency from "@/components/core/services/headlessShopify/HeadlessShopifyAgency";
import TechPartnership from "@/components/core/services/headlessShopify/TechPartnership";
import TrustedHeadless from "@/components/core/services/headlessShopify/TrustedHeadless";
import OurWorkCarousel from "@/components/core/services/headlessShopify/OurWorkCarousel";
import { OurWork } from "@/components/core/services/shopifyUXandUIDesign/OurWork";
import { WorkGrid } from "@/components/core/services/shopifyUXandUIDesign/WorkGrid";
import { RealResults } from "@/components/core/services/shopifyUXandUIDesign/RealResults";
import { FAQsSection } from "@/components/core/services/shopifyUXandUIDesign/FAQsSection";
import { SHOPIFY_HEADLESS_FAQS } from "@/constants/services/headlessShopifySerivice.constants";
import { LetsTalk } from "@/components/core/services/shopifyPlusDevelopment/LetsTalk";
import { LetsTalkAnalytics } from "@/components/core/services/shopifyAnalyticsTrackingSetup/LetsTalkAnalytics";
import Image from "next/image";
import { LocationsSection } from "@/components/core/services/shopifyAppDevelopmentAgency/LocationsSection";
import AskAISection from "@/components/core/home/AskAISection";

export const metadata: Metadata = buildMetadata({
  title: "Headless Shopify Agency - 100xelevate",
  description:
    "Headless Shopify development services to create modern, high-performance e-commerce experiences.",
  path: "/headless-shopify/",
});

export default function Page() {
  return (
    <main>
      <HeadlessShopifyHeroSection />
      <div className="bg-[#F7F7F7]">
        <HighPerformanceHeadless />
      </div>
      <HighPerformanceHeadless
        showShopifyLogos={false}
        heading="What is headless ecommerce with Shopify Plus?"
        headingMaxWidth="max-w-[692px]"
        description="Headless ecommerce with Shopify Plus separates the storefront from Shopify’s backend, giving USA businesses complete control over speed, design, and functionality. A headless Shopify setup uses frameworks such as React, Next.js, or Shopify Hydrogen, while Shopify Plus manages products, customers, checkout, and orders through the Storefront API. This structure delivers faster load times, stronger SEO, flexible URLs, and fully custom shopping experiences that standard themes cannot support. It enables advanced features, personalization, and reliable scalability for high-growth brands. Headless Shopify development is more technical than theme-based builds, but it provides unmatched flexibility for high-growth USA brands."
        buttonText="Tell us about your Shopify headless project."
        buttonLink="/book-a-demo"
      />
      <LightningFast />
      <FullControl />
      <HeadlessShopifyAgency />
      <TechPartnership />
      <TrustedHeadless />
      <div>
        <OurWork />
        <WorkGrid />
      </div>
      <OurWorkCarousel />
      <RealResults
        heading="Reviews"
        headingMaxWidthClass="max-w-full"
        mainContainergapClass="wmd:gap-[50px] md:gap-[64px] gap-8"
      />
      <FAQsSection faqs={SHOPIFY_HEADLESS_FAQS} />
      <LetsTalk
        mainContainerClass="max-w-[1300px] mx-auto md:pb-[86px] md:pt-0  pt-[10px] pb-[30px]"
        bgImageClasses="bg-cover md:bg-[length:130%_auto] bg-center bg-no-repeat"
        showLogo
        contentMaxWidthClass="md:max-w-[70%]"
        buttonText="Upgrade to Shopify Plus with 100xelevate"
        buttonLink="/book-a-demo"
        title="Looking for a Shopify Plus Agency in the USA?"
        description="Upgrade or migrate to Shopify Plus with 100xelevate, a leading Shopify Plus agency in the USA."
      />
      <LetsTalkAnalytics
        headingMaxWidthClass="md:max-w-[620px]"
        mainContainerClass="mx-auto w-full max-w-[1300px] pt-[10px] pb-[30px] md:pb-[86px] md:pt-0"
        heading="Let’s talk ecommerce, Shopify & Shopify Plus solutions."
        description="We work with brands across the USA to design, develop, launch, and support Shopify and Shopify Plus stores. Tell us about your project and where you want to go next. Talk to our team about your project."
        imageSection={
          <Image
            src="/images/2025/11/getintouchphones-1024x684.png"
            alt="Two mobile ecommerce product screens showing a custom headless Shopify UI for a snack brand."
            width={800}
            height={665}
            sizes="(min-width: 960px) 600px, 100vw"
            className="h-auto w-full object-cover"
          />
        }
      />
      <LocationsSection
        baseUrl="headless-shopify"
        baseText="Headless Shopify in"
      />
      <AskAISection />
    </main>
  );
}
