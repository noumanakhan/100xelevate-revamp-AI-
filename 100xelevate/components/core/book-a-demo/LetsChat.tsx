import Image from "next/image";
import CalComponent from "./CalComponent";

const defaultFeatures = [
  "Increase CVR, AOV and site speed",
  "40+ integrated features, use only what you need",
  "Ongoing feature releases, no additional costs",
  "Reduce app stack and developer dependencies",
];

interface LetsChatProps {
  heading?: string;
  description?: string;
  headingSize?: string;
  description2?: string;
  features?: string[];
  isList?: boolean;
  calendarBG?: string;
}

export const LetsChat = ({
  heading = "See how 100xelevate can improve your Shopify storefront",
  description = "You and your store deserve a big win.",
  headingSize = "xl:text-[52px] xl:leading-[58px] md:text-[44px] md:leading-[46px] text-[36px] leading-[39px]",
  description2,
  calendarBG = "bg-[#F5F5F5]",
  features = defaultFeatures,
  isList = true,
}: LetsChatProps) => {
  return (
    <section className="w-full  px-4 md:px-[32px] lg:px-[64px]">
      <div className="relative max-w-max mx-auto md:py-21.5 py-[32px] flex flex-row max-wmd:flex-col xl:gap-16 md:gap-8 gap-6 ">
        {/* Left column: sticky while the Cal column scrolls (see ScreenshotDetailsSection pattern) */}
        <div className="flex-1 min-w-0 lg:w-[50%] w-full">
          <div className="sticky top-4 md:top-[100px]  flex flex-col gap-5">
            <h2 className="xl:text-[24px] xl:leading-[30px] wmd:text-[18px] wmd:leading-[22px] text-[20px] leading-[24px] font-semibold ">
              Let&apos;s Chat
            </h2>

            <h1 className={`${headingSize} font-semibold`}>{heading}</h1>

            <p className="text-[#707070] text-base">
              {description}
              <br />
              {description2 && <>{description2}</>}
            </p>

            {isList && (
              <ul className="flex flex-col gap-1">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2  text-base"
                  >
                    <svg
                      className="max-w-[14px]"
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    <span className="text-[#707070]">{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Testimonial card — hidden on mobile */}
            <div className="hidden md:flex flex-col gap-4 bg-black p-5 mt-5">
              <Image
                src="/images/2025/02/image-68.png"
                alt="Cambie logo – Provided a testimonial for 100xelevate."
                width={122}
                height={28}
              />
              <p className="text-white text-sm leading-[21px]">
                &ldquo;We&apos;ve Increased Our Revenue By 35-40% By Working
                With 100xelevate. They can do things with Shopify that even
                Shopify thinks are impossible.&rdquo;
              </p>
              <p className="text-white text-sm">~ David Foley &ndash; Cambie</p>
            </div>
          </div>
        </div>

        {/* Right column: Cal.com inline embed */}
        <div
          className={`lg:w-[50%] lg:max-w-[670px] w-full flex-1 min-w-0  lg:p-[48px] p-[24px] ${calendarBG} `}
        >
          <CalComponent />
        </div>
      </div>
    </section>
  );
};
