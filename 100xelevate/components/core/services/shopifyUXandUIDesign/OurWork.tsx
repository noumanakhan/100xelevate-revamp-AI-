import React from "react";

export const OurWork = ({ showDate = true }: { showDate?: boolean }) => {
  return (
    <section className="w-full  md:px-8 px-4">
      <div className="max-w-max mx-auto md:pt-[86px] pt-[30px] pb-[20px] flex flex-col md:items-center items-start md:gap-[20px] gap-[20px] ">
        <h2 className="wmd:text-[48px] text-[32px] font-medium text-start  wmd:leading-[58px] leading-[38px] max-w-[595px]">
          Our Work
        </h2>

        {showDate && (
          <h3
            id="dynamic-date"
            className="wmd:mb-[50px] md:[30px] mb-0 text-center text-[12px] md:text-[16px] font-medium leading-tight text-black underline decoration-black underline-offset-1 "
          >
            Updated: 26th of April 2026
          </h3>
        )}
      </div>
    </section>
  );
};
