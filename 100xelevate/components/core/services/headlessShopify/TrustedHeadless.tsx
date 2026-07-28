import React from "react";
import { ShopifyAgency } from "../shopifyAppDevelopmentAgency/ShopifyAgency";

const TrustedHeadless = ({ areaName = "USA" }: { areaName?: string }) => {
  return (
    <div>
      <ShopifyAgency
        reverseOrder={true}
        containerGapClass=" wxl:gap-[74px] xl:gap-[64px] md:gap-8 gap-[30px]"
        mainImageAdditionalClass=" mx-auto "
        showLogo={false}
        headingMaxWidthClass="max-w-full"
        topSubHeading="Headless Shopify Agency"
        heading={
          <>
            <h1 className="wmd:text-[48px] md:text-[40px] text-[32px] font-semibold mx-auto wmd:leading-[58px] md:leading-[46px] leading-[40px]">
              We are a trusted headless Shopify Plus agency in the {areaName}
            </h1>
          </>
        }
        showSubHeading={false}
        description={
          <>
            As a headless Shopify Plus agency serving the {areaName}, we build
            fast, flexible storefronts powered by the Storefront API. Our work
            includes planning, design, development, integrations, and
            optimization, ensuring a scalable headless Shopify setup tailored to
            your goals. If you’re upgrading to a headless architecture, we can
            help you build it the right way.
          </>
        }
        descriptionMaxWidthClass="max-w-[625px]"
        mainImage={{
          src: "/images/2025/11/info5image-1024x847.png",
          alt: "Trusted headless Shopify Plus agency in the {areaName}",
          width: 1000,
          height: 1200,
        }}
        showquote={false}
        buttonHref="/book-a-demo"
        buttonText="Get in touch"
        contentDivClasses="md:gap-5 gap-4 lg:justify-center"
      />
    </div>
  );
};

export default TrustedHeadless;
