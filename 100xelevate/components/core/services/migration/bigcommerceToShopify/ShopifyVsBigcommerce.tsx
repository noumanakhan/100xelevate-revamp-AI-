import Image from "next/image";

const bigcommerceStats = [
    [
        {
            value: "~41,000",
            label: "Brands use BigCommerce",
        },
        {
            value: "~1300",
            label: "Available apps on BigCommerce",
        },
    ],
    [
        {
            value: "$84M",
            label: "In R&D spend in 2023 at BigCommerce",
        },
        {
            value: "260",
            label: "Developers at BigCommerce of ~1300 total employees",
        },
    ],
];

const shopifyStats = [
    [
        {
            value: "~4,000,000+",
            label: "Brands use Shopify",
        },
        {
            value: "~10,000",
            label: "Available apps on Shopify",
        },
    ],
    [
        {
            value: "$1.7B",
            label: "In R&D spend in 2023 at Shopify",
        },
        {
            value: "4,500+",
            label: "Engineers focused on commerce* at Shopify",
        },
    ],
];

const ShopifyVsBigcommerce = () => {
    return (
        <section className="w-full bg-white md:px-8 px-4 md:pt-5 md:pb-[86px] py-8">
            <div className="mx-auto w-full max-w-[1300px] bg-[#F7F7F7] wxl:pt-10 wxl:p-8 md:p-10 py-8 px-4">
                <div className="mx-auto w-full flex flex-col wxl:gap-5 xl:gap-[30px] md:gap-8 gap-4">
                    <div className="grid grid-cols-3">
                        <div aria-hidden="true" />
                        <h2 className="md:pl-5 pl-[10px] flex font-bold xl:text-[20px] md:text-[18px] text-[12px] xl:leading-[26px] wmd:leading-[24px] md:leading-[27px] leading-[16px] text-black">
                            BigCommerce
                        </h2>
                        <h2 className="md:pl-5 pl-[10px] flex font-bold xl:text-[20px] md:text-[18px] text-[12px] xl:leading-[26px] wmd:leading-[24px] md:leading-[27px] leading-[16px] text-black">
                            Shopify
                        </h2>
                    </div>

                    <ComparisonBlock
                        intro={
                            <div className="flex flex-col items-center justify-center wmd:gap-5 gap-2.5 text-center">
                                <Image
                                    src="/images/2025/12/Union_1024x1024.svg"
                                    alt="Gartner"
                                    width={142}
                                    height={32}
                                    className="h-auto w-full wmd:max-w-[142px] md:max-w-[100px] max-w-[99.391px]"
                                />
                                <p className="max-w-[300px] wmd:text-[14px] text-[12px] font-normal wmd:leading-[20px] leading-[18px] text-[#707070]">
                                    Shopify is rated highest on ability to execute digital
                                    commerce
                                </p>
                            </div>
                        }
                        bigcommerceStats={bigcommerceStats[0]}
                        shopifyStats={shopifyStats[0]}
                    />

                    <ComparisonBlock
                        className="mt-5"
                        intro={
                            <div className="flex flex-col items-center justify-center wmd:gap-5 gap-2.5 text-center">
                                <Image
                                    src="/images/2025/12/shopify_150_1024x1024.svg"
                                    alt="Shopify"
                                    width={110}
                                    height={32}
                                    className="h-auto w-full wmd:max-w-[110px] md:max-w-[100px] max-w-[77px]"
                                />
                                <p className="xl:text-[24px] wmd:text-[20px] md:text-[18px] text-[16px] font-bold xl:leading-[30px] wmd:leading-[26px] md:leading-[27px] leading-[20px] text-black md:mb-[-10px] mb-[-5px]">
                                    $85B
                                </p>
                                <p className="max-w-[300px] wmd:text-[14px] text-[12px] font-normal wmd:leading-[20px] leading-[18px] text-[#707070]">
                                    Shopify Market Cap
                                </p>
                            </div>
                        }
                        bigcommerceStats={bigcommerceStats[1]}
                        shopifyStats={shopifyStats[1]}
                    />
                </div>
            </div>
        </section>
    );
};

type Stat = {
    value: string;
    label: string;
};

const ComparisonBlock = ({
    intro,
    bigcommerceStats,
    shopifyStats,
    className = "",
}: {
    intro: React.ReactNode;
    bigcommerceStats: Stat[];
    shopifyStats: Stat[];
    className?: string;
}) => {
    return (
        <div
            className={`grid grid-cols-3 grid-rows-2 border border-[#0000001A] bg-white ${className}`}
        >
            <div className="row-span-2 flex items-center justify-center border-r border-[#0000001A] wmd:py-[50px] py-0 px-2.5 ">
                {intro}
            </div>

            <StatCell stat={bigcommerceStats[0]} isBigcommerce withBottomBorder />
            <StatCell stat={shopifyStats[0]} withLeftBorder withBottomBorder />
            <StatCell stat={bigcommerceStats[1]} isBigcommerce />
            <StatCell stat={shopifyStats[1]} withLeftBorder />
        </div>
    );
};

const StatCell = ({
    stat,
    isBigcommerce = false,
    withLeftBorder = false,
    withBottomBorder = false,
}: {
    stat: Stat;
    isBigcommerce?: boolean;
    withLeftBorder?: boolean;
    withBottomBorder?: boolean;
}) => {
    return (
        <div
            className={`flex flex-col justify-center lg:p-5 p-2.5 gap-2.5 ${withLeftBorder ? "border-l border-[#0000001A]" : ""
                } ${withBottomBorder ? "border-b border-[#0000001A]" : ""}`}
        >
            <p
                className={`xl:text-[24px] wmd:text-[20px] md:text-[18px] text-[12px] font-bold xl:leading-[30px] wmd:leading-[26px] md:leading-[27px] leading-[16px] ${isBigcommerce ? "text-[#E92323]" : "text-black"
                    }`}
            >
                {stat.value}
            </p>
            <p className="xl:text-[14px] md:text-[12px] text-[10px] md:leading-[20px] leading-[14px] font-semibold text-[#707070]">
                {stat.label}
            </p>
        </div>
    );
};

export default ShopifyVsBigcommerce;
