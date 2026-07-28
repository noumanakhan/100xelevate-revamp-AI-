import Image from "next/image";
import type { ReactNode } from "react";
import type { ServiceImageTextImage } from "./ServiceImageTextSection";
import { ButtonLink } from "@/components/shared/ButtonLink";

export type ServiceImageTextCardSectionProps = {
  heading: string;
  description: string;
  image: ServiceImageTextImage;
  imageAlign: "left" | "right";
  className?: string;
  imagePriority?: boolean;
  cta?: {
    text: string;
    href: string;
  };
};

function TextBlock({
  heading,
  description,
  cta,
}: Pick<ServiceImageTextCardSectionProps, "heading" | "description" | "cta">) {
  return (
    <div className="flex-1 flex flex-col w-full min-w-0 max-w-[640px]">
      <h2
        className="text-[32px] md:text-[48px] font-medium leading-tight text-black"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <p className="text-[#707070] text-[14px] md:text-[16px] leading-5 md:leading-relaxed mt-5">
        {description}
      </p>
      {cta && (
        <div className="mt-5">
          <ButtonLink href={cta.href} variant="outlined" className="h-[43px]">
            {cta.text}
          </ButtonLink>
        </div>
      )}
    </div>
  );
}

function ImageBlock({
  image,
  imagePriority = false,
}: {
  image: ServiceImageTextImage;
  imagePriority?: boolean;
}) {
  return (
    <div className="flex-1 w-full min-w-0">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={["w-full h-auto", image.className].filter(Boolean).join(" ")}
        priority={imagePriority}
        sizes="(max-width: 767px) 100vw, (max-width: 1280px) 50vw, 640px"
      />
    </div>
  );
}

export default function ServiceImageTextCardSection({
  heading,
  description,
  image,
  imageAlign,
  className,
  imagePriority,
  cta,
}: ServiceImageTextCardSectionProps) {
  const imageOnRight = imageAlign === "right";
  const text = (
    <TextBlock heading={heading} description={description} cta={cta} />
  );
  const imageEl = <ImageBlock image={image} imagePriority={imagePriority} />;

  return (
    <section
      className={["w-full sm:px-[22px] px-[16px] bg-white", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="w-full max-w-[1400px] mx-auto pb-[86px] pt-0">
        <div className="w-full bg-[#F7F7F7] sm:px-8 sm:py-10 px-5 py-8 rounded-[50px]">
          <div
            className={`w-full flex items-center gap-10 sm:gap-12 lg:gap-[74px] ${
              imageOnRight
                ? "flex-col-reverse md:flex-row"
                : "flex-col md:flex-row"
            }`}
          >
            {imageOnRight ? (
              <>
                {text}
                {imageEl}
              </>
            ) : (
              <>
                {imageEl}
                {text}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
