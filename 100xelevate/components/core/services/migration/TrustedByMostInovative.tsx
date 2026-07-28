import React from "react";
import { LogoMarquee } from "../LogoMarquee";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { LogosSection } from "../shopifyStoreSpeed/LogosSection";

export const TrustedByMostInovative = () => {
  return (
    <div className="w-full bg-[#F7F7F7] mx-auto md:px-[32px] px-6">
      <div className="w-full max-w-[1200px] mx-auto md:pt-[96px] md:pb-10 py-[32px] flex flex-col gap-5">
        <div className="md:p-[30px] md:pb-2.5 p-[20px] flex flex-col md:gap-[50px] gap-[20px] items-center bg-white overflow-hidden">
          <h1 className="text-center w-full max-w-[842px] wmd:text-[48px] wmd:leading-[58px] font-semibold md:text-[40px] md:leading-[46px] text-[32px] leading-[38px]">
            Trusted by the Worlds Most Innovative Brands
          </h1>

          <LogoMarquee duration="30s" />
          <LogoMarquee direction="right" duration="30s" />
          <LogoMarquee duration="30s" />
        </div>

        <div className="self-center md:mt-10 mt-3">
          <ButtonLink href={"/book-a-demo"}>Book a call today! </ButtonLink>
        </div>
        <LogosSection />
      </div>
    </div>
  );
};
