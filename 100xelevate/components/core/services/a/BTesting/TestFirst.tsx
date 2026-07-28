const cards = [
  {
    title: "Show More Product Angles",
    description: "Add lifestyle & detail shots to boost trust and conversions.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 576 512"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        fill="currentColor"
      >
        <path d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z" />
      </svg>
    ),
  },
  {
    title: "Bring Products to Life with Video",
    description: "Short demos and UGC routinely deliver double-digit lifts.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 448 512"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        fill="currentColor"
      >
        <path d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z" />
      </svg>
    ),
  },
  {
    title: "Optimize Your App Stack",
    description:
      "Test apps head-to-head (e.g., UGC, shipping protection, delivery promise) and keep only the winners.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        fill="currentColor"
      >
        <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" />
      </svg>
    ),
  },
];

export const TestFirst = () => {
  return (
    <section className="bg-[#F7F7F7] md:px-8 px-4">
      <div className="max-w-[1200px] mx-auto md:py-[96px] py-[32px] flex flex-col wmd:gap-[50px] md:gap-[64px] gap-[32px] items-center">
        <h2 className="wmd:text-[48px] wmd:leading-[58px] font-semibold md:text-[40px] md:leading-[46px] text-[32px] leading-[38px] text-center">
          What we&apos;ll test first
        </h2>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white p-[30px] flex flex-col gap-5 w-full"
            >
              <div className="text-black">{card.icon}</div>
              <h3 className="wmd:text-[24px] wmd:leading-[30px] text-[20px] leading-[24px] font-semibold mt-[10px] max-w-[300px]">
                {card.title}
              </h3>
              <p className="text-[#707070] text-[14px] leading-[20px] ">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
