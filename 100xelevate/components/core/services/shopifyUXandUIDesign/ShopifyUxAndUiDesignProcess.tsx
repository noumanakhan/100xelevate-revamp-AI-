import { SHOPIFY_UX_UI_PROCESS_STEPS } from "@/constants/services/shopifyUxAndUiDesignService.constants";

const SECTION_HEADING_ID = "shopify-ux-ui-process-heading";

export default function ShopifyUxAndUiDesignProcess() {
  return (
    <section
      className="w-full bg-[#F7F7F7] px-4 sm:px-8"
      aria-labelledby={SECTION_HEADING_ID}
    >
      <div className="mx-auto w-full max-w-[1420px] py-16 sm:py-[86px]">
        <div className="flex min-w-0 flex-col items-start gap-10 lg:flex-row lg:items-start lg:gap-10">
          <h2
            id={SECTION_HEADING_ID}
            className="w-full sm:max-w-[43%] md:text-[48px] font-semibold leading-tight text-[32px] text-black"
          >
            Our Shopify UX and UI Design Process
          </h2>

          <ul className="m-0 flex w-full min-w-0 flex-1 list-none flex-col p-0">
            {SHOPIFY_UX_UI_PROCESS_STEPS.map((step) => (
              <li
                key={step.title}
                className="border-b border-[#E0E0E0] py-[32px] px-[16px]   "
              >
                <h3 className="text-left text-[12px] leading-[18px] font-semibold uppercase  text-black sm:text-[22px] sm:leading-[27px]">
                  {step.title}
                </h3>
                <p className="mt-4  text-left text-[16px] font-normal leading-[22px] text-[#707070] ">
                  {step.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
