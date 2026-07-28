import React from 'react'
import { ShopifyAgency } from '../../shopifyAppDevelopmentAgency/ShopifyAgency'

const BigcommerceToShopifyHeroSection = () => {
  return (
    <div>
                <ShopifyAgency
                    headingClasses="xl:text-[52px] md:text-[44px] text-[36px] font-semibold text-start xl:leading-[58px] md:leading-[46px] leading-[39px]"
                    mainImageAdditionalClass="wmd:w-[90%] wmd:ml-auto w-full"
                    bgColor="bg-white"
                    showLogo={false}
                    headingMaxWidthClass="wmd:max-w-[578px] w-full"
                    containerMaxWidth = "max-w-[1400px] xl:items-center"
                    containerGapClass='wxl:gap-[74px] xl:gap-[64px] gap-8 '
                    heading={
                        <>
                            <h1>
                                Seamless  <span className="hcolor2 ">Migration from BigCommerce </span>
                                 to Shopify
                            </h1>
                        </>
                    }
                    showSubHeading={false}
                    description={
                        <>
                            Is your BigCommerce store becoming harder to manage as your business grows? Are platform limits slowing down updates, testing, or performance?
                            <br/>
                            <br/>
                            Migrating to Shopify gives you a faster, more flexible foundation built for scale. We help brands move from BigCommerce to Shopify smoothly, without risking data loss, SEO drops, or revenue disruption.
                        </>
                    }
                    descriptionMaxWidthClass="max-w-[625px]"
                    mainImage={{
                        src: "/images/2025/12/Frame_61254_c5eec7f6-70a7-4556-9be6-119be9968601-1-1-e1767911808184.webp",
                        alt: "Shopify dashboard showing analytics, orders, revenue charts, and performance metrics after BigCommerce to Shopify migration",
                        width: 1000,
                        height: 1200,
                    }}
                    showquote={false}
                    buttonHref="/book-a-demo"
                    buttonText="Book a free consultation"
                />
            </div>
  )
}

export default BigcommerceToShopifyHeroSection