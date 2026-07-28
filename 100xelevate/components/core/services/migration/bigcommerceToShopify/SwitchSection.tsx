"use client";

import { type MouseEvent, useState } from "react";

const switchTabs = [
  {
    label: "Higher Revenue",
    target: "#section-1",
    viewBox: "0 0 24 24",
    path: "M7 21.5C4.51472 21.5 2.5 19.4853 2.5 17C2.5 14.5147 4.51472 12.5 7 12.5C9.48528 12.5 11.5 14.5147 11.5 17C11.5 19.4853 9.48528 21.5 7 21.5ZM17 11.5C14.5147 11.5 12.5 9.48528 12.5 7C12.5 4.51472 14.5147 2.5 17 2.5C19.4853 2.5 21.5 4.51472 21.5 7C21.5 9.48528 19.4853 11.5 17 11.5ZM7 19.5C8.38071 19.5 9.5 18.3807 9.5 17C9.5 15.6193 8.38071 14.5 7 14.5C5.61929 14.5 4.5 15.6193 4.5 17C4.5 18.3807 5.61929 19.5 7 19.5ZM17 9.5C18.3807 9.5 19.5 8.38071 19.5 7C19.5 5.61929 18.3807 4.5 17 4.5C15.6193 4.5 14.5 5.61929 14.5 7C14.5 8.38071 15.6193 9.5 17 9.5ZM3 8C3 5.23858 5.23858 3 8 3H11V5H8C6.34315 5 5 6.34315 5 8V11H3V8ZM21 13H19V16C19 17.6569 17.6569 19 16 19H13V21H16C18.7614 21 21 18.7614 21 16V13Z",
  },
  {
    label: "Continuous Innovation",
    target: "#section-2",
    viewBox: "0 0 16 21",
    path: "M5.97308 16H7V11H9V16H10.0269C10.1589 14.7984 10.7721 13.8065 11.7676 12.7226C11.8797 12.6006 12.5988 11.8564 12.6841 11.7501C13.5318 10.6931 14 9.385 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 9.3843 2.46774 10.6917 3.31462 11.7484C3.40004 11.855 4.12081 12.6012 4.23154 12.7218C5.22766 13.8064 5.84103 14.7984 5.97308 16ZM6 18V19H10V18H6ZM1.75395 12.9992C0.65645 11.6297 0 9.8915 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.8925 15.3428 11.6315 14.2443 13.0014C13.624 13.7748 12 15 12 16.5V19C12 20.1046 11.1046 21 10 21H6C4.89543 21 4 20.1046 4 19V16.5C4 15 2.37458 13.7736 1.75395 12.9992Z",
  },
  {
    label: "Lower Total Cost",
    target: "#section-3",
    viewBox: "0 0 20 20",
    path: "M4.00008 3.91424L1.70718 6.20714L0.292969 4.79292L5.00008 0.0858154L9.7072 4.79292L8.293 6.20714L6.00008 3.91424L6.00007 9H4.00008V3.91424ZM15.0001 7.50002C16.3808 7.50002 17.5001 6.38074 17.5001 5.00003C17.5001 3.61932 16.3808 2.50003 15.0001 2.50003C13.6194 2.50003 12.5001 3.61932 12.5001 5.00003C12.5001 6.38074 13.6194 7.50002 15.0001 7.50002ZM15.0001 9.5C12.5148 9.5 10.5001 7.48531 10.5001 5.00003C10.5001 2.51475 12.5148 0.500026 15.0001 0.500026C17.4854 0.500026 19.5001 2.51475 19.5001 5.00003C19.5001 7.48531 17.4854 9.5 15.0001 9.5ZM19.7072 15.2071L18.293 13.7929L16.0001 16.0858V11H14.0001V16.0858L11.7072 13.7929L10.293 15.2071L15.0001 19.9142L19.7072 15.2071ZM3.00008 17H7.00007L7.00008 13H3.00008V17ZM8.0001 11C8.5524 11 9.0001 11.4477 9.0001 12V18C9.0001 18.5523 8.5524 19 8.0001 19H2.00007C1.44779 19 1.00007 18.5523 1.00008 18V12C1.00008 11.4477 1.44779 11 2.00008 11H8.0001Z",
  },
  {
    label: "Industry Leader",
    target: "#section-4",
    viewBox: "0 0 16 20",
    path: "M2 2H0V0H16V2H14V4C14 5.61543 13.1838 6.91468 12.1561 7.97667C11.4532 8.703 10.598 9.372 9.7309 10C10.598 10.628 11.4532 11.297 12.1561 12.0233C13.1838 13.0853 14 14.3846 14 16V18H16V20H0V18H2V16C2 14.3846 2.81616 13.0853 3.8439 12.0233C4.54682 11.297 5.40202 10.628 6.2691 10C5.40202 9.372 4.54682 8.703 3.8439 7.97667C2.81616 6.91468 2 5.61543 2 4V2ZM4 2V4C4 4.88457 4.43384 5.71032 5.2811 6.58583C6.008 7.33699 6.9548 8.0398 8 8.7781C9.0452 8.0398 9.992 7.33699 10.7189 6.58583C11.5662 5.71032 12 4.88457 12 4V2H4ZM8 11.2219C6.9548 11.9602 6.008 12.663 5.2811 13.4142C4.43384 14.2897 4 15.1154 4 16V18H12V16C12 15.1154 11.5662 14.2897 10.7189 13.4142C9.992 12.663 9.0452 11.9602 8 11.2219Z",
  },
];

const SwitchSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (
    event: MouseEvent<HTMLAnchorElement>,
    index: number,
    target: string
  ) => {
    event.preventDefault();
    setActiveTab(index);

    document
      .querySelector(target)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="w-full bg-white md:px-8 px-4 xl:pb-[60px] md:pb-10 md:pt-0 pt-8">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-5">
        <h3 className="text-center wmd:text-[22px] md:text-[18px] text-[16px] md:leading-[27px] leading-[22px] font-medium text-black">
          Why Shopify?
        </h3>

        <h2 className="text-center font-semibold lg:leading-[58px] wmd:leading-[50px] md:leading-[46px] leading-[34px] text-black lg:text-[48px] md:text-[42px] text-[28px]  w-full md:max-w-[536px] md:mb-[20px] mb-[10px]">
          For Established Brands that are Switching
        </h2>

        <nav
          aria-label="Why Shopify sections"
          className="flex flex-wrap gap-[10px] rounded-[10px] bg-[#f7f7f7] p-[10px] md:flex-nowrap"
        >
          {switchTabs.map((tab, index) => {
            const isActive = activeTab === index;

            return (
              <a
                key={tab.label}
                href={tab.target}
                onClick={(event) => handleClick(event, index, tab.target)}
                className={`flex basis-[48%] cursor-pointer items-center justify-start leading-[1.5] gap-[6px] rounded-[8px] px-[14px] py-[10px] text-[10px] font-normal md:basis-auto md:text-[12px] wmd:text-[16px] ${
                  isActive
                    ? "bg-black text-white"
                    : "text-black hover:bg-[#e6e6e6]"
                }`}
              >
                <svg
                  aria-hidden="true"
                  className="wmd:size-5 size-4 shrink-0 "
                  viewBox={tab.viewBox}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={tab.path} fill="currentColor" />
                </svg>
                <span>{tab.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

export default SwitchSection;
