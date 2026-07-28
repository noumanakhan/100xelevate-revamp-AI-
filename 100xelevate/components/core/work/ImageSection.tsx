/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

function ImageSection({
  section,
}: {
  section: { image: string; alt: string; width: number; height: number; className?: string };
}) {
  return (
    <Image
      src={section?.image}
      alt={section?.alt}
      className={`w-full object-cover ${section?.className}`}
      quality={100}
      width={section?.width || 1920}
      height={section?.height || 1080}
      unoptimized
      style={{ height: section?.height || "auto" }}
    />
  );
}

export default ImageSection;
