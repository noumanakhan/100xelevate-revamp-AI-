import React from 'react'
import { ShopifySolutionsHeading } from '../shopifyPlusDevelopment/ShopifySolutionsHeading'
import { ShopifySolutionsContent } from '../shopifyPlusDevelopment/ShopifySolutionsContent'
import { SHOPIFY_ANALYTICS_ITEMS, SHOPIFY_ANALYTICS_SERVICES_ACCORDION_LABEL, SHOPIFY_ANALYTICS_SERVICES_IMAGE } from '@/constants/services/shopifyAnalyticsAndTrackingService.constants'

export const AnalyticsTrackingSericesWeOffer = () => {
  return (
    <div>
          <ShopifySolutionsHeading
            title="Shopify Analytics and Tracking Services We Offer"
            titleMaxWidth="max-w-[750px]"
          />
          <ShopifySolutionsContent
            accordionLabel={SHOPIFY_ANALYTICS_SERVICES_ACCORDION_LABEL}
            image={SHOPIFY_ANALYTICS_SERVICES_IMAGE}
            items={SHOPIFY_ANALYTICS_ITEMS}
            imageMaxWidthClass='max-w-[80%]'
          />
        </div>
  )
}
