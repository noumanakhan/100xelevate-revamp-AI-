import React from "react";
import { LogoMarquee } from "../LogoMarquee";

export const BrandsLogo = () => {
  return (
    <div className="w-full bg-[#F7F7F7] mx-auto md:px-[32px] px-6">
      <div className="w-full max-w-[1200px] mx-auto md:py-[96px] py-[32px]">
        <div className="md:p-[30px] p-[20px] flex flex-col md:gap-[50px] gap-[20px] items-center bg-white overflow-hidden">
          <h1 className="text-center w-full max-w-[842px] wmd:text-[48px] wmd:leading-[58px] font-semibold md:text-[40px] md:leading-[46px] text-[32px] leading-[38px]">
            Trusted by the Worlds Most Innovative Brands
          </h1>

          <LogoMarquee />
          <LogoMarquee direction="right" />
          <LogoMarquee />
        </div>
      </div>
    </div>
  );
};
