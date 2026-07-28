"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export type FAQItem = {
  question: string;
  answer: ReactNode;
};

type FAQAccordionProps = {
  faqs?: readonly FAQItem[];
  answerAdditionlClass?: string;
  QuestionClassName?: string;
};

const defaultFaqs: FAQItem[] = [
  {
    question: "1. Why is UX and UI design important for a Shopify store?",
    answer:
      "Strong UX and UI design help customers navigate your Shopify store with clarity, understand products quickly, and complete purchases with fewer barriers. A well-designed experience improves engagement, builds trust, and supports higher conversions across both mobile and desktop.",
  },
  {
    question: "2. How can better UX and UI improve my store's conversions?",
    answer:
      "Improved UX and UI guide shoppers through a cleaner path, reduce confusion, and highlight product information more effectively. This leads to faster decision-making, fewer drop-offs, and measurable gains in conversion rate, average order value, and customer satisfaction.",
  },
  {
    question: "3. What is included in your Shopify UX and UI design service?",
    answer:
      "Our service includes UX planning, page structure, wireframes, interactive prototypes, visual design, usability reviews, and a complete design system. Each step strengthens product discovery, improves flow, and supports a smoother shopping experience for your customers.",
  },
  {
    question: "4. How long does a typical Shopify UX and UI project take?",
    answer:
      "Most Shopify UX and UI projects take two to four weeks, depending on the number of templates and the complexity of the required changes. Timelines may expand if user testing, additional revisions, or advanced prototyping are needed.",
  },
  {
    question: "5. Do you redesign specific pages or the entire Shopify store?",
    answer:
      "Yes. We can improve individual pages, such as home, collection, product, and cart, or redesign the entire store. This flexible approach allows you to address priority areas while planning long-term improvements at your own pace.",
  },
  {
    question: "6. What is the difference between UX and UI design in Shopify?",
    answer:
      "UX design shapes how customers move through your store and how easily they reach their goals. UI design defines the visual elements like spacing, typography, and layout. Both work together to create a clear, consistent, and user-friendly Shopify experience.",
  },
  {
    question: "7. Can improved UX reduce cart and checkout abandonment?",
    answer:
      "Yes. Clearer layouts, simplified steps, and stronger visual hierarchy help reduce hesitation in the checkout flow. Better UX design lowers abandonment rates by making the purchase path more predictable and easier to complete.",
  },
  {
    question:
      "8. Do you provide developer-ready files after the design is completed?",
    answer:
      "Yes. We deliver organized design files and specifications that developers can follow accurately. This ensures the final build reflects the intended UX and UI and reduces back-and-forth during development.",
  },
  {
    question:
      "9. Can your UX and UI design work within my existing Shopify theme?",
    answer:
      "We can refine your current theme or create new templates if needed. The choice depends on your long-term goals, scalability requirements, and the limitations of the theme you are using.",
  },
  {
    question: "10. Do you offer UX and UI design for Shopify apps as well?",
    answer:
      "Yes. We design clean, intuitive interfaces for both merchant-facing and customer-facing Shopify apps. Our UX and UI approach improves usability, supports smooth navigation, and aligns with Shopify's app design patterns.",
  },
];

const ArrowUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="15"
    viewBox="0 0 16 18"
    fill="none"
  >
    <path
      d="M7.85714 1L7.85714 17M7.85714 1L14.7143 7.85714M7.85714 1L1 7.85714"
      stroke="#070707"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="15"
    viewBox="0 0 16 18"
    fill="none"
  >
    <path
      d="M7.85714 17L7.85714 1M7.85714 17L14.7143 10.1429M7.85714 17L1 10.1429"
      stroke="#070707"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FAQAccordion = ({ faqs = defaultFaqs, answerAdditionlClass, QuestionClassName = "text-[18px] lg:text-[24px] font-semibold" }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="flex flex-col w-full">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-t border-[#161616] last:border-b"
        >
          <button
            className="w-full flex items-center justify-between py-[30px] px-[10px] text-left gap-4"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span className={`${QuestionClassName} text-[#1f2124] leading-snug`}>
              {faq.question}
            </span>
            <span className="shrink-0">
              {openIndex === index ? <ArrowUp /> : <ArrowDown />}
            </span>
          </button>

          <div
            role="region"
            aria-hidden={openIndex !== index}
            className={`grid overflow-hidden transition-all duration-[400ms] ${answerAdditionlClass} ease-in-out motion-reduce:transition-none ${
              openIndex === index
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0">
              <p className="pb-5 md:pl-9 pl-5 text-[14px] leading-[20px]  text-[#707070] font-normal mb-[14px]">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
