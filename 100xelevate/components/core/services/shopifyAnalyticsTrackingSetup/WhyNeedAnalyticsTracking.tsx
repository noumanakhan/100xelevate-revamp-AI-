import React from "react";
import { WhyChooseShopifyPlus } from "../WhyChooseShopifyPlus";

const benefits = [
  {
    title: "Understand real performance",
    description:
      "Accurate analytics reveal which campaigns, channels, and products drive results, instead of relying on assumptions or incomplete reporting.",
    image: "/images/2025/02/Step_1.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Map the customer path",
    description:
      "Tracking shows how shoppers browse, add items, and check out, helping you strengthen every step of the buying experience.",
    image: "/images/2025/02/Step_2.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Fix hidden leaks",
    description:
      "Detailed events expose friction inside the funnel, letting you address issues that quietly reduce conversions and average order value.",
    image: "/images/2025/02/Step_3.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Improve ad returns",
    description:
      "Verified attribution helps you focus your budget on proven channels and audiences, rather than spending based on guesswork or outdated data.",
    image: "/images/2025/11/download-37.svg",
    alt: "Global expansion icon",
    width: 63.83,
    height: 46.92,
    mobileWidth: 68,
    mobileHeight: 50,
  },
  {
    title: "Stop data gaps",
    description:
      "Partial setups miss key actions and purchases, which leads to misleading insights, poor planning, and wasted opportunities to improve.",
    image: "/images/2025/11/Step_3.svg-1.svg",
    alt: "Integration support icon",
    width: 63.83,
    height: 56.31,
    mobileWidth: 68,
    mobileHeight: 60,
  },
  {
    title: "Grow with confidence",
    description:
      "A reliable measurement foundation supports better decisions as your store scales products, audiences, and acquisition strategies.",
    image: "/images/2025/11/Step_3-1.svg-1-1.svg",
    alt: "Security and reliability icon",
    width: 63.83,
    height: 56.31,
    mobileWidth: 68,
    mobileHeight: 60,
  },
];

export const WhyNeedAnalyticsTracking = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <WhyChooseShopifyPlus
        title="Why Shopify Brands Need Analytics and Tracking Setup"
        benefits={benefits}
        titleClassName="max-w-[811px] wmd:text-[48px] md:text-[40px] text-[32px] font-semibold wmd:leading-[58px] md:leading-[46px] leading-[38px]"
        gridMinHeight="min-h-[110px]"
      />
    </div>
  );
};
