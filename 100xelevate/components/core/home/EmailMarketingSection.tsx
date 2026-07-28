"use client";

import { useState } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/shared/ButtonLink";

const items = [
  {
    title: "Newsletter Design",
    body: "Create visually appealing and informative newsletters to keep your subscribers engaged.",
  },
  {
    title: "Promotional Email Design",
    body: "Design visually dynamic promotional emails that highlight your offers, build urgency, and convert browsers into loyal customers.",
  },
  {
    title: "Transactional Email Design",
    body: "Create branded order and shipping notifications that reinforce trust, consistency, and enhance the post-purchase customer experience.",
  },
  {
    title: "Email Template Development",
    body: "Develop mobile-ready, responsive templates optimized for Klaviyo, Mailchimp, or custom ESPs to ensure flawless campaign delivery.",
  },
  {
    title: "Email Marketing Strategy",
    body: "Plan automated email flows and targeted campaigns that drive retention, recover carts, and grow customer lifetime value.",
  },
];

export default function EmailMarketingSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="w-full sm:px-[22px] px-[16px] bg-[#F7F7F7]">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center sm:py-[86px] py-[32px]">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-[120px]">
          {/* Image */}
          <div className="flex-1">
            <Image
              src="/images/services/home/email-marketing.webp"
              alt="Professionals working together over a laptop, brainstorming solutions."
              width={640}
              height={1000}
              className="w-full h-auto rounded-lg"
            />
          </div>
          {/* Text + accordion */}
          <div className="flex-1 flex flex-col">
            <h2 className="text-[32px] md:text-[48px] md:leading-[58px] leading-[38px] font-medium text-black">
              <span className="text-[#6f6f6f]">Email</span> Marketing Design
            </h2>
            <p className="text-[#707070] sm:text-[16px] text-[14px] mt-[20px] leading-[20px]">
              Need emails that capture attention and drive conversions? Our expert
              designers specialize in creating visually stunning, responsive email
              templates that resonate with your audience.
            </p>

            <div className="flex flex-col mt-[10px]">
              {items.map((item, i) => (
                <div key={i} className="py-[20px] pe-[10px] border-b border-black/10 ">
                  <button
                    className="w-full flex items-center justify-between text-left font-medium text-[18px] gap-4 cursor-pointer"
                    onClick={() => setOpen(open === i ? -1 : i)}
                    aria-expanded={open === i}
                  >
                    <span>{item.title}</span>
                    <svg
                      className={`w-4 h-4 flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""
                        }`}
                      viewBox="0 0 448 512"
                      fill="currentColor"
                    >
                      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                    </svg>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                      open === i ? "grid-rows-[1fr] pt-[20px] opacity-100" : "grid-rows-[0fr] pt-0 opacity-0"
                    }`}
                    aria-hidden={open !== i}
                  >
                    <div className="min-h-0 text-[#707070] text-[16px]">
                      {item.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-[40px]">
              <ButtonLink
                href="/services/retention-marketing/"
                variant="outlined"
              >
                Get started now
              </ButtonLink>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
