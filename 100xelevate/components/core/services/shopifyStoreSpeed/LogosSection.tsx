import Image from "next/image";

const LOGOS = [
  {
    src: "/images/2025/10/review.svg",
    width: 134,
    height: 46,
    alt: "5-star reviews on Shopify",
  },
  {
    src: "/images/2025/10/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-1.svg",
    width: 198,
    height: 56,
    alt: "Official Shopify partner",
  },
  {
    src: "/images/2025/10/google.svg",
    width: 134,
    height: 46,
    alt: "5-star Google reviews from verified clients",
  },
  {
    src: "/images/2025/10/trustpilot.svg",
    width: 134,
    height: 46,
    alt: "5-star Trustpilot reviews from customers",
  },
  {
    src: "/images/2025/10/clutch.svg",
    width: 134,
    height: 46,
    alt: "Top-rated agency on Clutch with 5-star reviews",
  },
  {
    src: "/images/2025/10/shopify_platinum.svg",
    width: 268,
    height: 87,
    alt: "Shopify Platinum Partner agency",
  },
];

export const LogosSection = ({
  containerMaxWidth = "max-w-[1300px]",
  paddingClass = "px-[10px]",
  innerDivPAddingClass = "md:py-[10px] pt-[10px] pb-[32px]",
}) => {
  return (
    <div className={`w-full ${paddingClass}`}>
      <div
        className={`mx-auto w-full ${containerMaxWidth}  ${innerDivPAddingClass}`}
      >
        <div className="grid grid-cols-3 md:gap-5 gap-0 md:items-center md:justify-items-center md:grid-cols-6">
          {LOGOS.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center lg:py-[37px] lg:px-[25px] md:py-[24px] md:px-[15px] py-[27px] px-[15px] max-md:border-b max-md:border-r max-md:border-gray-200 max-md:[&:nth-child(3n)]:border-r-0 max-md:[&:nth-child(n+4)]:border-b-0"
            >
              <Image
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt={logo.alt}
                loading="lazy"
                className="w-full md:max-w-[134px] max-w-[95px] h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
