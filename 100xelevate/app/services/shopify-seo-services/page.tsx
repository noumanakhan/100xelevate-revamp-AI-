import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SeoServicesHero } from "@/components/core/services/shopifySEOServices/SeoServicesHero";
import { TrustedByBestSection } from "@/components/core/services/shopifyUXandUIDesign/TrustedByBestSection";
import { WhyNeedSeo } from "@/components/core/services/shopifySEOServices/WhyNeedSeo";
import { SeoServicesWeOffer } from "@/components/core/services/shopifySEOServices/SeoServicesWeOffer";
import { SeoProcess } from "@/components/core/services/shopifySEOServices/SeoProcess";
import { WhyChooseSeoServices } from "@/components/core/services/shopifySEOServices/WhyChooseSeoServices";
import { RealResults } from "@/components/core/services/shopifyUXandUIDesign/RealResults";
import { WorkGrid } from "@/components/core/services/shopifyUXandUIDesign/WorkGrid";
import { OurWork } from "@/components/core/services/shopifyUXandUIDesign/OurWork";
import { FAQsSection } from "@/components/core/services/shopifyUXandUIDesign/FAQsSection";
import { SHOPIFY_SEO_FAQS } from "@/constants/services/shopifySeoServicesService.constants";
import AskAISection from "@/components/core/home/AskAISection";
import { LetsTalk } from "@/components/core/services/shopifyPlusDevelopment/LetsTalk";

export const metadata: Metadata = buildMetadata({
  title: "Shopify SEO Services - 100xelevate",
  description:
    "Shopify Plus development for high-growth brands. We build scalable storefronts, custom features, optimized checkout, and seamless integrations to improve performance and support enterprise expansion.",
  path: "/services/shopify-seo-services/",
});

export default function Page() {
  return (
    <main>
      <SeoServicesHero />
      <TrustedByBestSection
        descriptionMaxWidthClass="max-w-[512px]"
        description="We support leading Shopify brands by building dependable foundations for growth and long-term performance."
      />
      <WhyNeedSeo />
      <SeoServicesWeOffer />
      <SeoProcess />
      <WhyChooseSeoServices />
      <RealResults
        heading="Trusted by Fast-Growing Brands at Every Scale"
        headingMaxWidthClass="max-w-full"
        mainContainergapClass="md:gap-[64px] gap-8"
      />
      <div>
        <OurWork />
        <WorkGrid />
      </div>
      <div className="bg-[#f7f7f7]">
        <FAQsSection faqs={SHOPIFY_SEO_FAQS} />
      </div>
      <LetsTalk
        title="Let’s Talk Shopify SEO."
        description="We help Shopify brands build stronger visibility, faster performance, and long-term organic growth through clean structure and precise optimisation. If you want to fix technical issues, improve rankings, or strengthen the foundation of your store, our team can guide you through every stage. Share your goals with us and see what your store can achieve."
      />
      <AskAISection />
    </main>
  );
}
