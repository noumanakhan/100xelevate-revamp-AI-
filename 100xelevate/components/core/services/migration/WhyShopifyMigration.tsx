import Image from "next/image";
import React from "react";

const migrationDataPoints = [
  {
    title: "Scalability and Performance",
    description:
      "Shopify Plus handles high-volume sales with 99.99% uptime and blazing-fast page loads.",
  },
  {
    title: "Growth Tools",
    description:
      "Shopify’s one-click Shop Pay checkout converts up to 36% better than competitors.",
  },
  {
    title: "Cost-Effective Ownership",
    description:
      "With a lower total cost of ownership than Magento, Salesforce, and others, Shopify helps you scale without unexpected expenses.",
  },
  {
    title: "Customization at Scale",
    description:
      "Leverage Shopify’s drag-and-drop editor, APIs, and 10,000+ apps to customize your store no developer dependency required.",
  },
];

export const WhyShopifyMigration = () => {
  return (
    <section className="w-full bg-[#F7F7F7] px-4 md:px-8 ">
      <div className="mx-auto md:py-[96px] py-8 max-w-[1400px] flex wmd:flex-row  flex-col items-center">
        <div className="w-full wmd:w-1/2 bg-white wxl:px-20 wxl:py-10 md:px-10 md:py-[60px] p-5 flex flex-col ">
          <h1 className="font-semibold wmd:text-[48px] wmd:leading-[58px] md:text-[40px] md:leading-[46px] text-[32px] leading-[38px] md:text-start text-center">
            Why Shopify?
          </h1>
          {migrationDataPoints.map((item) => (
            <article
              key={item.title}
              className="py-7 border-b border-[#0000001A]"
            >
              <h3 className="mt-2 md:mb-3 mb-2 font-medium xl:text-[20px] text-[16px] leading-[1.2]">
                {item.title}
              </h3>
              <p className="md:text-[16px] text-[14px] wxl:leading-[27px] leading-[22px] font-normal text-brand-gray-alt">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="w-full wmd:w-1/2 md:p-10 p-5">
          <div className="h-full w-full ">
            <Image
              src="/images/2025/10/Group-17-2-768x791.png"
              alt="Shopify product page with subscription, variant, and customer data features"
              width={630}
              height={635}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
