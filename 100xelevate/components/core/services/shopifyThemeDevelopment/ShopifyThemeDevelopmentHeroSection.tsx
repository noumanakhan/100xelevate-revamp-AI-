import Image from 'next/image'
import React from 'react'
import { ShopifyAgency } from '../shopifyAppDevelopmentAgency/ShopifyAgency'

const ShopifyThemeDevelopmentHeroSection = () => {
    return (
        <div>
            <ShopifyAgency
                headingClasses="xl:text-[52px] md:text-[44px] text-[36px] font-semibold text-start xl:leading-[58px] md:leading-[46px] leading-[39px]"
                mainImageAdditionalClass=" mx-auto max-w-[496px]"
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
                            Shopify <span className="hcolor2"> Theme Development </span>
                            for Shopify & Shopify Plus Stores
                        </h1>
                    </>
                }
                showSubHeading={false}
                description={
                    <>
                        We design and build both bespoke and template themes to help Shopify & Shopify Plus stores improve speed, structure, and conversion. Our work includes structure planning, UX design, clean code, theme setup, and performance tuning. The result is a stable, scalable foundation that supports long-term growth and helps brands convert more customers across all devices.
                    </>
                }
                descriptionMaxWidthClass="max-w-[625px]"
                mainImage={{
                    src: "/images/2025/10/migration-shopify-right-image-e1766527378796.webp",
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

export default ShopifyThemeDevelopmentHeroSection