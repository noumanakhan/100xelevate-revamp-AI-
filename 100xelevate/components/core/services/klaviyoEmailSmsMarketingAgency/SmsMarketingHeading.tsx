import React from "react";

export const SmsMarketingHeading = ({ areaName = "" }: { areaName?: string }) => {
  return (
    <div className="flex flex-col gap-4 md:py-[64px] py-[20px] md:px-8 px-4  w-full ">
      <h3 className="text-[14px] leading-[17px] text-black uppercase">
        Who We Are
      </h3>
      <h1 className="xl:text-[52px] md:text-[44px] text-[36px] font-semibold xl:leading-[58px] md:leading-[46px] leading-[39px]">
        {areaName ? (
          <>
            <span className="hcolor2">Klaviyo Email &amp; SMS Marketing Agency in</span>{" "}
            {areaName} <span className="hcolor2">That Drives Conversions</span>
          </>
        ) : (
          <>
            <span className="hcolor2">Klaviyo Email &amp; SMS Marketing Agency</span>{" "}
            That Drives Conversions
          </>
        )}
      </h1>
    </div>
  );
};
