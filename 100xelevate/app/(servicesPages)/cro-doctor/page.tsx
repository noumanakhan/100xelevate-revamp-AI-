import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ScanWebPage } from "@/components/core/services/croDoctor/ScanWebPage";
import { SliderSection } from "@/components/core/services/croDoctor/SliderSection";
import { LosingMoney } from "@/components/core/services/croDoctor/LosingMoney";
import { FixShopifyStore } from "@/components/core/services/croDoctor/FixShopifyStore";
import { WhatUncover } from "@/components/core/services/croDoctor/WhatUncover";
import { RecoverLost } from "@/components/core/services/croDoctor/RecoverLost";
import { OptimizeYourStore } from "@/components/core/services/croDoctor/OptimizeYourStore";
import { JustIdentify } from "@/components/core/services/croDoctor/JustIdentify";
import { ThreeSimpleSteps } from "@/components/core/services/croDoctor/ThreeSimpleSteps";
import { LetsChat } from "@/components/core/book-a-demo/LetsChat";
import { RealResults } from "@/components/core/services/shopifyUXandUIDesign/RealResults";
import { FAQAccordion } from "@/components/core/services/FAQAccordion";
import { FAQsSection } from "@/components/core/services/shopifyUXandUIDesign/FAQsSection";
import AskAISection from "@/components/core/home/AskAISection";

export const metadata: Metadata = buildMetadata({
  title: "CRO Doctor - 100xelevate",
  description:
    "Quickly find and fix hidden revenue leaks with 100xElevate's Shopify CRO audits to recover lost sales and boost conversions.",
  path: "/cro-doctor/",
});

const Faqs = [
  {
    question: "1. What exactly is a CRO audit?",
    answer:
      "A CRO audit is a detailed review of your Shopify store, helping you understand why you’re losing sales and providing actionable steps to fix it.",
  },
  {
    question: "2. What conversion improvements can I expect?",
    answer:
      "Clients typically see a 10-30% increase in conversions. One client saw a 30% revenue boost after implementing our fixes.",
  },
  {
    question: "3. How soon will I see results after implementation?",
    answer:
      "You’ll see improvements within days of implementing the highest-priority fixes. Full impact usually takes 30-60 days.",
  },
  {
    question: "4. How does the Done-For-You service work?",
    answer:
      "After your audit, our team implements all recommended changes, from small tweaks to complete redesigns, saving you time while improving conversions.",
  },
  {
    question: "5. Which businesses benefit from your audits?",
    answer:
      "Any Shopify store looking to grow will benefit, but we see the highest ROI with brands in the $1M to $40M range.",
  },
  {
    question: "6. What if I've already tried other CRO tactics?",
    answer:
      "Our approach uncovers hidden issues, like checkout abandonment and mobile flaws, that others miss.",
  },
  {
    question: "7. Do you optimize for both desktop and mobile?",
    answer:
      "Yes! We focus on mobile-first optimization and review both desktop and mobile experiences to boost conversions across all devices.",
  },
];

export default function Page() {
  return (
    <main>
      <ScanWebPage />
      <SliderSection />
      <LosingMoney />
      <FixShopifyStore />
      <WhatUncover />
      <RecoverLost />
      <OptimizeYourStore />
      <JustIdentify />
      <ThreeSimpleSteps />
      <div className="bg-[#F7F7F7]">
        <LetsChat
          calendarBG="bg-white"
          headingSize="xl:text-[48px] xl:leading-[58px] wmd:text-[32px] wmd:leading-[40px] md:text-[40px] md:leading-[46px] text-[32px] leading-[38px]"
        />
      </div>
      <RealResults cardBg="bg-[#F7F7F7]" sectionBg="bg-white" />
      <div className="bg-[#F7F7F7]">
        <FAQsSection faqs={Faqs} answerAdditionlClass="-mt-5" />
      </div>
      <AskAISection />
    </main>
  );
}
