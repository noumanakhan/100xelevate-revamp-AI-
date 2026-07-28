import type { Metadata } from "next";
import { klaviyoCitySlugs } from "@/lib/city-slugs";
import { SmsMarketingHeading } from "@/components/core/services/klaviyoEmailSmsMarketingAgency/SmsMarketingHeading";
import { HeroPicture } from "@/components/core/services/klaviyoEmailSmsMarketingAgency/HeroPicture";
import { MarketingAgencyLogoMarquee } from "@/components/core/services/klaviyoEmailSmsMarketingAgency/MarketingAgencyLogoMarquee";
import { WeBuildText } from "@/components/core/services/klaviyoEmailSmsMarketingAgency/WeBuildText";
import { WhyChooseSmsMarketing } from "@/components/core/services/klaviyoEmailSmsMarketingAgency/WhyChooseSmsMarketing";
import { MarketingSericesWeOffer } from "@/components/core/services/klaviyoEmailSmsMarketingAgency/MarketingSericesWeOffer";
import { HowWeGrowBrand } from "@/components/core/services/klaviyoEmailSmsMarketingAgency/HowWeGrowBrand";
import { RecentWork } from "@/components/core/services/klaviyoEmailSmsMarketingAgency/RecentWork";
import TestimonialsSection from "@/components/core/home/TestimonialsSection";
import { FaqSectionEmailMarketing } from "@/components/core/services/klaviyoEmailSmsMarketingAgency/FaqSectionEmailMarketing";
import { WorkTogetherMarketing } from "@/components/core/services/klaviyoEmailSmsMarketingAgency/WorkTogetherMarketing";
import AskAISection from "@/components/core/home/AskAISection";

export const dynamicParams = false;

export function generateStaticParams() {
  return klaviyoCitySlugs.map((city) => ({ city }));
}

type Props = { params: Promise<{ city: string }> };

function formatCityName(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityName = formatCityName(city);
  const canonicalUrl = `https://100xelevate.com/klaviyo-email-sms-marketing-agency/${city}/`;
  return {
    title: `Klaviyo Email & SMS Marketing Agency in ${cityName} | 100xelevate`,
    description: `Work with a Klaviyo Email & SMS Marketing Agency that creates data-driven email and SMS campaigns to increase engagement and grow revenue.`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `Klaviyo Email & SMS Marketing Agency in ${cityName} | 100xelevate`,
      description: `Work with a Klaviyo Email & SMS Marketing Agency that creates data-driven email and SMS campaigns to increase engagement and grow revenue.`,
      url: canonicalUrl,
      type: "website",
      siteName: "100xElevate",
    },
    twitter: {
      card: "summary_large_image",
      title: `Klaviyo Email & SMS Marketing Agency in ${cityName} | 100xelevate`,
      description: `Work with a Klaviyo Email & SMS Marketing Agency that creates data-driven email and SMS campaigns to increase engagement and grow revenue.`,
    },
  };
}

export default async function KlaviyoEmailSMSAgencyCityPage({ params }: Props) {
  const { city } = await params;
  const cityName = formatCityName(city);
  return <main>
    <SmsMarketingHeading areaName={cityName}/>
    <HeroPicture />
    <MarketingAgencyLogoMarquee />
    <WeBuildText />
    <WhyChooseSmsMarketing areaName={cityName}/>
    <MarketingSericesWeOffer areaName={cityName}/>
    <HowWeGrowBrand areaName={cityName}/>
    <RecentWork areaName={cityName}/>
    <TestimonialsSection areaName={cityName}/>
    <FaqSectionEmailMarketing />
    <WorkTogetherMarketing areaName={cityName}/>
    {/* <LocationsSection baseUrl="klaviyo-email-sms-marketing-agency" baseText="Klaviyo Marketing Agency in" /> */}
    <AskAISection />
  </main>;
}
