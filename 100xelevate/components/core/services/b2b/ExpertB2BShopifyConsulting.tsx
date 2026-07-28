import Image from "next/image";
import React from "react";

export const ExpertB2BShopifyConsulting = () => {
  return (
    <div className=" mx-auto w-full md:px-8 px-4 bg-[#F7F7F7]">
      <div className="w-full max-w-[1400px] md:py-[86px] py-[32px] flex flex-col wmd:flex-row wxl:gap-[74px] xl:gap-[64px] md:gap-8 gap-4 mx-auto">
        <div className=" w-full wmd:w-1/2 flex flex-col justify-center md:p-[10px] gap-5">
          <h2 className="wmd:text-[48px] wmd:leading-[58px] font-semibold md:text-[40px] md:leading-[46px] text-[32px] leading-[38px] w-full md:max-w-[595px]">
            Expert B2B Shopify Consulting
          </h2>
          <p className="md:text-[16px] md:leading-[20px] text-[14px] leading-[22px]  text-[#707070] max-w-[529px]">
            Gain insights on best practices for B2B e-commerce, including
            effective channel integration, customer segmentation, and
            personalized marketing strategies.
          </p>
        </div>

        <div className="w-full wmd:w-1/2  p-[10px]">
          <Image
            src="/images/2025/10/image_150_af8ff043-c1f8-489b-b383-b63ba64af2f5.webp"
            alt="B2B logistics and shipping visualization representing Shopify eCommerce consulting solutions"
            width={600}
            height={400}
            className="w-full h-auto  object-cover"
          />
        </div>
      </div>
    </div>
  );
};
