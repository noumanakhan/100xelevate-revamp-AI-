import React from "react";

const steps = [
  {
    number: 1,
    title: "Select Your Audit",
    description:
      "Select the Done-For-You audit, where we handle everything, from identifying problems to implementing solutions.",
  },
  {
    number: 2,
    title: "Get a Customized Action plan",
    description:
      "Within days, we'll send you a tailored plan with prioritized fixes and clear steps to optimize your store.",
  },
  {
    number: 3,
    title: "Start Seeing Real Results",
    description:
      "Watch your sales climb as our expert team works to recover lost revenue and boost your conversions.",
  },
];

const NumberIcon = ({ number }: { number: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 120 120"
  >
    <circle cx="60" cy="60" r="55" fill="black" />
    <text
      x="60"
      y="64"
      fontSize="55"
      fontFamily="Arial, sans-serif"
      fill="white"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {number}
    </text>
  </svg>
);

export const ThreeSimpleSteps = () => {
  return (
    <section className="bg-white md:px-8 px-4">
      <div className="max-w-[1400px] mx-auto flex flex-col wmd:gap-[50px] md:gap-[64px] gap-8 md:py-[86px] py-[32px]">
        <h2 className="w-full md:max-w-[598px] mx-auto wmd:text-[48px] wmd:leading-[58px]  md:text-[40px] md:leading-[46px] text-[32px] leading-[38px] text-center font-semibold">
          3 Simple Steps to Recover Lost Revenue
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col md:gap-5 gap-[10px] wmd:p-[20px] p-[10px]"
            >
              <div
                className={`relative${
                  step.number !== 3
                    ? " after:content-[''] after:hidden wmd:after:block wmd:after:absolute wmd:after:top-[20px] wmd:after:left-[70px] wmd:after:-right-[30px] wmd:after:border-t-1 wmd:after:border-dashed wmd:after:border-black"
                    : ""
                }`}
              >
                <NumberIcon number={step.number} />
              </div>
              <h2 className="leading-[22px] wmd:text-[20px] text-[16px] font-semibold text-black mt-[10px]">
                {step.title}
              </h2>
              <p className="text-[#707070] font-normal text-sm leading-5">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
