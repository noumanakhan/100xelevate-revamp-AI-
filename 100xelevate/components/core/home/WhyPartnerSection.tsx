"use client";

import { useState } from "react";
import Image from "next/image";

const accordionItems = [
  {
    title: "Innovation that evolves",
    body: "Pioneering AI solutions to keep your store at the forefront of eCommerce.",
  },
  {
    title: "Solutions that scale",
    body: "Shopify specialists with advanced AI capabilities for unmatched results.",
  },
  {
    title: "Data driven action",
    body: "Turning analytics into advantage, we track, test, and optimize every step for measurable growth.",
  },
  {
    title: "Evolves with AI",
    body: "Integrating adaptive AI technology to future-proof your brand and optimize customer experiences.",
  },
];

const partnerLogos = [
  { src: "/images/2025/10/logo-slider-9.avif", alt: "Partner logo", width: 173, height: 50 },
  { src: "/images/2025/10/logo-slider-8-1.avif", alt: "Partner logo", width: 173, height: 50 },
  { src: "/images/2025/10/logo-slider-7.avif", alt: "Partner logo", width: 173, height: 50 },
  { src: "/images/2025/10/logo-slider-16.avif", alt: "Partner logo", width: 173, height: 50 },
  { src: "/images/2025/10/logo-slider-6.png", alt: "Partner logo", width: 173, height: 50 },
  { src: "/images/2025/10/logo-slider-5.avif", alt: "Partner logo", width: 173, height: 50 },
  { src: "/images/2025/10/logo-slider-4.avif", alt: "Partner logo", width: 173, height: 50 },
  { src: "/images/2025/10/logo-slider-3.avif", alt: "Partner logo", width: 173, height: 50 },
];

export default function WhyPartnerSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="w-full sm:px-[22px] px-[16px] ">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center sm:py-[86px] py-[32px]">
        <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[128px]">
          {/* Heading column */}
          <div className="flex-1 flex flex-col gap-5">
            <h2 className="text-[32px] md:text-[48px] md:leading-[58px] leading-[38px] font-semibold md:text-left text-center">
              Why{" "}
              <span className="text-[#707070]">Partner with </span>
              100xelevate
            </h2>
            <p className="text-[#707070] md:text-[16px] text-[14px] leading-[20px] text-center md:text-left">
              Partner with 100xelevate to ensure your store evolves with AI,
              maintaining a competitive edge in the ever-changing eCommerce
              landscape.
            </p>
          </div>

          {/* Logo slider column */}
          <div className="flex-1 overflow-hidden h-[400px] max-h-[400px] w-full lg:max-w-[288px] relative bg-[url('/images/services/home/why-section-logo-slider-bg.jpg')] bg-cover bg-center">
            <div
              className="flex flex-col animate-scroll-up-logos"
            >
              {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                <div key={i} className="flex items-center justify-center h-[80px]">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Accordion column */}
          <div className="flex-1 flex flex-col gap-[10px]">
            {accordionItems.map((item, i) => (
              <div key={i} className="p-[10px]">
                <button
                  className="w-full flex items-center justify-between text-left font-medium text-[18px] gap-4 cursor-pointer"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span>{item.title}</span>

                  <svg

                    className={`w-[13px] h-[15px] flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""
                      }`}
                    aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${open === i ? "grid-rows-[1fr] mt-[20px] opacity-100" : "grid-rows-[0fr] mt-0 opacity-0"
                    }`}
                  aria-hidden={open !== i}
                >
                  <div className="min-h-0 text-[#707070] text-[16px] ">
                    {item.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
