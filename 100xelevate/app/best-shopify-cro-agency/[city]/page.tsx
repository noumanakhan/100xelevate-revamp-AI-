import type { Metadata } from "next";
import { croShopifyCitySlugs } from "@/lib/city-slugs";
import { CROAgencyHeroSec } from "@/components/core/services/bestCROAgency/CROAgencyHeroSec";
import { LogoSection } from "@/components/core/services/LogoSection";
import { ExpertCROSpeciallist } from "@/components/core/services/bestCROAgency/ExpertCROSpeciallist";
import { CROServiceWork } from "@/components/core/services/bestCROAgency/CROServiceWork";
import { RealResults } from "@/components/core/services/shopifyUXandUIDesign/RealResults";
import { WhoYouAllWork } from "@/components/core/services/bestCROAgency/WhoYouAllWork";
import { LetsChat } from "@/components/core/book-a-demo/LetsChat";
import { CROCaseStudies } from "@/components/core/services/bestCROAgency/CROCaseStudies";
import { CROFaqs } from "@/components/core/services/bestCROAgency/CROFaqs";
import AskAISection from "@/components/core/home/AskAISection";

export const dynamicParams = false;

export function generateStaticParams() {
  return croShopifyCitySlugs.map((city) => ({ city }));
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
  const canonicalUrl = `https://100xelevate.com/best-shopify-cro-agency/${city}/`;
  return {
    title: `Best Shopify CRO Agency in ${cityName} | 100xelevate`,
    description: `Shopify CRO case study shows before-after product page redesign and dashboard with 1046% sales growth.`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `Best Shopify CRO Agency in ${cityName} | 100xelevate`,
      description: `Shopify CRO case study shows before-after product page redesign and dashboard with 1046% sales growth.`,
      url: canonicalUrl,
      type: "website",
      siteName: "100xElevate",
    },
    twitter: {
      card: "summary_large_image",
      title: `Best Shopify CRO Agency in ${cityName} | 100xelevate`,
      description: `Shopify CRO case study shows before-after product page redesign and dashboard with 1046% sales growth.`,
    },
  };
}

export default async function BestShopifyCROAgencyCityPage({ params }: Props) {
  const { city } = await params;
  const cityName = formatCityName(city);
  return (
    <main className="scroll-smooth">
      <CROAgencyHeroSec AreaName={cityName} />

      <LogoSection />

      <ExpertCROSpeciallist AreaName={cityName} />

      <CROServiceWork />

      <RealResults
        sectionBg="bg-white"
        cardBg="bg-[#F7F7F7]"
        heading="What 8 & 9 Figure Brand Owners Say About Us"
        headingMaxWidthClass="max-w-full"
        button={true}
        buttonText="Schedule a free CRO audit"
        buttonUrl="#Schedule-a-call"
        mainContainergapClass="md:gap-[64px] gap-8"
      />
      <div className="bg-[#F7F7F7]">
        <WhoYouAllWork AreaName={cityName} />
      </div>

      <div id="Schedule-a-call">
        <LetsChat
          calendarBG="bg-white"
          headingSize="xl:text-[48px] xl:leading-[58px] wmd:text-[32px] wmd:leading-[40px] md:text-[40px] md:leading-[46px] text-[32px] leading-[38px]"
        />
      </div>

      <div className="bg-[#F7F7F7]">
        <CROCaseStudies />
      </div>

      <CROFaqs AreaName={cityName} />

      <AskAISection />
    </main>
  );
}
