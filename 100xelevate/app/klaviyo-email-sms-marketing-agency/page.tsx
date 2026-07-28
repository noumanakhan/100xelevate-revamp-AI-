import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SmsMarketingHeading } from "@/components/core/services/klaviyoEmailSmsMarketingAgency/SmsMarketingHeading";
import { HeroPicture } from "@/components/core/services/klaviyoEmailSmsMarketingAgency/HeroPicture";
import { MarketingAgencyLogoMarquee } from "@/components/core/services/klaviyoEmailSmsMarketingAgency/MarketingAgencyLogoMarquee";
import { WeBuildText } from "@/components/core/services/klaviyoEmailSmsMarketingAgency/WeBuildText";
import { WhyChooseSmsMarketing } from "@/components/core/services/klaviyoEmailSmsMarketingAgency/WhyChooseSmsMarketing";
import { MarketingSericesWeOffer } from "@/components/core/services/klaviyoEmailSmsMarketingAgency/MarketingSericesWeOffer";
import { HowWeGrowBrand } from "@/components/core/services/klaviyoEmailSmsMarketingAgency/HowWeGrowBrand";
import { WorkGrid } from "@/components/core/services/shopifyUXandUIDesign/WorkGrid";
import { OurWork } from "@/components/core/services/shopifyUXandUIDesign/OurWork";
import { RecentWork } from "@/components/core/services/klaviyoEmailSmsMarketingAgency/RecentWork";
import TestimonialsSection from "@/components/core/home/TestimonialsSection";
import { FaqSectionEmailMarketing } from "@/components/core/services/klaviyoEmailSmsMarketingAgency/FaqSectionEmailMarketing";
import { WorkTogetherMarketing } from "@/components/core/services/klaviyoEmailSmsMarketingAgency/WorkTogetherMarketing";
import { LocationsSection } from "@/components/core/services/shopifyAppDevelopmentAgency/LocationsSection";
import AskAISection from "@/components/core/home/AskAISection";

export const metadata: Metadata = buildMetadata({
  title: "Klaviyo Email & SMS Marketing Agency - 100xelevate",
  description: "Work with a Klaviyo Email & SMS Marketing Agency that creates data-driven email and SMS campaigns to increase engagement and grow revenue.",
  path: "/klaviyo-email-sms-marketing-agency/",
});

export default function Page() {
  return <main>
    <SmsMarketingHeading />
    <HeroPicture />
    <MarketingAgencyLogoMarquee />
    <WeBuildText />
    <WhyChooseSmsMarketing />
    <MarketingSericesWeOffer />
    <HowWeGrowBrand />
    <RecentWork />
    <TestimonialsSection />
    <FaqSectionEmailMarketing />
    <WorkTogetherMarketing />
    <LocationsSection baseUrl="klaviyo-email-sms-marketing-agency" baseText="Klaviyo Marketing Agency in" />
    <AskAISection />
  </main>;
}
