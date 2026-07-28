"use client";

import { useState } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { TabButtons } from "@/components/shared/TabButtons";

type TabImage = { src: string; width: number; height: number; alt: string };

type Tab = {
  label: string;
  heading: string;
  description: string;
  col1: TabImage[];
  col2: TabImage[];
};

const tabs: Tab[] = [
  {
    label: "Home Page UX & UI Design",
    heading: "Home Page Design for Enhanced Engagement",
    description:
      "Design collection pages that strengthen product discovery and create a smoother browsing experience. A well-organized layout helps customers find what they need faster and supports improvements in CRO, AOV, and CLV.",
    col1: [
  { src: "/images/2025/10/audit-5_1024x1024.webp", width: 1024, height: 943, alt: "SEO audit report illustration" },
  { src: "/images/2025/10/audit-4_1024x1024.webp", width: 1024, height: 943, alt: "Website performance audit graphic" },
  { src: "/images/2025/10/audit-8_1024x1024.webp", width: 1024, height: 943, alt: "SEO analysis dashboard illustration" },
  { src: "/images/2025/10/audit-7_1024x1024.webp", width: 1024, height: 943, alt: "Search engine optimization audit visual" },
  { src: "/images/2025/10/audit-6_1024x1024.webp", width: 1024, height: 943, alt: "Website SEO audit overview graphic" },
],
col2: [
  { src: "/images/2025/11/Frame_60522-3_1024x1024.webp", width: 1024, height: 868, alt: "Digital marketing growth strategy illustration" },
  { src: "/images/2025/11/Frame_60520-3_1024x1024.webp", width: 1024, height: 868, alt: "SEO results and analytics visual" },
  { src: "/images/2025/11/image-new-slide-2_1024x1024.webp", width: 1024, height: 861, alt: "Online business growth illustration" },
  { src: "/images/2025/10/audit-4_1024x1024.webp", width: 1024, height: 943, alt: "Website performance audit graphic" },
  { src: "/images/2025/10/audit-7_1024x1024.webp", width: 1024, height: 943, alt: "Search engine optimization audit visual" },
],
  },
  {
    label: "Collection Page UX & UI Design",
    heading: "Optimized Collection Page Design",
    description:
      "Design collection pages that strengthen product discovery and create a smoother browsing experience. A well-organized layout helps customers find what they need faster and supports improvements in CRO, AOV, and CLV.",
    col1: [
  { src: "/images/2025/11/collection-image-5_1024x1024.webp", width: 1024, height: 861, alt: "Collection page design 5" },
  { src: "/images/2025/11/collection-image-4_1024x1024.webp", width: 1024, height: 861, alt: "Collection page design 4" },
  { src: "/images/2025/11/collection-image-3_1024x1024.webp", width: 1024, height: 861, alt: "Collection page design 3" },
  { src: "/images/2025/11/collection-image-2_1024x1024.webp", width: 1024, height: 861, alt: "Collection page design 2" },
  { src: "/images/2025/11/collection-image-1_1024x1024.webp", width: 1024, height: 860, alt: "Collection page design 1" },
  { src: "/images/2025/11/Frame_60520-3_1024x1024-1.webp", width: 1024, height: 868, alt: "Collection page frame design" },
],
col2: [
  { src: "/images/2025/11/collection-image-3_1024x1024.webp", width: 1024, height: 861, alt: "Collection page design 3" },
  { src: "/images/2025/11/collection-image-2_1024x1024.webp", width: 1024, height: 861, alt: "Collection page design 2" },
  { src: "/images/2025/11/collection-image-1_1024x1024.webp", width: 1024, height: 860, alt: "Collection page design 1" },
  { src: "/images/2025/11/collection-image-4_1024x1024.webp", width: 1024, height: 861, alt: "Collection page design 4" },
  { src: "/images/2025/11/collection-image-5_1024x1024.webp", width: 1024, height: 861, alt: "Collection page design 5" },
],
  },
  {
    label: "Product Page UX & UI Design",
    heading: "Refined Product Page UX & UI",
    description:
      "Improve your product pages with clearer presentation, organized information, and a smoother purchase path. Thoughtful design helps customers make decisions faster and supports stronger gains in CRO, AOV, and CLV.",
    col1: [
  { src: "/images/2025/11/product-image-4_1024x1024.webp", width: 1024, height: 861, alt: "Product page design 4" },
  { src: "/images/2025/11/product-image-5_1024x1024.webp", width: 1024, height: 861, alt: "Product page design 5" },
  { src: "/images/2025/11/product-image-1_1024x1024.webp", width: 1024, height: 860, alt: "Product page design 1" },
  { src: "/images/2025/11/product-image-2_1024x1024.webp", width: 1024, height: 861, alt: "Product page design 2" },
  { src: "/images/2025/11/product-image-3_1024x1024.webp", width: 1024, height: 861, alt: "Product page design 3" },
],
col2: [
  { src: "/images/2025/11/product-image-2_1024x1024.webp", width: 1024, height: 861, alt: "Product page design 2" },
  { src: "/images/2025/11/product-image-3_1024x1024.webp", width: 1024, height: 861, alt: "Product page design 3" },
  { src: "/images/2025/11/product-image-4_1024x1024.webp", width: 1024, height: 861, alt: "Product page design 4" },
  { src: "/images/2025/11/product-image-1_1024x1024.webp", width: 1024, height: 860, alt: "Product page design 1" },
  { src: "/images/2025/11/product-image-5_1024x1024.webp", width: 1024, height: 861, alt: "Product page design 5" },
],
  },
  {
    label: "Cart Drawer UX & UI Design",
    heading: "Streamlined Cart Drawer Design",
    description:
      "Improve your cart drawer to create a smoother checkout path and highlight relevant upsells. A clear, well-organized layout helps reduce drop-offs and supports measurable gains in CRO, AOV, and CLV.",
    col1: [
  { src: "/images/2025/11/cart-image-4_1024x1024.webp", width: 1024, height: 861, alt: "Cart drawer design 4" },
  { src: "/images/2025/11/cart-image-3_1024x1024.webp", width: 1024, height: 861, alt: "Cart drawer design 3" },
  { src: "/images/2025/11/cart-image-2_1024x1024.webp", width: 1024, height: 861, alt: "Cart drawer design 2" },
  { src: "/images/2025/11/cart-image-1_1024x1024.webp", width: 1024, height: 860, alt: "Cart drawer design 1" },
],
col2: [
  { src: "/images/2025/11/cart-image-3_1024x1024.webp", width: 1024, height: 861, alt: "Cart drawer design 3" },
  { src: "/images/2025/11/cart-image-2_1024x1024.webp", width: 1024, height: 861, alt: "Cart drawer design 2" },
  { src: "/images/2025/11/cart-image-1_1024x1024.webp", width: 1024, height: 860, alt: "Cart drawer design 1" },
  { src: "/images/2025/11/cart-image-4_1024x1024.webp", width: 1024, height: 861, alt: "Cart drawer design 4" },
],
  },
];

