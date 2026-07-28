import React from "react";
import { ButtonLink } from "@/components/shared/ButtonLink";

interface FaqItem {
  title: string;
  description: string;
}

interface GotCoveredProps {
  heading?: string;
  faqs?: FaqItem[];
  rightHeading?: string;
  rightDescription?: string;
  buttonName?: string;
  buttonUrl?: string;
}

const defaultFaqs: FaqItem[] = [
  {
    title: "What tools do we need?",
    description:
      "Just Shopify access; we'll recommend free heat mapping if absent.",
  },
  {
    title: "How long does it take?",
    description:
      "Fast turnaround, you'll receive your insights and prototypes within a few days.",
  },
  {
    title: "Is there a guarantee?",
    description: "Yes, if you don't see value, you get a full refund.",
  },
  {
    title: "Can I start small and scale later?",
    description: "Absolutely, start small, scale up.",
  },
];

export const GotCovered = ({
  heading = "Got Questions? We've Got Covered.",
  faqs = defaultFaqs,
  rightHeading = "Ready to Increase Your Conversions?",
  rightDescription = "Brands like yours are already seeing 2× growth after implementing our audit insights. Now it's your turn.",
  buttonName = "Get your audit now",
  buttonUrl = "/request-a-free-audit/",
}: GotCoveredProps) => {
  return (
    <section className="bg-[#F7F7F7] md:px-8 px-4">
      <div className="max-w-[1400px] mx-auto md:py-[96px] py-[32px] flex flex-col wmd:flex-row ">
        {/* Left Column */}
        <div className="flex flex-col flex-1 wmd:max-w-[50%] xl:py-[100px] xl:px-[80px] md:py-[60px] md:px-[40px] p-[20px] bg-white">
          <h2 className="wmd:max-w-[490px] wmd:text-[48px] wmd:leading-[58px] md:text-[40px] md:leading-[46px] text-[32px] leading-[38px] font-semibold md:mb-5 mb-0">
            {heading}
          </h2>
          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="py-[20px] border-b border-[#0000001A]"
              >
                <h3 className="text-[16px] xl:text-[20px] font-medium text-black my-2 leading-[1.2]">
                  {faq.title}
                </h3>
                <p className="md:text-[16px] text-sm xl:leading-[27px] leading-[22px] text-[#707070]">
                  {faq.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col flex-1 md:p-10 p-5 justify-center bg-black gap-5">
          <h2 className="md:max-w-[490px] text-center w-full mx-auto text-white wmd:text-[48px] wmd:leading-[58px] md:text-[40px] md:leading-[46px] text-[32px] leading-[38px] font-semibold ">
            {rightHeading}
          </h2>
          <p className="md:text-[16px] text-sm md:leading-[20px] leading-[22px] text-white md:max-w-[416px] w-full mx-auto text-center">
            {rightDescription}
          </p>
          <div className=" flex justify-center md:pt-4">
            <ButtonLink
              href={buttonUrl}
              variant="light"
              className=" mx-auto hover:bg-black hover:text-white hover:border-white hover:border-[3px]"
            >
              {buttonName}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};
