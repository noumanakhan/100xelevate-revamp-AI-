import React from "react";
import { CustomShopifyHeading } from "../shopifyAppDevelopmentAgency/CustomShopifyHeading";
import { CustomShopifySection } from "../shopifyAppDevelopmentAgency/CustomShopifySection";
import { ButtonLink } from "@/components/shared/ButtonLink";

const AccordionItems = [
  {
    title: "Data-Backed Audit",
    description: (
      <>
        We start by analyzing your store’s data in <b>GA4, Hotjar,</b> and{" "}
        <b>Microsoft Clarity</b> to uncover behavioral drop-offs and missed
        opportunities.
      </>
    ),
  },
  {
    title: "CRO Strategy Design",
    description:
      "Every test we plan is hypothesis-driven and built around your key metrics, conversion rate, AOV, and customer lifetime value.",
  },
  {
    title: "Controlled A/B Testing",
    description: (
      <>
        Using <b>Convert.com, Hypertask.ai,</b> and <b>Google Optimize</b>, we
        test layouts, copy, CTAs, and funnels to find statistically proven
        winners.
      </>
    ),
  },
  {
    title: "Continuous Optimization",
    description:
      "After implementation, we monitor post-test impact and launch new experiments monthly to maintain momentum and compounding results.",
  },
];

export const CROServiceWork = () => {
  return (
    <div>
      <CustomShopifyHeading heading={<>How Our Shopify CRO Service Works</>} />

      <CustomShopifySection
        imageUrl="/images/2025/10/Group-1-3.webp"
        imageAlt="Shopify CRO case study shows before-after product page redesign and dashboard with 1046% sales growth."
        imageWidth=""
        leftWidth="lg:w-[68%] md:w-[50%]"
        rightWidth="lg:w-[32%] md:w-[50%]"
        mainWidthClass="max-w-[1420px]"
        accordionItems={AccordionItems}
        showButton={false}
      />

      <div className="w-full max-w-[1140px] md:pt-[60px] md:pb-[96px] pt-0 pb-8 flex justify-center items-center mx-auto max-md:px-4">
        <ButtonLink href="#Schedule-a-call" className="max-md:w-full h-[43px]">
          See how it works
        </ButtonLink>
      </div>
    </div>
  );
};
