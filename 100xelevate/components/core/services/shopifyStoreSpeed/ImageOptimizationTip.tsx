import React from "react";
import { ImageStatsCard } from "../ImageStatsCard";

export const ImageOptimizationTip = () => {
  return (
    <div className="md:px-8 px-4 w-full ">
      <div className="w-full mx-auto max-w-345 md:py-24 py-8 flex flex-col wmd:gap-[50px] md:gap-[64px] gap-5">
        <h1 className="w-full mx-auto wmd:text-[48px] wmd:leading-[58px] text-center font-semibold md:text-[40px] md:leading-[46px] text-[32px] leading-[38px]">
          Useful tips for speed optimization
        </h1>

        <ImageStatsCard reverse bgColor="bg-[#F7F7F7]" />
      </div>
    </div>
  );
};
