import React from 'react'
import { DevelopmentProcess } from '../DevelopmentProcess'
import { SHOPIFY_LANDING_PAGE_PROCESS_ITEMS } from '@/constants/services/shopifyLandingPageService.constants'

const LandingPageProcess = () => {
  return (
    <div>
      <DevelopmentProcess
        heading='Our Proven Shopify Landing Page Process'
        processItems={SHOPIFY_LANDING_PAGE_PROCESS_ITEMS}
        bgColor='bg-white'
      />
    </div>
  )
}

export default LandingPageProcess