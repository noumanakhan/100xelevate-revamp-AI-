import React from "react";
import { FAQsSEction } from "../shopifyAppDevelopmentAgency/FAQsSEction";

const Faqs = (AreaName?: string) => {
  const faqs = [
    {
      question: "1. What is CRO, and how can it help my Shopify store?",
      answer:
        "Conversion Rate Optimization focuses on improving the percentage of visitors who purchase without increasing ad spend.",
    },
    {
      question: "2. How long does an A/B test take to show results?",
      answer:
        "Typically, 2-4 weeks, depending on your store’s traffic and statistical confidence level.",
    },
    {
      question: "3. Which tools do you use for CRO?",
      answer:
        "We use Convert.com, Hotjar, Clarity, GA4, and Hypertask.ai for experimentation and data tracking.",
    },
    {
      question: "4. Do you offer CRO audits or monthly retainers?",
      answer:
        "Yes. You can start with a one-time CRO audit or enroll in our ongoing monthly testing program.",
    },
    {
      question: "5. Can you integrate CRO with Klaviyo and paid media?",
      answer:
        "Absolutely. We align CRO findings with Klaviyo flows and Meta campaigns to create a unified optimization system.",
    },
    {
      question: `6. How quickly can I expect measurable ROI?`,
      answer:
        "Most clients see initial improvements within 30 days, with consistent growth from ongoing testing cycles.",
    },
  ];

  // Add extra FAQs if AreaName exists
  if (AreaName) {
    faqs.push(
      {
        question: `7. Are you a Shopify CRO agency or a general CRO agency?`,
        answer: `We are a Shopify CRO agency specializing in conversion optimization for Shopify stores. While our CRO principles are platform-agnostic, our tools, testing workflows, and UX strategies are built specifically for Shopify.`,
      },
      {
        question: `Do you work with Shopify brands based in ${AreaName}?`,
        answer: `Yes. We work with ${AreaName}-based Shopify brands as well as regional teams selling nationwide, tailoring CRO priorities to their traffic sources, audience behavior, and growth stage.`,
      },
    );
  }

  return faqs;
};

export const CROFaqs = ({ AreaName }: { AreaName?: string }) => {
  return (
    <div className=" w-full">
      <FAQsSEction FAQs={() => Faqs(AreaName)} />
    </div>
  );
};
