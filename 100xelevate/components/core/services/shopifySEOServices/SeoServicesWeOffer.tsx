import React from "react";
import { ShopifySolutionsContent } from "../shopifyPlusDevelopment/ShopifySolutionsContent";
import { ShopifySolutionsHeading } from "../shopifyPlusDevelopment/ShopifySolutionsHeading";
import {
  SHOPIFY_SEO_ITEMS,
  SHOPIFY_SEO_SERVICES_ACCORDION_LABEL,
  SHOPIFY_SEO_SERVICES_IMAGE,
} from "@/constants/services/shopifySeoServicesService.constants";

export const SeoServicesWeOffer = () => {
  return (
    <div>
      <ShopifySolutionsHeading
        title="Shopify SEO Services We Offer"
        titleMaxWidth="max-w-[750px]"
      />
      <ShopifySolutionsContent
        accordionLabel={SHOPIFY_SEO_SERVICES_ACCORDION_LABEL}
        image={SHOPIFY_SEO_SERVICES_IMAGE}
        items={SHOPIFY_SEO_ITEMS}
      />
    </div>
  );
};
