import Image from "next/image";

const FasterThanBigcommerce = () => {
  return (
    <section
      id="section-3"
      className="w-full bg-[#F7F7F7] px-4 py-8 md:px-8 md:py-[86px]"
    >
      <div className="mx-auto flex w-full max-w-[1300px] flex-col-reverse md:gap-10 gap-8 wmd:flex-row-reverse ">
        <div className="flex min-w-0 flex-1 flex-col gap-5 xl:p-10 lg:p-8 p-5 bg-white ">
          <h2 className="lg:text-[40px] md:text-start text-center lg:leading-[50px] wmd:text-[24px] wmd:leading-[32px] md:text-[32px] md:leading-[40px] text-[22px] leading-[30px] text-black  mb-5">
            Shopify&rsquo;s TCO is{" "}
            <strong>
              31% better than BigCommerce
            </strong>
          </h2>

          <Image
            src="/images/2025/12/Group_1000003973_6ffcbfbb-9833-41ce-88fe-3abdac9c5e5e_1024x1024.webp"
            alt="Total cost of ownership comparison showing Shopify costing less than BigCommerce over five years"
            width={800}
            height={410}
            className="h-auto w-full object-contain md:mt-5"
            sizes="(min-width: 882px) 50vw, 100vw"
          />

          <p className="text-[14px] font-normal leading-[22px] text-[#707070]  md:leading-[20px]">
            *Average TCO savings are based on research commissioned by Shopify
            and conducted by an independent consulting firm, analyzing total
            cost of ownership across leading commerce platforms in North
            America.
          </p>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-5 xl:p-10 lg:p-8 p-5 bg-white ">
          <h2 className="lg:text-[40px] md:text-start text-center lg:leading-[50px] wmd:text-[24px] wmd:leading-[32px] md:text-[32px] md:leading-[40px] text-[22px] leading-[30px] text-black  mb-5">
            Shopify’s Site Speed is{" "}
            <strong>
              1.4x faster than BigCommerce
            </strong>
          </h2>

          <Image
            src="/images/2025/12/Frame_427319080_282b3586-5930-4320-b315-db1bf340403d_1024x1024.webp"
            alt="Total cost of ownership comparison showing Shopify costing less than BigCommerce over five years"
            width={800}
            height={410}
            className="h-auto w-full object-contain md:mt-5"
            sizes="(min-width: 882px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default FasterThanBigcommerce;
