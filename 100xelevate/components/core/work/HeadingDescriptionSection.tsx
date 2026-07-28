import React from "react";

type Section = {
  number?: string;
  heading: string;
  description: string;
  className?: string;
  listItems?: string[];
  descriptionAfterList?: string;
};

function HeadingDescriptionSection({ section }: { section: Section }) {
  const hasList = section.listItems && section.listItems.length > 0;

  return (
    <div
      className={`flex md:flex-row flex-col py-[54px] md:py-[86px] md:px-[10px] px-[6px] max-w-[1200px] mx-auto ${section?.className}`}
    >
        {section.number && (
            <span className='pt-[10px] me-[6px] md:text-[24px] text-[32px] font-[500] md:leading-[30px] leading-[38px] text-black text-stroke ps-[10px]'>{section.number}</span>
        )}
      {section.heading && (
        <h2
          className="w-full md:max-w-[45%] p-[10px] md:text-[24px] text-[20px] font-medium md:leading-[30px] leading-[26px]  text-black "
          dangerouslySetInnerHTML={{ __html: section?.heading }}
        />
      )}
      {hasList ? (
        <div className="p-[10px] w-full md:max-w-[55%] flex flex-col gap-[14px] text-[16px] font-normal leading-[24px] text-[#707070] ms-auto">
          {section.description?.trim() ? (
            <p dangerouslySetInnerHTML={{ __html: section.description }} />
          ) : null}
          <ul className="ps-[30px] list-disc  [&_strong]:font-semibold [&_strong]:text-[#4f4f4f]">
            {section.listItems!.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
          {section.descriptionAfterList && (
            <p
              dangerouslySetInnerHTML={{ __html: section.descriptionAfterList }}
            />
          )}
        </div>
      ) : (
        <p
          className="p-[10px] w-full md:max-w-[55%] text-[16px] font-normal leading-[24px] text-[#707070] "
          dangerouslySetInnerHTML={{ __html: section?.description }}
        />
      )}
    </div>
  );
}

export default HeadingDescriptionSection;
