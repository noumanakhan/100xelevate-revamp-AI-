"use client";

import React, { useState } from "react";
import Image from "next/image";

type FeatureId = "speed" | "support" | "guarantee";

const features: {
  id: FeatureId;
  label: string;
  icon: string;
  description: string;
}[] = [
  {
    id: "speed",
    label: "Guaranteed Speed Improvement",
    icon: "https://100xelevate.com/wp-content/uploads/2025/10/icon-1.svg",
    description:
      "When we optimize your Shopify page-load speed, it's done the right way with lasting results. Plus, we QA everything thoroughly to make sure nothing's broken after we're done.",
  },
  {
    id: "support",
    label: "Priority Support",
    icon: "https://100xelevate.com/wp-content/uploads/2025/10/icon.svg",
    description:
      "By diving deep into the intricacies of your site's user experience and interface, we pinpoint and remedy any friction points, ensuring a smooth and intuitive customer journey.",
  },
  {
    id: "guarantee",
    label: "100% Money-Back Guarantee",
    icon: "https://100xelevate.com/wp-content/uploads/2025/10/icon-2.svg",
    description:
      "Integrate with third-party systems, add custom logic, and more. The more seamless your checkout process, the higher your conversion rates.",
  },
];

// Centers of the 3 equal columns: 1/6, 3/6, 5/6
const COL_CENTERS = ["16.67%", "50%", "83.33%"];

export const WhySpeedOptimization = () => {
  const [activeId, setActiveId] = useState<FeatureId>("support");

  const activeIndex = features.findIndex((f) => f.id === activeId);
  const activeFeature = features[activeIndex];

  return (
    <section className="bg-[#F7F7F7] md:px-8 px-4 w-full">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center md:gap-7.5 gap-5 xl:pt-[96px] xl:pb-[80px] md:py-[96px] py-[32px]">
        {/* Title */}
        <h2 className="wmd:text-[48px] wmd:leading-[58px] text-center font-semibold md:text-[40px] md:leading-[46px] text-[32px] leading-[38px] max-w-[842px] ">
          Why Choose 100xelevate for Site Speed Optimization
        </h2>

        {/* Subtitle */}
        <p className="text-[#707070] max-w-[828] md:text-[16px] md:leading-[20px] text-[14px] leading-[22px] text-center">
          Boost your Shopify store&apos;s speed and watch sales soar! Our global
          team of ecommerce experts has optimized over 500 Shopify stores,
          making us leading speed optimization provider for Shopify Plus Stores.
        </p>

        {/* Interactive section */}
        <div className="w-full ">
          {/* Icon + dots + headings wrapper */}
          <div
            className="relative md:max-w-[900px] max-w-[370px] mx-auto w-full mb-[25px]"
            style={{ paddingTop: "60px" }}
          >
            {/* Single floating icon — slides to the active column center */}
            <div
              className="absolute top-0 transition-[left] duration-300 -translate-x-1/2"
              style={{ left: COL_CENTERS[activeIndex] }}
            >
              <Image
                src={activeFeature.icon}
                alt={activeFeature.label}
                width={42}
                height={60}
                unoptimized
                className="w-full h-auto"
              />
            </div>

            {/* Horizontal connecting line (sits at dot center = paddingTop + dot-half) */}
            <div
              className="absolute h-px bg-black"
              style={{
                top: "calc(60px + 5px)",
                left: "calc(100% / 6)",
                right: "calc(100% / 6)",
              }}
            />

            {/* 3-col grid: dots row */}
            <div className="grid grid-cols-3 mb-5">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className="flex justify-center  cursor-pointer bg-transparent border-none p-0  focus:outline-none"
                >
                  <div className=" rounded-full px-5 bg-[#F7F7F7] z-50">
                    <div className="w-2.5 h-2.5 rounded-full bg-black z-10 shrink-0" />
                  </div>
                </button>
              ))}
            </div>

            {/* 3-col grid: headings row */}
            <div className="grid grid-cols-3 mt-2 mb-4">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className="cursor-pointer bg-transparent  max-md:w-[100px] p-0 focus:outline-none "
                >
                  <h3
                    className={`text-[13px] md:text-base leading-snug text-center text-black transition-all duration-300 ${
                      activeId === feature.id ? "font-bold" : "font-medium"
                    }`}
                  >
                    {feature.label}
                  </h3>
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <p
            key={activeId}
            className=" text-[#707070] leading-[1.7] md:text-base text-sm max-w-[700px] w-full mx-auto text-center md:mt-0 -mt-5"
          >
            {activeFeature.description}
          </p>
        </div>
      </div>
    </section>
  );
};
