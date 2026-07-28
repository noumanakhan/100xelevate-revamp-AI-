import { ButtonLink } from "@/components/shared/ButtonLink";
import React from "react";

export const ReadyToElevate = () => {
  return (
    <div className="md:px-8 px-4">
      <div className="max-w-[1200px] md:pb-[96px] pb-[32px] mx-auto  ">
        <div className=" p-[30px] flex xsm:flex-row flex-col gap-5 justify-between xsm:items-center bg-[#F7F7F7]">
          <h1 className="wmd:text-[32px] wmd:leading-[40px] md:text-[18px] md:leading-[27px] text-[22px] leading-[30px] max-md:max-w-[263px]">
            <b>Ready to Elevate </b>
            <br />
            Your B2B eCommerce Experience?
          </h1>

          <ButtonLink href="/book-a-demo" className="whitespace-nowrap w-fit">
            Book a call today!
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};
