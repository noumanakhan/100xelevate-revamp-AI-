import Image from "next/image";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/shared/ButtonLink";

const ILLUSTRATION_URL =
  "https://100xelevate.com/wp-content/uploads/2025/10/Group-12-1-e1762363747683.webp";

const defaultHeading: ReactNode = (
  <>
    <span className="text-[#A3A3A3]">Your Custom </span>Shopify Store
    Development with 100xelevate
  </>
);

const defaultDescription =
  "At 100xelevate, you're not just hiring devs, you're getting a Shopify strike team. Our 80+ award-winning experts plug right into your workflow with a dedicated Slack channel and weekly video stand-ups to keep everything aligned and moving fast. From custom hybrid builds and private apps to ERP, warehouse, POS, D2C, and B2B integrations, we craft solutions built to scale and simplify your entire operation.";

const defaultCta = { href: "/book-a-demo/", label: "Book a call" } as const;

const defaultIllustration = {
  src: ILLUSTRATION_URL,
  alt: "100xelevate team developing a custom Shopify store for D2C and B2B brands",
  width: 1150,
  height: 1180,
} as const;

export type BuildNewShopifyStoreBannerProps = {
  heading?: ReactNode;
  description?: string;
  cta?: { href: string; label: string };
  illustration?: { src: string; alt: string; width: number; height: number };
  /** Shown as right-side art from `lg` and up; defaults to the same URL as the mobile illustration. */
  backgroundImageSrc?: string;
  className?: string;
  imagePriority?: boolean;
};

export default function BuildNewShopifyStoreBanner({
  heading = defaultHeading,
  description = defaultDescription,
  cta = { href: defaultCta.href, label: defaultCta.label },
  illustration = { ...defaultIllustration },
  backgroundImageSrc = illustration.src,
  className,
  imagePriority = true,
}: BuildNewShopifyStoreBannerProps) {
  return (
    <section
      className={["relative w-full overflow-hidden bg-[#F7F7F7] sm:px-[22px] px-[16px]", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 hidden bg-right bg-no-repeat lg:block"
        style={{
          backgroundImage: `url(${backgroundImageSrc})`,
          backgroundSize: "40% auto",
        }}
        aria-hidden
      />
      <div
        className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col sm:py-[86px] py-[32px] sm:gap-[40px] gap-8"
      >
        <div className="flex-1 flex flex-col gap-5 w-full min-w-0 max-w-full lg:max-w-[min(100%,600px)]">
          <h1 className="sm:text-[52px] text-[36px] font-semibold leading-[1.1] text-black">
            {heading}
          </h1>
          <p className="text-[#707070] text-base leading-relaxed">{description}</p>
          <div className="flex flex-wrap sm:mt-[10px] mt-0">
            <ButtonLink href={cta.href} className="h-[43px]">
              {cta.label}
            </ButtonLink>
          </div>
        </div>

        <div className="w-full min-w-0 lg:hidden">
          <Image
            src={illustration.src}
            alt={illustration.alt}
            width={illustration.width}
            height={illustration.height}
            className="w-full h-auto"
            priority={imagePriority}
            sizes="(max-width: 1023px) 100vw, 0px"
          />
        </div>
      </div>
    </section>
  );
}
