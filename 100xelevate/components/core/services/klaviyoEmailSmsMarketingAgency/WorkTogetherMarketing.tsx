import React from 'react'
import { WorkTogether } from '../shopifyUXandUIDesign/WorkTogether'

export const WorkTogetherMarketing = ({ areaName }: { areaName?: string }) => {
  return (
    <div>
        <WorkTogether 
        subHeading={areaName ? `Let’s Elevate Your Email & SMS Marketing in ${areaName}` : "Let’s Elevate Your Email & SMS Marketing"}
        description='We work with ambitious brands that want to turn their owned channels into revenue engines. If you’re serious about scaling, we are ready to help.'
        />
    </div>
  )
}
