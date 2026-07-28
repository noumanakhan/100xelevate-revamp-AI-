import React from 'react'
import { WhyChooseShopifyPlus } from '../WhyChooseShopifyPlus';

const benefits = [
  {
    title: "Reduce Bounce",
    description:
      "A landing page removes distractions and gives visitors a single, clear path to follow. This helps them stay focused and remain on the page longer.",
    image: "/images/2025/02/Step_1.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Improve Paid Traffic ROI",
    description:
      "Campaigns perform better when visitors are taken to a page built for one purpose. A focused layout helps convert paid traffic more effectively than a general homepage.",
    image: "/images/2025/02/Step_2.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Help Visitors Decide Faster",
    description:
      "When the offer is explained clearly and placed in a logical order, visitors understand the value sooner and are more likely to act.",
    image: "/images/2025/02/Step_3.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Increase Average Order Value",
    description:
      "Bundles, upgrades, and add-ons become easier to understand when presented in a structured layout. This helps guide customers toward higher-value choices.",
    image: "/images/2025/11/download-37.svg",
    alt: "Global expansion icon",
    width: 63.83,
    height: 46.92,
    mobileWidth: 68,
    mobileHeight: 50,
  },
  {
    title: "Strengthen the Mobile Experience",
    description:
      "A dedicated landing page reduces friction on smaller screens. Clear spacing, simplified navigation, and focused content create a smoother mobile journey.",
    image: "/images/2025/11/Step_3.svg-1.svg",
    alt: "Integration support icon",
    width: 63.83,
    height: 56.31,
    mobileWidth: 68,
    mobileHeight: 60,
  },
  {
    title: "Test Offers Without Touching Your Main Store",
    description:
      "Landing pages provide a safe space to test headlines, layouts, and promotions. You can launch and refine campaigns quickly while keeping the core store unchanged.",
    image: "/images/2025/11/Step_3-1.svg-1-1.svg",
    alt: "Security and reliability icon",
    width: 63.83,
    height: 56.31,
    mobileWidth: 68,
    mobileHeight: 60,
  },
];

const WhyBrandNeedsDedicatedLandingPage = () => {
  return (
      <div >
      <WhyChooseShopifyPlus
        title="Why brands need a dedicated landing page"
        benefits={benefits}
        titleClassName="w-full wmd:text-[48px] md:text-[40px] text-[32px] font-semibold wmd:leading-[58px] md:leading-[46px] leading-[38px]"
        gridMinHeight="min-h-[110px]"
      />
    </div>
  )
}

export default WhyBrandNeedsDedicatedLandingPage