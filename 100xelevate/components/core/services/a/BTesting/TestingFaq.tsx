import React from "react";
import { GotCovered } from "../../shopifyAudit/GotCovered";

const Faqs = [
  {
    title: "Can we test global elements like navigation or mini‑cart?",
    description:
      "Absolutely. Shoplift supports theme-level tests for headers, drawers, and even full layouts.",
  },
  {
    title: "Do we need developers?",
    description:
      "Not for most tests. You launch from the Shopify Theme Editor; 100x handles the design and setup.",
  },
  {
    title: "How accurate is reporting?",
    description:
      "Each test analyzes 600+ parameters with 1:1 order matching for data-driven confidence.",
  },
  {
    title: "What’s included in the trial?",
    description:
      "You get a 30-day extended trial with priority onboarding and Slack support.",
  },
];

export const TestingFaq = () => {
  return (
    <GotCovered
      heading="Frequently asked questions"
      faqs={Faqs}
      rightHeading="Ready to run your first winning test?"
      rightDescription="Results vary by traffic and audience; all uplift figures are from real case studies and/or Shoplift reporting. Benchmarks are directional, not guarantees."
      buttonName="Start the A/B test drive"
      buttonUrl="/book-a-demo/"
    />
  );
};
