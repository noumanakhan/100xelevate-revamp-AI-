import React from 'react'
import { ShopifySolutionsHeading } from '../shopifyPlusDevelopment/ShopifySolutionsHeading'
import { ShopifySolutionsContent } from '../shopifyPlusDevelopment/ShopifySolutionsContent'
import { SHOPIFY_THEME_DEVELOPMENT_ITEMS, SHOPIFY_THEME_DEVELOPMENT_SERVICES_ACCORDION_LABEL, SHOPIFY_THEME_DEVELOPMENT_SERVICES_IMAGE } from '@/constants/services/shopifyThemeDevelopmentService.constant'

const ShopifyThemeDevelopmentServicesWeOffer = () => {
  return (
    <div className='bg-[#f7f7f7]'>
              <ShopifySolutionsHeading
                title="Shopify Theme Development Solutions We Offer"
                titleMaxWidth="max-w-[865px]"
              />
              <ShopifySolutionsContent
                accordionLabel={SHOPIFY_THEME_DEVELOPMENT_SERVICES_ACCORDION_LABEL}
                image={SHOPIFY_THEME_DEVELOPMENT_SERVICES_IMAGE}
                items={SHOPIFY_THEME_DEVELOPMENT_ITEMS}
                imageMaxWidthClass='max-w-[80%]'
              />
            </div>
  )
}

export default ShopifyThemeDevelopmentServicesWeOffer