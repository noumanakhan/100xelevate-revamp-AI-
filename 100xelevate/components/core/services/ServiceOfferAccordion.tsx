"use client";

import { ReactNode, useId, useState } from "react";
import { Chevron } from "@/components/assets/icons";
import {
  SHOPIFY_UX_UI_SERVICE_OFFER_ACCORDION_LABEL,
  SHOPIFY_UX_UI_SERVICE_OFFER_ITEMS,
} from "@/constants/services/shopifyUxAndUiDesignService.constants";

export type ServiceOfferAccordionItem = {
  title: string;
  description: ReactNode;
};

type ServiceOfferAccordionProps = {
  items?: readonly ServiceOfferAccordionItem[];
  ariaLabel?: string;
  panelIdPrefix?: string;
  defaultOpenIndex?: number;
};

const DEFAULT_PANEL_ID_PREFIX = "shopify-ux-ui-service-offer";

export default function ServiceOfferAccordion({
  items = SHOPIFY_UX_UI_SERVICE_OFFER_ITEMS,
  ariaLabel = SHOPIFY_UX_UI_SERVICE_OFFER_ACCORDION_LABEL,
  panelIdPrefix = DEFAULT_PANEL_ID_PREFIX,
  defaultOpenIndex = 0,
}: ServiceOfferAccordionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);
  const baseId = useId();

  return (
    <div className=" flex w-full min-w-0 max-w-full flex-col gap-[10px]" aria-label={ariaLabel}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const itemId = `${panelIdPrefix}-item-${baseId}-${i}`;
        const regionId = `${panelIdPrefix}-panel-${baseId}-${i}`;

        return (
          <div key={item.title} className="border border-black rounded-[8px]">
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-between gap-4  p-[10px]    text-left font-medium text-[18px] text-black"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={regionId}
              id={itemId}
            >
              <span className="flex min-w-0 flex-1 items-center gap-4">
                <span className="w-[30px] h-[30px] bg-black rounded-full shrink-0 text-left  text-[22px] font-semibold text-white flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1 text-[18px] font-medium leading-[23px] text-black">
                  {item.title}
                </span>
              </span>
              <span className={`transition-transform duration-[400ms] ${isOpen ? "rotate-180" : ""}`}>
                <Chevron />
              </span>
            </button>
            <div
              id={regionId}
              role="region"
              aria-labelledby={itemId}
              className={`grid overflow-hidden transition-all duration-[400ms]  ease-in-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              aria-hidden={!isOpen}
            >
              <div className="min-h-0">
                <p className=" p-[10px] text-left text-base font-normal leading-[25px] text-[#707070]">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}