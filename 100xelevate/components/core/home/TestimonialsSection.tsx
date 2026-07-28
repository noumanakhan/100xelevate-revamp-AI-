"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";
import { TailedArrow } from "@/components/assets/icons";

const testimonials = [
  {
    logo: "/images/2025/02/image-68.png",
    logoAlt: "Cambie logo – Provided a testimonial for 100xelevate.",
    logoWidth: 122,
    logoHeight: 28,
    quote:
      '"We\'ve Increased Our Revenue By 35-40% By Working With 100xelevate. They can do things with Shopify that even Shopify thinks are impossible."',
    author: "David Foley",
    company: "Cambie",
  },
  {
    logo: "/images/2025/02/Mask-group-1.png",
    logoAlt: "Andrea Maack logo – Provided a testimonial for 100xelevate.",
    logoWidth: 116,
    logoHeight: 23,
    quote:
      '"100xelevate has led a web refresh for our brand, Andrea maack. Honestly, one of the most technically talented teams I\'ve worked with across the board."',
    author: "Andrea Maack",
    company: "Andrea Maack",
  },
  {
    logo: "/images/2025/02/Mask-group-2.png",
    logoAlt: "Blue Ruby logo – Provided a testimonial for 100xelevate.",
    logoWidth: 126,
    logoHeight: 38,
    quote:
      '"After 4 Months, We\'ve Got A 49% Increase In Our Sales. I\'d Never Go Back To Not Working with 100xelevate. Our Klaviyo metrics were at their heighest ever."',
    author: "Jenny Tangjerd",
    company: "Blue Ruby",
  },
];

export default function TestimonialsSection({ areaName }: { areaName?: string }) {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  return (
    <section className="w-full px-4 md:px-[6px] bg-black">
      <div className="w-full max-w-[1420px] mx-auto flex flex-col items-center sm:py-[86px] py-[54px]">
        <div className="w-full flex flex-col md:flex-row items-start text-white">
          {/* Heading */}
          <div className="w-full lg:max-w-[40%] flex-1 flex flex-col gap-4 md:p-[10px]">
            <p className="text-sm font-normal uppercase text-white">
              TRUSTED PARTNERS
            </p>
            <h2 className="text-[32px] lg:text-[48px] font-medium lg:leading-[58px] leading-[38px]">From our clients</h2>
            {areaName && (
              <p className="text-[14px] leading-[20px] text-[#707070]">Trusted by performance-driven DTC brands in {areaName} and across the U.S.</p>
            )}
          </div>

          {/* Carousel */}
          <div className="w-full flex-1 md:p-[10px] mt-[10px] md:mt-0 relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex w-full">
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="flex-[0_0_100%] min-w-0 flex flex-col items-start gap-5"
                  >
                    <Image
                      src={t.logo}
                      alt={t.logoAlt}
                      width={t.logoWidth}
                      height={t.logoHeight}
                      className=" w-auto object-contain"
                      style={{ width: t.logoWidth, height: t.logoHeight }}
                    />
                    <blockquote className="md:text-[24px] text-[20px] font-normal md:leading-[33px] max-w-[731px] my-[12px]">
                      {t.quote}
                    </blockquote>
                    <p className=" text-sm">
                      ~ {t.author} – {t.company}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute top-3 right-2 ">
              <button
                type="button"
                className="cursor-pointer"
                aria-label="Show next testimonial"
                onClick={() => emblaApi?.scrollNext()}
              >
                <TailedArrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
