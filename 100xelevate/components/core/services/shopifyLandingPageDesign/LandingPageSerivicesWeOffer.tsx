import React from 'react'
import { ShopifySolutionsHeading } from '../shopifyPlusDevelopment/ShopifySolutionsHeading'
import { ShopifySolutionsContent } from '../shopifyPlusDevelopment/ShopifySolutionsContent'
import { SHOPIFY_LANDING_PAGE_SERVICES_ACCORDION_LABEL, SHOPIFY_LANDING_PAGE_SERVICES_IMAGE, SHOPIFY_LANDING_PAGE_SERVICES_ITEMS } from '@/constants/services/shopifyLandingPageService.constants'

const LandingPageSerivicesWeOffer = () => {
  return (
    <div className='bg-[#F7F7F7]'>
              <ShopifySolutionsHeading
                title="Shopify Landing Page Design Services We Offer"
                titleMaxWidth="max-w-[750px]"
              />
              <ShopifySolutionsContent
                accordionLabel={SHOPIFY_LANDING_PAGE_SERVICES_ACCORDION_LABEL}
                image={SHOPIFY_LANDING_PAGE_SERVICES_IMAGE}
                items={SHOPIFY_LANDING_PAGE_SERVICES_ITEMS}
                imageMaxWidthClass='w-full'
              />
            </div>
  )
}

export default LandingPageSerivicesWeOffer