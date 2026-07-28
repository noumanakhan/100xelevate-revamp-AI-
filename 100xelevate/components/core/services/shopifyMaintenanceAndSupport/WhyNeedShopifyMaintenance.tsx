import React from 'react'
import { WhyChooseShopifyPlus } from '../WhyChooseShopifyPlus';

const benefits = [
  {
    title: "Avoid Gradual Performance Drops",
    description:
      "As products, theme code, and integrations expand, your store slows down. Regular optimisation helps prevent long-term declines in performance.",
    image: "/images/2025/02/Step_1.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Keep Everything Compatible",
    description:
      "Shopify releases updates frequently, and apps change often. Continuous compatibility checks prevent layout issues and broken functionality.",
    image: "/images/2025/02/Step_2.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Keep Checkout Secure and Functional",
    description:
      "Minor changes in themes or apps sometimes disrupt checkout steps. Ongoing reviews ensure secure, reliable checkout during all traffic periods.",
    image: "/images/2025/02/Step_3.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Maintain Fast Load Time",
    description:
      "Fast loading directly supports conversion and retention. Continuous speed improvements help your store perform well as traffic increases.",
    image: "/images/2025/11/download-37.svg",
    alt: "Global expansion icon",
    width: 63.83,
    height: 46.92,
    mobileWidth: 68,
    mobileHeight: 50,
  },
  {
    title: "Prevent Costly Downtime",
    description:
      "Most errors appear during campaigns, sales events, or peak demand. Planned maintenance lowers the chance of unplanned downtime when it matters.",
    image: "/images/2025/11/Step_3.svg-1.svg",
    alt: "Integration support icon",
    width: 63.83,
    height: 56.31,
    mobileWidth: 68,
    mobileHeight: 60,
  },
  {
    title: "Safeguard Custom Development",
    description:
      "Theme, app, and Shopify version updates are managed without losing custom work. Your store adopts new features while staying stable and secure.",
    image: "/images/2025/11/Step_3-1.svg-1-1.svg",
    alt: "Security and reliability icon",
    width: 63.83,
    height: 56.31,
    mobileWidth: 68,
    mobileHeight: 60,
  },
];

export const WhyNeedShopifyMaintenance = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <WhyChooseShopifyPlus
        title="Why Shopify Brands Need Maintenance and Support"
        benefits={benefits}
        titleClassName="max-w-[811px] wmd:text-[48px] md:text-[40px] text-[32px] font-semibold wmd:leading-[58px] md:leading-[46px] leading-[38px]"
        gridMinHeight="min-h-[110px]"
      />
    </div>
  )
}
