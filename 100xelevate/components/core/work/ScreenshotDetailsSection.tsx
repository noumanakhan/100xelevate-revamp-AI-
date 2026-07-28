import React from "react";

type Section = {
  image: string;
  className?: string;
  imageAlign: "left" | "right";
  alt: string;
  width: number;
  height: number;
  header: { number?: string; heading: string; description: string };
  details: { heading: string; description: string; className?: string }[];
  imageBorder?: boolean;
};

function ScreenshotDetailsSection({ section }: { section: Section }) {
  const imageBorder = section.imageBorder ?? true;
  return (
    <section className={`w-full ${section?.className}`}>
      <div
        className={`flex gap-[20px] md:px-[10px] px-[6px] md:py-[86px] py-[54px] max-w-[1420px] mx-auto relative ${section?.imageAlign === "right" ? "md:flex-row-reverse flex-col-reverse" : "md:flex-row flex-col-reverse"}`}
      >
        <div className="w-full h-auto p-[10px]">
          <div className={`w-full md:max-w-[680px] h-auto ${imageBorder ? "border-[10px] border-[#212121] rounded-[20px] overflow-hidden" : ""}`}>
            <img
              src={section.image}
              alt={"Section Image"}
              className="w-full max-w-[680px] h-auto"
            />
          </div>
        </div>
        <div className="md:sticky top-[100px] self-start w-full h-auto p-[10px] flex flex-col gap-[40px]">
          {section.header && (
            <div className="flex flex-col gap-[12px]">
              {section.header?.number && (
                <span className="md:text-[24px] text-[32px] font-[500] md:leading-[30px] leading-[38px] text-black text-stroke ">
                  {section.header?.number}
                </span>
              )}
              <h3
                className="md:text-[24px] text-[20px] font-medium md:leading-[32px] leading-[26px] text-black"
                dangerouslySetInnerHTML={{ __html: section.header.heading }}
              />
              <p
                className="text-[16px] font-normal leading-[24px] text-[#707070]"
                dangerouslySetInnerHTML={{
                  __html: section.header?.description,
                }}
              />
            </div>
          )}
          {section.details.map(
            (detail: {
              heading: string;
              description: string;
              className?: string;
            }) => (
              <div key={detail.heading} className="flex flex-col gap-[12px]">
                <h3 className="md:text-[24px] text-[20px] font-medium md:leading-[30px] leading-[26px] text-black">
                  {detail.heading}
                </h3>
                <div
                  className={`ps-[30px] text-[16px] font-normal leading-[24px] text-[#707070] [&_ul]:mt-[10px] [&_ul]:list-disc [&_ul]:space-y-[1px] [&_ul]:ps-[40px] [&_strong]:font-semibold [&_strong]:text-[#4f4f4f] ${detail?.className}`}
                  dangerouslySetInnerHTML={{ __html: detail.description }}
                />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default ScreenshotDetailsSection;
