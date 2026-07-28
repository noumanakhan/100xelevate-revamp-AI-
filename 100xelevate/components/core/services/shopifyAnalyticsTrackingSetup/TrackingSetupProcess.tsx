import React from 'react'
import { DevelopmentProcess } from '../DevelopmentProcess'
import { SHOPIFY_ANALYTICS_PROCESS_ITEMS } from '@/constants/services/shopifyAnalyticsAndTrackingService.constants'

export const TrackingSetupProcess = () => {
    return (
        <div>
            <DevelopmentProcess
                heading='Our Shopify Analytics and Tracking Setup Process'
                processItems={SHOPIFY_ANALYTICS_PROCESS_ITEMS}
            />
        </div>
    )
}
