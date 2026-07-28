import React from "react";
import { ShopifyAgency } from "../shopifyAppDevelopmentAgency/ShopifyAgency";

const LightningFast = ({ areaName = "USA" }: { areaName?: string }) => {
  return (
    <div>
      <ShopifyAgency
        reverseOrder={true}
        mainImageAdditionalClass=" mx-auto max-w-[507px]"
        containerGapClass=" wxl:gap-[74px] xl:gap-[64px] md:gap-8 gap-[30px]"
        showLogo={false}
        headingMaxWidthClass="max-w-full"
        heading={
          <>
            <h1 className="wmd:text-[48px] md:text-[40px] text-[32px] font-semibold mx-auto wmd:leading-[58px] md:leading-[46px] leading-[40px]">
              Lightning fast headless Shopify Plus ecommerce stores
            </h1>
          </>
        }
        showSubHeading={false}
        description={
          <>
            Headless ecommerce uses modern JavaScript frameworks to create
            faster storefronts with improved Lighthouse scores and a smoother
            experience for shoppers in the {areaName}. With API-driven
            architecture, headless stores offer precise control over layout,
            content, and the full user experience. This approach provides more
            flexibility and scalability than theme-based builds, though it
            requires structured CMS planning and ongoing technical support. A
            well-organized content system is essential for efficient updates and
            long-term performance. Headless ecommerce can significantly improve
            core KPIs, but it may not be right for every brand. We help you
            determine the best path.
          </>
        }
        descriptionMaxWidthClass="max-w-[625px]"
        mainImage={{
          src: "/images/2025/11/speed-removebg-preview.png",
          alt: "Lightning fast headless Shopify Plus ecommerce stores",
          width: 1000,
          height: 1200,
        }}
        showquote={false}
        buttonHref="/book-a-demo"
        buttonText="Get in touch"
        contentDivClasses="md:gap-6 gap-4"
      />
    </div>
  );
};

export default LightningFast;
