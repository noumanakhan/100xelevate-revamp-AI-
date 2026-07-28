import Image from 'next/image'
import React from 'react'
import { ShopifyAgency } from '../shopifyAppDevelopmentAgency/ShopifyAgency'

const ShopifyMaintenanceHeroSection = () => {
  return (
    <div>
          <ShopifyAgency
            mainImageAdditionalClass=" mx-auto"
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
                  Shopify{" "}
                  <span className="text-[#6F6F6F]"> Maintenance and Support  </span>
                  Services for Long-Term Store Performance
                </h1>
              </>
            }
            showSubHeading={false}
            description="We provide ongoing Shopify maintenance and support that keeps your store fast, secure, and dependable as you grow. Our work includes theme updates, app compatibility checks, performance improvements, security reviews, and troubleshooting. This service is designed for brands that need long-term support to prevent issues and protect conversions rather than react after problems appear."
            descriptionMaxWidthClass="max-w-[625px]"
            mainImage={{
              src: "/images/2025/10/migration-shopify-right-image-1024x838.webp",
              alt: "Shopify SEO Services",
              width: 1000,
              height: 1200,
            }}
            showquote={false}
            buttonHref="/book-a-demo"
            buttonText="Book a call"
          />
        </div>
  )
}

export default ShopifyMaintenanceHeroSection