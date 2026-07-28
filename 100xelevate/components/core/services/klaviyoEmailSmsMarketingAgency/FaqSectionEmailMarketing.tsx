import React from 'react'
import { FAQAccordion } from '../FAQAccordion'

const Faqs = [
  {
    question: "1. Can you set up both email and SMS in Klaviyo?",
    answer:
      "Yes. We set up compliant, high-converting SMS and email automations under one roof.",
  },
  {
    question: "2. Do you offer just one-time setup or ongoing management too?",
    answer:
      "Both. We offer one-time flow builds, monthly retainers, and fractional CMO support.",
  },
  {
    question: "3. We already have flows running. Can you optimize them?",
    answer:
      "Absolutely. We start with a full audit and identify gaps, then implement changes backed by data.",
  },
  {
    question: "4. Do you work with non-Shopify platforms?",
    answer:
      "While we specialize in Shopify + Klaviyo, we have also worked with WooCommerce, BigCommerce, and headless stacks.",
  },
  {
    question: "5. How long does a full Klaviyo build take?",
    answer:
      "Initial setup (strategy, design, copy, and development) takes 2–4 weeks, depending on complexity.",
  },
];

export const FaqSectionEmailMarketing = () => {
    return (
        <div className="bg-[#F7F7F7] w-full mx-auto px-[6px] md:px-8 md:py-[96px] py-[54px] flex xl:gap-[96px] lg:gap-[44px] md:gap-[32px] gap-[20px] max-md:flex-col">
            {/* <div className="max-w-[1420px] w-full mx-auto md:py-[96px] py-[22px] xl:gap-[96px] lg:gap-[40px] md:gap-[32px] gap-[20px] flex md:flex-row flex-col"> */}
                <div className="p-[10px] w-full md:w-[43%]">
                    <div>
                        <h1 className="font-medium  wmd:text-[48px] wmd:leading-[58px] text-[32px] md:leading-[38px] leading-[39px]">
                            Frequently asked questions
                        </h1>
                    </div>
                </div>

                <div className='p-[10px] md:w-[60%] w-full'>
                    <FAQAccordion
                    faqs={Faqs} 
                    QuestionClassName="text-[14px] md:text-[18px] lg:text-[24px] font-medium"
                    answerAdditionlClass="-mt-[18px]"
                    />
                </div>
            {/* </div> */}
        </div>
    )
}
