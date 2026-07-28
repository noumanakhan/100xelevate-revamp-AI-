import React from "react";
import { ShopifyAgency } from "../shopifyAppDevelopmentAgency/ShopifyAgency";

const TechPartnership = ({ areaName = "USA" }: { areaName?: string }) => {
  return (
    <div>
      <ShopifyAgency
        bgColor="bg-white"
        containerMaxWidth="max-w-[1300px]"
        containerGapClass=" md:gap-[74px] gap-[20px]"
        mainImageAdditionalClass=" mx-auto "
        showLogo={false}
        headingMaxWidthClass="max-w-full"
        topSubHeading="Headless Shopify Agency"
        heading={
          <>
            <h1 className="wmd:text-[48px] md:text-[40px] text-[32px] font-semibold mx-auto wmd:leading-[58px] md:leading-[46px] leading-[40px]">
              Tech partnerships built for headless ecommerce
            </h1>
          </>
        }
        showSubHeading={false}
        description={
          <>
            A strong headless Shopify build relies on the right tools. We work
            with Netlify, Shogun Frontend, Oxygen, React, Klevu, Contentful,
            Sanity, and other API-driven platforms to deliver fast, scalable
            storefronts. These tools work smoothly with Shopify Plus and support
            the level of customization required for modern ecommerce, whether
            your store serves local shoppers in the {areaName} or operates
            internationally.
          </>
        }
        descriptionMaxWidthClass="max-w-[625px]"
        mainImage={{
          src: "/images/2025/11/headlesspartners-1024x1014.png",
          alt: "Tech partnerships built for headless ecommerce",
          width: 1000,
          height: 1200,
        }}
        showquote={false}
        buttonHref="/book-a-demo"
        buttonText="Get in touch"
        contentDivClasses="md:gap-5 gap-4 xl:justify-center"
        contentDivFlexClasses="flex-col md:flex-row"
      />
    </div>
  );
};

export default TechPartnership;
