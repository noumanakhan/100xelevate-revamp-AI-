import React from 'react'

function WorkDetailHeader({
    name,
    descriptionPrimary,
    descriptionSecondary,
    maxWidthofPrimarySecondary
}: {
    name: string;
    descriptionPrimary: string;
    descriptionSecondary: string;
    maxWidthofPrimarySecondary?: string;
}) {
    return (
        <div className="md:px-[32px] px-[16px] md:py-[64px] py-[20px] ">
            <p className="mb-[16px] text-[14px] font-normal uppercase leading-[17px] text-black">
                {name}
            </p>
            <h1 className={` ${maxWidthofPrimarySecondary} md:text-10xl text-[32px] font-medium md:leading-[58px] leading-[39px] text-black`}>
                <span>{descriptionPrimary} </span>
                <span className="text-[#A3A3A3]">{descriptionSecondary}</span>
            </h1>

        </div>
    );
}

export default WorkDetailHeader;