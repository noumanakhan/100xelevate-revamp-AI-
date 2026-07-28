import React from 'react'
import { ShopifyAgency } from '../shopifyAppDevelopmentAgency/ShopifyAgency'
import Image from 'next/image'
import ShopifyPlusVerticalSlider from '../ShopifyPlusVerticalSlider'

const Shopify_2_0_Development = () => {
  return (
    <div>
          <ShopifyAgency
            bgColor="bg-white"
            logoSection={
              <div className="flex gap-[10px] items-center">
                <Image
                  src="/images/2025/10/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-1.svg"
                  alt="Shopify Plus"
                  width={198}
                  height={56}
                  className="h-auto w-auto md:max-w-[100px] max-w-[60px] "
                  priority
                  unoptimized
                />
                <div className="w-[1px] h-5 bg-black" />
                <Image
                  src="/images/2025/10/65d7a4f1e38f693a0ad31c1e_shopify_plus.png"
                  alt="Shopify Plus"
                  width={198}
                  height={56}
                  className="h-auto w-auto md:max-w-[110px] max-w-[70px] "
                  priority
                  unoptimized
                />
              </div>
            }
            headingMaxWidthClass="max-w-full"
            heading={
              <>
                <h1 className="xl:text-[48px] md:text-[40px] text-[32px] font-semibold mx-auto xl:leading-[58px] md:leading-[46px] leading-[40px]">
                  Shopify  <span className="hcolor2">  2.0 Development  </span>
                  Services for Faster, Flexible, High-Performance Stores
                </h1>
              </>
            }
            showSubHeading={false}
            description={
              <>
                We upgrade Shopify stores to Online Store 2.0 with clean development, faster performance, and a flexible structure that gives your team more control. Our work includes full migrations from Shopify 1.0 to 2.0, custom Shopify 2.0 theme development, reusable section libraries, structured metafields, and stable templates built for long-term growth. The result is a modern Shopify store that loads quickly, supports new campaigns with ease, and provides a stronger foundation for long-term revenue.
              </>
            }
            descriptionMaxWidthClass="max-w-[625px]"
            showquote={false}
            buttonHref="/book-a-demo"
            buttonText="Book a call"
            RightSection={<div >
              <ShopifyPlusVerticalSlider mainContainerWidthClass='wmd:max-w-[80%] w-full'/>
              </div>}
          />
        </div>
  )
}

export default Shopify_2_0_Development