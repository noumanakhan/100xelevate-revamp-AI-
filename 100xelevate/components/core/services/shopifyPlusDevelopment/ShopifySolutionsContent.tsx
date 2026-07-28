import Image from "next/image";
import Link from "next/link";
import ServiceOfferAccordion from "@/components/core/services/ServiceOfferAccordion";
import {
  SHOPIFY_PLUS_SOLUTIONS_ACCORDION_LABEL,
  SHOPIFY_PLUS_SOLUTIONS_IMAGE,
  SHOPIFY_PLUS_SOLUTIONS_ITEMS,
  ShopifyPlusSolutionItem,
} from "@/constants/services/shopifyPlusDevelopmentService.constants";

const PANEL_ID_PREFIX = "shopify-plus-solutions";

type ShopifySolutionsContentProps = {
  accordionLabel?: string;
  image?: { src: string; alt: string; width: number; height: number };
  items?: readonly ShopifyPlusSolutionItem[];
  imageMaxWidthClass?: string;
};

export const ShopifySolutionsContent = ({
  accordionLabel = SHOPIFY_PLUS_SOLUTIONS_ACCORDION_LABEL,
  image = SHOPIFY_PLUS_SOLUTIONS_IMAGE,
  items = SHOPIFY_PLUS_SOLUTIONS_ITEMS,
  imageMaxWidthClass = "max-w-[635px]",
}: ShopifySolutionsContentProps) => {
  return (
    <section className="w-full  md:px-8 px-4">
      <div className="mx-auto flex w-full max-w-[1200px] flex-row lg:gap-11 md:gap-[32px] gap-[20px] md:pt-16 md:pb-24 pt-[24px] pb-[32px] ">
        {/* Left: image — hidden on mobile */}
        <div className="md:block hidden lg:w-[55%] md:w-[50%] w-full">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={8000}
            className={`h-auto w-full ${imageMaxWidthClass} object-contain`}
            unoptimized
          />
        </div>

        {/* Right: accordion + CTA */}
        <div className="flex flex-col gap-5 md:max-w-[520px] lg:w-[45%] md:w-[50%] w-full ">
          <ServiceOfferAccordion
            items={items}
            ariaLabel={accordionLabel}
            panelIdPrefix={PANEL_ID_PREFIX}
          />
          <div className="md:mt-5 mt-1">
            <Link
              href="/book-a-demo/"
              className="inline-flex items-center max-md:w-full justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02]"
            >
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
