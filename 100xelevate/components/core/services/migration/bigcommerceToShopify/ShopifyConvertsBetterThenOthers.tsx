import Image from "next/image";

const ShopifyConvertsBetterThenOthers = () => {
  return (
    <section
      id="section-4"
      className="w-full bg-[#F7F7F7] px-4 py-8 md:px-8 xl:py-[96px] md:py-[86px]"
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-8 wmd:gap-[60px] md:gap-[64px]">
        <h2 className="max-w-[816px] text-center  font-semibold lg:leading-[58px] wmd:leading-[50px] md:leading-[46px] leading-[34px] text-black lg:text-[48px] md:text-[40px] text-[28px]">
          Shopify Converts Up to 36% Better Than Other Platforms
        </h2>

        <div className="flex w-full md:flex-col flex-col-reverse wmd:flex-row-reverse lg:items-center wxl:gap-[50px] wmd:gap-10 md:gap-5">
          <div className="flex min-w-0 flex-col gap-5 wmd:w-[40%]">
            <h3 className="lg:text-[20px] md:text-[18px] text-[16px] lg:leading-[28px] wmd:leading-[22px] md:leading-[27px] leading-[22px] text-black">
              In controlled,{" "}
              <strong className="font-semibold">&quot;likefor like&quot;</strong>{" "}
              comparisons, Shopify consistently delivers higher conversion
              rates than competing ecommerce platforms. Across matched store
              samples, Shopify outperforms alternatives by{" "}
              <strong className="font-semibold">up to 36%</strong>, with an{" "}
              <strong className="font-semibold">
                average conversion advantage of 15.2%.
              </strong>
            </h3>

            <div className="flex flex-col text-[14px] leading-[22px] md:text-base md:leading-5 font-normal text-[#707070]">
              <p className="mb-5">
                For platforms other than Shopify, conversion figures reflect
                store-level averages based on data provided by external vendors.
                Shopify&rsquo;s analysis uses carefully matched store samples
                with comparable traffic, product mix, and scale to ensure fair
                comparison. The average conversion rate of 2.38 reflects the
                combined results across these matched samples.
              </p>

              <p className="mb-5">
                Source: Internal Shopify and external other platform data.
                Analysis conducted by a leading global management consulting
                company.
              </p>
            </div>
          </div>

          <div className="min-w-0 wmd:w-[60%]">
            <Image
              src="/images/2025/12/Frame_1000003979_1024x1024.png"
              alt="Conversion rate comparison showing Shopify converting up to 36 percent better than BigCommerce and other ecommerce platforms"
              width={800}
              height={513}
              className="h-auto w-full object-contain"
              sizes="(min-width: 882px) 52vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyConvertsBetterThenOthers;
