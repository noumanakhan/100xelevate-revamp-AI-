import Image from 'next/image'
import React from 'react'

const MigrationRatio = () => {
  return (
    <section
          id="section-3"
          className="w-full  px-4 py-8 md:px-8 md:py-[86px]"
        >
          <div className="mx-auto flex w-full max-w-[1300px] flex-col-reverse md:gap-10 gap-8 wmd:flex-row-reverse ">
            <div className="flex min-w-0 flex-1 flex-col gap-5 xl:p-10 md:p-8 p-5 bg-[#F7F7F7] ">
              <h2 className="font-semibold md:text-start text-center xl:text-[40px] md:text-[32px] text-[22px] xl:leading-[50px] wmd:leading-[44px] md:leading-[40px] leading-[30px] text-black">
                Market Share
                
              </h2>

              <p className='max-w-[386px] md:text-base text-sm leading-[22px] text-[#707070]'>Top In eCommerce Usage Distribution in the Top&nbsp;<strong>100k Sites</strong></p>
    
              <Image
                src="/images/2025/12/Group_1000003978_1024x1024.webp"
                alt="Total cost of ownership comparison showing Shopify costing less than BigCommerce over five years"
                width={800}
                height={410}
                className="h-auto w-full object-contain md:mt-5"
                sizes="(min-width: 882px) 50vw, 100vw"
              />
            </div>
    
            <div className="flex min-w-0 flex-1 flex-col gap-5 xl:p-10 md:p-8 p-5 bg-[#F7F7F7] ">
              <h2 className="font-semibold md:text-start text-center xl:text-[40px] md:text-[32px] text-[22px] xl:leading-[50px] wmd:leading-[44px] md:leading-[40px] leading-[30px] text-black">
                Migration Ratio: ~6 to 1
              </h2>

              <p className='max-w-[386px] md:text-base text-sm leading-[22px] text-[#707070]'>Migrations in top <strong>1,000,000 ranked</strong> sites between Jan 1, 2023 – August 9, 2024</p>
    
              <Image
                src="/images/2025/12/Frame_1000004007_1024x1024.png"
                alt="Total cost of ownership comparison showing Shopify costing less than BigCommerce over five years"
                width={800}
                height={410}
                className="h-auto w-full object-contain md:mt-5"
                sizes="(min-width: 882px) 50vw, 100vw"
              />
            </div>
          </div>
        </section>
  )
}

export default MigrationRatio