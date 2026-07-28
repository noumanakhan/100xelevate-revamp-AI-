import React from "react";
import { ProcessItem } from "@/components/core/services/ProcessItem";
import {
  ProcessItemData,
  SHOPIFY_PLUS_DEVELOPMENT_PROCESS_ITEMS,
} from "@/constants/services/shopifyPlusDevelopmentService.constants";
import { ButtonLink } from "@/components/shared/ButtonLink";

interface DevelopmentProcessProps {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    link: string;
  };
  processItems?: readonly ProcessItemData[];
  bgColor?: string;
  stickyHeading?: boolean;
}

export const DevelopmentProcess = ({
  heading = "Our Shopify Plus Development Process",
  description,
  button,
  processItems = SHOPIFY_PLUS_DEVELOPMENT_PROCESS_ITEMS,
  bgColor = "bg-[#F7F7F7]",
  stickyHeading = true,
}: DevelopmentProcessProps) => {
  return (
    <section className={`w-full ${bgColor} md:px-8 px-4`}>
      <div
        className="mx-auto w-full md:py-[96px] py-[32px]"
        style={{ maxWidth: "1420px" }}
      >
        <div className="flex flex-col xl:gap-10 lg:gap-[44px] md:gap-[32px] gap-0 md:flex-row">
          <div
            className={`md:w-[41%] w-full max-w-[576px] z-50 flex flex-col gap-5 self-start ${
              stickyHeading ? "md:sticky" : ""
            }`}
            style={stickyHeading ? { top: "86px" } : undefined}
          >
            <h2
              className="font-semibold text-black z-50 text-start wmd:text-[48px] md:text-[40px] text-[32px] leading-[38px] md:leading-[46px] wmd:leading-[58px]"
            >
              {heading}
            </h2>
            {description && (
              <p className="md:text-[16px] text-[14px] leading-[22px] text-[#707070]">
                {description}
              </p>
            )}
            {button && (
              <div className="pt-4">
                <ButtonLink className=" w-fit" href={button.link} >
                {button.text}
              </ButtonLink>
              </div>
            )}
          </div>

          <div className="md:w-[57%] w-full max-w-[803px]">
            {processItems.map((option, i) => (
              <ProcessItem
                key={i}
                title={option.title}
                description={option.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
