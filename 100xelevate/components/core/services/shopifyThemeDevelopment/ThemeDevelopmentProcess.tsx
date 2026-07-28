import React from 'react'
import { DevelopmentProcess } from '../DevelopmentProcess'
import { SHOPIFY_THEME_DEVELOPMENT_PROCESS_ITEMS } from '@/constants/services/shopifyThemeDevelopmentService.constant'

const ThemeDevelopmentProcess = () => {
    return (
        <div>
            <DevelopmentProcess
                heading='Our Shopify Theme Development Process'
                processItems={SHOPIFY_THEME_DEVELOPMENT_PROCESS_ITEMS}
                bgColor='bg-white'
            />
        </div>
    )
}

export default ThemeDevelopmentProcess