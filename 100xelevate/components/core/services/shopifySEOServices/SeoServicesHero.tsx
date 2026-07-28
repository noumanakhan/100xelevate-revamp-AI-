import React from "react";
import { ShopifyAgency } from "../shopifyAppDevelopmentAgency/ShopifyAgency";
import Image from "next/image";

export const SeoServicesHero = () => {
  return (
    <div>
      <ShopifyAgency
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
              Shopify <span className="text-[#6F6F6F]"> SEO Services </span>
              for Stronger Visibility and Long-Term Growth
            </h1>
          </>
        }
        showSubHeading={false}
        description="Our Shopify SEO services strengthen how search engines read, crawl, and rank your store by improving technical setup, on-page structure, site architecture, internal linking, performance, and structured data. We fix indexation problems, refine product and collection information, and remove duplicate paths to build a stable foundation that supports long-term visibility and steady organic growth. All work follows a clear, data-led process backed by reliable tools and ongoing performance tracking."
        descriptionMaxWidthClass="max-w-[625px]"
        mainImage={{
          src: "/images/2025/12/Group-5-e1766787217496.webp",
          alt: "Shopify SEO Services",
          width: 905,
          height: 717,
        }}
        showquote={false}
        buttonHref="/book-a-demo"
        buttonText="Book a call"
      />
    </div>
  );
};
