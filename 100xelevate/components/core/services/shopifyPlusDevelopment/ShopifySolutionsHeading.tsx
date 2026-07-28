import React from "react";

export const ShopifySolutionsHeading = ({
  title = "Shopify Plus Development Solutions We Offer",
  titleMaxWidth = "max-w-[670px]",
  description = "",

}: {
  title?: string,
  titleMaxWidth?: string
  description?: string,
}) => {
  return (
    <div className="w-full px-4  md:px-8">
      <div className="max-w-[1140px] md:pt-[86px] pt-[32px] w-full mx-auto flex md:justify-center gap-5 flex-col items-center">
        <h1 className={`${titleMaxWidth} w-full md:text-center text-start font-semibold wmd:leading-[58px] md:leading-[46px] leading-[38px]  text-black wmd:text-[48px] md:text-[40px] text-[32px]`}>
          {title}
        </h1>
        {description && <p className="text-center text-[#707070] max-w-[600px] w-full md:text-[16px] text-[14px] md:leading-[20px] leading-[22px]">{description}</p>}
      </div>
    </div>
  );
};
