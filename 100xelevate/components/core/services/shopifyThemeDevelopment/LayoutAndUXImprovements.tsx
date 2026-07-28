import React from 'react'
import { ShopifyAgency } from '../shopifyAppDevelopmentAgency/ShopifyAgency'

const LayoutAndUXImprovements = () => {
    return (
        <div>
            <ShopifyAgency
            containerMaxWidth="max-w-[1300px]"
                reverseOrder={true}
                containerGapClass=" wxl:gap-[74px] xl:gap-[64px] md:gap-8 gap-[30px]"
                mainImageAdditionalClass=" mx-auto "
                showLogo={false}
                headingMaxWidthClass="max-w-full"
                topSubHeading="Shopify Theme Development"
                heading={
                    <>
                        <h1 className="wmd:text-[48px] md:text-[40px] text-[32px] font-semibold md:max-w-[505px] wmd:leading-[58px] md:leading-[46px] leading-[40px]">
                            Modern Layouts and UX Improvements
                        </h1>
                    </>
                }
                showSubHeading={false}
                description={
                    <>
                        A well-organized theme helps customers move through your store with ease. We refine layouts, improve page hierarchy, and adjust visual flow so key information is seen at the right moment. This supports stronger product discovery, clearer category navigation, and a more comfortable browsing rhythm. The result is a theme that feels modern, balanced, and intuitive for customers on both mobile and desktop.
                    </>
                }
                descriptionMaxWidthClass="max-w-[600px]"
                mainImage={{
                    src: "/images/2025/11/Group-1000004260-e1766526871616.webp",
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

export default LayoutAndUXImprovements