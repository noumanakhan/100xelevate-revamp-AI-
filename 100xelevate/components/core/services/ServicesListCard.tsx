import React from "react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import Link from "next/link";

export type ServicesListOption = {
  label: string;
  description: string;
  /** Optional future sub-route segment under /services/… */
  slug?: string;
};

export type ServicesListCardData = {
  id: string;
  title: string;
  description: string;
  /** Path segment after /services/ (e.g. build-a-new-shopify-store) or absolute path */
  slug: string;
  options: ServicesListOption[];
};

/** @deprecated Use ServicesListCardData */
export type ServicesListCardItem = ServicesListCardData;

export type ServicesListCardProps = {
  data: ServicesListCardData;
  className?: string;
};

function ServicesListCard({
  data,
  className = "",
}: ServicesListCardProps) {
  const { id, title, description, slug, options } = data;
  const learnMoreHref =
    slug.startsWith("/") || slug.startsWith("http") ? slug : `/${slug}`;

  return (
    <section
      className={[
        "w-full ",
        "px-[6px] py-[54px] md:px-[22px] md:py-[86px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto flex w-full flex-col gap-[20px] md:flex-row md:items-start md:gap-[86px]">
        <div className="w-full md:max-w-[43%] shrink-0 p-[10px]">
          <p
            className="md:text-[40px] text-[32px] font-medium md:leading-[48px] leading-[36px] text-stroke mb-[20px]"
            aria-hidden
          >
            {id}
          </p>
          <h2 className="text-[24px] font-medium leading-[30px] tracking-[-0.01em] text-black md:mt-[24px] md:text-[48px] md:leading-[58px] mb-[20px]">
            {title}
          </h2>
          <p className="text-[14px] font-normal leading-[20px] text-[#707070] mb-[44px]">
            {description}
          </p>
          <ButtonLink variant="outlined" href={learnMoreHref}>
            Learn more
          </ButtonLink>
        </div>

        <div className="w-full min-w-0 flex-1 lg:max-w-[63%] p-[10px]">
          <div className="w-full">
            {options.map((option, i) => (
              <div
                key={i}
                className="border-b border-[#CCCCCC] py-[28px] md:py-[32px] md:px-[16px] px-[8px]"
              >
                <h3 className="font-sans text-[20px] font-semibold uppercase leading-[26px] tracking-[0.06em] text-black md:text-[24px] md:leading-[30px]">
                  {
                    option?.slug ? (<Link href={option.slug}>{option.label}</Link>) : (option.label)
                  }
                </h3>
                <p className="mt-[16px]  text-[14px] font-normal leading-[18px] text-[#707070] md:text-[14px] md:leading-[20px]">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesListCard;
