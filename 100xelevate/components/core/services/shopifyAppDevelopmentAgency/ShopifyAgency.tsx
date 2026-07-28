import Image from "next/image";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { ReactNode } from "react";

const LOGO_URL = "/images/2025/10/Shopify-Plus-Logo-Vector.svg--1024x211.png";
const ILLUSTRATION_URL = "/images/2025/10/Frame-1000002993-3.webp";
const STARS_IMAGE_URL =
  "/images/2025/10/6797fcb46db7cd27e34750c5_Vectors-Wrapper.svg";

type ShopifyAgencyProps = {
  headingClasses?: string;
  containerMaxWidth?: string;
  containerGapClass?: string;
  logoSection?: ReactNode;
  AreaName?: string;
  showquote?: boolean;
  showLogo?: boolean;
  topSubHeading?: string;
  showSubHeading?: boolean;
  headingMaxWidthClass?: string;
  heading?: ReactNode;
  subHeading?: string;
  description?: ReactNode;
  descriptionMaxWidthClass?: string;
  buttonText?: string;
  buttonHref?: string;
  bgColor?: string;
  leftContentJustifyClass?: string;
  buttonMarginTopClass?: string;
  mainImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  autherQuate?: string;
  autherName?: string;
  autherPosition?: string;
  mainImageAdditionalClass?: string;
  reverseOrder?: boolean;
  contentDivClasses?: string;
  contentDivFlexClasses?: string;
  RightSection?: ReactNode;
};

export function ShopifyAgency({
  headingClasses = " xl:text-[52px] md:text-[44px] text-[36px] font-semibold text-start xl:leading-[58px] md:leading-[46px] leading-[39px]",
  containerMaxWidth = "max-w-[1400px]",
  containerGapClass = " xl:gap-[74px] lg:gap-[64px] md:gap-8 gap-4",
  logoSection = (<div>
    <Image
      src={LOGO_URL}
      alt="Shopify Plus"
      width={640}
      height={142}
      className="h-auto w-auto max-w-[150px] "
      priority
      unoptimized
    />
  </div>),
  AreaName = "USA",
  showquote = true,
  showLogo = true,
  topSubHeading = "",
  showSubHeading = true,
  headingMaxWidthClass = "xl:max-w-[460px] md:max-w-[340px] max-w-[300px]",
  heading = (
    <>
      <span>Shopify App </span> Development Agency in {AreaName}
    </>
  ),
  subHeading = "Build, Scale & Automate with Tailored Shopify Apps",
  description = (
    <>
      At 100xelevate, we build powerful, performance-focused Shopify apps for
      brands in {AreaName === "USA" ? <b>USA</b> : <>{AreaName}</>} and beyond,
      helping you automate operations, connect platforms, and scale revenue
      efficiently.
      <br />
      From private app development to complex API integrations, we deliver
      Shopify solutions built to fit your exact business needs.
    </>
  ),
  buttonText = "Talk to our app experts",
  buttonHref = "/shopify-app-development-agency/#Schedule-a-call",
  descriptionMaxWidthClass = "max-w-[530px]",
  bgColor = "",
  leftContentJustifyClass = "",
  buttonMarginTopClass = "md:mt-4 mt-0",
  mainImage = {
    src: ILLUSTRATION_URL,
    alt: "Shopify Plus development visuals showing coded features, optimized product pages, variant selectors, and customer reviews.",
    width: 905,
    height: 717,
  },
  autherQuate = "“100xelevate built a custom Shopify app that streamlined our operations and boosted revenue. Excellent communication and flawless delivery!”",
  autherName = "Alex Mich",
  autherPosition = "E-commerce Operations Director",
  mainImageAdditionalClass = "",
  reverseOrder = false,
  contentDivClasses = "md:gap-6 gap-4",
  contentDivFlexClasses = "flex-col wmd:flex-row",
  RightSection 

}: ShopifyAgencyProps) {
  return (
    <section className={`w-full md:px-8 px-4 ${bgColor || "bg-[#F7F7F7]"}`}>
      <div className={`w-full ${containerMaxWidth} mx-auto flex md:py-[86px] py-8  ${containerGapClass} ${reverseOrder ? "flex-col-reverse wmd:flex-row-reverse" : `${contentDivFlexClasses}`}`}>
        {/* Left: text content */}
        <div
          className={` flex-1 flex  flex-col  min-w-0 ${reverseOrder ? "md:w-[50%]" : ""} ${leftContentJustifyClass || ""} ${contentDivClasses}`}
        >
          {/* Shopify Plus logo */}
          {showLogo && (
            logoSection
          )}

          {topSubHeading && (
            <h2 className="wmd:text-[22px] wmd:leading-[27px] text-[16px] leading-[22px] font-semibold">
              {topSubHeading}
            </h2>
          )}

          {/* Heading */}
          <h1
            className={`${headingClasses} ${headingMaxWidthClass}`}
          >
            {heading}
          </h1>

          {/* Sub heading */}
          {showSubHeading && (
            <h2 className="wmd:text-[22px] wmd:leading-[27px] text-[16px] leading-[22px] font-semibold">
              {subHeading}
            </h2>
          )}

          {/* Description */}
          <p
            className={`text-[#707070] md:text-base text-[14px] md:leading-5 leading-[22px] ${descriptionMaxWidthClass}`}
          >
            {description}
          </p>

          {/* CTA */}
          <div className={`flex flex-wrap ${buttonMarginTopClass}`}>
            <ButtonLink href={buttonHref} className="px-[20px] py-[12px] h-[43px]">
              {buttonText}
            </ButtonLink>
          </div>
        </div>

        {/* Right: illustration */}
        {RightSection ? (
          <div className="flex-1">
            {RightSection}
          </div>
        ) : (
          <div className={`flex-1 min-w-0 ${reverseOrder ? "md:w-[50%]" : ""}`}>
          <div className="">
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              width={mainImage.width}
              height={mainImage.height}
              className={`w-full h-auto ${mainImageAdditionalClass}`}
              priority
            />
          </div>
          {showquote && (
            <div className="md:p-[24px] p-[16px] md:gap-[24px] gap-[16px] flex flex-col justify-start bg-black">
              <Image
                src={STARS_IMAGE_URL}
                alt="Logo"
                width={107}
                height={20}
                className="w-[107px] h-[20px] object-contain"
              />
              <p className="md:text-[18px] font-normal leading-[22px] text-[16px] text-white">
                {autherQuate}
              </p>
              <div>
                <p className="md:text-[18px] font-normal leading-[22px] text-[16px] text-white">
                  {autherName}
                </p>
                <p className="md:text-[18px] font-normal leading-[22px] text-[16px] text-white">
                  {autherPosition}
                </p>
              </div>
            </div>
          )}
        </div>
        )}
      </div>
    </section>
  );
}
