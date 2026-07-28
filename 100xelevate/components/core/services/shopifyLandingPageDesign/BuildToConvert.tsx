const metrics = [
  {
    label: "Conversion Rate",
    value: "5.75%",
    change: "\u2191 42.85",
  },
  {
    label: "Revenue/Session",
    value: "$5.82",
    change: "\u2191 56.80$",
  },
  {
    label: "Average Order Value",
    value: "$100.38",
    change: "\u2191 9.22%",
  },
  {
    label: "Total Sessions",
    value: "119,964",
    change: "\u2191 1,113.60%",
  },
  {
    label: "Total Conversions",
    value: "6,900",
    change: "\u2191 1,633.67%",
  },
  {
    label: "Total Revenue",
    value: "$697,809.25",
    change: "\u2191 1,802.98%",
  },
];

const BuildToConvert = () => {
  return (
    <section className="bg-[#F7F7F7] px-4 py-8 md:px-8 md:py-24">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center wmd:gap-[50px] md:gap-[64px] gap-8">
        <h2 className="max-w-[625px] text-center text-[32px] font-semibold leading-[38px] md:text-[40px] md:leading-[46px] xl:text-[48px] xl:leading-[58px]">
          Our Shopify Landing Pages are Built to Convert
        </h2>

        <div className="grid w-full wxl:w-[75%] xl:w-[83%] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className="flex flex-col justify-between gap-[14px]  py-[25px] px-[20px] border-[2px] rounded-[15px] border-[#E5E7EB]"
            >
              <h3 className="wmd:text-[18px] font-medium wmd:leading-[27px] md:text-[20px] md:leading-[24px] text-[18px] leading-[26px] text-black">
                {metric.label}
              </h3>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <p className="wmd:leading-[28px] md:leading-[24px] leading-[26px] font-semibold  text-black text-[18px] md:text-[20px] wmd:text-[22px] wxl:leading-[26px] ">
                  {metric.value}
                </p>
                <p className="px-[5px] bg-[#E8F9EF] text-[14px] font-semibold leading-[27px] text-[#0E9F6E]">
                  {metric.change}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildToConvert;
