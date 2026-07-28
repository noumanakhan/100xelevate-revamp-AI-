import React from "react";
import { ShopifyAgency } from "../shopifyAppDevelopmentAgency/ShopifyAgency";

export const MigrationHeroSec = () => {
  return (
    <div>
      <ShopifyAgency
        showLogo={false}
        bgColor="bg-white"
        heading={
          <>
            <h1>
              Seamless <span className="hcolor2">Migration to Shopify </span>
              Your Store’s Next Destination
            </h1>
          </>
        }
        headingMaxWidthClass="max-w-full"
        showSubHeading={false}
        description={
          <p>
            Your business deserves a platform designed for growth, scalability,
            and seamless performance. At 100xelevate, we make transitioning from{" "}
            <strong>Magento</strong>, <strong>BigCommerce</strong>,{" "}
            <strong>WooCommerce</strong>, <strong>Salesforce</strong>,{" "}
            <strong>Lightspeed</strong>, <strong>or any platform</strong> to{" "}
            <strong>Shopify</strong> simple, secure, and hassle-free.
          </p>
        }
        descriptionMaxWidthClass="max-w-[625px]"
        buttonText="Book a free consultation"
        buttonHref="/book-a-demo/"
        mainImage={{
          src: "/images/2025/10/migration-shopify-right-image-e1766527378796.webp",
          alt: "Shopify migration dashboard showing Olaplex store audit and analytics",
          width: 905,
          height: 717,
        }}
        mainImageAdditionalClass="max-w-[496px] mx-auto"
        showquote={false}
      />
    </div>
  );
};
