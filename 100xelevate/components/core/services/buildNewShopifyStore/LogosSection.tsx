import { LogoMarquee } from "@/components/core/services/LogoMarquee";

const logos = [
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

export const LogosSection = () => {
  return (
    <section className="bg-white py-[100px] pb-1">
      {/* Heading */}
      <div className=" text-center mb-6">
        <h3 className="text-[18px] font-[600] leading-[22px] uppercase text-black">
          The world&apos;s most innovative brands 🤝 work with 100xElevate for
          their D2C &amp; B2B Shopify needs.
        </h3>
      </div>

      {/* Marquee */}
      <LogoMarquee logos={logos} />
    </section>
  );
};

