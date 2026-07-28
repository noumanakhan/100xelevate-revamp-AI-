import React from "react";
import LogoMarquee from "../home/LogoMarquee";

const logos = [
  {
    src: "/images/2025/07/schutz-logo-1.png-2-1-e1753988435162.png",
    alt: "Wild logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 129,
    height: 80,
  },
  {
    src: "/images/2025/07/Calvin-Klein-logo-1.png-8-1.png",
    alt: "Andrea Maack logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "/images/2025/07/Logo-AriZona-1.png-1-1.png",
    alt: "Blue Ruby logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "/images/2025/07/Logo-HillHouseHome-1.png-1-1.png",
    alt: "Crown and Paw logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "/images/2025/07/Logo-Khaite-1.png-1-1.png",
    alt: "Water Boy logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "/images/2025/07/Logo-Quip.png-1.png",
    alt: "Super7 logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "/images/2025/07/modelez-logo.png-3.png",
    alt: "Peak Chocolate logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 151,
    height: 80,
  },
  {
    src: "/images/2025/10/schutz-logo.png-1.png",
    alt: "Revgum logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "/images/2025/10/schutz-logo.png.png",
    alt: "LISS logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "/images/2025/10/Logo-Edikted.png-2.png",
    alt: "Fika logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
];

export const LogoSection = () => {
  return (
    <div className="w-full flex flex-col justify-center pt-8 pb-1 gap-6">
      <h1 className="wmd:text-[18px] font-semibold leading-[22px] uppercase md:text-[20px] md:leading-[24px] text-[18px] leading-[22px] w-full text-center">
        Trusted by 7-8 figure Shopify stores:
      </h1>
      <LogoMarquee logos={logos} />
    </div>
  );
};
