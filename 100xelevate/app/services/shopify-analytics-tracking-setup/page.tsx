import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/core/services/shopifyAnalyticsTrackingSetup/HeroSection";
import { TrustedByBestSection } from "@/components/core/services/shopifyUXandUIDesign/TrustedByBestSection";
import { WhyNeedAnalyticsTracking } from "@/components/core/services/shopifyAnalyticsTrackingSetup/WhyNeedAnalyticsTracking";
import { AnalyticsTrackingSericesWeOffer } from "@/components/core/services/shopifyAnalyticsTrackingSetup/AnalyticsTrackingSericesWeOffer";
import { TrackingSetupProcess } from "@/components/core/services/shopifyAnalyticsTrackingSetup/TrackingSetupProcess";
import { WhyBrandsChooseAnalyticsTrackingSetup } from "@/components/core/services/shopifyAnalyticsTrackingSetup/WhyBrandsChooseAnalyticsTrackingSetup";
import { RealResults } from "@/components/core/services/shopifyUXandUIDesign/RealResults";
import { OurWork } from "@/components/core/services/shopifyUXandUIDesign/OurWork";
import { WorkGrid } from "@/components/core/services/shopifyUXandUIDesign/WorkGrid";
import { FAQsSection } from "@/components/core/services/shopifyUXandUIDesign/FAQsSection";
import { SHOPIFY_ANALYTICS_FAQS } from "@/constants/services/shopifyAnalyticsAndTrackingService.constants";
import { LetsTalkAnalytics } from "@/components/core/services/shopifyAnalyticsTrackingSetup/LetsTalkAnalytics";
import AskAISection from "@/components/core/home/AskAISection";

export const metadata: Metadata = buildMetadata({
  title: "Shopify Analytics and Tracking Setup - 100xelevate",
  description: "Shopify Analytics and Tracking Setup with GA4, GTM, Meta & TikTok for full ecommerce tracking and accurate reporting.",
  path: "/services/shopify-analytics-tracking-setup/",
});

export default function Page() {
  return <main>
    <HeroSection />
    <TrustedByBestSection
      descriptionMaxWidthClass="max-w-[597px]"
      description="We partner with brands that value precise measurement, dependable tracking, and clearer insight into performance."
    />
    <WhyNeedAnalyticsTracking />
    {/* <AnalyticsTrackingSericesWeOffer />
    <TrackingSetupProcess />
    <WhyBrandsChooseAnalyticsTrackingSetup />
    <RealResults
      heading="Trusted by Fast-Growing Brands at Every Scale"
      headingMaxWidthClass="max-w-full"
      mainContainergapClass="wmd:gap-[50px] md:gap-[64px] gap-8"
    />
    <div>
      <OurWork />
      <WorkGrid />
    </div>
    <div className="bg-[#f7f7f7]">
      <FAQsSection faqs={SHOPIFY_ANALYTICS_FAQS} />
    </div>
    <LetsTalkAnalytics />
    <AskAISection /> */}
  </main>;
}
