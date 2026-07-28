import React from "react";
import { ShopifyAgency } from "../shopifyAppDevelopmentAgency/ShopifyAgency";

const FullControl = ({ areaName = "USA" }: { areaName?: string }) => {
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
              Full control with streamlined content management
            </h1>
          </>
        }
        showSubHeading={false}
        description={
          <>
            A headless Shopify build allows brands in the {areaName} to manage
            content through systems like Sanity, Contentful, or Shopify
            Hydrogen, while Shopify Plus handles products, orders, and store
            operations. Shopify continues to manage products, orders, and store
            settings, while platforms like Sanity, Contentful, or Hydrogen
            handle your content. This structure keeps updates efficient and
            performance stable as your store grows.
          </>
        }
        descriptionMaxWidthClass="max-w-[625px]"
        mainImage={{
          src: "/images/2025/11/shogunfrontend-1536x1304.png",
          alt: "Full control with streamlined content management",
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

export default FullControl;
