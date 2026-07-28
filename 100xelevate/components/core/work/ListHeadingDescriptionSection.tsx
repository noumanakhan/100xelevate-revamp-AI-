import React from 'react'

type SectionItem = {
    heading: string;
    description: string;
    listHeading: string;
    listDescription: string;
    listItems: string[];
    /** Rendered after the list (left column), e.g. a closing paragraph */
    listFooter?: string;
    className?: string;
    listbullets?: boolean;
    /** Optional list items rendered in the right column after description */
    descriptionListItems?: string[];
    /** Optional text rendered in the right column after the list */
    descriptionAfterList?: string;
}
    
function ListHeadingDescriptionSection({ sectionItems, className }: { sectionItems: SectionItem[], className?: string }) {
    return (
        <div className={`flex flex-col md:gap-[80px] gap-[28px] md:py-[86px] py-[54px] max-w-[1200px] mx-auto ${className}`}>
            {sectionItems?.map((item: SectionItem) => (
                <div key={`${item.heading}-${item.listHeading}`} className="flex md:flex-row flex-col gap-[20px]">
                    <div className='p-[10px] w-full md:max-w-[33%]'>
                        <h2 className="w-full text-[24px] font-medium leading-[30px]  text-black mb-[20px] "
                        >{item.listHeading}</h2>
                        {item?.listDescription && (
                            <p className="w-full text-[16px] font-normal leading-[20px] mb-[14px] "
                                dangerouslySetInnerHTML={{ __html: item?.listDescription }}
                            />
                        )}
                        <ul>
                            {item?.listItems?.map((listItem: string, index: number) => (
                                <li key={index} className={`text-[16px] font-normal  leading-[30px] ${item.listbullets ? 'list-disc ml-[40px]' : ''}`}>{listItem}</li>
                            ))}
                        </ul>
                        {item?.listFooter && (
                            <p
                                className="w-full text-[16px] font-normal leading-[24px] text-black mt-[14px]"
                                dangerouslySetInnerHTML={{ __html: item.listFooter }}
                            />
                        )}
                    </div>
                    <div className='p-[10px] w-full md:max-w-[67%]'>
                        <h2 className="w-full  md:text-[24px] text-[20px] font-medium md:leading-[30px] leading-[26px]  text-black mb-[20px] "
                        >{item?.heading}</h2>
                        <p className="w-full text-[16px] font-normal leading-[24px] text-[#707070] "
                            dangerouslySetInnerHTML={{ __html: item?.description }}
                        />
                        {item?.descriptionListItems && item.descriptionListItems.length > 0 && (
                            <ul className="ps-[30px] list-disc  mt-[14px] text-[16px] font-normal leading-[24px] text-[#707070] [&_strong]:font-semibold [&_strong]:text-[#4f4f4f]">
                                {item.descriptionListItems.map((listItem, index) => (
                                    <li key={index} dangerouslySetInnerHTML={{ __html: listItem }} />
                                ))}
                            </ul>
                        )}
                        {item?.descriptionAfterList && (
                            <p
                                className="w-full text-[16px] font-normal leading-[24px] text-[#707070] mt-[14px]"
                                dangerouslySetInnerHTML={{ __html: item.descriptionAfterList }}
                            />
                        )}
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default ListHeadingDescriptionSection