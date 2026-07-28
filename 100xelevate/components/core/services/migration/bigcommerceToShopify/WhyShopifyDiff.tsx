import Image from "next/image";

import { ButtonLink } from "../../../../shared/ButtonLink";

const WhyShopifyDiff = () => {
  return (
    <section id="section-2" className="w-full px-4 md:px-8">
      <div className="mx-auto flex w-full max-w-[1300px] flex-col-reverse  py-8 gap-8 md:py-[86px]  md:gap-[74px] md:flex-row">
        <div className="flex min-w-0 flex-col gap-4 md:w-[43%] md:gap-5 md:justify-center">

          <h1 className="max-w-full text-start font-semibold lg:text-[48px] md:text-[40px] text-[28px] lg:leading-[58px] wmd:leading-[50px] md:leading-[46px] leading-[34px]">
            Why Shopify Is Different
          </h1>

          <p className="max-md:max-w-[529px] text-[14px] leading-[22px] text-[#707070] md:text-base md:leading-5">
            Shopify invests more consistently in platform development than other commerce providers, resulting in faster innovation and better long-term performance for growing brands.
          </p>

          <div className="mt-0 flex flex-wrap md:mt-5">
            <ButtonLink href="/book-a-demo/" className="h-[43px]">
              Book a call today! 
            </ButtonLink>
          </div>
        </div>

        <div className="min-w-0 md:w-[57%]">
          <Image
            src="/images/2025/12/Group_1000003970_1024x1024.png"
            alt="Trusted headless Shopify Plus agency in the"
            width={1000}
            height={1200}
            className="mx-auto h-auto w-full"
            sizes="(min-width: 882px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyShopifyDiff;
