import React from 'react'
import { ShopifySolutionsHeading } from '../shopifyPlusDevelopment/ShopifySolutionsHeading'
import { ShopifySolutionsContent } from '../shopifyPlusDevelopment/ShopifySolutionsContent'
import { SHOPIFY_2_0_SERVICES_ACCORDION_LABEL, SHOPIFY_2_0_SERVICES_IMAGE, SHOPIFY_2_0_SERVICES_ITEMS } from '@/constants/services/shopify2.0DevelopmentService.constants'

const Shopify2_0DevelopmentServicesWeOffer = () => {
  return (
    <div>
              <ShopifySolutionsHeading
                title="Shopify 2.0 Development Services We Offer"
                titleMaxWidth="max-w-[750px]"
              />
              <ShopifySolutionsContent
                accordionLabel={SHOPIFY_2_0_SERVICES_ACCORDION_LABEL}
                image={SHOPIFY_2_0_SERVICES_IMAGE}
                items={SHOPIFY_2_0_SERVICES_ITEMS}
                imageMaxWidthClass='w-full'
              />
            </div>
  )
}

export default Shopify2_0DevelopmentServicesWeOffer