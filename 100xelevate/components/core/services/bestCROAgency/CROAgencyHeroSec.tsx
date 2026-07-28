import React from "react";
import { ShopifyAgency } from "../shopifyAppDevelopmentAgency/ShopifyAgency";

export const CROAgencyHeroSec = ({
  AreaName = "USA",
}: {
  AreaName?: string;
}) => {
  return (
    <div>
      <div className="bg-[#F7F7F7]">
        <ShopifyAgency
          headingMaxWidthClass="wmd:max-w-[600px] md:max-w-[671px] max-w-[735px]"
          heading={
            <>
              <h1>
                Best Shopify Conversion Rate Optimization{" "}
                <span className="text-[#6F6F6F]">(CRO) Agency </span>
                in {AreaName}
              </h1>
            </>
          }
          subHeading="Turn Traffic into Conversions with Proven CRO Strategies"
          description="We help Shopify and DTC brands unlock hidden revenue potential through structured A/B testing, data-driven UX improvements, and behavioral insights that convert browsers into loyal customers."
          buttonText="Schedule a free CRO audit"
          buttonHref="/best-shopify-cro-agency/#Schedule-a-call"
          mainImage={{
            src: "/images/2025/10/Frame-1000002993-1.webp",
            alt: "Customer shares testimonial praising 100xelevate Shopify CRO agency for A/B testing success and sales growth.",
            width: 905,
            height: 717,
          }}
          autherQuate="“These guys do CRO the right way. They’ve been running A/B tests on my e-commerce store for the last 12 months, and we’re seeing fantastic results. I definitely recommend them.”"
          autherName="Shaan Puri"
          autherPosition="Host of My First Million Podcast"
        />
      </div>
    </div>
  );
};
