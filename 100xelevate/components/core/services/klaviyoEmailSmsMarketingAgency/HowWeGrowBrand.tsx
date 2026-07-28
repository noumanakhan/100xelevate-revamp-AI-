import React from 'react'
import { WhyChooseSmsMarketing } from './WhyChooseSmsMarketing'

const Options = [
    {
        label: "1. Audit & Strategy:",
        description: "We start with a full account audit and deliver a 30-day roadmap"
    },
    {
        label: "2. Build & Automate",
        description: "Design + copy + automation, built for your brand voice"
    },
    {
        label: "3. Optimize & Scale",
        description: "Ongoing A/B testing, reporting, and new flows added monthly"
    }
];

export const HowWeGrowBrand = ({ areaName }: { areaName?: string }) => {
  return (
    <div>
        <WhyChooseSmsMarketing
        heading='How We Help Brands Grow with Klaviyo'
        description={
            areaName ? `Whether you are just starting out or scaling to 8-figures, we plug into your stack and act as your lifecycle marketing partner for DTC brands in ${areaName}.` : "Whether you are just starting out or scaling to 8-figures, we plug into your stack and act as your lifecycle marketing partner."
        }
        buttonText='Request a free Klaviyo audit'
        buttonHref='/request-a-free-audit/'
        options={Options}
        zeroIndexText='Our approach:'
        seconDivClassName='p-[10px]'
         />
    </div>
  )
}
