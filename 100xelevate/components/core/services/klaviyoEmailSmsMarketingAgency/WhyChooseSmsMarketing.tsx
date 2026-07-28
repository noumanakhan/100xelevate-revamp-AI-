import { ButtonLink } from '@/components/shared/ButtonLink';
import React from 'react'

const defaultOptions = [
    {
        label: "Revenue-First Focus:",
        description: "Every email and SMS is designed to convert, not just look good."
    },
    {
        label: "Flows + Campaign Mastery:",
        description: "From welcome series to post-purchase journeys, we map the entire customer lifecycle."
    },
    {
        label: "Deep Segmentation & Personalization:",
        description: "We use Klaviyo’s powerful data tools to deliver hyper-relevant messaging."
    },
    {
        label: "Zero-Lag Automation Setup:",
        description: "Bulletproof flows using real-time triggers (including custom integrations if needed)."
    },
    {
        label: "Reporting You will Actually Use:",
        description: "We share audit reports and insights every week that help you optimize what works and drop what does not."
    }
];

export const WhyChooseSmsMarketing = ({
    heading = "Why Choose 100xelevate for Klaviyo Email & SMS?" ,
     description = "We are not just Klaviyo experts, we are growth strategists. Our approach blends technical precision with creative strategy to deliver email and SMS automation systems that actually drive revenue.",
      buttonText = "Learn more", 
      buttonHref = "/about/", 
      options = defaultOptions, 
      zeroIndexText = "What sets us apart:",
      seconDivClassName = '',
      areaName = ''
    } : {
        heading?: string;
        description?: string;
        buttonText?: string;
        buttonHref?: string;
        options?: typeof defaultOptions;
        zeroIndexText?: string;
        seconDivClassName?: string;
        areaName?: string;
    }) => {
    return (
        <section
            className={[
                "w-full ",
                "md:py-[96px] py-[54px] md:px-8 px-[6px] bg-[#F7F7F7]",
                //   className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            <div className="mx-auto flex w-full flex-col md:flex-row md:items-start xl:gap-[96px] lg:gap-[44px] md:gap-[32px] gap-5">
                <div className="w-full md:w-[43%] md:max-w-[719px] max-w-full  p-[10px]">
                    
                    <h2 className="text-[32px] font-medium md:leading-[38px] leading-[39px] text-black wmd:text-[48px] wmd:leading-[58px] mb-[20px]">
                        {heading}
                    </h2>
                    <p className="text-[14px] font-normal leading-[20px] text-[#707070] mb-[44px]">
                        {areaName ? (
                            <>
                            We are not just Klaviyo experts, we are growth strategists. Our approach blends technical precision with creative strategy to deliver email and SMS automation systems that actually drive revenue for DTC brands in {areaName} and beyond.
                            </>
                        ) : (
                            description
                        )}
                    </p>
                    <ButtonLink variant="outlined" href={buttonHref}>
                        {buttonText}
                    </ButtonLink>
                </div>

                <div className={`w-full min-w-0  md:w-[60%] ${seconDivClassName}`}>
                    <div className="w-full">
                        {options.map((option, i) => (
                            <div
                                key={i}
                                className="border-b border-[#CCCCCC] py-[28px] md:py-[32px] md:px-[16px] px-[8px]"
                            >
                                {i === 0 && (
                                    <p className='mb-[30px] font-bold text-[14px] leading-[20px] text-[#707070] '>
                                        {zeroIndexText}
                                    </p>
                                )}
                                <h3 className="font-sans text-[20px] font-semibold uppercase leading-[24px] text-black wmd:text-[24px] wmd:leading-[30px]">
                                    {option.label}
                                </h3>
                                <p className="mt-[16px]  text-[14px] font-normal leading-[18px] text-[#707070] md:text-[14px] md:leading-[20px]">
                                    {option.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
