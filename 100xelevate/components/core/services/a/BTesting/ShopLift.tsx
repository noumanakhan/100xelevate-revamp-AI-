"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

const slides = [
  {
    title: "Certified for Plus.",
    description: (
      <p>
        Shoplift is the{" "}
        <strong>only Shopify Plus Certified A/B testing app,</strong> built to
        work natively with your theme and Shopify stack.
      </p>
    ),
    src: "https://100xelevate.com/wp-content/uploads/2025/10/Frame_1000007728.webp",
    alt: "Shopify Plus certified A/B testing solution by Shoplift and 100xelevate for store growth",
    width: 708,
    height: 628,
  },
  {
    title: "Theme‑level power.",
    description: (
      <p>
        Test <strong>global elements</strong> (navigation, mini‑cart, app
        blocks) and <strong>template variations</strong> (PDPs, collections,
        landing pages) without brittle workarounds.
      </p>
    ),
    src: "https://100xelevate.com/wp-content/uploads/2025/10/Group_1000004417.webp",
    alt: "Shopify theme A/B testing with Shoplift and 100xelevate for conversion optimization",
    width: 639,
    height: 529,
  },
  {
    title: "No flicker. No slowdown",
    description: (
      <p>
        Lightweight snippet + anti‑flicker prevents the infamous
        &ldquo;blink&rdquo; and protects shopper experience.
      </p>
    ),
    src: "https://100xelevate.com/wp-content/uploads/2025/10/Frame_1000007728_1.webp",
    alt: "Shopify product page before-and-after A/B test showing faster loading and clear results",
    width: 708,
    height: 584,
  },
  {
    title: "Lift Assist™ = speed.",
    description: (
      <p>
        Auto‑generate branded sections (e.g., countdowns, sticky carts,
        inventory indicators) based on insights from billions of sessions—then
        launch in minutes.
      </p>
    ),
    src: "https://100xelevate.com/wp-content/uploads/2025/10/Frame_1000007728_2.webp",
    alt: "Lift Assist automating Shopify A/B test creation for rapid conversion optimization",
    width: 708,
    height: 560,
  },
  {
    title: "Serious analytics.",
    description: (
      <p>
        <strong>612 analysis parameters</strong> with real‑time significance
        modeling (Bayesian + frequentist) drive earlier, more confident calls.
      </p>
    ),
    src: "https://100xelevate.com/wp-content/uploads/2025/10/Group_1000004419.webp",
    alt: "100xelevate analyzing Shopify A/B test data with Shoplift real-time insights",
    width: 564,
    height: 474,
  },
  {
    title: "100xelevate advantage.",
    description: (
      <p>
        We pair Shoplift&rsquo;s capabilities with battle‑tested CRO strategy,
        rapid design,{" "}
        <strong>and clean implementation and we stand behind results</strong>{" "}
        (see Test Drive below).
      </p>
    ),
    src: "https://100xelevate.com/wp-content/uploads/2026/01/Group-1000004277.png",
    alt: "Shopify A/B testing by 100xelevate showcasing UX improvements and CRO strategy",
    width: 1370,
    height: 880,
  },
];

export const ShopLift = () => {
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true }),
  );
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: false },
    [autoplay.current],
  );

  return (
    <section className="w-full bg-white xl:pl-0 xl:pr-8 md:px-8 px-4">
      <div className="max-w-[1400px] mx-auto md:py-[96px] py-8 flex flex-col items-center wmd:gap-[50px] md:gap-[64px] gap-[30px]">
        <h2 className="wmd:text-[48px] wmd:leading-[58px] font-semibold md:text-[40px] md:leading-[46px] text-[32px] leading-[38px] md:max-w-[607px] text-center max-w-full">
          Why Shoplift and why with 100xelevate
        </h2>

        {/* Carousel viewport — overflow hidden clips the partial next card */}
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="-ml-4 flex">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="
        pl-4
        flex-[0_0_calc(100%-63px-16px)]
        md:flex-[0_0_calc(50%-32px-8px)]
        lg:flex-[0_0_calc(25%-16px-4px)]
        min-w-0 shrink-0
      "
              >
                <div className="bg-[#F7F7F7] flex flex-col gap-5 p-[30px] h-full">
                  <h3 className="wmd:text-[24px] wmd:leading-[30px] text-[20px] leading-[24px] font-semibold mt-[10px]">
                    {slide.title}
                  </h3>
                  <div className="text-[18px] leading-[26px] text-[#707070] leading-5 ">
                    {slide.description}
                  </div>
                  <div className="">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      width={slide.width}
                      height={slide.height}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
