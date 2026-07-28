import React from "react";
import { WhyChooseShopifyPlus } from "../WhyChooseShopifyPlus";

const benefits = [
  {
    title: "Improve Search Visibility",
    description:
      "Refined structure and clear content help search engines interpret your store accurately, improving visibility across important commercial searches.",
    image: "/images/2025/02/Step_1.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Gain Steady Organic Traffic",
    description:
      "With stronger optimisation in place, customers can find your store more easily, helping you maintain steady traffic without heavy ad spend.",
    image: "/images/2025/02/Step_2.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Enhance Site Performance",
    description:
      "Speed improvements, clean layouts, and stable technical elements create a smoother browsing experience and help users stay engaged longer.",
    image: "/images/2025/02/Step_3.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Stay Ahead of Competitors",
    description:
      "A well-optimised store is easier to discover and trust, helping you stay visible among competing brands and maintain a stronger position.",
    image: "/images/2025/11/download-37.svg",
    alt: "Global expansion icon",
    width: 63.83,
    height: 46.92,
    mobileWidth: 68,
    mobileHeight: 50,
  },
  {
    title: "Increase Customer Conversions",
    description:
      "Improved page structure, refined product details, and clearer metadata guide users more effectively and support better conversion outcomes.",
    image: "/images/2025/11/Step_3.svg-1.svg",
    alt: "Integration support icon",
    width: 63.83,
    height: 56.31,
    mobileWidth: 68,
    mobileHeight: 60,
  },
  {
    title: "Build Long-Term Growth",
    description:
      "A stable SEO foundation helps your store grow consistently, supporting reliable performance as your catalog expands and traffic increases.",
    image: "/images/2025/11/Step_3-1.svg-1-1.svg",
    alt: "Security and reliability icon",
    width: 63.83,
    height: 56.31,
    mobileWidth: 68,
    mobileHeight: 60,
  },
];

export const WhyNeedSeo = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <WhyChooseShopifyPlus
        title="Why Shopify Brands Need SEO"
        benefits={benefits}
      />
    </div>
  );
};
