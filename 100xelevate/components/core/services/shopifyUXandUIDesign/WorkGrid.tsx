import Image from "next/image";
import Link from "next/link";

const items = [
  {
    image: "/images/2025/02/Frame-427320691-16-e1761683894682.webp",
    alt: "Screenshot of Waterboy store – Designed and developed by 100xelevate.",
    width: 880,
    height: 970,
    title: "Water Boy",
    titleHref: "/services/shopify-ux-and-ui-design/",
    description:
      "Optimized Shopify Store Design Boosting Conversions & Retention by 20%",
  },
  {
    image: "/images/2025/02/Frame-427320720-e1761683932868.webp",
    alt: "Screenshot of Andrea Maack store – Designed and developed by 100xelevate.",
    width: 880,
    height: 970,
    title: "Andrea Maack",
    titleHref: null,
    description:
      "Developed Luxury Shopify Store Increasing Revenue per User by 22X",
  },
  {
    image: "/images/2025/10/Frame-427320691-15-1-e1761684011146.webp",
    alt: "Screenshot of Peak Chocolate – Designed and developed by 100xelevate.",
    width: 880,
    height: 970,
    title: "Peak Chocolate",
    titleHref: "/services/shopify-ux-and-ui-design/",
    description:
      "Revamped Shopify Plus Store for Enhanced Engagement & Brand Visibility",
  },
  {
    image: "/images/2025/10/Frame-1000001511-1-e1761684044269.webp",
    alt: "Tonight We Dine",
    width: 880,
    height: 970,
    title: "Tonight We Dine",
    titleHref: "/services/shopify-ux-and-ui-design/",
    description:
      "Enhanced Restaurant Site Design to Boost Online Orders & Engagement",
  },
  {
    image: "/images/2025/02/cambie-fetured-e1765466658496.webp",
    alt: "Screenshot of Cambie store – Designed and developed by 100xelevate.",
    width: 760,
    height: 841,
    title: "Cambie",
    titleHref: null,
    description:
      "Shopify Store Development Driving 200x ROI and Engagement Boost",
  },
  {
    image: "/images/2025/02/Frame-1000001678-1.webp",
    alt: "Screenshot of Hoodies For Heroes store – Designed and developed by 100xelevate.",
    width: 1470,
    height: 1626,
    title: "Hoodies For Heros",
    titleHref: "/services/shopify-ux-and-ui-design/",
    description: "Built Custom Shopify Store to Enhance Sales & Brand Presence",
  },
];

export const WorkGrid = () => {
  return (
    <div className="   md:px-8 px-4 pb-[86px] pt-0">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:gap-x-5 md:gap-y-10 gap-x-[30px] gap-y-[30px] md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.titleHref || "#"}
              className="group flex flex-col gap-2"
            >
              <div className="overflow-hidden bg-white">
                <Image
                  loading="lazy"
                  src={item.image}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-2">
                <h3 className="text-[16px] font-medium leading-[1.2] text-black">
                  {item.titleHref ? (
                    <a href={item.titleHref}>{item.title}</a>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="mt-1.5 text-[14px] leading-[20px] text-brand-gray-alt">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/our-work/"
            className="inline-block rounded-full border-2 border-black bg-transparent px-5 py-3 leading-4 text-[15px] font-medium text-black transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105"
          >
            View work
          </Link>
        </div>
      </div>
    </div>
  );
};
