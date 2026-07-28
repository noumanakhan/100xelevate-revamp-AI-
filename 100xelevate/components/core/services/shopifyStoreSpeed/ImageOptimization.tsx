import React from "react";
import { ImageStatsCard } from "../ImageStatsCard";

const marqueeItems = [
  "100% Client Satisfaction",
  "Unsurpassed Quality",
  "World-Class Customer Service",
  "Unbeatable Integrity",
  "Timely Delivery of Superior Products",
  "Effective Collaboration",
];

export const ImageOptimization = () => {
  return (
    <div className="md:px-8 px-4 w-full bg-[#F7F7F7]">
      <div className="w-full mx-auto max-w-345 md:py-24 py-8 flex flex-col gap-5">
        {/* Main two-column grid */}
        <ImageStatsCard />

        {/* Why Work With + Marquee */}
        <div className="flex md:flex-row flex-col items-center justify-center gap-5 p-5 bg-black">
          <h2 className="wmd:text-[24px] font-semibold wmd:leading-[30px] text-[20px] leading-[24px] text-white w-full max-md:text-center md:max-w-[228px]">
            Why Work with
          </h2>
          <div className="overflow-hidden w-full">
            <div className="flex w-max animate-[marquee_100s_linear_infinite] gap-[25px]">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap text-sm text-white font-[400] shrink-0 flex items-center gap-[25px]"
                >
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
