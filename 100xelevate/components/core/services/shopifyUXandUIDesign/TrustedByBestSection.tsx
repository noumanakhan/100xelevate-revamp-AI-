import { LogoMarquee } from "../LogoMarquee";

type TrustedByBestSectionProps = {
  title?: string;
  description?: string;
  descriptionMaxWidthClass?: string;
  mainDivClassName?: string;
};

export const TrustedByBestSection = ({
  title = "Trusted by the Best",
  description = "We&apos;ve helped the world&apos;s most innovative brands to scale. we support Shopify brands that value clear design and steady performance",
  descriptionMaxWidthClass = "max-w-2xl",
  mainDivClassName = "",
}: TrustedByBestSectionProps) => {
  return (
    <div
      className={`${mainDivClassName} w-full  bg-white flex flex-col items-center md:px-8 px-2 pb-15 md:gap-5 sm:gap-16 gap-8 ${mainDivClassName}`}
    >
      <h2 className="md:text-[48px] sm:text-[40px] text-[32px] font-semibold text-black text-center md:leading-[58px] sm:leading-[46px] leading-[38px]">
        {title}
      </h2>
      <p
        className={`text-[#707070] text-center ${descriptionMaxWidthClass} md:text-base text-[14px] md:leading-5 leading-[22px]`}
      >
        {description}
      </p>
      <div className="max-w-[1400px] w-full ">
        <LogoMarquee duration="30s" />
      </div>
    </div>
  );
};
