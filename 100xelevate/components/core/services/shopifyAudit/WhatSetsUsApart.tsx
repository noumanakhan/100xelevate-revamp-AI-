"use client";

import { useState } from "react";
import Image from "next/image";
import Chevron from "@/components/assets/icons/Chevron";

const logos = [
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/10/logo-slider-9.avif",
    alt: "Partner logo",
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/10/logo-slider-8-1.avif",
    alt: "Partner logo",
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/10/logo-slider-7.avif",
    alt: "Partner logo",
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/10/logo-slider-16.avif",
    alt: "Partner logo",
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/10/logo-slider-6.png",
    alt: "Partner logo",
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/10/logo-slider-5.avif",
    alt: "Partner logo",
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/10/logo-slider-4.avif",
    alt: "Partner logo",
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/10/logo-slider-3.avif",
    alt: "Partner logo",
  },
];

const accordionItems = [
  {
    title: "Data-Driven Solutions",
    content:
      "No generic advice, every recommendation comes with data, reasoning, and ready-to-implement prototypes.",
  },
  {
    title: "Proven Track Record",
    content: "Award-winning team with Shopify certifications.",
  },
  {
    title: "ROI-First Approach",
    content: "Every action we suggest is engineered to lift CRO, AOV, and CLV",
  },
  {
    title: "Hands-On Implementation Support",
    content: "We don't leave you hanging; we guide you until results show.",
  },
];

export const WhatSetsUsApart = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full bg-white md:px-8 px-4 mx-auto">
      <div className="max-w-[1400px] md:py-[86px] py-[32px] w-full mx-auto flex flex-col wmd:flex-row xl:gap-[100px] lg:gap-[50px] gap-5 items-start ">
        {/* Left column — heading + subtitle */}
        <div className="flex flex-col gap-5 w-full">
          <h2 className="wmd:text-[48px] wmd:leading-[58px] md:text-[40px] md:leading-[46px] text-[32px] leading-[38px] font-semibold ">
            What Sets 100xelevate Apart
          </h2>
          <p className="md:text-[16px] text-sm md:leading-[20px] leading-[22px] text-[#707070] ">
            Don&apos;t settle for audits that just point out problems; <br /> we
            deliver solutions that convert.
          </p>
        </div>

        {/* Middle column — vertical logo slider */}
        <div
          className="scroll-column relative h-100 overflow-hidden wmd:max-w-[288px]  wmd:w-[63%] w-full max-w-full"
          style={{
            backgroundImage:
              "url('https://100xelevate.com/wp-content/uploads/2025/10/andrew-kliatskyi-OZgeteFmhlo-unsplash.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="scroll-column-track animate-scroll-up flex flex-col items-center">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-20 w-full px-6"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={50}
                  className="grayscale hover:grayscale-0 transition-[filter] duration-300 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right column — accordion */}
        <div className="flex flex-col  w-full">
          {accordionItems.map((item, i) => (
            <div key={i} className="mb-[10px]">
              <button
                onClick={() => toggle(i)}
                className="flex items-center justify-between w-full p-[10px] text-left font-medium text-[18px] leading-[23px] cursor-pointer"
                aria-expanded={openIndex === i}
              >
                <span>{item.title}</span>
                <svg
                  aria-hidden="true"
                  className={`e-font-icon-svg e-fas-chevron-down max-h-[15px] transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                </svg>
              </button>
              {openIndex === i && (
                <div className="p-[10px] text-[#707070] text-[16px] leading-[25px] animate-fade-in">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
