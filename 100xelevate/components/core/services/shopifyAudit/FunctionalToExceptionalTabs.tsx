"use client";

import { useState } from "react";
import Image from "next/image";
import { TabButtons } from "@/components/shared/TabButtons";

const LOGO_SRC =
  "https://100xelevate.com/wp-content/uploads/2025/09/Layer_1-1.png";
const GRAPH_SRC =
  "https://100xelevate.com/wp-content/uploads/2025/10/Frame_427319024.webp";

type Stat = { label: string; value: string };

type TabData = {
  label: string;
  featureTitle: string;
  featureDescription: string;
  stats: Stat[];
  dataSource: { bold: string; text: string }[];
  beforeImage: { src: string; width: number; height: number; alt: string };
  afterImage: { src: string; width: number; height: number; alt: string };
};

const tabs: TabData[] = [
  {
    label: "Home Page",
    featureTitle: "Product Launch Exclusives",
    featureDescription:
      "Offer exclusive access or discounts for new product launches to create buzz and encourage early purchases, driving higher conversion rates and order values",
    stats: [
      { label: "Increase CR", value: "20-30%" },
      { label: "Increase AOV", value: "10-15%" },
    ],
    dataSource: [
      {
        bold: "Launch Strategies:",
        text: " Exclusive launches can increase CR by 25%",
      },
      {
        bold: "Shopify Reports:",
        text: " Early access offers can boost AOV by 12%.",
      },
    ],
    beforeImage: {
      src: "https://100xelevate.com/wp-content/uploads/2025/10/Home_Page_old-768x2031.webp",
      width: 768,
      height: 2031,
      alt: "Old Shopify homepage layout before CRO improvements",
    },
    afterImage: {
      src: "https://100xelevate.com/wp-content/uploads/2025/10/Home_Page_-_Desktop-768x3972.webp",
      width: 768,
      height: 3972,
      alt: "Optimized Shopify homepage after CRO and UX redesign",
    },
  },
  {
    label: "Collection Page",
    featureTitle: "Enhanced Product Search and Filtering",
    featureDescription:
      "Optimize your store's search functionality and filtering options to help customers find products quickly and efficiently, enhancing their shopping experience and increasing the likelihood of purchases.",
    stats: [
      { label: "Increase CR", value: "10-15%" },
      { label: "Improve User Experience", value: "Faster product discovery" },
    ],
    dataSource: [
      {
        bold: "Forrester:",
        text: " Improved search functionality can increase conversions by 10-15%.",
      },
    ],
    beforeImage: {
      src: "https://100xelevate.com/wp-content/uploads/2025/10/Collection_old-768x1457.webp",
      width: 768,
      height: 1457,
      alt: "Original Shopify collection page layout before CRO audit",
    },
    afterImage: {
      src: "https://100xelevate.com/wp-content/uploads/2025/10/Collection_Page_-_Desktop-768x1867.webp",
      width: 768,
      height: 1867,
      alt: "Improved Shopify collection page after UX and CRO redesign",
    },
  },
  {
    label: "Product Page",
    featureTitle: "Enhanced Product Descriptions",
    featureDescription:
      "Provide detailed and compelling product descriptions that highlight features, benefits, and use cases to help customers make informed purchasing decisions.",
    stats: [
      { label: "Increase CR", value: "10-15%" },
      { label: "Reduce Returns", value: "Improved product" },
    ],
    dataSource: [
      {
        bold: "Content Marketing Institute:",
        text: "  Well-crafted product descriptions can boost conversion rates by 10-15%.",
      },
    ],
    beforeImage: {
      src: "https://100xelevate.com/wp-content/uploads/2025/10/PDP_Old-768x2697.webp",
      width: 768,
      height: 2697,
      alt: "Original Shopify product page layout before CRO upgrade",
    },
    afterImage: {
      src: "https://100xelevate.com/wp-content/uploads/2025/10/PDP_-_Version_1_-_Desktop-768x3192.webp",
      width: 768,
      height: 3192,
      alt: "Enhanced Shopify product page after 100xelevate redesign",
    },
  },
  {
    label: "Cart Drawer",
    featureTitle: "Cart Drawers vs. Cart Pages",
    featureDescription:
      "Implement cart drawers (side panels) instead of traditional cart pages to keep customers on the same page, reducing exit points and encouraging additional purchases.",
    stats: [
      { label: "Increase CR", value: "10-20%" },
      { label: "Increase AOV", value: "5-10%" },
    ],
    dataSource: [
      {
        bold: "Invesp:",
        text: "  Cart abandonment rates drop by 25% with cart drawers.",
      },
      {
        bold: "UX Design Studies:",
        text: "  Maintaining user context can improve CR by 15%.",
      },
    ],
    beforeImage: {
      src: "https://100xelevate.com/wp-content/uploads/2025/10/cart-drawer-before-768x1141.webp",
      width: 768,
      height: 1141,
      alt: "Before cart drawer layout before 100X Elevate audit",
    },
    afterImage: {
      src: "https://100xelevate.com/wp-content/uploads/2025/10/cart-drawer-after-768x1141.webp",
      width: 768,
      height: 1141,
      alt: "Enhanced Shopify cart drawer after 100xelevate redesign",
    },
  },
];

