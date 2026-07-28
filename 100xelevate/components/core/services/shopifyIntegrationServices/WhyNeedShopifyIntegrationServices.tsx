import React from "react";
import { WhyChooseShopifyPlus } from "../WhyChooseShopifyPlus";

const benefits = [
  {
    title: "Reduce Manual Workload",
    description:
      "Automated data flow removes repetitive tasks and human errors, helping teams manage higher order volumes with less operational effort.",
    image: "/images/2025/02/Step_1.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Improve Inventory Accuracy",
    description:
      "Real-time stock syncing across Shopify, ERPs, and warehouses prevents overselling and fulfillment inconsistencies.",
    image: "/images/2025/02/Step_2.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Faster Order Processing",
    description:
      "Orders route instantly to ERPs and 3PLs, accelerating fulfillment, reducing delays, and ensuring a smoother delivery experience for customers.",
    image: "/images/2025/02/Step_3.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Lower Operational Costs",
    description:
      "Accurate data, fewer touchpoints, and automated workflows reduce labor time, prevent costly discrepancies, and streamline everyday operations.",
    image: "/images/2025/11/download-37.svg",
    alt: "Global expansion icon",
    width: 63.83,
    height: 46.92,
    mobileWidth: 68,
    mobileHeight: 50,
  },
  {
    title: "Build a Scalable System",
    description:
      "A connected backend supports higher order volume, complex catalogs, and multi-location fulfillment without adding operational strain.",
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

const WhyNeedShopifyIntegrationServices = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <WhyChooseShopifyPlus
        title="Why Integrations Matter for Shopify Stores"
        benefits={benefits}
        titleClassName="max-w-[811px] wmd:text-[48px] md:text-[40px] text-[32px] font-semibold wmd:leading-[58px] md:leading-[46px] leading-[38px]"
        gridMinHeight="min-h-[110px]"
      />
    </div>
  );
};

export default WhyNeedShopifyIntegrationServices;
