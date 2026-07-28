import Link from "next/dist/client/link";
import Image from "next/image";

const QUOTE_SVG = "/images/2025/10/download-3.svg";

const testimonials = [
  {
    image: "/images/2025/10/1676412512830.jpeg",
    imgWidth: 120,
    imgHeight: 120,
    quote:
      "We've Increased Our Revenue By 35-40% By Working With 100xelevate. They can do things with Shopify that even Shopify thinks are impossible.",
    author: "David Foley, Cambie",
  },
  {
    image: "/images/2025/10/New-Project-9.jpg",
    imgWidth: 120,
    imgHeight: 120,
    quote:
      "100xelevate has led a web refresh for our brand, Andrea maack. Honestly, one of the most technically talented teams I've worked with across the board.",
    author: "Andrea Maack, Andrea Maack",
  },
  {
    image: "/images/2025/10/New-Project-10.jpg",
    imgWidth: 120,
    imgHeight: 120,
    quote:
      "After 4 Months, We've Got A 49% Increase In Our Sales. I'd Never Go Back To Not Working with 100xelevate. Our Klaviyo metrics were at their heighest ever.",
    author: "Jenny Tangjerd, Blue Ruby",
  },
];

type RealResultsProps = {
  heading?: string;
  headingMaxWidthClass?: string;
  button?: boolean;
  cardBg?: string;
  sectionBg?: string;
  buttonText?: string;
  buttonUrl?: string;
  mainContainergapClass?: string;
};

export const RealResults = ({
  heading = "Real Results From Shopify Brands Just Like Yours",
  headingMaxWidthClass = "max-w-[668px]",
  button = false,
  cardBg = "bg-white",
  sectionBg = "bg-[#F7F7F7]",
  buttonText = "Talk to our Shopify experts",
  buttonUrl = "/shopify-app-development-agency/#Schedule-a-call",
  mainContainergapClass = "md:gap-12.5 gap-5",
}: RealResultsProps) => {
  return (
    <section className={`${sectionBg} md:px-8 px-4`}>
      <div
        className={`lg:py-24 md:py-[86px] py-[32px] max-w-300 mx-auto flex flex-col items-center ${mainContainergapClass}`}
      >
        <h2
          className={`wmd:text-[48px] md:text-[40px] text-[32px] font-semibold text-center mx-auto wmd:leading-[58px] md:leading-[46px] leading-[38px] ${headingMaxWidthClass}`}
        >
          {heading}
        </h2>

        <div
          className={`grid gap-[20px] w-full grid-cols-1 ${
            button ? "md:grid-cols-2 wmd:grid-cols-3" : "md:grid-cols-3"
          }`}
        >
          {testimonials.map((t) => (
            <div
              key={t.author}
              className={`${cardBg} flex flex-col gap-5 lg:p-5 wmd:p-2.5 p-5`}
            >
              {/* Top: profile image + quote marks stacked */}
              <div className="flex flex-col gap-5 items-start">
                <Image
                  src={t.image}
                  alt={t.author}
                  width={t.imgWidth}
                  height={t.imgHeight}
                  className="object-cover grayscale rounded-[2px] [clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)]"
                  style={{ width: t.imgWidth, height: t.imgHeight }}
                />
                <Image
                  src={QUOTE_SVG}
                  alt="quote"
                  width={80}
                  height={14}
                  className="h-[14px] w-auto "
                  unoptimized
                />
              </div>

              {/* Bottom: quote text + author */}
              <div className="flex flex-col gap-5">
                <p className="text-[14px] text-[#707070] leading-[20px]">
                  {t.quote}
                </p>
                <h2 className="text-[16px] font-semibold text-black leading-[18px]">
                  {t.author}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {button && (
          <div className="w-full flex justify-center">
            <Link
              href={buttonUrl}
              className="inline-flex items-center max-md:w-full justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02]"
            >
              {buttonText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
