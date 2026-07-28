import Image from "next/image";
import React from "react";

const technologies = [
  { category: "Backend", tools: "Node.js · Laravel · GraphQL · PHP" },
  { category: "Frontend", tools: "React · Vue.js · Polaris · Tailwind" },
  { category: "Database", tools: "PostgreSQL · MongoDB · Firebase" },
  {
    category: "APIs",
    tools: "Shopify Admin API · Storefront API · Custom REST APIs",
  },
  {
    category: "DevOps & Testing",
    tools: "AWS · Render · Jest · GitHub Actions",
  },
];

export const TechnologiesWeUse = () => {
  return (
    <div className="w-full bg-white md:px-8 px-4">
      <div className="w-full max-w-[1400px] mx-auto md:py-24 py-8">
        <h2 className="font-semibold md:text-center wmd:text-[48px] wmd:leading-[58px] md:text-[40px] md:leading-[46px] text-[32px] leading-[38px] mb-[24px] md:mb-[64px]">
          Technologies We Use
        </h2>

        <div className="flex flex-col wmd:flex-row md:gap-[45px] gap-6">
          {/* Left: Technologies Table */}
          <div className="flex-1 my-auto max-w-[609px] md:min-w-[367px]">
            {/* Header row — hidden on mobile */}
            <div className="md:gap-[10px] gap-[20px] flex flex-col">
              <div className="hidden md:flex  md:gap-[10px] ">
                <div className="w-2/5 font-bold xl:text-[18px] xl:leading-[27px] text-[16px] md:leading-[22px] leading-[24px]">
                  Category
                </div>
                <div className="flex-1 font-bold xl:text-[18px] xl:leading-[27px] text-[16px] md:leading-[22px] leading-[24px]">
                  Tools &amp; Frameworks
                </div>
              </div>

              {/* Data rows */}
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row  md:gap-[10px] "
                >
                  <div className="w-full md:w-2/5 font-bold xl:text-[18px] xl:leading-[27px] text-[16px] md:leading-[22px] leading-[24px]">
                    {tech.category}
                  </div>
                  <div className="flex-1 text-[16px] leading-5.5 text-[#3B3B3B]">
                    {tech.tools}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="max-w-111.75 w-full  flex items-center justify-center mx-auto">
            <Image
              src="/images/2025/12/image-69.webp"
              width={447}
              height={443}
              alt="Shopify app ecosystem diagram featuring integrations with React, Oxygen, and NetSuite for custom Shopify app development."
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
