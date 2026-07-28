import React from 'react'
import { ShopifyAgency } from '../shopifyAppDevelopmentAgency/ShopifyAgency'

const ShopifyThemeDevelopmentBuildFOrPerformance = () => {
    return (
        <div>
            <ShopifyAgency
                reverseOrder={true}
                containerGapClass=" wxl:gap-[74px] xl:gap-[64px] md:gap-8 gap-[30px]"
                mainImageAdditionalClass=" mx-auto "
                showLogo={false}
                headingMaxWidthClass="max-w-full"
                topSubHeading="Shopify Theme Development"
                heading={
                    <>
                        <h1 className="wmd:text-[48px] md:text-[40px] text-[32px] font-semibold mx-auto wmd:leading-[58px] md:leading-[46px] leading-[40px]">
                            Shopify Theme Development Built for Performance 
                        </h1>
                    </>
                }
                showSubHeading={false}
                description={
                    <>
                        We develop Shopify themes with a strong focus on stability, clarity, and speed. Our work follows Shopify 2.0 standards, improving your store’s structure, load time, and responsiveness across devices. This gives your team a dependable theme that supports daily operations, seasonal traffic, and long-term growth. Whether you are launching a new store or strengthening an existing one, the goal is a streamlined experience that performs consistently.
                    </>
                }
                descriptionMaxWidthClass="max-w-[600px]"
                mainImage={{
                    src: "/images/2025/12/65c67e006be79e783084ee62_PP_Mockup-1-1-e1766526848808.webp",
                    alt: "Trusted headless Shopify Plus agency in the ",
                    width: 1000,
                    height: 1200,
                }}
                showquote={false}
                buttonHref="/book-a-demo"
                buttonText="Book a call"
                contentDivClasses='md:gap-5 gap-4 lg:justify-center'

            />
        </div>
    )
}

export default ShopifyThemeDevelopmentBuildFOrPerformance