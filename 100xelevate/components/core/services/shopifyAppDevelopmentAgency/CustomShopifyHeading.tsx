import React from "react";

export const CustomShopifyHeading = ({AreaName="USA" , heading} : {AreaName?: string, heading?: React.ReactNode}) => {
    return (
        <div className='w-full bg-white md:px-8 px-4'>

            <div className='md:pt-[96px] pt-[32px] w-full max-w-[1140px] mx-auto flex md:justify-center'>
                <h1 className='max-w-[865px] md:text-center text-start w-full
                wmd:text-[48px] font-semibold wmd:leading-[58px] md:text-[40px] md:leading-[46px] text-[32px] leading-[38px]'>
                    {heading || `Custom Shopify App Development Solutions We Offer in ${AreaName}`}
                </h1>

            </div>
        </div>
    )
}
