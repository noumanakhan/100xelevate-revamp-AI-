import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ShopifyAgency } from "@/components/core/services/shopifyAppDevelopmentAgency/ShopifyAgency";
import { FunctionalToExceptionalTabs } from "@/components/core/services/shopifyAudit/FunctionalToExceptionalTabs";
import { ThreeSteps } from "@/components/core/services/shopifyAudit/ThreeSteps";
import { LeavingMoney } from "@/components/core/services/shopifyAudit/LeavingMoney";
import { UnlockExplosive } from "@/components/core/services/shopifyAudit/UnlockExplosive";
import { AffordableBundles } from "@/components/core/services/shopifyAudit/AffordableBundles";
import { RealResults } from "@/components/core/services/shopifyAudit/RealResults";
import { WhatSetsUsApart } from "@/components/core/services/shopifyAudit/WhatSetsUsApart";
import { GotCovered } from "@/components/core/services/shopifyAudit/GotCovered";
import AskAISection from "@/components/core/home/AskAISection";

export const metadata: Metadata = buildMetadata({
  title: "Shopify Audit - 100xelevate",
  description:
    "Get a revenue-focused Shopify audit from 100X Elevate. Identify CRO leaks, boost conversions, and receive data-backed fixes with functional prototypes.",
  path: "/shopify-audit/",
});

const ILLUSTRATION_URL = "/images/2025/10/Group-9-1-e1762879743478.webp";

const heading = (
  <>
    Shopify Audit’s{" "}
    <span className="text-[#6f6f6f] inline">
      Engineered to Increase Revenue.{" "}
    </span>{" "}
    Guaranteed.
  </>
);

const description = (
  <>
    Over 150+ Shopify brands trust our audit framework to spot what most teams
    overlook. We apply behavior-backed analysis, buying journey breakdowns, and
    proven CRO methods to uncover exactly where your store loses revenue, and
    how to fix it with high-impact changes you can apply immediately.
  </>
);

const mainImage = {
  src: ILLUSTRATION_URL,
  alt: "Shopify audit dashboard showing CRO and revenue analytics",
  width: 905,
  height: 717,
};

export default function Page() {
  return (
    <main>
      <ShopifyAgency
        showLogo={false}
        showquote={false}
        buttonText="Get your audit now"
        buttonHref="/request-a-free-audit"
        heading={heading}
        headingMaxWidthClass="wmd:max-w-[590px] md:max-w-full max-w-[300px]"
        subHeading="Get a data-powered UX/UI audit with functional prototypes and clear insights that turn analysis into measurable growth"
        description={description}
        mainImage={mainImage}
        descriptionMaxWidthClass="max-w-full"
      />
      <FunctionalToExceptionalTabs />
      <ThreeSteps />
      <LeavingMoney />
      <UnlockExplosive />
      <AffordableBundles />
      <RealResults />
      <WhatSetsUsApart />
      <GotCovered />
      <AskAISection />
    </main>
  );
}
