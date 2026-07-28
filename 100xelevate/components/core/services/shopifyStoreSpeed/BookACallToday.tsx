import React from "react";
import { ButtonLink } from "@/components/shared/ButtonLink";

export const BookACallToday = () => {
  return (
    <section className="w-full bg-white md:px-8 px-4">
      <div className="max-w-300 mx-auto md:py-[96px] py-8  ">
        <div className="flex flex-wrap items-center gap-5 bg-[#F7F7F7] p-[30px] justify-between">
          <h3 className="wmd:text-[32px] wmd:leading-[40px] md:text-[18px] md:leading-[27px] text-[22px] leading-[30px] font-normal text-[#333] ">
            Want to talk to a human?
            <br /> <b>Book a call Today!</b>
          </h3>
          <ButtonLink href="/book-a-demo">Book a call today!</ButtonLink>
        </div>
      </div>
    </section>
  );
};