export const FunctionalToExceptionalTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredSide, setHoveredSide] = useState<"before" | "after" | null>(
    null,
  );
  const tab = tabs[activeTab];

  return (
    <section className="w-full bg-[#F7F7F7] px-4 sm:px-8 ">
      <div className="max-w-[1400px] w-full mx-auto md:py-[96px] py-[32px] flex flex-col wmd:gap-[20px] md:gap-[64px] gap-[32px]">
        {/* Header */}
        <h2 className="wmd:text-[48px] wmd:leading-[58px] font-semibold md:text-[40px] md:leading-[46px] text-[32px] leading-[38px] w-full mx-auto text-center">
          From Functional to Exceptional
        </h2>

        <p className="text-[#707070] md:text-[16px] md:leading-[20px] text-[14px] leading-[22px] max-w-[750px] w-full mx-auto text-center">
          A data-driven redesign that elevated user experience, increased
          conversions by 30%, and made the brand&apos;s value shine through
          every click.
        </p>

        <div className="flex flex-col md:mt-[50px] mt-0 gap-5">
          {/* Tab Buttons */}
          <div className="mt-5">
            <TabButtons
              tabs={tabs}
              activeTab={activeTab}
              onChange={setActiveTab}
              buttonColor="bg-white"
            />
          </div>

          <div className="flex md:flex-row flex-col items-stretch gap-5 p-5 bg-white overflow-hidden">
            {/* LEFT SIDE */}
            <div className="w-full md:w-[33.33%] shrink-0 p-[16px] flex flex-col gap-4 shadow-[0px_0px_10px_0px_rgba(212,212,212,0.5)]">
              {/* Logo */}
              <div className="flex items-center justify-between gap-2">
                <Image
                  src={LOGO_SRC}
                  width={120}
                  height={17}
                  alt="logo"
                  className="lg:w-[100px] md:w-[80px] w-[100px] h-auto"
                />

                <span className="text-[12px] font-semibold text-black text-right">
                  Data Driven Design
                </span>
              </div>

              {/* Feature */}
              <div className="bg-[#F7F7F7] p-4">
                <h3 className="text-[12px] font-semibold mb-2">
                  {tab.featureTitle}
                </h3>

                <p className="text-[10px] text-[#707070] leading-[17px]">
                  {tab.featureDescription}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-[10px]">
                {tab.stats.map((stat, i) => (
                  <div key={i} className="border border-[#D6D6D6] p-4">
                    <p className="text-[10px] font-semibold mb-2">
                      {stat.label}
                    </p>

                    <p className="md:text-[21px] md:leading-[21px] leading-[16px] text-[16px] text-[#707070]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Graph */}
              <Image
                src={GRAPH_SRC}
                width={632}
                height={264}
                alt="graph"
                className="w-full h-auto rounded-2xl"
              />

              {/* Data Source */}
              <div className="bg-[#F7F7F7] p-4">
                <p className="font-semibold text-[12px] mb-[6px]">
                  Data Source:
                </p>

                {tab.dataSource.map((ds, i) => (
                  <p
                    key={i}
                    className="text-[#707070] text-[10px] leading-[17px]"
                  >
                    <b>{ds.bold}</b>
                    {ds.text}
                  </p>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1 flex overflow-hidden relative min-h-0 max-md:min-h-[225px] bg-[#F7F7F7] ">
              {/* BEFORE */}
              <div
                className={`relative overflow-hidden transition-all duration-500 wmd:p-[30px] md:p-[20px] p-[16px] border-r border-[#D6D6D6] ${
                  hoveredSide === "before"
                    ? "flex-[58]"
                    : hoveredSide === "after"
                      ? "flex-[42]"
                      : "flex-1"
                }`}
                onMouseEnter={() => setHoveredSide("before")}
                onMouseLeave={() => setHoveredSide(null)}
              >
                {/* Header */}
                <div className="relative z-10 pb-5 ">
                  <h3 className="wmd:text-[22px] font-semibold wmd:leading-[27px] md:text-[18px] md:leading-[27px] text-[16px] leading-[22px]">
                    Before
                  </h3>
                </div>

                {/* IMAGE */}
                <div className="absolute inset-[16px] md:inset-[20px] wmd:inset-[30px] pt-[49px] overflow-hidden">
                  <Image
                    src={tab.beforeImage.src}
                    width={tab.beforeImage.width}
                    height={tab.beforeImage.height}
                    alt={tab.beforeImage.alt}
                    className={`w-full h-full object-cover object-top transition-transform duration-500 ${
                      hoveredSide === "before" ? "scale-[1.015]" : "scale-100"
                    }`}
                  />
                </div>
              </div>

              {/* AFTER */}
              <div
                className={`relative overflow-hidden transition-all duration-500 wmd:p-[30px] md:p-[20px] p-[16px] ${
                  hoveredSide === "after"
                    ? "flex-[58]"
                    : hoveredSide === "before"
                      ? "flex-[42]"
                      : "flex-1"
                }`}
                onMouseEnter={() => setHoveredSide("after")}
                onMouseLeave={() => setHoveredSide(null)}
              >
                {/* Header */}
                <div className="relative z-10 pb-5">
                  <h3 className="wmd:text-[22px] font-semibold wmd:leading-[27px] md:text-[18px] md:leading-[27px] text-[16px] leading-[22px]">
                    After
                  </h3>
                </div>

                {/* IMAGE */}
                <div className="absolute inset-[16px] md:inset-[20px] wmd:inset-[30px] pt-[49px] overflow-hidden">
                  <Image
                    src={tab.afterImage.src}
                    width={tab.afterImage.width}
                    height={tab.afterImage.height}
                    alt={tab.afterImage.alt}
                    className={`w-full h-full object-cover object-top transition-transform duration-500 ${
                      hoveredSide === "after" ? "scale-[1.015]" : "scale-100"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
