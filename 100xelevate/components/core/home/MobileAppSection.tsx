import { ButtonLink } from "@/components/shared/ButtonLink";
import Image from "next/image";

export const col1 = [
  { src: "/images/2025/10/partner-images-3-2.webp", width: 460, height: 963 },
  { src: "/images/2025/10/partner-images-3-1.webp", width: 460, height: 962 },
  { src: "/images/2025/10/partner-images-1-2.webp", width: 460, height: 962 },
];

export const col2 = [
  { src: "/images/2025/10/partner-images-2-3.webp", width: 460, height: 962 },
  { src: "/images/2025/10/partner-images-2-2.webp", width: 460, height: 962 },
  { src: "/images/2025/10/partner-images-2-1.webp", width: 460, height: 962 },
];

export const col3 = [
  { src: "/images/2025/10/partner-images-1-4.webp", width: 460, height: 962 },
  { src: "/images/2025/10/partner-images-1-3.webp", width: 460, height: 963 },
  { src: "/images/2025/10/partner-images-1-1.webp", width: 230, height: 482 },
];

export function ScrollColumn({
  images,
  direction = "up",
  speed = 30,
}: {
  images: { src: string; width: number; height: number }[];
  direction?: "up" | "down";
  speed?: number;
}) {
  const doubled = [...images, ...images];
  const animClass =
    direction === "up" ? `animate-scroll-up` : `animate-scroll-down`;
  return (
    <div className="scroll-column flex-1 overflow-hidden h-[600px] relative">
      <div
        className={`scroll-column-track flex flex-col gap-4 ${animClass}`}
        style={{
          animationDuration: `${speed}s !important`,
        }}
      >
        {doubled.map((img, i) => (
          <Image
            key={i}
            src={img.src}
            alt="Ecommerce brand partnered with 100xelevate for store to mobile app conversion"
            width={img.width}
            height={img.height}
            className="w-full h-auto rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileAppSection() {
  return (
    <section className="w-full sm:px-[22px] px-[16px] ">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center sm:py-[86px] py-[32px]">
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-[20px]">
          {/* Text */}
          <div className="flex-1 flex flex-col gap-5 w-full">
            <p className="sm:text-[48px] text-[32px] sm:leading-[58px] leading-[38px] font-semibold">
              <span className="text-[#707070] sm:me-2">
                Convert Your Store
              </span>
              <br className="sm:hidden block" /> into a <br className="sm:block hidden" /> Mobile App
            </p>
            <h2 className="text-[16px] md:text-3xl font-semibold leading-tight">
              Trusted by 150+ Shopify brands
            </h2>
            <p className="text-[#707070] md:text-[16px] text-[14px] leading-[20px] font-[400] max-w-[550px]">
              Transform your Shopify store into a mobile app that improves sales
              and conversions with a fast, seamless user experience tailored for
              on-the-go shoppers. Enhance customer loyalty through push
              notifications and hyper-personalized perks. Mobile apps drastically
              reduce marketing expenses while building a solid bond with your brand
            </p>
            <div className="mt-4">
              <ButtonLink
                href="/shopify-app-development-agency/"
                variant="outlined"
              >
                Get started
              </ButtonLink>
            </div>
          </div>

          {/* Scrolling image columns */}
          <div className="flex-1 flex gap-4 md:max-h-[600px] max-h-[400px] overflow-hidden w-full lg:max-w-[50%]">
            <ScrollColumn images={col1} direction="up" speed={16} />
            <ScrollColumn images={col2} direction="up" speed={8} />
            <ScrollColumn images={col3} direction="up" speed={25} />
          </div>
        </div>
      </div>
    </section >
  );
}
