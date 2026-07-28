import React from 'react'

export type StatsDescriptionStat = {
    value: string
    caption: string
}

export type StatsDescriptionSectionData = {
    title?: string
    stats: StatsDescriptionStat[]
    intro: string
    details: string[]
    className?: string
}

function StatsDescriptionSection({ section }: { section: StatsDescriptionSectionData }) {
    const title = section.title?.trim() || 'Results'

    return (
        <section className={`w-full bg-white ${section.className ?? ''}`}>
            <div className="mx-auto max-w-[1200px]  px-[16px] md:py-[86px] py-[54px] md:px-[10px]">
                <h2 className="md:mb-[64px] mb-[32px] md:text-[24px] text-[20px] font-medium md:leading-[30px] leading-[26px] text-black">
                    {title}
                </h2>

                <div className="md:mb-[64px] mb-[32px] grid grid-cols-1 gap-[32px] sm:grid-cols-3 sm:gap-[24px] md:gap-[40px]">
                    {section.stats.map((stat, index) => (
                        <div key={index} className="flex md:max-w-[320px] flex-col md:gap-[24px] gap-[8px]">
                            <p className="md:text-[40px] text-[32px] font-[500] md:leading-[48px] leading-[38px] text-black">
                                {stat.value}
                            </p>
                            <p className="text-[14px] font-normal leading-[20px] text-[#707070]">
                                {stat.caption}
                            </p>
                        </div>
                    ))}
                </div>

                {section.intro?.trim() ? (
                    <p
                        className="mb-[14px] text-[16px] font-normal leading-[24px] text-[#707070]"
                        dangerouslySetInnerHTML={{ __html: section.intro }}
                    />
                ) : null}

                <div className="flex flex-col gap-[14px] text-[16px] font-normal leading-[24px] text-[#707070] [&_strong]:font-semibold [&_strong]:opacity-80 [&_strong]:text-[#1a1a1a]">
                    {section.details.map((paragraph, index) => (
                        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StatsDescriptionSection
