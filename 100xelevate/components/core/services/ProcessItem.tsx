import React from 'react'

interface ProcessItemProps {
  title: string
  description: string
}

export const ProcessItem = ({ title, description }: ProcessItemProps) => {
  return (
    <div className="border-b border-[#CCCCCC] py-[24px] md:py-[32px] md:px-[16px] px-[8px]">
      <h3 className="font-sans md:text-[20px] text-[18px] font-semibold uppercase md:leading-[24px] leading-[26px] text-black wmd:text-[22px] wmd:leading-[27px]">
        {title}
      </h3>
      <p className="mt-[16px] text-[14px] font-normal text-[#707070] md:text-[16px] leading-[22px]">
        {description}
      </p>
    </div>
  )
}
