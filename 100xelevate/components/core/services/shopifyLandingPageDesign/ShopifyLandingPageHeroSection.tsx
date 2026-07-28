import React from 'react'
import { ShopifyAgency } from '../shopifyAppDevelopmentAgency/ShopifyAgency'
import Image from 'next/image'

const ShopifyLandingPageHeroSection = () => {
  return (
    <div>
          <ShopifyAgency
            headingClasses="xl:text-[48px] md:text-[40px] text-[32px] font-semibold text-start xl:leading-[58px] md:leading-[46px] leading-[40px]"
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
            <h1>
              High-Converting  <span className="hcolor2"> Landing Page Design </span>
              for Shopify Stores
            </h1>
          </>
        }
            showSubHeading={false}
            description={
              <>
                We design and build custom landing pages for Shopify stores that improve structure, clarity, and conversion. Our work covers layout planning, UX design, focused messaging, clean development, and performance review. The result is a dependable landing page shaped to support campaigns, product launches, and everyday sales. Recent clients have recorded lifts between 18-30% after we design their landing pages.
                </>
            }
            descriptionMaxWidthClass="max-w-[625px]"
            mainImage={{
              src: "/images/2025/12/Group-15-e1766617410929.webp",
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

export default ShopifyLandingPageHeroSection