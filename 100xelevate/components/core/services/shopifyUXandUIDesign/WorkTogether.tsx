import React from "react";
import { ContactForm } from "../../contact-us/ContactForm";

export const WorkTogether = ({subHeading , description } : { subHeading?: string, description?: string }) => {
  return (
    <section className="w-full  md:px-8 px-4 md:pt-[86px] pt-[32px]">
      <div className="w-full max-w-max mx-auto  flex flex-col gap-[20px]">
        <h1 className="wmd:text-[48px] text-[32px] font-semibold text-start wmd:leading-[58px] leading-[38px]">
          Let’s work together
        </h1>

        <h2 className="wmd:text-[24px] text-[20px] font-semibold text-start uppercase wmd:leading-[30px] leading-[24px]">
          { subHeading || "Let’s Elevate Your Shopify UX and UI Design"}
        </h2>
        <p className="mb-[14px] text-[14px] leading-[20px] text-[#707070]">
          { description || "We collaborate with Shopify brands that want a cleaner, clearer, and more effective user experience. If you’re ready to strengthen navigation, improve product discovery, and refine your storefront for higher performance, we’re here to help."}
        </p>
      </div>

      <div className="lg:mt-14 md:mt-[70px] mt-0  ">
        <ContactForm />
      </div>
    </section>
  );
};
