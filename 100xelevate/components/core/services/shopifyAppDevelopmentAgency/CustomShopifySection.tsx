"use client";

import React, { ReactNode, useState } from "react";
import Image from "next/image";
import ServiceOfferAccordion from "../ServiceOfferAccordion";
import Link from "next/dist/client/link";

const defaultAccordionItems = [
  {
    title: "Private & Custom Shopify Apps",
    description:
      "We develop secure, high-performance private apps tailored to your business, automating operations, managing data, and simplifying back-end processes.",
  },
  {
    title: "Public Shopify Apps (Shopify App Store)",
    description:
      "Want to launch your own app for the Shopify App Store? We handle everything from concept to publishing, including architecture, review, and post-launch support.",
  },
  {
    title: "Integration & API Development",
    description:
      "Connect Shopify with CRMs, ERPs, fulfillment systems, and analytics tools to streamline operations. Our custom API apps power seamless synchronization and workflow automation.",
  },
  {
    title: "Subscription & Membership Apps",
    description:
      "Grow retention and recurring revenue with custom subscription billing, tier-based memberships, and flexible payment integrations.",
  },
  {
    title: "Advanced Checkout & Cart Customization",
    description:
      "Implement dynamic upsells, personalized pricing, and custom checkout experiences to maximize conversions and streamline purchases.",
  },
];

export const CustomShopifySection = ({
  mainWidthClass = "max-w-[1200px]",
  showButton = true,
  imageUrl = "/images/2025/12/image-Photoroom-17-2-1.webp",
  imageAlt = "",
  leftWidth = "lg:w-[55%] md:w-[50%]",
  rightWidth = "lg:w-[45%] md:w-[50%]",
  imageWidth = "max-w-[80%]",
  accordionItems = defaultAccordionItems as { title: string; description: ReactNode }[],
}) => {

  return (
    <div className="w-full bg-white md:px-8 px-4">
      <div className={`mx-auto flex w-full ${mainWidthClass} flex-row  md:pt-[64px] md:pb-[96px] pt-[24px] pb-[32px]  lg:gap-[44px] md:gap-[32px] gap-[20px]`}>
        {/* Left: Image — hidden on mobile */}
        <div className={`md:block hidden w-full ${leftWidth}`}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={656}
            height={836}
            className={`h-auto w-full ${imageWidth} object-contain`}
          />
        </div>

        {/* Right: Accordion + Button */}
        <div className={`flex flex-col gap-5 ${rightWidth} w-full `}>
          <ServiceOfferAccordion items={accordionItems} />

          {showButton && (
            <div className="md:mt-5 mt-1">
              <Link
                href="/shopify-app-development-agency/#Schedule-a-call"
                className="inline-flex items-center max-md:w-full justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02]"
              >
                Talk to our app experts
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
