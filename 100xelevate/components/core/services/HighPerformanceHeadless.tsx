import { ButtonLink } from "@/components/shared/ButtonLink";
import Image from "next/image";
import React from "react";

const HighPerformanceHeadless = ({
  areaName = "USA",
  showShopifyLogos = true,
  heading = "High-performance headless Shopify stores built for growth",
  headingMaxWidth = "max-w-[886px]",
  description = `100xelevate works with ecommerce brands across ${areaName} to design, develop, and support high-performance headless Shopify and Shopify Plus stores. Our team builds fast, flexible, API-driven storefronts that help ${areaName} merchants improve speed, strengthen UX, and scale with confidence. We understand the needs of businesses operating in the ${areaName}, and we tailor each headless Shopify build to fit the regional market, customer expectations, and competitive landscape.`,
  buttonText = "Our work",
  buttonLink = "/our-work",
}: {
  areaName?: string;
  showShopifyLogos?: boolean;
  heading?: string;
  headingMaxWidth?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}) => {
  return (
    <div className="md:px-8 px-4 md:py-[86px] py-8 w-full ">
      <div
        className={`flex-1 flex  flex-col justify-center items-center wxl:gap-5 xl:gap-16 md:gap-8 gap-4 min-w-0 w-full mx-auto max-w-[1400px]`}
      >
        {/* Shopify Plus logo */}
        {showShopifyLogos && (
          <div className="flex items-center justify-center gap-2.5">
            <Image
              src="/images/2025/10/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-1.svg"
              alt="Official Shopify partner"
              width={198}
              height={56}
              className="h-auto w-[60px] md:w-[100px]"
              priority
              unoptimized
            />
            <span className="h-[22px] w-px bg-black " aria-hidden="true" />
            <Image
              src="/images/2025/10/65d7a4f1e38f693a0ad31c1e_shopify_plus.png"
              alt="Shopify Plus"
              width={640}
              height={142}
              className="h-auto w-[70px] md:w-[110px]"
              priority
            />
          </div>
        )}

        {/* Heading */}
        <h1
          className={`${headingMaxWidth} xl:text-[48px] md:text-[40px] text-[32px] font-semibold text-center xl:leading-[58px] md:leading-[46px] leading-[40px]`}
        >
          {heading}
        </h1>

        {/* Description */}
        <p
          className={`text-[#707070] md:text-base text-[14px] md:leading-5 leading-[22px] max-w-[625px] text-center`}
        >
          {description}
        </p>

        {/* CTA */}
        <div className={`flex flex-wrap md:mt-4 mt-0`}>
          <ButtonLink
            href={buttonLink}
            className="px-[20px] py-[12px] h-[43px]"
          >
            {buttonText}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default HighPerformanceHeadless;
