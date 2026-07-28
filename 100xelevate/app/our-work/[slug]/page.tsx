/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import work from "@/content/work.json";
import ImageSection from '@/components/core/work/ImageSection';
import WorkDetailHeader from '@/components/core/work/WorkDetailHeader';
import WorkVideoSection from '@/components/core/work/WorkVideoSection';
import HeadingDescriptionSection from '@/components/core/work/HeadingDescriptionSection';
import ListHeadingDescriptionSection from '@/components/core/work/ListHeadingDescriptionSection';
import ScreenshotDetailsSection from '@/components/core/work/ScreenshotDetailsSection';
import StatsDescriptionSection from '@/components/core/work/StatsDescriptionSection';
import AskAISection from '@/components/core/home/AskAISection';

async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const caseStudy = work[slug as keyof typeof work] as any;
    if (!caseStudy) {
        return <div>Case study not found</div>;
    }
    return (
        <main>
            <WorkDetailHeader
                name={caseStudy.deatilPageName || caseStudy.name}
                descriptionPrimary={caseStudy.descriptionPrimary}
                descriptionSecondary={caseStudy.descriptionSecondary}
                maxWidthofPrimarySecondary={caseStudy.maxWidthofPrimarySecondary}
            />
            {
                caseStudy.sections.map((section: any, index: number) => (
                    <div key={index}>
                        {section.type === "image" && (
                            <ImageSection section={section} />
                        )}
                        {section.type === "video" && (
                            <WorkVideoSection video={section.videoUrl} />
                        )}
                        {section.type === "headingDescription" && (
                            <HeadingDescriptionSection section={section} />
                        )}
                        {section.type === "listHeadingDescription" && (
                            <ListHeadingDescriptionSection sectionItems={section.sectionItems} />
                        )}
                        {section.type === "screenshotDetails" && (
                            <ScreenshotDetailsSection section={section} />
                        )}
                        {section.type === "statsDescription" && (
                            <StatsDescriptionSection section={section} />
                        )}
                        {section.type === "askAISection" && (
                            <AskAISection/>
                        )}
                    </div>
                ))
            }
        </main>
    )
}

export default CaseStudyPage;