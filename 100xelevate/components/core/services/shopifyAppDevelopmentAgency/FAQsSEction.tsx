import React from "react";
import { FAQAccordion } from "../FAQAccordion";

export type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const DefaultFaqs = (AreaName?: string): FAQItem[] => [
  {
    question: "1. What is a custom Shopify app?",
    answer:
      "A custom Shopify app is developed exclusively for your brand to extend Shopify’s default features and automate complex processes.",
  },
  {
    question: "2. How long does it take to build a custom app?",
    answer:
      "Depending on scope, projects usually range from 3–8 weeks. Larger public apps or API-based integrations may take longer.",
  },
  {
    question: "3. Can you help launch apps for the Shopify App Store?",
    answer:
      "Yes, our team handles submission, review, listing optimization, and post-launch updates to ensure approval and adoption.",
  },
  {
    question: "4. Do you offer ongoing maintenance?",
    answer:
      "Absolutely. We offer post-launch retainers to manage updates, optimize performance, and scale features.",
  },
  {
    question: "5. Which frameworks do you use for Shopify app development?",
    answer:
      "We work with Node.js, React, and Laravel, using Shopify APIs and Polaris design system for consistent functionality.",
  },
  {
    question: `6. Do you provide Shopify app development for brands in ${AreaName}?`,
    answer: (
      <>
        Yes, we partner with growing DTC and enterprise brands{" "}
        <strong>in {AreaName}</strong> to develop high-performance custom apps
        built for scale.
      </>
    ),
  },
];

export const FAQsSEction = ({
  AreaName = "USA",
  FAQs = DefaultFaqs,
}: {
  AreaName?: string;
  FAQs?: (AreaName: string) => FAQItem[];
}) => {
  return (
    <div className="w-full mx-auto px-4 md:px-8">
      <div className="max-w-[1420px] w-full mx-auto md:py-[96px] py-[22px] xl:gap-[96px] lg:gap-[40px] md:gap-[32px] gap-[20px] flex md:flex-row flex-col">
        <div className="p-[10px] w-full max-w-[553px]">
          <div>
            <h1 className="font-semibold  wmd:text-[48px] wmd:leading-[58px] md:text-[40px] md:leading-[46px] text-[32px] leading-[38px]">
              Frequently asked questions
            </h1>
          </div>
        </div>

        <div className="p-[10px]">
          <FAQAccordion faqs={FAQs(AreaName)} />
        </div>
      </div>
    </div>
  );
};
