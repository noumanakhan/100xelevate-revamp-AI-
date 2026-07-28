import Image from "next/image";

const revenueHighlights = [
  {
    title: "Higher Conversion",
    description:
      "Shopify's checkout converts 12% better than BigCommerce, especially when paired with Shop Pay, the fastest-converting accelerated checkout available today. With more than 150 million users already signed up, brands can convert first-time visitors into customers. Shop Pay can boost conversion up to 50% over guest checkout.",
  },
  {
    title: "Built-In Growth Tools",
    description:
      "Shopify includes native growth tools such as Shop Pay, Shop App, Installments, and built-in audience features that support conversion and retention without heavy reliance on third-party workarounds. These tools are designed to work together, giving teams more control over growth without adding operational complexity.",
  },
  {
    title: "Unified Selling Across Channels",
    description:
      "Shopify provides a single, unified system for online, retail POS, and B2B selling. Instead of stitching together apps and external systems, brands manage products, customers, and orders in one place. This reduces fragmentation, simplifies operations, and creates a more consistent customer experience across every channel.",
  },
];

const HighRevenue = () => {
  return (
    <section id="section-1" className="w-full bg-white px-4 pb-0 md:px-8 md:pb-[86px] md:pt-0 pt-8">
      <div className="mx-auto flex w-full max-w-[1400px]">
        <div className="flex flex-col wxl:gap-[50px] wmd:gap-10 md:gap-5 gap-8 wmd:flex-row wmd:items-stretch">
          <div className="flex w-full flex-col justify-center wmd:w-[40%] w-full">
            
              <h2 className="mb-5 font-semibold md:text-[40px] text-[28px] wmd:leading-[50px] md:leading-[46px] leading-[34px] text-black">
                Higher Revenue
              </h2>

              <p className=" max-w-[625px] text-[14px] font-normal leading-[22px] text-[#707070] md:text-[16px]">
                Shopify&apos;s checkout converts 12% better than BigCommerce&apos;s.
                Native growth tools to help merchants increase revenue.
              </p>

              <div className="md:mt-10 mt-[30px] flex flex-col">
                {revenueHighlights.map((item) => (
                  <article
                    key={item.title}
                    className="border-b border-[#0000001A] md:py-7 pt-5 pb-6 first:border-t last:border-b-0 last:pb-0"
                  >
                    <h3 className="md:mt-2 md:mb-3 my-2 text-[16px] font-medium leading-[1.2] text-black xl:text-[20px]">
                      {item.title}
                    </h3>
                    <p className="text-[14px] font-normal leading-[22px] text-[#707070] md:text-[16px] wxl:leading-[27px]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            
          </div>

          <div className="flex w-full  p-0 wmd:w-[60%]">
            <Image
              src="/images/2025/12/Frame_427319061_1024x1024.webp"
              alt="Shopify storefront design example for an established ecommerce brand after migrating from BigCommerce"
              width={800}
              height={861}
              className="h-auto w-full  object-contain"
              sizes="(min-width: 882px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighRevenue;
