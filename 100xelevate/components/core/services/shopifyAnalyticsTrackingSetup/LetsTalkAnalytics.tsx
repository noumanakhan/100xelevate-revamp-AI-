import Image from "next/image";
import { ButtonLink } from "@/components/shared/ButtonLink";

export const LetsTalkAnalytics = ({
  mainContainerClass = "mx-auto w-full max-w-[1200px] py-[30px] md:py-[86px]",
  headingMaxWidthClass = "",
  heading = "Let’s talk Shopify Analytics and Tracking Setup.",
  description = "We help Shopify brands install reliable analytics, GA4 ecommerce tracking, and accurate attribution. If you’re running paid campaigns, scaling revenue, or preparing for growth, our team can guide you through a clear process and give your store dependable measurement.",
  imageSection = (
    <Image
      src="/images/2025/10/migrate-image_1024x1024.webp"
      alt="Woman stretching in an office to show the flexibility Bulk Hours offer for handling ongoing tasks."
      width={800}
      height={665}
      sizes="(min-width: 960px) 600px, 100vw"
      className="h-auto w-[80%] object-cover"
    />
  ),
}: {
  mainContainerClass?: string;
  heading?: string;
  description?: string;
  headingMaxWidthClass?: string;
  imageSection?: React.ReactNode;
}) => {
  return (
    <section className="w-full bg-white px-[10px] md:px-0">
      <div className={mainContainerClass}>
        <div className="flex w-full flex-col-reverse lg:gap-[40px] md:gap-5 gap-[30px] overflow-hidden bg-[#F7F7F7] md:flex-row lg:px-[60px] md:px-8 px-4 md:py-0 py-8">
          <div className="flex w-full md:w-[60%] flex-col justify-center gap-5 py-[0px] md:py-[60px]">
            <h2
              className={`${headingMaxWidthClass} text-[32px] font-semibold leading-[38px]  md:text-[40px] md:leading-[46px] wmd:text-[32px] wmd:leading-[40px]`}
            >
              {heading}
            </h2>

            <p className="text-[14px] font-normal leading-[22px] text-[#707070]  md:text-[16px] md:leading-[20px]">
              {description}
            </p>

            <div className="md:pt-4 pt-0">
              <ButtonLink className="h-[43px]" href="/book-a-demo/">
                Book a call
              </ButtonLink>
            </div>
          </div>

          <div className="w-full md:w-[40%] flex lg:items-end items-center justify-center">
            {imageSection}
          </div>
        </div>
      </div>
    </section>
  );
};
