import React from "react";
import Image from "next/image";

const migrationDataPoints = [
  {
    title: "Products",
    description:
      "Each product has multiple variants with unique descriptions, SKUs, and updated inventory.",
  },
  {
    title: "Orders",
    description:
      "The system tracks full purchase history, manages recurring payments, and stores customer information.",
  },
  {
    title: "Customers",
    description:
      "The platform manages user profiles, organized groups, and active subscriptions.",
  },
  {
    title: "Content",
    description:
      "The system includes CMS pages, blog posts, and customer reviews.",
  },
  {
    title: "SEO",
    description:
      "The platform handles redirects, manages meta data, and tracks search rankings.",
  },
];

export const ProductSection = () => {
  return (
    <section className="w-full bg-[#F7F7F7] px-4 md:px-8 ">
      <div className="mx-auto md:py-[96px] py-8 max-w-[1400px] flex wmd:flex-row  flex-col items-center">
        <div className="w-full wmd:w-1/2 md:p-10 p-5">
          <div className="h-full w-full ">
            <Image
              src="/images/2025/10/Group-19-1.png"
              alt="Shopify product page with subscription, variant, and customer data features"
              width={630}
              height={635}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="w-full wmd:w-1/2 bg-white wxl:px-20 wxl:py-10 md:px-10 md:py-[60px] p-5 flex flex-col ">
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
      </div>
    </section>
  );
};
