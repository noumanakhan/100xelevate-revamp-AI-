import Image from "next/image";
import React, { ReactNode } from "react";

export interface BenefitItem {
  title: string;
  description: ReactNode;
  image: string;
  alt: string;
  width: number;
  height: number;
  mobileWidth?: number;
  mobileHeight?: number;
}

const defaultBenefits: BenefitItem[] = [
  {
    title: "Built for High-Volume Growth",
    description:
      "Shopify Plus stays steady during heavy traffic and major campaigns, giving fast-growing brands the stability they need as demand increases.",
    image: "/images/2025/02/Step_1.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Flexible Checkout",
    description:
      "Enhanced checkout tools offer clearer steps, custom logic and smoother flow, helping customers complete purchases with greater confidence.",
    image: "/images/2025/02/Step_2.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Built-In Automation Tools",
    description:
      "Shopify Flow and Launchpad automate product launches, regional workflows and routine tasks, improving daily accuracy and operational speed.",
    image: "/images/2025/02/Step_3.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Support for Global Expansion",
    description:
      "Multi-store and multi-currency features help brands manage regions and markets from one platform, making international growth much easier.",
    image: "/images/2025/11/download-37.svg",
    alt: "Global expansion icon",
    width: 63.83,
    height: 46.92,
    mobileWidth: 68,
    mobileHeight: 50,
  },
  {
    title: "Advanced Integration Support",
    description:
      "Shopify Plus integrates seamlessly with ERP, CRM, fulfilment, and analytics systems, creating a unified operational setup for growing brands.",
    image: "/images/2025/11/Step_3.svg-1.svg",
    alt: "Integration support icon",
    width: 63.83,
    height: 56.31,
    mobileWidth: 68,
    mobileHeight: 60,
  },
  {
    title: "Strong Security and Reliability",
    description:
      "Enterprise-grade security and dependable uptime protect customer data and ensure your Shopify Plus store performs reliably at all times.",
    image: "/images/2025/11/Step_3-1.svg-1-1.svg",
    alt: "Security and reliability icon",
    width: 63.83,
    height: 56.31,
    mobileWidth: 68,
    mobileHeight: 60,
  },
];

interface WhyChooseShopifyPlusProps {
  title?: string;
  titleClassName?: string;
  benefits?: readonly BenefitItem[];
  mainDivClassName?: string;
  mainDiscription?: string;
  benefitTitleClassName?: string;
  gridMinHeight?: string;
  areaName?: string;
  descriptionClasses?: string;
}

export const WhyChooseShopifyPlus = ({
  mainDivClassName = "px-4  md:px-8",
  title = "Why Brands Choose Shopify Plus",
  mainDiscription = "",
  titleClassName = "max-w-[906px] wmd:text-[48px] md:text-[40px] text-[32px] font-semibold wmd:leading-[58px] md:leading-[46px] leading-[38px]",
  benefits = defaultBenefits,
  benefitTitleClassName,
  gridMinHeight,
  areaName,
  descriptionClasses = "mb-[14px] md:text-center text-[14px] leading-[20px] text-[#707070]",


}: WhyChooseShopifyPlusProps) => {
  return (
    <section className={`w-full ${mainDivClassName}`}>
      <div className="mx-auto w-full max-w-[1200px] md:py-[86px] py-8 md:gap-[64px] gap-6 flex flex-col">
        <div className="flex flex-col gap-4">
          <h2 className={`  mx-auto  md:text-center text-start text-black ${titleClassName}`}>
            {title}
          </h2>
          {mainDiscription && (
            <p className={descriptionClasses}>{mainDiscription}</p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:gap-y-[64px] lg:gap-x-[96px] wmd:gap-[64px] md:gap-[32px] gap-[24px] md:grid-cols-2 ">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`flex md:flex-row flex-col items-start justify-start md:gap-[12px] ${gridMinHeight} `}
            >
              {/* Mobile image */}
              <Image
                src={benefit.image}
                alt={benefit.alt}
                width={1000}
                height={1000}
                style={{
                  maxWidth: `${benefit.mobileWidth ?? benefit.width}px`,
                  maxHeight: `${benefit.mobileHeight ?? benefit.height}px`,
                }}
                className="block md:hidden"
              />
              {/* Desktop image */}
              <Image
                src={benefit.image}
                alt={benefit.alt}
                width={1000}
                height={1000}
                style={{
                  maxWidth: `${benefit.width}px`,
                  maxHeight: `${benefit.height}px`,
                }}
                className="hidden md:block"
              />

              <div>
                <h3
                  className={
                    benefitTitleClassName
                      ? benefitTitleClassName
                      : `mb-3 font-medium text-black mt-2 ${index === 0
                        ? "md:text-[22px] md:leading-[27px] text-[18px] leading-[26px]"
                        : "md:text-[24px] md:leading-[30px] text-[20px] leading-[21px]"
                      }`
                  }
                >
                  {benefit.title}
                </h3>
                <p className=" text-sm font-normal leading-[20px] text-[#707070]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
