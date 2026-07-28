import React from 'react'
import { DevelopmentProcess } from '../DevelopmentProcess'
import { SHOPIFY_MAINTENANCE_PROCESS_ITEMS } from '@/constants/services/shopifyMaintenanceService.constants'

const ShopifyMaintenanceSetupProcess = () => {
  return (
    <div>
      <DevelopmentProcess
        heading='Our Shopify Maintenance and Support Process'
        processItems={SHOPIFY_MAINTENANCE_PROCESS_ITEMS}
      />
    </div>
  )
}

export default ShopifyMaintenanceSetupProcess