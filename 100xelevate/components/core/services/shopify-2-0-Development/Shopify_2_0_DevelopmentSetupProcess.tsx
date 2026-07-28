import React from 'react'
import { DevelopmentProcess } from '../DevelopmentProcess'
import { SHOPIFY_INTEGRATION_PROCESS_ITEMS } from '@/constants/services/shopifyIntegrationService.constants'

export const Shopify_2_0_DevelopmentSetupProcess = () => {
  return (
    <div>
            <DevelopmentProcess
                heading='Our Shopify 2.0 Development Process'
                processItems={SHOPIFY_INTEGRATION_PROCESS_ITEMS}
            />
        </div>
  )
}
