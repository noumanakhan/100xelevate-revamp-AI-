import React from "react";
import { ShopifyAgency } from "../shopifyAppDevelopmentAgency/ShopifyAgency";

const heading = (
  <>
    Transforming B2B Commerce with{" "}
    <span className="text-[#A3A3A3] inline">Shopify Plus </span>
  </>
);
const ILLUSTRATION_URL = "/images/2025/10/ai-shopify-apps.webp";

const mainImage = {
  src: ILLUSTRATION_URL,
  alt: "Shopify audit dashboard showing CRO and revenue analytics",
  width: 905,
  height: 717,
};

export const HeroSection = () => {
  return (
    <div>
      <ShopifyAgency
        heading={heading}
        bgColor="bg-white"
        showLogo={false}
        showSubHeading={false}
        buttonText="Book a call"
        buttonHref="/book-a-demo"
        description="Expert strategies and bespoke solutions tailored for your business needs."
        mainImage={mainImage}
        descriptionMaxWidthClass="max-w-[435px]"
        showquote={false}
      />
    </div>
  );
};
