import React from "react";
import Link from "next/link";
import { ButtonLink } from "@/components/shared/ButtonLink";

const plans = [
  {
    title: "Single Page Audit",
    price: "$2,200",
    priceLabel: "Per Page",
    pages: "1 Page Included",
    description: "Home, Collection, Product, Cart or Account Pag",
  },
  {
    title: "Full Bundle",
    price: "$1,599",
    priceLabel: "Per Page",
    pages: "5 Page Included",
    description: "Home, Collection, Product, Cart or Account Pag",
  },
];

export const AffordableBundles = () => {
  return (
    <section className="bg-[#F7F7F7] md:px-8 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center md:py-[96px] py-[32px] gap-5">
        {/* Heading */}
        <h2 className="text-center wmd:text-[48px] wmd:leading-[58px] font-semibold md:text-[40px] md:leading-[46px] text-[32px] leading-[38px] max-w-[842px]">
          Affordable Bundles for Maximum Impact Act Now and Save
        </h2>

        {/* Subheading */}
        <p className="text-[#707070] md:text-base text-sm md:leading-5 leading-[22px]">
          Choose your audit level
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:my-[30px] my-0">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="relative bg-white flex flex-col gap-5 lg:p-[30px] p-5"
            >
              <div className="flex gap-5 items-center justify-between">
                {/* Plan Title */}
                <h2 className="wmd:text-[24px] text-[20px] font-semibold wmd:leading-[30px] leading-[24px] text-black">
                  {plan.title}
                </h2>

                {/* Price — absolutely positioned top-right */}
                <div className="lg:leading-[30px] wmd:leading-[26px] leading-[24px]">
                  <span className="lg:text-[24px]   wmd:text-[18px]  text-[16px]  font-semibold text-[#707070] ">
                    {plan.price}
                  </span>{" "}
                  <span className="text-[16px] font-semibold text-[#707070]">
                    {plan.priceLabel}
                  </span>
                </div>
              </div>

              <div>
                {/* Pages included */}
                <p className="text-[#707070] text-sm leading-5">{plan.pages}</p>

                {/* Page types */}
                <p className="text-[#707070] text-base leading-5 mt-1">
                  {plan.description}
                </p>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <ButtonLink href="/request-a-free-audit/">
                  Get your audit now
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center text-[#707070] md:text-base text-sm md:leading-5 leading-[22px]">
          <p>Heat maps, data insights, and prototypes included.</p>
          &nbsp;
          <p>
            <strong className="font-semibold">Deal Ends in 48 Hours</strong>
          </p>
          &nbsp;
          <p>
            Lock in bundle pricing before it rises. Limited to 10 spots this
            month—first come, first served.
          </p>
        </div>
      </div>
    </section>
  );
};