function ScrollColumn({
  images,
  direction = "up",
  speed = 30,
}: {
  images: TabImage[];
  direction?: "up" | "down";
  speed?: number;
}) {
  const doubled = [...images, ...images];
  const animClass = direction === "up" ? "animate-scroll-up" : "animate-scroll-down";
  return (
    <div className="flex-1 overflow-hidden h-[2500px] md:h-[1000px] relative px-[20px]">
      <div
        className={`flex flex-col gap-5 ${animClass}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((img, i) => (
          <Image
            key={i}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            className="w-[410px] h-full rounded-lg"
            unoptimized
          />
        ))}
      </div>
    </div>
  );
}

export const ShopifyUXOptimization = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  return (
    <section className="w-full sm:px-[22px] px-[16px]  md:mt-[96px] mt-[32px] wmd:gap-5 md:gap-[64px] gap-[32px]">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col sm:py-[96px] py-[32px] lg:gap-5 md:gap-[64px] gap-[32px] xl:px-0 md:px-8 px-4">
        {/* {title and description} */}
        <div className="wmd:gap-5 md:gap-[64px] gap-[32px]">
          <h1 className="wmd:text-[48px] md:text-[40px] text-[32px] font-semibold text-center">
            Shopify UX Optimization
          </h1>
          <p className="wmd:mt-5 md:mt-[64px] mt-[32px] md:text-[16px] text-[14px] text-center mx-auto w-full text-[#707070] max-w-[834px] ">Improve the core areas of your Shopify store with focused UX and UI enhancements. Each section is designed to create clearer navigation, stronger product discovery, and a smoother path from entry to checkout.</p>
        </div>
        {/* Tab buttons */}
        <div className="mt-10">
          <TabButtons tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        </div>

        {/* Tab content */}
        <div className="w-full  md:h-[600px] flex flex-col md:flex-row items-center gap-10 lg:gap-[20px] bg-[#F7F7F7]">
          {/* Text */}
          <div className="flex-1 flex flex-col gap-5 w-full md:m-5 m-4 max-w-[509px]">
            <h2 className="lg:text-[40px] md:text-[32px] text-[24px] lg:leading-[50px] md:leading-[40px] leading-[30px] font-semibold">
              {tab.heading}
            </h2>
            <p className="text-[#707070] md:text-[16px] text-[14px] leading-[20px] font-normal max-w-[550px]">
              {tab.description}
            </p>
            <div className="md:mt-4">
              <ButtonLink href="/book-a-demo/" >
                Book a call
              </ButtonLink>
            </div>
          </div>

          {/* Scrolling image columns */}
          <div className="flex-1 w-full max-h-[400px] md:max-h-[600px] overflow-hidden relative flex items-center justify-center">
            <div className="flex min-w-[290px] shrink-0 h-[750px] overflow-hidden md:h-[170%] rotate-[-30deg]">
              <ScrollColumn images={tab.col1} direction="up" speed={8} />
              <ScrollColumn images={tab.col2} direction="down" speed={12} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
