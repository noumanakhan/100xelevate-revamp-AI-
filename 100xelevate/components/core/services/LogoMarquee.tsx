import Image from "next/image";

export type LogoItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const defaultLogos: LogoItem[] = [
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/07/schutz-logo-1.png-2-1-e1753988435162.png",
    alt: "Wild logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 129,
    height: 80,
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/07/Calvin-Klein-logo-1.png-8-1.png",
    alt: "Andrea Maack logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/07/Logo-AriZona-1.png-1-1.png",
    alt: "Blue Ruby logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/07/Logo-HillHouseHome-1.png-1-1.png",
    alt: "Crown and Paw logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/07/Logo-Khaite-1.png-1-1.png",
    alt: "Water Boy logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/07/Logo-Quip.png-1.png",
    alt: "Super7 logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/07/modelez-logo.png-3.png",
    alt: "Peak Chocolate logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 151,
    height: 80,
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/10/schutz-logo.png-1.png",
    alt: "Revgum logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/10/schutz-logo.png.png",
    alt: "LISS logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/10/Logo-Edikted.png-2.png",
    alt: "Fika logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
];

type LogoMarqueeProps = {
  logos?: LogoItem[];
  duration?: string;
  className?: string;
  direction?: "left" | "right";
};

export function LogoMarquee({
  logos = defaultLogos,
  duration = "15s",
  className = "h-[60px] sm:h-[70px] md:h-[80px]",
  direction = "left",
}: LogoMarqueeProps) {
  return (
    <div className={`overflow-hidden mx-auto ${className}`}>
      <div
        className="flex h-full"
        style={{
          width: "max-content",
          animation: `${direction === "right" ? "marquee-right" : "marquee"} ${duration} linear infinite`,
          willChange: "transform",
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center lg:w-[14.286vw] wmd:w-[50vw] md:w-[25vw] w-[33.3333vw] flex-shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-full w-auto object-contain"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
