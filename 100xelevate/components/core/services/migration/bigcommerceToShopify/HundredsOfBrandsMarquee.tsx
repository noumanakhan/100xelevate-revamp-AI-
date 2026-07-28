import Image from "next/image";

import { ButtonLink } from "@/components/shared/ButtonLink";

const topRowLogos = [
    {
        src: "/images/2025/12/1-8_1024x1024.png",
        alt: "Brand logo from a BigCommerce to Shopify migration",
    },
    {
        src: "/images/2025/12/1-9_1024x1024.webp",
        alt: "Brand logo from a BigCommerce to Shopify migration",
    },
    {
        src: "/images/2025/12/1-10_1024x1024.webp",
        alt: "Brand logo from a BigCommerce to Shopify migration",
    },
    {
        src: "/images/2025/12/1-11_1024x1024.png",
        alt: "Brand logo from a BigCommerce to Shopify migration",
    },
    {
        src: "/images/2025/12/1-12_1024x1024.avif",
        alt: "Brand logo from a BigCommerce to Shopify migration",
    },
    {
        src: "/images/2025/12/1-1_1024x1024.webp",
        alt: "Brand logo from a BigCommerce to Shopify migration",
    },
    {
        src: "/images/2025/12/1-2_1024x1024.webp",
        alt: "Brand logo from a BigCommerce to Shopify migration",
    },
    {
        src: "/images/2025/12/1-3_1024x1024.png",
        alt: "Brand logo from a BigCommerce to Shopify migration",
    },
    {
        src: "/images/2025/12/1-4_1024x1024.webp",
        alt: "Brand logo from a BigCommerce to Shopify migration",
    },
    {
        src: "/images/2025/12/1-5_1024x1024.avif",
        alt: "Brand logo from a BigCommerce to Shopify migration",
    },
];

const bottomRowLogos = [
    {
        src: "/images/2025/12/1-5_1024x1024.avif",
        alt: "Brand logo from a BigCommerce to Shopify migration",
    },
    {
        src: "/images/2025/12/1-1_1024x1024.webp",
        alt: "Brand logo from a BigCommerce to Shopify migration",
    },
    {
        src: "/images/2025/12/1-8_1024x1024.png",
        alt: "Brand logo from a BigCommerce to Shopify migration",
    },
    {
        src: "/images/2025/12/1-3_1024x1024.png",
        alt: "Brand logo from a BigCommerce to Shopify migration",
    },
    {
        src: "/images/2025/12/1-11_1024x1024.png",
        alt: "Brand logo from a BigCommerce to Shopify migration",
    },
    {
        src: "/images/2025/12/1-4_1024x1024.webp",
        alt: "Brand logo from a BigCommerce to Shopify migration",
    },
    {
        src: "/images/2025/12/1-9_1024x1024.webp",
        alt: "Brand logo from a BigCommerce to Shopify migration",
    },
    {
        src: "/images/2025/12/1-2_1024x1024.webp",
        alt: "Brand logo from a BigCommerce to Shopify migration",
    },
    {
        src: "/images/2025/12/1-10_1024x1024.webp",
        alt: "Brand logo from a BigCommerce to Shopify migration",
    },
    {
        src: "/images/2025/12/1-12_1024x1024.avif",
        alt: "Brand logo from a BigCommerce to Shopify migration",
    },
];

type BrandMarqueeRowProps = {
    logos: typeof topRowLogos;
    direction?: "left" | "right";
};

function BrandMarqueeRow({ logos, direction = "left" }: BrandMarqueeRowProps) {
    return (
        <div className="w-full overflow-hidden">
            <div
                className="flex "
                style={{
                    animation: `${direction === "right" ? "marquee-right" : "marquee"} 40s linear infinite`,
                    willChange: "transform",
                }}
            >
                {[...logos, ...logos].map((logo, index) => (
                    <figure
                        key={`${logo.src}-${index}`}
                        className="flex shrink-0 basis-1/3 items-center justify-center md:basis-1/4 wmd:basis-1/6"
                    >
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={392}
                            height={180}
                            className="h-auto py-[3px] w-full max-w-[231px] object-contain md:max-w-[188px] wmd:max-w-[190px]"
                            sizes="(min-width: 882px) 20vw, (min-width: 768px) 25vw, 33vw"
                        />
                    </figure>
                ))}
            </div>
        </div>
    );
}

const HundredsOfBrandsMarquee = () => {
    return (
        <section className="w-full bg-[#f7f7f7] px-4 py-8 md:px-8 md:py-[86px] gap-5 flex flex-col items-center">
            <div className="mx-auto flex gap-5 bg-white w-full max-w-[1200px] flex-col items-center md:p-[30px] md:pb-5 p-5">
                <h2 className="text-center font-semibold text-black mb-5 lg:text-[32px] lg:leading-[42px] wmd:text-[24px] wmd:leading-[32px] md:text-[40px] md:leading-[46px] text-[22px] leading-[30px] ">
                    Hundreds of brands have migrated from BigCommerce
                </h2>

                <div className="max-w-[1200px] flex flex-col gap-5 ">
                    <BrandMarqueeRow logos={topRowLogos} />
                    <BrandMarqueeRow logos={bottomRowLogos} direction="right" />
                </div>
            </div>
            <ButtonLink href="/book-a-demo/" className="mt-3 md:mt-10 h-[43px]">
                Book a call today!
            </ButtonLink>
        </section>
    );
};

export default HundredsOfBrandsMarquee;
