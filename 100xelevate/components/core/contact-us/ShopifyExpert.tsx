/**
 * Shopify experts intro block (aligned with Elementor Eyebrow + heading + description).
 */

const SECTION_ID = "shopify-experts-heading";

export default function ShopifyExpert() {
  return (
    <section
      className="w-full bg-[#F7F7F7] px-4 py-[54px] md:px-8 md:py-[86px]"
      aria-labelledby={SECTION_ID}
    >
      <div className="mx-auto flex w-full  flex-col items-center gap-5 text-center">
        <p className="m-0 text-[20px] md:text-[24px] leading-[26px] md:leading-[30px] font-semibold text-black">
          Shopify experts
        </p>

        <h2
          id={SECTION_ID}
          className="m-0  max-w-[751px] text-[32px] font-[500] leading-[39px] tracking-tight text-black md:text-[48px] md:leading-[58px]"
        >
          Let&apos;s talk ecommerce, Shopify & Shopify Plus solutions.
        </h2>

        <p className="m-0 max-w-[540px] text-[14px] font-normal leading-[20px] text-[#707070]">
          We are an accredited expert Shopify agency we partner with brands to
          design, develop, launch, support and grow Shopify &amp; Shopify Plus
          stores. We are a Shopify agency, ready when you are. Talk to our
          team about your project.
        </p>
      </div>
    </section>
  );
}
