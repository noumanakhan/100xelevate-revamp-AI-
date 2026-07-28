import Image from "next/image";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/shared/ButtonLink";

const ILLUSTRATION_URL =
  "/images/2025/11/Group_1000003974_d0eba414-7aec-4930-b534-a4dcc91d004e_1024x1024-768x486.webp";

const MOBILE_ILLUSTRATION_URL =
  "/images/2025/12/Group_1000003974_d0eba414-7aec-4930-b534-a4dcc91d004e_1024x1024-e1766517400385.webp";

const defaultHeading: ReactNode = (
  <>
    Shopify <span className="text-[#A3A3A3]">UX and UI Design </span>Crafted for Performance and Clarity
  </>
);

const defaultDescription =
  "A comprehensive Shopify UX and UI Design service built to improve how customers move through your store. We refine structure, layout, visual consistency, and key interactions so your storefront becomes easier to navigate, faster to understand, and more effective at turning visits into sales. Our approach focuses on clarity, usability, and long-term performance across both mobile and desktop.";

const defaultCta = { href: "/book-a-demo/", label: "Book a call" } as const;

const defaultIllustration = {
  src: ILLUSTRATION_URL,
  alt: "Shopify UX and UI design showcase featuring modern storefront layouts displayed on a laptop.",
  width: 768,
  height: 486,
} as const;

const defaultMobileIllustration = {
  src: MOBILE_ILLUSTRATION_URL,
  alt: "Shopify UX and UI design showcase featuring modern storefront layouts.",
  width: 424,
  height: 268,
} as const;

export type BannerProps = {
  heading?: ReactNode;
  description?: string;
  cta?: { href: string; label: string };
  illustration?: { src: string; alt: string; width: number; height: number };
  mobileIllustration?: { src: string; alt: string; width: number; height: number };
  className?: string;
  imagePriority?: boolean;
};

export default function Banner({
  heading = defaultHeading,
  description = defaultDescription,
  cta = { href: defaultCta.href, label: defaultCta.label },
  illustration = { ...defaultIllustration },
  mobileIllustration = { ...defaultMobileIllustration },
  className,
  imagePriority = true,
}: BannerProps) {
  return (
    <section
      className={[
        "w-full  sm:px-[32px] px-[16px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row lg:items-center sm:py-[86px] py-[32px] xl:gap-[74px] gap-8">
        {/* Left: text content */}
        <div className="flex-1 flex flex-col gap-5 min-w-0">
          <h1 className="xl:text-[48px] md:text-[40px] text-[32px] font-semibold leading-[1.1] text-black">
            {heading}
          </h1>
          <p className="text-[#707070] md:text-base text-[14px] leading-5 max-w-[550px]">{description}</p>
          <div className="flex flex-wrap sm:mt-[16px] mt-0">
            <ButtonLink href={cta.href} className="h-[43px]">
              {cta.label}
            </ButtonLink>
          </div>
        </div>

        {/* Right: illustration */}
        <div className="flex-1 min-w-0">
          {/* Mobile-only image */}
          <div className="sm:hidden">
            <Image
              src={illustration.src}
              alt={mobileIllustration.alt}
              width={mobileIllustration.width}
              height={mobileIllustration.height}
              className="w-[80%] mx-auto h-auto"
              priority={imagePriority}
            />
          </div>
          {/* Tablet and desktop image */}
          <div className="hidden sm:block">
            <Image
              src={illustration.src}
              alt={illustration.alt}
              width={illustration.width}
              height={illustration.height}
              className="w-full h-auto"
              priority={imagePriority}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
