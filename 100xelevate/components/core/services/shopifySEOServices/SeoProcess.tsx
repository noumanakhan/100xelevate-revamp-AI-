import React from 'react'
import { DevelopmentProcess } from '../DevelopmentProcess'
import { SHOPIFY_SEO_PROCESS_ITEMS } from '@/constants/services/shopifySeoServicesService.constants'

export const SeoProcess = () => {
  return (
    <div>
        <DevelopmentProcess
        heading='Our Proven Shopify SEO Process'
        processItems={SHOPIFY_SEO_PROCESS_ITEMS}
        />
    </div>
  )
}
