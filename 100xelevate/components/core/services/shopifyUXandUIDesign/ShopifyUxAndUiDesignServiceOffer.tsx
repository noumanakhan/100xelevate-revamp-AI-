"use client";

import Image from "next/image";
import { useId } from "react";
import {
  SHOPIFY_UX_UI_SERVICE_OFFER_HEADING,
  SHOPIFY_UX_UI_SERVICE_OFFER_IMAGE,
} from "@/constants/services/shopifyUxAndUiDesignService.constants";
import ServiceOfferAccordion from "../ServiceOfferAccordion";

const PANEL_ID_PREFIX = "shopify-ux-ui-service-offer";

export default function ShopifyUxAndUiDesignServiceOffer() {
  const baseId = useId();

  return (
    <section
      className="w-full bg-[#F7F7F7] px-4 md:px-8"
      aria-labelledby={`${PANEL_ID_PREFIX}-heading-${baseId}`}
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col py-16 sm:py-24 wmd:flex-row wmd:items-start">
        <div className="flex min-w-0 flex-1 flex-col xl:p-[80px] md:py-[60px] md:px-[40px] p-[20px]  bg-white gap-[40px] h-full wmd:max-w-[50%] shrink-0">
          <h2
            id={`${PANEL_ID_PREFIX}-heading-${baseId}`}
            className="text-left  md:text-[48px] sm:text-[40px] text-[32px]  font-semibold leading-tight text-black  wmd:leading-[58px] wmd:text-[38px]"
          >
            {SHOPIFY_UX_UI_SERVICE_OFFER_HEADING}
          </h2>

          <ServiceOfferAccordion panelIdPrefix={PANEL_ID_PREFIX} />
        </div>

        <div className="flex w-full items-center justify-center wmd:max-w-[50%] wmd:justify-center h-full  shrink-0 md:p-[40px] py-[10px] px-0 my-auto">
          <Image
            src={SHOPIFY_UX_UI_SERVICE_OFFER_IMAGE.src}
            alt={SHOPIFY_UX_UI_SERVICE_OFFER_IMAGE.alt}
            width={SHOPIFY_UX_UI_SERVICE_OFFER_IMAGE.width}
            height={SHOPIFY_UX_UI_SERVICE_OFFER_IMAGE.height}
            className="h-auto w-full object-contain"
            sizes="(max-width: 1023px) 100vw, 50vw"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
