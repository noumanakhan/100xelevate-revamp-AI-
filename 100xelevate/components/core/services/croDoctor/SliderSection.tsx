"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { useMemo, useEffect, useCallback } from "react";

const slides = [
  {
    src: "/images/2025/11/Group-1000004255.png",
    alt: "Mobile hero section suggestion with strong value proposition and promotional offers on homepage.",
  },
  {
    src: "/images/2025/11/Group-1000004256.png",
    alt: "Product description issue with low contrast text affecting readability on mobile Shopify pages.",
  },
  {
    src: "/images/2025/11/Group-1000004257.png",
    alt: "Product page visual hierarchy issue with unclear product title prominence, needing improvement.",
  },
  {
    src: "/images/2025/11/Group-1000004258.png",
    alt: "Best practice example of Shopify product page with clear descriptions, reviews, and customer photos.",
  },
  {
    src: "/images/2025/11/Group-1000004253.png",
    alt: "Product card issue on Shopify collection page showing the need for better product visibility and variant details.",
  },
  {
    src: "/images/2025/11/Group-1000004254.png",
    alt: "Group 1000004254",
  },
];

// Triple slides so Embla always has enough content for seamless loop clones
const loopedSlides = [...slides, ...slides, ...slides];

export const SliderSection = () => {
  const plugins = useMemo(
    () => [
      AutoScroll({
        speed: 1,
        startDelay: 0,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ],
    [],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true, containScroll: false },
    plugins,
  );

  const resumeAutoScroll = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (autoScroll && !autoScroll.isPlaying()) autoScroll.play();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("pointerUp", resumeAutoScroll);
    return () => {
      emblaApi.off("pointerUp", resumeAutoScroll);
    };
  }, [emblaApi, resumeAutoScroll]);

  return (
    <div className="hidden md:flex flex-col items-center gap-10 w-full">
      {/* Continuous auto-scrolling carousel with drag support */}
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex wxl:h-[272px]">
          {loopedSlides.map((slide, i) => (
            <figure
              key={i}
              className="m-0 shrink-0 border-[#0000001A] border-[1px] mb-[6px] w-[calc(33.333%-13.333px)] lg:w-[calc(20%-16px)]"
              style={{ marginRight: "20px" }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={540}
                height={385}
                className="w-full h-auto object-cover"
                priority={i < 6}
              />
            </figure>
          ))}
        </div>
      </div>

      {/* Testimonial — centered */}
      <div className="flex flex-col items-center gap-3 text-center max-w-[578] mx-auto">
        <p className="text-[20px] leading-[28px] text-[#707070] font-normal">
          We&apos;ve Increased Our Revenue By 35-40% By Working With
          100xelevate. They can do things with Shopify that even Shopify thinks
          are impossible.
        </p>
        <p className="text-[16px] leading-[22px] text-[#707070]">
          David Foley, Cambie
        </p>
      </div>
    </div>
  );
};
