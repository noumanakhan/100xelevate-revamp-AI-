import Image from "next/image";
import React from "react";

const tools = [
  {
    category: "Behavioral Tracking",
    tools: "Hotjar, Microsoft Clarity, Smartlook",
  },
  {
    category: "Testing & Experiments",
    tools: "Convert.com, Hypertask.ai, Google Optimize",
  },
  {
    category: "Analytics & Attribution",
    tools: "GA4, Shopify Analytics, Meta Pixel",
  },
  { category: "Collaboration & Reporting", tools: "Figma, Notion, Loom" },
];

export const WhoYouAllWork = ({ AreaName }: { AreaName?: string }) => {
  return (
    <section className=" md:px-8 px-4">
      <div className="max-w-max mx-auto md:py-24 py-8 flex flex-col items-center md:gap-[64px] gap-6">
        {/* Section heading */}
        <h2 className="xl:text-[48px] xl:leading-[58px]  md:text-[40px] md:leading-[46px] text-[32px] leading-[38px] text-center font-semibold w-full max-md:text-start">
          Who You&apos;ll Work With
        </h2>

        {/* Two-column layout */}
        <div className="flex flex-col-reverse wmd:flex-row md:gap-[45px] gap-6 w-full">
          {/* Left column — content */}
          <div className="flex flex-col md:gap-[30px] gap-4 wmd:w-[45%] w-full">
            <h3 className="wmd:text-[22px] md:text-[32px] text-[18px] font-semibold wmd:leading-[27px] md:leading-[38px] leading-[27px]">
              {AreaName
                ? `You’ll work with Shopify CRO specialists supporting ${AreaName}-based brands`
                : `You’ll be collaborating with expert Shopify CRO specialists in USA`}
            </h3>

            <p className="text-[#707070] md:text-base text-sm md:leading-5 leading-5.5">
              Our <b>CRO strategists, UX designers, and Shopify engineers</b>,
              have helped brands like <b>REV Gum</b>, <b>Andrea Maack</b>, and{" "}
              <b>Wild</b> increase conversions through data-driven optimization.
            </p>

            <p className="text-[#707070] md:text-base text-sm md:leading-5 leading-5.5">
              We combine creativity with analytics to craft seamless buying
              experiences that convert.
            </p>

            <h3 className="wmd:text-[22px] md:text-[32px] text-[18px] font-semibold wmd:leading-[27px] md:leading-[38px] leading-[27px]">
              CRO Tools That Power Growth
            </h3>

            {/* Tools table */}
            <div className="flex flex-col ">
              {/* Header row — hidden on mobile */}
              <div className="hidden md:flex gap-5 ">
                <div className="md:w-[40%] w-full ">
                  <p className="font-bold wxl:text-[18px] wxl:leading-[27px] text-[16px] leading-[22px] text-black">
                    Category
                  </p>
                </div>
                <div className="md:w-[60%] w-full ">
                  <p className="font-bold wxl:text-[18px] wxl:leading-[27px] text-[16px] leading-[22px] text-black">
                    Tools
                  </p>
                </div>
              </div>

              {/* Data rows */}
              {tools.map((row) => (
                <div
                  key={row.category}
                  className="flex flex-col md:flex-row gap-5"
                >
                  <div className="md:w-[40%] w-full  md:mt-[10px] mt-[20px]">
                    <p className="font-bold wxl:text-[18px] wxl:leading-[27px] text-[16px] leading-[22px] text-black">
                      {row.category}
                    </p>
                  </div>
                  <div className="md:w-[60%] w-full md:mt-[10px] mt-[20px]">
                    <p className="text-[#3B3B3B] text-[16px] leading-[22px]">
                      {row.tools}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — visual area */}
          <div className=" wmd:w-[55%] w-full">
            <Image
              src="/images/2025/10/annie-spratt-QckxruozjRg-unsplash-e1766787363105.webp"
              alt=""
              width={107000}
              height={2000}
              className="w-full md:h-full h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
