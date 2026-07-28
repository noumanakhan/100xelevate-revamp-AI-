import React from "react";
import { ShopifyAgency } from "../shopifyAppDevelopmentAgency/ShopifyAgency";

const HeadlessShopifyAgency = ({ areaName = "USA" }: { areaName?: string }) => {
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
              Headless ecommerce powered by Shopify Plus
            </h1>
          </>
        }
        showSubHeading={false}
        description={
          <>
            A headless Shopify store connects a custom frontend to Shopify Plus
            through the Storefront API. This improves speed, SEO, and UX while
            enabling features not possible with traditional themes. Shopify Plus
            manages checkout, orders, discounts, and customer data; your
            frontend controls design and performance. Brands in the {areaName}{" "}
            benefit from this structure when they need stronger performance,
            custom journeys, or deeper integrations that support long-term
            growth.
          </>
        }
        descriptionMaxWidthClass="max-w-[625px]"
        mainImage={{
          src: "/images/2025/11/shopifyplusheadless-e1763139997397-1024x1020.png",
          alt: "Headless ecommerce powered by Shopify Plus",
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

export default HeadlessShopifyAgency;
