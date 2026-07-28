import React from "react";
import Image from "next/image";

const XCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 20 20"
    fill="none"
    className="shrink-0 mt-[2px]"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 0.25C4.615 0.25 0.25 4.615 0.25 10C0.25 15.385 4.615 19.75 10 19.75C15.385 19.75 19.75 15.385 19.75 10C19.75 4.615 15.385 0.25 10 0.25ZM8.28 7.22C8.21134 7.14631 8.12854 7.08721 8.03654 7.04622C7.94454 7.00523 7.84522 6.98318 7.74452 6.98141C7.64382 6.97963 7.54379 6.99816 7.4504 7.03588C7.35701 7.0736 7.27218 7.12974 7.20096 7.20096C7.12974 7.27218 7.0736 7.35701 7.03588 7.4504C6.99816 7.54379 6.97963 7.64382 6.98141 7.74452C6.98318 7.84522 7.00523 7.94454 7.04622 8.03654C7.08721 8.12854 7.14631 8.21134 7.22 8.28L8.94 10L7.22 11.72C7.14631 11.7887 7.08721 11.8715 7.04622 11.9635C7.00523 12.0555 6.98318 12.1548 6.98141 12.2555C6.97963 12.3562 6.99816 12.4562 7.03588 12.5496C7.0736 12.643 7.12974 12.7278 7.20096 12.799C7.27218 12.8703 7.35701 12.9264 7.4504 12.9641C7.54379 13.0018 7.64382 13.0204 7.74452 13.0186C7.84522 13.0168 7.94454 12.9948 8.03654 12.9538C8.12854 12.9128 8.21134 12.8537 8.28 12.78L10 11.06L11.72 12.78C11.7887 12.8537 11.8715 12.9128 11.9635 12.9538C12.0555 12.9948 12.1548 13.0168 12.2555 13.0186C12.3562 13.0204 12.4562 13.0018 12.5496 12.9641C12.643 12.9264 12.7278 12.8703 12.799 12.799C12.8703 12.7278 12.9264 12.643 12.9641 12.5496C13.0018 12.4562 13.0204 12.3562 13.0186 12.2555C13.0168 12.1548 12.9948 12.0555 12.9538 11.9635C12.9128 11.8715 12.8537 11.7887 12.78 11.72L11.06 10L12.78 8.28C12.8537 8.21134 12.9128 8.12854 12.9538 8.03654C12.9948 7.94454 13.0168 7.84522 13.0186 7.74452C13.0204 7.64382 13.0018 7.54379 12.9641 7.4504C12.9264 7.35701 12.8703 7.27218 12.799 7.20096C12.7278 7.12974 12.643 7.0736 12.5496 7.03588C12.4562 6.99816 12.3562 6.97963 12.2555 6.98141C12.1548 6.98318 12.0555 7.00523 11.9635 7.04622C11.8715 7.08721 11.7887 7.14631 11.72 7.22L10 8.94L8.28 7.22Z"
      fill="black"
    />
  </svg>
);

const listItems = [
  "Checkout abandonment is costing you 15-30% of your transactions",
  "Poor mobile experiences are driving away 40% of your potential customers",
  "Analytics gaps are preventing you from seeing the real problems",
  "Conflicting apps and plugins are messing up your conversion flow",
  "Outdated tactics are turning modern shoppers away",
];

export const LosingMoney = () => {
  return (
    <section className="bg-white md:px-8 px-4">
      <div className="max-w-[1200px] mx-auto  md:py-[86px] py-[32px]">
        <div className="flex flex-col items-center wxl:gap-[30px] xl:gap-[64px] md:gap-[32px] gap-4 bg-[#F7F7F7] md:p-8 px-4 py-8">
          <Image
            src="https://100xelevate.com/wp-content/uploads/2025/11/download-10.svg"
            alt=""
            width={800}
            height={800}
            className="w-full md:max-w-[40px] max-w-[30px] h-auto -mb-4"
            priority
          />

          <h2 className="max-w-[650px] wmd:text-[48px] wmd:leading-[58px] font-semibold md:text-[40px] md:leading-[46px] text-[32px] leading-[40px] text-center">
            Your Shopify Store Is Losing Money, Here&apos;s Why
          </h2>

          <p className="max-w-[625px] font-normal md:text-[16px] md:leading-[20px] text-[14px] leading-[22px] text-center text-[#707070]">
            Every day, your store loses sales due to hidden problems you
            can&apos;t see. Your analytics don&apos;t show them, and your
            developer can&apos;t fix them. But these issues are costing you
            thousands while your competitors scoop up your customers.
          </p>

          <ul className="flex flex-col w-full max-w-[551px]">
            {listItems.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-[10px] pb-2 last:pb-0 mt-2 first:mt-0"
              >
                <XCircleIcon />
                <span className="md:text-[16px] md:leading-[20px] text-[14px] leading-[22px]  text-[#707070]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p className="md:text-[16px] md:leading-[20px] text-[14px] leading-[22px] text-[#707070] max-w-[625px]">
            This is where we come in. Our expert-led CRO audits pinpoint exactly
            where your store&apos;s losing revenue, so you can fix it fast and
            start recovering those lost sales.
          </p>
        </div>
      </div>
    </section>
  );
};
