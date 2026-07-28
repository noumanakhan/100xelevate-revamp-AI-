import CaseStudyCard from "./CaseStudyCard";
import work from "@/content/work.json";

function WorkListing() {
    const caseStudies = Object.values(work);
    return (
        <div className="md:px-[32px] px-[16px] md:py-[96px] py-[64px] grid grid-cols-1 gap-x-[20px] md:gap-y-[96px] gap-y-[50px] lg:grid-cols-3">
            {caseStudies.map((study) => (
                <CaseStudyCard key={study.slug} data={study} />
            ))}
        </div>
    );
}

export default WorkListing;