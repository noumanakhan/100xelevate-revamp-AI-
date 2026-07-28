"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ShopifyLogoSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="36"
    viewBox="0 0 491 557"
    fill="none"
    className="w-[60px] h-[60px]"
  >
    <path
      d="M429.502 108.822C429.502 111.066 490.06 520.551 490.06 520.551L349.883 556.451V70.6782C358.854 79.6532 382.403 103.212 382.403 103.212C382.403 103.212 421.653 104.334 423.895 104.334C427.26 104.334 429.502 105.456 429.502 108.822ZM317.362 70.6782C327.456 67.3125 334.182 66.1907 334.182 66.1907C335.304 65.0689 337.547 65.0689 338.669 65.0689V556.451L0 498.112C0 498.112 41.4924 181.744 42.6141 170.525C43.7354 155.941 44.8568 155.941 60.5568 150.331C60.5568 150.331 81.8638 143.6 113.263 133.503C116.628 109.944 127.842 79.6532 143.542 54.9718C164.849 20.1939 191.763 1.1218 218.677 0C233.255 0 244.468 4.4875 253.44 14.5843C253.44 15.7061 254.562 15.7061 255.685 16.8282C256.804 16.8282 257.927 15.7061 260.169 15.7061C280.354 15.7061 298.297 28.0468 309.513 50.4843C312.878 57.2157 315.12 63.9468 317.362 70.6782ZM255.685 89.75C255.685 75.1657 254.562 52.7282 246.713 37.0218C238.862 40.3875 232.132 45.9968 227.648 51.6061C214.19 65.0689 204.099 86.3843 198.492 107.7C217.554 102.091 237.742 95.3593 255.685 89.75ZM218.677 19.0718C177.184 20.1939 141.299 85.2625 131.206 127.894C145.785 123.406 162.606 118.919 178.306 113.309C183.913 86.3843 196.247 57.2157 214.19 39.2657C220.919 32.5343 227.648 26.925 235.497 22.4375C229.89 20.1939 224.284 19.0718 218.677 19.0718ZM167.091 265.885C165.97 260.274 167.091 238.96 199.612 236.715C223.164 235.594 242.226 244.569 242.226 244.569L259.049 179.5C259.049 179.5 244.468 172.769 215.312 173.891C140.177 179.5 105.414 232.228 108.778 283.835C113.263 345.537 174.941 343.294 177.184 381.438C178.306 390.412 171.577 403.874 155.877 403.874C132.328 406.119 102.049 383.681 102.049 383.681L90.8352 433.044C90.8352 433.044 119.992 464.456 174.941 461.09C220.919 458.846 252.32 421.824 248.956 369.096C244.468 300.662 168.213 295.053 167.091 265.885ZM273.627 84.1407C283.718 81.8968 292.69 78.5311 300.542 76.2875C296.054 62.825 285.961 39.2657 265.776 35.9C271.382 51.6061 273.627 70.6782 273.627 84.1407Z"
      fill="white"
    />
  </svg>
);

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-4 h-4 ${filled ? "fill-[#f0ad4e]" : "fill-white"}`}
    aria-hidden="true"
  >
    <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
  </svg>
);

const ratingRows = [
  { stars: 5, percentage: 85, count: 551 },
  { stars: 4, percentage: 10, count: 5 },
  { stars: 3, percentage: 0, count: 0 },
  { stars: 2, percentage: 0, count: 0 },
  { stars: 1, percentage: 0, count: 0 },
];

const statCards = [
  {
    value: "300+",
    title: "Migrations Completed",
    subtitle: "with zero data loss",
  },
  {
    value: "100%",
    title: "Client Satisfaction",
    subtitle: "backed by our award-winning team.",
  },
  {
    value: "24/7",
    title: "Dedicated Support",
    subtitle: "during and after your migration.",
  },
];

export const PromiseSection = () => {
  const [inView, setInView] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    if (overlayRef.current) observer.observe(overlayRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#F7F7F7] w-full md:px-8 px-4">
      <div className="w-full max-w-[1400px] mx-auto md:py-[96px] py-8 flex flex-col wmd:flex-row">
        {/* Left: Image + Shopify Review Overlay */}
        <div className="relative  wmd:w-[50%] w-full">
          {/* TODO: replace with the actual migration section woman photo */}
          <Image
            src="/images/2025/10/image_150_fc94ab98-27d4-4d56-82da-bd7d8e54fb4c_grande.webp"
            alt="Shopify store owner managing products"
            fill
            className="object-cover  w-full h-auto "
          />

          {/* Shopify Reviews Overlay */}
          <div
            ref={overlayRef}
            className="absolute bottom-[40px] md:left-[40px] left-[20px]  border border-[#C5C5C5] bg-[#000000B3] md:p-5 p-[10px] md:w-[340px] w-[320px] backdrop-blur-[10px]"
          >
            <div className="flex flex-col gap-1">
              {/* Header: Shopify logo + title */}
              <div className="flex items-center gap-[10px] mb-4">
                <div>
                  <ShopifyLogoSVG />
                </div>
                <div>
                  <p className="font-medium md:text-[22px] md:leading-[27px] text-[18px] leading-[22px] text-white mt-2">
                    All reviews
                  </p>
                  <p className="text-white wxl:text-[18px] wxl:leading-[27px] leading-[22px] md:text-[16px] text-sm">
                    5.0 (556)
                  </p>
                </div>
              </div>

              {/* Rating rows */}
              <div className="flex flex-col gap-1">
                {ratingRows.map((row, idx) => (
                  <div key={row.stars} className="flex items-center gap-5">
                    <div className="flex ">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <StarIcon key={i} filled={i <= row.stars} />
                      ))}
                    </div>
                    <div className="flex-1 h-2.5 bg-white rounded-[2px] overflow-hidden">
                      <div
                        className="h-full bg-[#f0ad4e] rounded-[2px] transition-[width] ease-out"
                        style={{
                          width: inView ? `${row.percentage}%` : "0%",
                          transitionDuration: "1s",
                          transitionDelay: inView ? `${idx * 150}ms` : "0ms",
                        }}
                      />
                    </div>
                    <span className="text-white text-sm w-5 text-right leading-[20px]">
                      {row.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Promise Stats */}
        <div className="flex flex-col justify-center wmd:w-[50%] w-full wxl:p-20 md:px-10 md:py-[60px] p-5 gap-5 bg-white">
          <h2 className="font-semibold wmd:text-[48px] wmd:leading-[58px] md:text-[40px] md:leading-[46px] text-[32px] leading-[38px]">
            100xelevate Promise
          </h2>
          <div className="flex flex-col gap-4">
            {statCards.map((card) => (
              <div
                key={card.value}
                className="bg-[#F7F7F7] md:p-[30px] p-[20px] flex flex-col gap-[10px]"
              >
                <p className="wmd:text-[48px] wmd:text-[54px] text-[44px] leading-[50px] font-bold text-black">
                  {card.value}
                </p>
                <p className="text-[20px] wmd:leading-[26px] leading-[24px] font-semibold text-black ">
                  {card.title}
                </p>
                <p className="text-sm leading-[20px] text-[#707070] ">
                  {card.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
