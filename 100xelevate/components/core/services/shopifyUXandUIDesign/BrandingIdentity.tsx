import Image from "next/image";
import {
  BrandingIdentityContent,
  BrandingIdentityContentProps,
} from "../BrandingIdentityContent";

const alphaImages = [
  {
    src: "/images/2025/11/image-3-1.webp",
    alt: "Branding work 1",
  },
  {
    src: "/images/2025/11/image-3-4.webp",
    alt: "Branding work 2",
  },
  {
    src: "/images/2025/11/image-3-3.webp",
    alt: "Branding work 3",
  },
  {
    src: "/images/2025/11/image-3-2.webp",
    alt: "Branding work 4",
  },
];

const betaImages = [
  {
    src: "/images/2025/11/image-3-5.webp",
    alt: "Branding work 5",
  },
  {
    src: "/images/2025/11/image-3-8.webp",
    alt: "Branding work 6",
  },
  {
    src: "/images/2025/11/image-3-7.webp",
    alt: "Branding work 7",
  },
  {
    src: "/images/2025/11/image-3-6.webp",
    alt: "Branding work 8",
  },
];

interface ScrollColumnProps {
  images: { src: string; alt: string }[];
  animationClass: string;
}

const ScrollColumn = ({ images, animationClass }: ScrollColumnProps) => (
  <div className="overflow-hidden relative flex-1 h-155 max-sm:h-100 scroll-column">
    <div
      className={`flex flex-col gap-3 ${animationClass} scroll-column-track`}
    >
      {/* First batch */}
      {images.map((img) => (
        <div key={`a-${img.alt}`} className="w-full shrink-0">
          <Image
            src={img.src}
            alt={img.alt}
            width={2001}
            height={1125}
            className="w-full h-auto block object-cover rounded-[20px]"
            style={{ border: "1px solid #CCCCCC90", borderRightWidth: "2px" }}
          />
        </div>
      ))}
      {/* Duplicate batch for seamless loop */}
      {images.map((img) => (
        <div key={`b-${img.alt}`} className="w-full shrink-0">
          <Image
            src={img.src}
            alt={img.alt}
            width={2001}
            height={1125}
            className="w-full h-auto block object-cover rounded-[20px]"
            style={{ border: "1px solid #CCCCCC90", borderRightWidth: "2px" }}
          />
        </div>
      ))}
    </div>
  </div>
);

export const BrandingIdentity = (
  contentProps: BrandingIdentityContentProps,
) => {
  return (
    <section className="w-full bg-white md:px-8 px-4">
      <div className="max-w-max mx-auto md:py-[86px] py-[32px] flex flex-col items-center xl:gap-[74px] lg:gap-[64px] md:gap-[32px] gap-[30px] wmd:flex-row">
        {/* Left: scrolling image columns */}
        <div
          className="flex gap-3 flex-1 min-w-0 md:w-full md:max-w-full wsm:max-w-[310px] max-w-[208px] "
          role="region"
          aria-label="Branding work carousel"
        >
          <ScrollColumn
            images={alphaImages}
            animationClass="animate-scroll-up"
          />
          <ScrollColumn
            images={betaImages}
            animationClass="[animation:scroll-up_12s_linear_infinite]"
          />
        </div>

        {/* Right: text content */}
        <BrandingIdentityContent {...contentProps} />
      </div>
    </section>
  );
};
