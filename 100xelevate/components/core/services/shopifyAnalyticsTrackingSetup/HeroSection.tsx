import React from "react";
import { ShopifyAgency } from "../shopifyAppDevelopmentAgency/ShopifyAgency";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div>
      <ShopifyAgency
        mainImageAdditionalClass="max-w-[496px] mx-auto"
        bgColor="bg-white"
        logoSection={
          <div className="flex gap-[10px] items-center">
            <Image
              src="/images/2025/10/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-1.svg"
              alt="Shopify Plus"
              width={198}
              height={56}
              className="h-auto w-auto md:max-w-[100px] max-w-[60px] "
              priority
              unoptimized
            />
            <div className="w-[1px] h-5 bg-black" />
            <Image
              src="/images/2025/10/65d7a4f1e38f693a0ad31c1e_shopify_plus.png"
              alt="Shopify Plus"
              width={198}
              height={56}
              className="h-auto w-auto md:max-w-[110px] max-w-[70px] "
              priority
              unoptimized
            />
          </div>
        }
        headingMaxWidthClass="max-w-full"
        heading={
          <>
            <h1 className="xl:text-[48px] md:text-[40px] text-[32px] font-semibold mx-auto xl:leading-[58px] md:leading-[46px] leading-[40px]">
              Shopify{" "}
              <span className="text-[#6F6F6F]"> Analytics and Tracking </span>
              Setup for Accurate Insights and Sustainable Growth
            </h1>
          </>
        }
        showSubHeading={false}
        description="We configure accurate analytics and tracking for Shopify using GA4, Google Tag Manager, and complete ecommerce event measurement. Our setup records product views, add-to-cart, checkout steps, and purchases with verified accuracy, so you can evaluate performance, understand customer behaviour, and make informed decisions that support growth."
        descriptionMaxWidthClass="max-w-[625px]"
        mainImage={{
          src: "/images/2025/10/migration-shopify-right-image-e1766527378796.webp",
          alt: "Shopify SEO Services",
          width: 496,
          height: 717,
        }}
        showquote={false}
        buttonHref="/book-a-demo"
        buttonText="Book a call"
      />
    </div>
  );
};
