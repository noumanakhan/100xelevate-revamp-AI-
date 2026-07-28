"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useCallback, useEffect, useState } from "react";
import { ButtonLink } from "@/components/shared/ButtonLink";

const slides = [
  {
    src: "/images/2025/10/image-80-1-1-1.webp",
    alt: "Shopify frictionless checkout experts building high-converting Shopify stores",
    width: 1444,
    height: 796,
  },
  {
    src: "/images/2025/10/image-81-2.webp",
    alt: "Frictionless Shopify checkout design that increases conversions and revenue",
    width: 1444,
    height: 796,
  },
  {
    src: "/images/2025/10/image-82-2.webp",
    alt: "Shopify checkout optimization by frictionless checkout experts",
    width: 1444,
    height: 796,
  },
  {
    src: "/images/2025/10/image-83-2.webp",
    alt: "High-performance Shopify store focused on seamless checkout experience",
    width: 1444,
    height: 796,
  },
];

export default function HeroSection() {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const updateSelectedIndex = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    updateSelectedIndex();
    emblaApi.on("select", updateSelectedIndex);
    emblaApi.on("reInit", updateSelectedIndex);

    return () => {
      emblaApi.off("select", updateSelectedIndex);
      emblaApi.off("reInit", updateSelectedIndex);
    };
  }, [emblaApi]);

  return (
    <section className="w-full sm:px-[22px] px-[16px] ">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center sm:py-[86px] py-[32px] sm:gap-[74px] gap-[32px]">
        {/* Text column */}
        <div className="flex-1 flex flex-col gap-5">
          <p className="sm:text-[24px] text-[16px] font-semibold text-black">
            Trusted by 150+ Shopify brands
          </p>
          <h1 className="sm:text-[52px] text-[36px] font-semibold leading-[1.1]">
            <span className="text-[#6F6F6F]">We build Shopify stores</span>{" "}
            that make you more money.
          </h1>
          <p className="text-[#707070] text-[16px] leading-relaxed">
            100xelevate is a tech-enabled agency that designs and builds
            storefronts that convert better, are easier to manage, and cost less
            to maintain.
          </p>
          <div className="flex flex-wrap gap-4 sm:mt-[30px] mt-[15px]">
            <ButtonLink
              href="/request-a-free-audit/"
              className="h-[43px]"
            >
              Request a free audit
            </ButtonLink>
            <ButtonLink
              href="/book-a-demo/"
              variant="outlined"
            >
              Book a call
            </ButtonLink>
          </div>
        </div>

        {/* Carousel column */}
        <div className="flex-1 w-full flex flex-col gap-3">
          {/* No extra styling — images already contain device frame graphics */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 cursor-grab active:cursor-grabbing">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={slide.width}
                    height={slide.height}
                    className="w-full h-auto"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex gap-2 justify-center mt-1">
            <div className="flex gap-2 px-[12px] py-[8px] bg-[#ededed] rounded-full">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 w-[32px] rounded-full transition-all cursor-pointer ${selectedIndex === i ? "bg-black" : "bg-black/20 hover:bg-black"
                    }`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
