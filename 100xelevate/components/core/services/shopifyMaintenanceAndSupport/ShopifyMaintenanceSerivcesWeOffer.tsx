import React from 'react'
import { ShopifySolutionsHeading } from '../shopifyPlusDevelopment/ShopifySolutionsHeading'
import { ShopifySolutionsContent } from '../shopifyPlusDevelopment/ShopifySolutionsContent'
import { SHOPIFY_MAINTENANCE_ITEMS, SHOPIFY_MAINTENANCE_SERVICES_ACCORDION_LABEL, SHOPIFY_MAINTENANCE_SERVICES_IMAGE } from '@/constants/services/shopifyMaintenanceService.constants'

const ShopifyMaintenanceSerivcesWeOffer = () => {
  return (
    <div>
      <ShopifySolutionsHeading
        title="Shopify Maintenance and Support Services We Offer"
        titleMaxWidth="max-w-[750px]"
        description='These services cover every core element required to keep your Shopify store secure, stable, and performing properly as you scale.'
      />
      <ShopifySolutionsContent
        accordionLabel={SHOPIFY_MAINTENANCE_SERVICES_ACCORDION_LABEL}
        image={SHOPIFY_MAINTENANCE_SERVICES_IMAGE}
        items={SHOPIFY_MAINTENANCE_ITEMS}
        imageMaxWidthClass='max-w-[80%]'
      />
    </div>
  )
}

export default ShopifyMaintenanceSerivcesWeOffer