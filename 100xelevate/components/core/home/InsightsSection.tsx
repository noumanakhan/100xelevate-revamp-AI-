"use client";

import { ButtonLink } from "@/components/shared/ButtonLink";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { TailedArrow } from "@/components/assets/icons";

const posts = [
  {
    href: "/insights/shopify-conversion-rate-statistics/",
    image: "/images/2026/04/Frame-1000003035.png",
    title: "Shopify Conversion Rate Statistics and Benchmarks (2026)",
    excerpt:
      "Boost conversions with proven Shopify product page optimization strategies: page speed, SEO, trust signals,...",
    date: "April 1, 2026",
    width: 716,
    height: 760,
  },
  {
    href: "/insights/shopify-product-page-optimization-guide-2026/",
    image: "/images/2026/03/Frame-1000003002.png",
    title: "The Complete Shopify Migration Guide for Ecommerce Businesses",
    excerpt:
      "Boost conversions with proven Shopify product page optimization strategies: page speed, SEO, trust signals,...",
    date: "March 30, 2026",
    width: 358,
    height: 380,
  },
  {
    href: "/insights/shopify-headless-agency/",
    image: "/images/2026/03/Frame-1000003004-1.png",
    title: "Shopify Headless Agency: The Complete 2026 Guide",
    excerpt:
      "Hire the right Shopify headless agency in 2026. Compare costs, frameworks, timelines, and ROI,...",
    date: "March 27, 2026",
    width: 358,
    height: 380,
  },
  {
    href: "/insights/shopify-product-page-optimization/",
    image: "/images/2026/03/Frame-1000003006.png",
    title: "Shopify Product Page Optimization Guide 2026",
    excerpt:
      "Boost conversions with proven Shopify product page optimization strategies: page speed, SEO, trust signals,...",
    date: "March 24, 2026",
    width: 358,
    height: 380,
  },
  {
    href: "/insights/shopify-conversion-rate-optimization-guide/",
    image: "/images/2026/03/Frame-1000003006.png",
    title: "Shopify Conversion Rate Optimization: The Complete Guide",
    excerpt:
      "Boost conversions with proven Shopify product page optimization strategies: page speed, SEO, trust signals,...",
    date: "March 20, 2026",
    width: 358,
    height: 380,
  },
  {
    href: "/insights/shopify-development-guide/",
    image: "/images/2026/03/Frame-1000002998-2.png",
    title: "The Complete Shopify Development Guide for Scaling Ecommerce Brands",
    excerpt:
      "Shopify development guide for building and scaling ecommerce brands.",
    date: "March 15, 2026",
    width: 716,
    height: 760,
  },
];

function SliderArrow({
  direction,
}: {
  direction: "prev" | "next";
}) {
  const isPrev = direction === "prev";

  return (
    <svg width="32" height="12" viewBox="0 0 32 12" fill="none" aria-hidden>
      <path
        d={isPrev ? "M31 6H1M1 6L6 1M1 6L6 11" : "M1 6H31M31 6L26 1M31 6L26 11"}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function InsightsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    loop: true,
  });

  return (
    <section className="w-full sm:px-[32px] px-[16px] bg-[#F7F7F7]">
      <div className="w-full mx-auto flex flex-col items-center sm:pt-[96px] sm:pb-[48px] py-[32px]">
        <div className="w-full flex items-center justify-between sm:mb-8 mb-[20px]">
          <h2 className="text-3xl md:text-[48px] font-medium md:leading-[58px]">Insights</h2>
          <div className="sm:block hidden">
            <ButtonLink
              href="/insights/"
              variant="outlined"
            >
              View more insights
            </ButtonLink>
          </div>
        </div>

        <div className="w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {posts.map((post) => (
                <div
                  key={post.href}
                  className="min-w-0 flex-[0_0_88%] sm:flex-[0_0_48%] lg:flex-[0_0_32%] xl:flex-[0_0_24%]"
                >
                  <Link href={post.href} className="group block">
                    <div className="sm:h-[440px] h-[380px] overflow-hidden bg-[#F7F7F7] mb-3">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={post.width}
                        height={post.height}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                    <h3 className="font-medium text-[16px] leading-[22px]">
                      {post.title}
                    </h3>
                    <p className="text-[#707070] text-xs mt-1 line-clamp-2">{post.excerpt}</p>
                    <p className="text-xs text-black mt-2 uppercase ">
                      {post.date} · By 100xelevate
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center  md:mt-0 mt-[30px]">
            <div className="md:hidden ">

              <ButtonLink
                href="/insights/"
                variant="outlined"
              >
                View more insights
              </ButtonLink>
            </div>
            <div className="ms-auto md:mt-8  items-center justify-end gap-4 flex">
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Show previous insights"
                className="text-black transition-opacity hover:opacity-70 cursor-pointer rotate-180"
              >
                <TailedArrow width={32} height={32} color="black" />
              </button>
              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Show next insights"
                className="text-black transition-opacity hover:opacity-70 cursor-pointer"
              >
                <TailedArrow width={32} height={32} color="black" />
              </button>
            </div>
          </div>

        </div>


      </div>
    </section>
  );
}
