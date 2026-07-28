import React from "react";
import { ShopifySolutionsHeading } from "../shopifyPlusDevelopment/ShopifySolutionsHeading";
import { ShopifySolutionsContent } from "../shopifyPlusDevelopment/ShopifySolutionsContent";
import {
  SHOPIFY_INTEGRATION_SERVICES_ACCORDION_LABEL,
  SHOPIFY_INTEGRATION_SERVICES_IMAGE,
} from "@/constants/services/shopifyIntegrationService.constants";
import { SHOPIFY_INTEGRATION_ITEMS } from "@/constants/services/shopifyIntegrationService.constants";

const ShopifyIntegrationServicesWeOffer = () => {
  return (
    <div>
      <ShopifySolutionsHeading
        title="Shopify Integration Services We Offer"
        titleMaxWidth="max-w-[968px]"
      />
      <ShopifySolutionsContent
        accordionLabel={SHOPIFY_INTEGRATION_SERVICES_ACCORDION_LABEL}
        image={SHOPIFY_INTEGRATION_SERVICES_IMAGE}
        items={SHOPIFY_INTEGRATION_ITEMS}
        imageMaxWidthClass="max-w-[80%]"
      />
    </div>
  );
};

export default ShopifyIntegrationServicesWeOffer;
