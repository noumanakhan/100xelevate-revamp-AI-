import React from 'react'
import { WhyChooseShopifyPlus } from '../WhyChooseShopifyPlus'

const Benefits = [
  {
    title: "Klaviyo Setup & Migration",
    description: (
      <>
        Platform migration from Mailchimp, Omnisend, Postscript, etc.
        <br />

        Klaviyo account setup with deliverability optimization
        <br />

        Email & SMS compliance setup (TCPA, GDPR, etc.)
      </>
    ),
    image: "/images/2025/02/Step_1.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Flows & Automations (Email + SMS) ",
    description: (
      <p >Welcome Series<br />Abandoned Cart / Browse / Checkout<br />Post-Purchase &amp; Replenishment<br />Birthday, Review Request, Winback<br />Subscription / Recharge &amp; Membership Automations</p>
    ),
    image: "/images/2025/02/Step_2.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Klaviyo Campaign Management",
    description: (
      <p >Weekly or Monthly calendar planning<br />
        List cleaning and A/B testing<br />
        Promo + Non-promo storytelling campaigns<br />
        Product launches &amp; seasonal events
      </p>
    ),
    image: "/images/2025/02/Step_3.svg.png",
    alt: "100xelevate process step icon",
    width: 60,
    height: 61,
  },
  {
    title: "Segmentation & Personalization",
    description: (
      <p >Predictive analytics<br />
        VIP, at-risk, first-time, and repeat customer segmentation<br />
        Dynamic content blocks
      </p>
    ),
    image: "/images/2025/11/download-37.svg",
    alt: "Global expansion icon",
    width: 63.83,
    height: 46.92,
    mobileWidth: 68,
    mobileHeight: 50,
  },
  {
    title: "Deliverability & Audit Services",
    description: (
      <p >Spam prevention<br />
        Bounce/spam fix audits<br />
        Re-engagement strategies<br />
        List cleaning + warming plans
      </p>
    ),
    image: "/images/2025/11/Step_3.svg-1.svg",
    alt: "Integration support icon",
    width: 63.83,
    height: 56.31,
    mobileWidth: 68,
    mobileHeight: 60,
  },
  {
    title: "Klaviyo + Shopify Custom Events & Integrations",
    description: (
      <p >Shopify custom event tracking (for missed triggers)<br/>
        Recharge, Loop, Tapcart, Replo, and Postscript integrations<br/>
          Webhooks &amp; API data syncing for full-funnel tracking
        </p>
        ),
        image: "/images/2025/11/Step_3-1.svg-1-1.svg",
        alt: "Security and reliability icon",
        width: 63.83,
        height: 56.31,
        mobileWidth: 68,
        mobileHeight: 60,
  },
        ];

export const MarketingSericesWeOffer = ({ areaName }: { areaName?: string }) => {
  return (
        <div>
          <WhyChooseShopifyPlus
            title='Klaviyo Marketing Automation Services We Offer'
            titleClassName='max-w-[727px] wmd:text-[48px] text-[32px] font-medium wmd:leading-[58px] md:leading-[38px] leading-[39px]'
            mainDivClassName='px-4  xl:px-[6px]'
            mainDiscription={`Klaviyo Marketing Automation Services We Offer in ${areaName}`}
            benefits={Benefits}
            benefitTitleClassName='mb-3 font-medium text-black mt-2 md:text-[24px] md:leading-[30px] text-[20px] leading-[21px]'

          />
        </div>
        )
}
