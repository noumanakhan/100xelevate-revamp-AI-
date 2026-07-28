import Image from "next/image";
import RecentShopifyStoresSlider, {
  DEFAULT_RECENT_SHOPIFY_SLIDES,
} from "../buildNewShopifyStore/RecentShopifyStoresSlider";

const WP = "https://100xelevate.com/wp-content/uploads/2025/10";

const testimonials = [
  {
    quote: "100xelevate transformed our UX—conversions up 25%!",
    logo: { src: `${WP}/Frame_1000007615.webp`, w: 281, h: 120 },
  },
  {
    quote: "Excellent experience; highly recommend.",
    logo: { src: `${WP}/download-2.png`, w: 800, h: 201 },
  },
  {
    quote: "Fantastic partner; AOV jumped overnight.",
    logo: { src: `${WP}/Frame_1000007615-2.avif`, w: 281, h: 120 },
  },
];

export const RealResults = ({
  maxWidth = "max-w-[1200px]",
  badgeBgColor = "bg-[#F7F7F7]",
  sliderMaxW = "",
}: {
  maxWidth?: string;
  badgeBgColor?: string;
  sliderMaxW?: string;
}) => (
  <>
    <section className="w-full md:px-8 px-4">
      <div
        className={`mx-auto w-full ${maxWidth} xl:pt-[96px] xl:pb-0 md:py-[96px] py-[32px] flex flex-col items-center wmd:gap-[50px] md:gap-[64px] gap-[30px]`}
      >
        <h2 className="text-center wmd:text-[48px] wmd:leading-[58px] font-semibold md:text-[40px] md:leading-[46px] text-[32px] leading-[38px]">
          Join 1,000+ Brands Seeing Real Results
        </h2>

        <div className=" grid grid-cols-1 gap-5 md:grid-cols-3 w-full">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-5 bg-[#F7F7F7] p-[30px] ${badgeBgColor}`}
            >
              <p className="m-0 flex-1 text-[18px] leading-[26px] text-[#707070] text-center">
                {t.quote}
              </p>
              <Image
                src={t.logo.src}
                alt=""
                width={t.logo.w}
                height={t.logo.h}
                unoptimized
                className="h-auto w-full max-w-[120px] object-contain"
              />
            </div>
          ))}
        </div>

        {sliderMaxW ? (
          <RecentShopifyStoresSlider
            mainpadding="p-0"
            sliderMargin="m-0"
            heading={false}
            slides={DEFAULT_RECENT_SHOPIFY_SLIDES}
            className="[&>div]:pt-0!"
            sectionpadding=""
            containerMaxWidth={sliderMaxW}
          />
        ) : (
          <RecentShopifyStoresSlider
            mainpadding="p-0"
            sliderMargin="m-0"
            heading={false}
            slides={DEFAULT_RECENT_SHOPIFY_SLIDES}
            className="[&>div]:pt-0!"
            sectionpadding=""
          />
        )}
      </div>
    </section>
  </>
);
