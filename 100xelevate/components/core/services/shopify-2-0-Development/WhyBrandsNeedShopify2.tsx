import React from 'react'
import { WhyChooseShopifyPlus } from '../WhyChooseShopifyPlus';
const benefits = [
  {
    title: "Faster Store Performance",
    description:
      "A cleaner theme structure and faster rendering improve load speed, reduce bounce risk, and create a smoother shopping experience.",
    image: "/images/2025/02/Step_1.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Flexible Page Builder",
    description:
      "Sections on every page let your team adjust layouts quickly, supporting faster launches and easier updates across campaigns.",
    image: "/images/2025/02/Step_2.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Cleaner Theme Architecture",
    description:
      "A more organized codebase reduces errors and improves stability, giving your store a strong foundation that scales with growth.",
    image: "/images/2025/02/Step_3.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Better Merchandising Control",
    description:
      "Custom templates for products, collections, and landing pages support clearer storytelling and smoother customer buying paths.",
    image: "/images/2025/11/download-37.svg",
    alt: "Global expansion icon",
    width: 63.83,
    height: 46.92,
    mobileWidth: 68,
    mobileHeight: 50,
  },
  {
    title: "Improved App Integration",
    description:
      "App blocks install cleanly with fewer conflicts, keeping your store lighter, easier to maintain, and better aligned with Shopify updates.",
    image: "/images/2025/11/Step_3.svg-1.svg",
    alt: "Integration support icon",
    width: 63.83,
    height: 56.31,
    mobileWidth: 68,
    mobileHeight: 60,
  },
  {
    title: "Future-Proof Store Setup",
    description:
      "Shopify 2.0 supports new features, cleaner integrations, and long-term improvements, helping your store stay flexible and ready to grow.",
    image: "/images/2025/11/Step_3-1.svg-1-1.svg",
    alt: "Security and reliability icon",
    width: 63.83,
    height: 56.31,
    mobileWidth: 68,
    mobileHeight: 60,
  },
];

const WhyBrandsNeedShopify2 = () => {
  return (
    <div className='bg-[#F7F7F7]'>
      <WhyChooseShopifyPlus
        title="Why Shopify Brands Need Shopify 2.0"
        mainDiscription='Shopify 2.0 gives brands a faster, cleaner, and more flexible foundation for growth. It removes many of the limitations of older themes and introduces a modern structure your team can work with easily.'
        benefits={benefits}
        titleClassName="w-full wmd:text-[48px] md:text-[40px] text-[32px] font-semibold wmd:leading-[58px] md:leading-[46px] leading-[38px]"
        gridMinHeight="min-h-[110px]"
        descriptionClasses='md:text-center w-full mx-auto max-w-[841px] leading-[22px] text-[14px] md:leading-[20px] md:text-[16px] text-[#707070]'
      />
    </div>
  )
}

export default WhyBrandsNeedShopify2