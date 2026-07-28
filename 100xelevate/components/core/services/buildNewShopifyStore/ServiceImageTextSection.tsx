import Image from "next/image";
import type { ReactNode } from "react";

export type ServiceImageTextImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export type ServiceImageTextSectionProps = {
  heading: string;
  subheading?: string;
  description: string;
  image: ServiceImageTextImage;
  imageAlign: "left" | "right";
  className?: string;
  imagePriority?: boolean;
};

function TextBlock({
  heading,
  subheading,
  description,
}: Pick<
  ServiceImageTextSectionProps,
  "heading" | "subheading" | "description"
>) {
  return (
    <div className="flex-1 flex flex-col w-full min-w-0 max-w-[640px]">
      <h2
        className="text-[32px] md:text-[48px] font-medium leading-tight text-black"
        dangerouslySetInnerHTML={{ __html: heading }}
      />

      {subheading && (
        <h3 className="text-[18px] sm:text-[22px] md:text-[26px] font-medium leading-snug text-black mt-4">
          {subheading}
        </h3>
      )}
      <p className="text-[#707070] text-[14px] md:text-[16px] leading-5 md:leading-relaxed mt-5">
        {description}
      </p>
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
        unoptimized
        sizes="(max-width: 767px) 100vw, (max-width: 1280px) 50vw, 640px"
      />
    </div>
  );
}

export default function ServiceImageTextSection({
  heading,
  subheading,
  description,
  image,
  imageAlign,
  className,
  imagePriority,
}: ServiceImageTextSectionProps) {
  const imageOnRight = imageAlign === "right";
  const text = (
    <TextBlock
      heading={heading}
      subheading={subheading}
      description={description}
    />
  );
  const imageEl = <ImageBlock image={image} imagePriority={imagePriority} />;

  return (
    <section
      className={["w-full sm:px-[22px] px-[16px] bg-white", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="w-full max-w-[1400px] mx-auto sm:py-[86px] py-8">
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
    </section>
  );
}
