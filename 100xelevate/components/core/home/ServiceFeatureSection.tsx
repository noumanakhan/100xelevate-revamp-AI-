import { ButtonLink } from "@/components/shared/ButtonLink";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
}

interface ServiceFeatureSectionProps {
  eyebrow?: string;
  heading: ReactNode;
  description: string;
  features: Feature[];
  ctaText: string;
  ctaHref: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  imageRight?: boolean;
  bg?: string;
  images?: { src: string; width: number; height: number }[];
}

function ScrollColumn({
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
    <div className="flex-1 overflow-hidden h-[600px] relative">
      <div className={`flex flex-col gap-4 ${animClass}`}
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
export default function ServiceFeatureSection({
  eyebrow,
  heading,
  description,
  features,
  ctaText,
  ctaHref,
  image,
  imageRight = false,
  bg = "white",
  images,
}: ServiceFeatureSectionProps) {
  const textCol = (
    <div className={`flex-1 flex flex-col  ${imageRight ? "max-w-[640px]" : "max-w-[600px]"}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-[#707070]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[32px] md:text-[48px] font-medium leading-tight ">{heading}</h2>
      <p className="text-[#707070] md:text-[16px] text-[14px] leading-[20px] mt-5 ">{description}</p>
      <div className="flex flex-col mt-7 max-w-[500px]">
        {features.map((f, i) => (
          <div key={i} className={`h-[73px] flex items-center justify-between gap-3 py-[14px] border-b border-black/10 ${i === 0 ? "border-t" : ""}`}>
            <span className="font-medium md:text-[20px] text-[16px]">{f.title}</span>
            <span className="flex-shrink-0 w-[26px] h-[26px]">{f.icon}</span>
          </div>
        ))}
      </div>
      <div className="mt-7">
        <ButtonLink variant="outlined"
          href={ctaHref}
        >
          {ctaText}
        </ButtonLink>
      </div>
    </div>
  );

  const imageCol = (
    <>
      {images ?
        (
          <div className="flex-1 md:h-fit md:max-h-[100%] max-h-[400px] overflow-hidden">
            <ScrollColumn
              images={images || []}
              direction="up"
              speed={30}
            />
          </div>

        ) : (
          <div className="flex-1">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-auto"
            />
          </div>
        )}
    </>
  );

  return (
    <section className="w-full sm:px-[22px] px-[16px] "
      style={{ background: bg === "gray" ? "#F7F7F7" : "white" }}
    >
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center sm:py-[86px] py-[32px]">
        <div className="w-full">
          <div className={`flex  md:flex-row items-center gap-10 lg:gap-[120px] ${imageRight ? "flex-col-reverse" : "flex-col"}`}>
            {imageRight ? (
              <>
                {textCol}
                {imageCol}
              </>
            ) : (
              <>
                {imageCol}
                {textCol}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
