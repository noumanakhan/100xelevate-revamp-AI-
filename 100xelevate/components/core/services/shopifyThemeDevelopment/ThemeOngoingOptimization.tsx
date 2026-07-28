import React from 'react'
import { ShopifyAgency } from '../shopifyAppDevelopmentAgency/ShopifyAgency'
import ShopifyPlusVerticalSlider from '../ShopifyPlusVerticalSlider'

const ThemeOngoingOptimization = () => {
    return (
        <div>
            <ShopifyAgency
                bgColor="bg-white"
                containerMaxWidth="max-w-[1400px]"
                containerGapClass=" md:gap-[74px] gap-[20px]"
                mainImageAdditionalClass=" mx-auto "
                showLogo={false}
                headingMaxWidthClass="max-w-full"
                topSubHeading="Shopify Theme Development"
                heading={
                    <>
                        <h1 className="max-w-[639px] wmd:text-[48px] md:text-[40px] text-[32px] font-semibold  wmd:leading-[58px] md:leading-[46px] leading-[40px]">
                            Theme Testing, Launch, and Ongoing Optimization
                        </h1>
                    </>
                }
                showSubHeading={false}
                description={
                    <div className='max-w-[600px]'>
                        Before launch, we test your theme across major devices and browsers to confirm stable performance, proper layout behavior, and a smooth user experience. Once live, we continue refining the theme based on real customer interactions, fixing issues, and supporting improvements over time. This ensures your Shopify store stays fast, reliable, and ready to adapt as your catalog expands or your traffic increases.
                    </div>
                }
                descriptionMaxWidthClass="max-w-[625px]"

                showquote={false}
                buttonHref="/book-a-demo"
                buttonText="Book a call"
                contentDivClasses='md:gap-5 gap-4 xl:justify-center'
                contentDivFlexClasses="flex-col md:flex-row"

                RightSection={<div >
                    <ShopifyPlusVerticalSlider />
                </div>}
            />
        </div>
    )
}

export default ThemeOngoingOptimization