import type { Metadata } from "next";
import { shopifyDevCitySlugs } from "@/lib/city-slugs";
import { ShopifyAgency } from "@/components/core/services/shopifyAppDevelopmentAgency/ShopifyAgency";
import { LogoSection } from "@/components/core/services/LogoSection";
import { With100x } from "@/components/core/services/shopifyAppDevelopmentAgency/With100x";
import { CustomShopifyHeading } from "@/components/core/services/shopifyAppDevelopmentAgency/CustomShopifyHeading";
import { CustomShopifySection } from "@/components/core/services/shopifyAppDevelopmentAgency/CustomShopifySection";
import { DevelopmentProcess } from "@/components/core/services/DevelopmentProcess";
import { SHOPIFY_APP_DEVELOPMENT_PROCESS_ITEMS, SHOPIFY_APP_FEATURES_ITEMS } from "@/constants/services/shopifyAppDevelopmentAgencyService.constants";
import { WhyChooseShopifyPlus } from "@/components/core/services/WhyChooseShopifyPlus";
import { RealResults } from "@/components/core/services/shopifyUXandUIDesign/RealResults";
import { TechnologiesWeUse } from "@/components/core/services/shopifyAppDevelopmentAgency/TechnologiesWeUse";
import { CaseStudies } from "@/components/core/services/shopifyAppDevelopmentAgency/CaseStudies";
import { FAQsSEction } from "@/components/core/services/shopifyAppDevelopmentAgency/FAQsSEction";
import { LetsChat } from "@/components/core/book-a-demo/LetsChat";
import { LocationsSection } from "@/components/core/services/shopifyAppDevelopmentAgency/LocationsSection";
import AskAISection from "@/components/core/home/AskAISection";

export const dynamicParams = false;

export function generateStaticParams() {
  return shopifyDevCitySlugs.map((city) => ({ city }));
}

type Props = { params: Promise<{ city: string }> };

function formatCityName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityName = formatCityName(city);
  const canonicalUrl = `https://100xelevate.com/shopify-app-development-agency/${city}/`;

  return {
    title: `Shopify App Development Agency in ${cityName} | 100xelevate`,
    description: `Partner with a Shopify App Development Agency in ${cityName} to build custom private apps, embedded Shopify apps, and advanced integrations that support scalable ecommerce growth.`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `Shopify App Development Agency in ${cityName} | 100xelevate`,
      description: `Partner with a Shopify App Development Agency in ${cityName} to build custom private apps, embedded Shopify apps, and advanced integrations that support scalable ecommerce growth.`,
      url: canonicalUrl,
      type: "website",
      siteName: "100xElevate",
    },
    twitter: {
      card: "summary_large_image",
      title: `Shopify App Development Agency in ${cityName} | 100xelevate`,
      description: `Partner with a Shopify App Development Agency in ${cityName} to build custom private apps, embedded Shopify apps, and advanced integrations that support scalable ecommerce growth.`,
    },
  };
}


export default async function ShopifyAppDevelopmentAgencyCityPage({
  params,
}: Props) {
  const { city } = await params;
  const cityName = formatCityName(city);
  const heading =
    (<>
      <span className="text-[#6F6F6F]">Shopify App </span> Development Agency in {cityName}
    </>);


  return (
    <main>
      <div className="bg-[#F7F7F7]">
        <ShopifyAgency
          AreaName={cityName}
          heading={heading}
          headingMaxWidthClass="wmd:max-w-[540px] md:max-w-full max-w-[300px]" />
      </div>
      <LogoSection />
      <With100x AreaName={cityName}/>
      <CustomShopifyHeading AreaName={cityName}/>
      <CustomShopifySection />
      <DevelopmentProcess
        stickyHeading={false}
        heading="Our Shopify App Development Process"
        processItems={SHOPIFY_APP_DEVELOPMENT_PROCESS_ITEMS}
      />
      <WhyChooseShopifyPlus
        title={`Why 100xelevate is the Best Shopify App Development Agency in ${cityName}`}
        benefits={SHOPIFY_APP_FEATURES_ITEMS} />
      <RealResults
        heading="What 8 & 9 Figure Brand Owners Say About Us"
        headingMaxWidthClass="max-w-full"
        button={true}
      />
      <TechnologiesWeUse />
      <div className="bg-[#F7F7F7]">
        <CaseStudies />
      </div>

      <FAQsSEction AreaName={cityName}/>

      <div className="bg-[#F7F7F7]">
        <LetsChat heading={`Ready to Build a Custom Shopify App in ${cityName}?`}

          description="Whether you need automation, analytics, or entirely new store functionality, 100xelevate can help you build an app that scales."
          description2={`Our Shopify App Development team in ${cityName} will design, code, and maintain an app tailored to your business goals.`}
          isList={false}
          calendarBG="bg-white"
        />
      </div>

      <AskAISection />
    </main>
  )
}
