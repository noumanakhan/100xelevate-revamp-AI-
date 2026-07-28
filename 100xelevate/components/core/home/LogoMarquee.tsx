import Image from "next/image";

export type LogoItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const defaultLogos: LogoItem[] = [
  {
    src: "/images/2025/02/schutz-logo-1.png-1.png",
    alt: "Wild logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 170,
    height: 80,
  },
  {
    src: "/images/2025/02/Calvin-Klein-logo-1.png-1.png",
    alt: "Andrea Maack logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "/images/2025/02/Logo-AriZona-1.png-1.png",
    alt: "Blue Ruby logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "/images/2025/02/Logo-Edikted-1.png-1.png",
    alt: "Fika logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "/images/2025/02/Logo-HillHouseHome-1.png-1.png",
    alt: "Crown and Paw logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "/images/2025/02/Logo-Khaite-1.png-1.png",
    alt: "Water Boy logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "/images/2025/02/Logo-Quip-1.png-1.png",
    alt: "Super7 logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "/images/2025/02/modelez-logo-1.png-1.png",
    alt: "Peak Chocolate logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 170,
    height: 80,
  },
];

type LogoMarqueeProps = {
  logos?: LogoItem[];
};

export default function LogoMarquee({ logos = defaultLogos }: LogoMarqueeProps) {
  return (
    <div className="h-[86px] overflow-hidden ">
      <div className="flex w-max h-full animate-marquee">
        {[...logos, ...logos, ...logos, ...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center sm:px-14 px-5 flex-shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
