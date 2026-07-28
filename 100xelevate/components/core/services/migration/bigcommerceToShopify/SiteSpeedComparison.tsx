import Image from 'next/image';
import React from 'react'

const SiteSpeedComparison = () => {
  return (
    <section
          className="w-full  px-4 py-8 md:px-8 md:py-[86px]"
        >
          <div className="mx-auto flex w-full max-w-[1200px]">
            <div className="flex min-w-0 flex-1 flex-col gap-5 items-center md:py-10 md:px-[30px] p-5 bg-[#F7F7F7]">
              <h2 className="text-center lg:text-[40px] lg:leading-[50px] wmd:text-[24px] wmd:leading-[32px] md:text-[32px] md:leading-[40px] text-[22px] leading-[30px] text-black  mb-5">
                Site Speed{" "}
                <strong>
                 Comparison
                </strong>
              </h2>
    
              <Image
                src="/images/2025/12/image_402_1024x1024.webp"
                alt="Total cost of ownership comparison showing Shopify costing less than BigCommerce over five years"
                width={800}
                height={410}
                className="h-auto w-full max-w-[800px] object-contain "
                sizes="(min-width: 882px) 50vw, 100vw"
              />
            </div>
    
          </div>
        </section>
      );
  
}

export default SiteSpeedComparison