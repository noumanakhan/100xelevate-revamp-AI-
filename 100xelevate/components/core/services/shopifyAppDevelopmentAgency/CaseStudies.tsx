import Image from "next/image";
import Link from "next/link";
import React from "react";

const caseStudies = [
  {
    stat: "90%",
    label: "Seamless Migration",
    bgImage: "/images/2025/10/Group-5769.png",
    logo: {
      src: "/images/2025/10/Mask-group-8.png",
      alt: "Easilocks",
      width: 84,
      height: 34,
    },
    title:
      "Unifying B2B and B2C Commerce 100xelevate Builds Easilocks App for Shopify Plus",
    href: "/our-work/easilocks-sopify-app/",
  },
  {
    stat: "10x",
    label: "Growth in Two Years",
    bgImage: "/images/2025/10/Group-5768.png",
    logo: {
      src: "/images/2025/10/image-72-1.png",
      alt: "Teelaunch",
      width: 34,
      height: 34,
    },
    title:
      "Empowering Print-on-Demand: 100xelevate Builds the First Shopify App for Teelaunch",
    href: "/our-work/teelaunch-pod-shopify-app/",
  },
  {
    stat: "+300%",
    label: "Retention Growth",
    bgImage: "/images/2025/10/Group-5767.png",
    logo: {
      src: "/images/2025/10/Frame-5.png",
      alt: "Rodeo",
      width: 106,
      height: 34,
    },
    title:
      "Retention Starts with Identity 100xelevate Builds Smart Login App for Shopify Brands",
    href: "/our-work/hey-rodeo-shopify-app/",
  },
];

export const CaseStudies = ({ caseStudiesArray = caseStudies }) => {
  return (
    <section className="w-full  md:px-8 px-4">
      <div className="max-w-[1400px] mx-auto flex flex-col md:gap-16 gap-6 md:py-[96px] py-[32px]">
        <h2 className="font-semibold md:text-center wmd:text-[48px] wmd:leading-[58px] md:text-[40px] md:leading-[46px] text-[32px] leading-[38px]">
          Case Studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:gap-10 md:gap-5 gap-8 ">
          {caseStudiesArray.map((item, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-[6px] border"
            >
              {/* Top: background image with stat overlay */}
              <div
                className="relative bg-cover bg-center bg-no-repeat min-h-54 flex flex-col justify-end items-end p-5"
                style={{ backgroundImage: `url(${item.bgImage})` }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, #1D2A274A 0%, #111817 100%)",
                  }}
                />
                <div className="relative z-10 text-right">
                  <h3 className="lg:text-[54px] text-[38px] leading-[1.2] font-semibold text-white mt-2 lg:mb-[10px] mb-[5px] ">
                    {item.stat}
                  </h3>
                  <p className="lg:text-[16px] text-[13px] leading-[20px] text-white ">
                    {item.label}
                  </p>
                </div>
              </div>

              {/* Bottom: black section with logo + title */}
              <div className="bg-black px-4 pt-6 pb-[17px] flex flex-col flex-1 ">
                <Image
                  src={item.logo.src}
                  alt={item.logo.alt}
                  width={item.logo.width}
                  height={item.logo.height}
                  className="h-auto max-h-[34px]  object-contain mb-6"
                />
                <h3 className="text-white lg:text-[22px] font-medium lg:leading-[33px] text-[18px] leading-[22px] mt-2 mb-4">
                  <Link href={item.href} className="hover:underline">
                    {item.title}
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
