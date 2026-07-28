"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

const projects = [
  {
    slug: "waterboy",
    title: "Waterboy",
    description:
      "Optimized Shopify Store Design Boosting Conversions & Retention by 20%",
    image: "/images/2025/02/Frame-427320691-16-e1761683894682.webp",
  },
  {
    slug: "andrea-maack",
    title: "Andrea Maack",
    description:
      "Developed Luxury Shopify Store Increasing Revenue per User by 22X",
    image: "/images/2025/02/Frame-427320720-e1761683932868-1.avif",
  },
  {
    slug: "peak-chocolate",
    title: "Peak Chocolate",
    description:
      "Revamped Shopify Plus Store for Enhanced Engagement & Brand Visibility",
    image: "/images/2025/10/Frame-427320691-15-1-e1761684011146.webp",
  },
  {
    slug: "tonight-we-dine",
    title: "Tonight We Dine",
    description:
      "Enhanced Restaurant Site Design to Boost Online Orders & Engagement",
    image: "/images/2025/10/Frame-1000001511-1-e1761684044269.webp",
  },
  {
    slug: "hoodies-for-heroes",
    title: "Hoodies For Heroes",
    description: "Built Custom Shopify Store to Enhance Sales & Brand Presence",
    image: "/images/2025/02/Frame-1000001678-1-768x850-1.avif",
  },
  {
    slug: "husband-pillow",
    title: "Husband Pillow",
    description:
      "Shopify Store Redesign Driving Sales with Enhanced User Experience",
    image: "/images/2025/06/image-13-e1763479337676.webp",
  },
  {
    slug: "stand",
    title: "Stand+",
    description: "Increased AOV by 67% with UX Redesign & Bundle Strategy",
    image: "/images/2025/06/Frame-1000001678-e1763479370581.webp",
  },
  {
    slug: "rev-gum",
    title: "Rev gum",
    description: "Achieved 2X Conversions with UX-Driven CRO Strategy",
    image: "/images/2025/06/Listing-Image-1-e1765466679868.webp",
  },
  {
    slug: "rsvlts",
    title: "RSVLTS",
    description:
      "Boosted Mobile Orders by 92% with Shopify Store and App Development",
    image: "/images/2025/06/Listing-Image-2-e1763479447615.webp",
  },
  {
    slug: "fweygo",
    title: "Fweygo",
    description:
      "Built High-Performance Shopify Store Converting 50% More Visitors",
    image: "/images/2025/06/Listing-Image-3-e1765466610750.webp",
  },
  {
    slug: "sidekick",
    title: "Sidekick",
    description:
      "Increased Conversions by 91% with Personalized UX Enhancements",
    image: "/images/2025/06/Listing-Image-4-e1763479746215.webp",
  },
  {
    slug: "wild",
    title: "Wild",
    description:
      "Achieved +84% AOV Boost & Faster Conversions for Shark Tank Brand",
    image: "/images/2025/06/Listing-Image-7-e1763479770572.webp",
  },
  {
    slug: "arcor",
    title: "Arcor",
    description:
      "Boosted AOV by 118% with UX-Driven Shopify Design Improvements",
    image: "/images/2025/06/Listing-Image-5-e1763480385664.webp",
  },
  {
    slug: "blendjet",
    title: "Blendjet",
    description: "Shopify Rebuild Driving +72% AOV & 3X Conversion Growth",
    image: "/images/2025/06/Listing-Image-6-e1763482181228.webp",
  },
  {
    slug: "jot",
    title: "Jot",
    description: "Increased AOV by 126% Using Subscription & CRO Strategies",
    image: "/images/2025/06/Listing-Image-10-e1765466522551.webp",
  },
  {
    slug: "tinkr",
    title: "Tinkr",
    description:
      "From 0 to Launch: Achieved 2.5X Higher AOV with Tinkr’s Custom Build",
    image: "/images/2025/06/Listing-Image-9-e1763482252271.webp",
  },
  {
    slug: "super7",
    title: "Super7",
    description:
      "Built Custom Shopify Store, Increasing Free Trial Signups by 56%",
    image: "/images/2025/06/Listing-Image-8-e1763482284769.webp",
  },
  {
    slug: "blackbelt-protein",
    title: "BlackBelt Protein",
    description:
      "Achieved +59% CR Increase After WooCommerce to Shopify Migration",
    image: "/images/2025/06/Listing-Image.webp",
  },
  {
    slug: "ghost-lifestyle",
    title: "Ghost Lifestyle",
    description:
      "Increased AOV by 62% with Subscription-First Shopify Approach",
    image: "/images/2025/06/Listing-Image-1-1-e1763482351766.webp",
  },
  {
    slug: "create-wellness",
    title: "Create Wellness",
    description:
      "Drove +58% Conversion Rate Growth with UX, Bundles, & Community Offers",
    image: "/images/2025/06/Listing-Image-2-1-e1763482396330.webp",
  },
  {
    slug: "ag1",
    title: "AG1",
    description: "Custom Shopify Setup Boosting Subscription Growth by 63%",
    image: "/images/2025/06/Listing-Image-3-1-e1763482442682.webp",
  },
  {
    slug: "psd",
    title: "PSD",
    description: "Achieves +78% AOV Growth with Custom Bundle Builder",
    image: "/images/2025/06/Listing-Image-4-1-e1763482464894.webp",
  },
  {
    slug: "nyc-mode",
    title: "NYC Mode",
    description: "+47% Conversion Lift for NYC Mode",
    image: "/images/2026/04/NYC.webp",
  },
  {
    slug: "baby-bonde",
    title: "Baby Bonde",
    description: "+63% Revenue Growth for Baby Bondé",
    image: "/images/2026/04/Baby-Bonde-1.webp",
  },
  {
    slug: "skeisan",
    title: "Skeisan",
    description: "+73% Bundle AOV for German Tea Brand Skeisan",
    image: "/images/2026/05/Skaisen.webp",
  },
  {
    slug: "ultra-internal",
    title: "Ultra internal",
    description: "+61% AOV for 25-Year Wellness Brand Ultra Internal Flush",
    image: "/images/2026/05/Ultra.webp",
  },
  {
    slug: "root-pretty",
    title: "Root Pretty",
    description: "3x Faster Load Speeds in a Complete Shopify Migration",
    image: "/images/2026/05/Root.webp",
  },
  {
    slug: "cambie",
    title: "Cambie",
    description: "+58% Repeat Order Rate for B2B Chocolate Supplier",
    image: "/images/2026/05/Cambie.webp",
  },
  {
    slug: "jetlagged",
    title: "JETLAGGED",
    description: "+38% AOV Lift for Travel Wellness Brand JETLAGGED",
    image: "/images/2026/05/Jetlagged.webp",
  },
  {
    slug: "dent-xx",
    title: "Dent-xx",
    description: "+84% Bundle Adoption for German Oral Care Brand",
    image: "/images/2026/05/Dentxx.webp",
  },
  {
    slug: "meal-max",
    title: "Meal Max",
    description: "Custom Bundle Builder Built From Scratch",
    image: "/images/2026/05/Mealmax.webp",
  },
  {
    slug: "retro-rifle",
    title: "Retro Rifle",
    description: "x Drop-Day Revenue and Zero Site Crashes",
    image: "/images/2026/05/Retro.webp",
  },
  {
    slug: "liss",
    title: "LISS",
    description: "+52% PDP Conversion for Premium Surf Storage Brand",
    image: "/images/2026/05/Liss.webp",
  },
  {
    slug: "blue-ruby",
    title: "Blue Ruby",
    description: "+34% Conversion Lift for Jewellery Boutique Blue Ruby",
    image: "/images/2026/05/Liss-1.webp",
  },
  {
    slug: "stayforever",
    title: "Stayforever",
    description: "+112% Online Revenue Growth for Gift Shop Stay Forever",
    image: "/images/2026/05/Liss-2.webp",
  },
  {
    slug: "graham-platner",
    title: "Graham Platner",
    description:
      "Fast-Turn Campaign Merch Store Build for U.S. Senate Candidate",
    image: "/images/2026/05/Group-2147226402.webp",
  },
];

function Arrow({ direction }: { direction: "previous" | "next" }) {
  const isPrevious = direction === "previous";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={
          isPrevious
            ? "M0.470012 8.53006C0.329561 8.38943 0.250671 8.19881 0.250671 8.00006C0.250671 7.80131 0.329561 7.61069 0.470012 7.47006L7.45701 0.470059C7.52616 0.398395 7.60889 0.341221 7.70038 0.301871C7.79186 0.262522 7.89027 0.241786 7.98985 0.240874C8.08944 0.239963 8.1882 0.258892 8.28039 0.296559C8.37258 0.334227 8.45635 0.389877 8.5268 0.460263C8.59725 0.530649 8.65298 0.614361 8.69074 0.706515C8.72849 0.79867 8.74751 0.89742 8.74669 0.997005C8.74588 1.09659 8.72523 1.19501 8.68597 1.28653C8.64671 1.37806 8.58961 1.46084 8.51801 1.53006L2.81001 7.24906L19 7.23806C19.1989 7.2378 19.3898 7.31656 19.5306 7.45702C19.6715 7.59749 19.7507 7.78815 19.751 7.98706C19.7513 8.18597 19.6725 8.37684 19.532 8.51768C19.3916 8.65852 19.2009 8.7378 19.002 8.73806L2.80801 8.74806L8.51901 14.4701C8.59061 14.5393 8.64771 14.6221 8.68697 14.7136C8.72623 14.8051 8.74688 14.9035 8.74769 15.0031C8.74851 15.1027 8.72949 15.2015 8.69174 15.2936C8.65398 15.3858 8.59825 15.4695 8.5278 15.5399C8.45735 15.6102 8.37358 15.6659 8.28139 15.7036C8.1892 15.7412 8.09044 15.7602 7.99085 15.7592C7.89127 15.7583 7.79286 15.7376 7.70138 15.6982C7.60989 15.6589 7.52716 15.6017 7.45801 15.5301L0.470012 8.53006Z"
            : "M19.53 7.46994C19.6705 7.61057 19.7493 7.80119 19.7493 7.99994C19.7493 8.19869 19.6705 8.38931 19.53 8.52994L12.543 15.5299C12.4739 15.6016 12.3911 15.6588 12.2996 15.6981C12.2082 15.7375 12.1097 15.7582 12.0102 15.7591C11.9106 15.76 11.8118 15.7411 11.7196 15.7034C11.6274 15.6658 11.5437 15.6101 11.4732 15.5397C11.4028 15.4694 11.347 15.3856 11.3093 15.2935C11.2715 15.2013 11.2525 15.1026 11.2533 15.003C11.2541 14.9034 11.2748 14.805 11.314 14.7135C11.3533 14.6219 11.4104 14.5392 11.482 14.4699L17.19 8.75094L1 8.76194C0.801092 8.7622 0.610221 8.68344 0.469381 8.54298C0.32854 8.40251 0.249269 8.21185 0.249004 8.01294C0.248739 7.81403 0.327501 7.62316 0.467966 7.48232C0.608431 7.34148 0.799091 7.2622 0.998003 7.26194L17.192 7.25194L11.481 1.52994C11.4094 1.46072 11.3523 1.37794 11.313 1.28641C11.2738 1.19489 11.2531 1.09647 11.2523 0.996883C11.2515 0.897299 11.2705 0.798549 11.3083 0.706395C11.346 0.614241 11.4018 0.530528 11.4722 0.460142C11.5427 0.389756 11.6264 0.334106 11.7186 0.296439C11.8108 0.258772 11.9096 0.239842 12.0092 0.240754C12.1087 0.241666 12.2072 0.262401 12.2986 0.301751C12.3901 0.3411 12.4729 0.398275 12.542 0.469939L19.53 7.46994Z"
        }
        fill="currentColor"
      />
    </svg>
  );
}

const OurWorkCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: false,
    duration: 40,
    loop: true,
    skipSnaps: false,
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="w-full overflow-hidden bg-white py-8 pl-4 md:py-[86px] md:pl-8 md:pr-0 pr-4">
      <div className="flex flex-col gap-10">
        <h2 className="text-[32px] font-medium leading-[38px] text-black wmd:text-[48px] wmd:leading-[58px]">
          Our Work
        </h2>

        <div>
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex touch-pan-y gap-5">
              {projects.map((project) => (
                <article
                  key={project.slug}
                  className="
                    min-w-0 shrink-0
                    basis-[clamp(231px,calc(99.529vw-110.39px),654px)]
                    md:basis-[clamp(308px,calc(49.609vw-73px),435px)]
                    lg:basis-[clamp(284px,calc(32.955vw-53.46px),342px)]
                    xl:basis-[clamp(374px,calc(49.398vw-218.77px),456px)]
                    wxl:basis-[clamp(372px,calc(49.805vw-308.34px),628px)]
                  "
                >
                  <Link
                    href={`/our-work/${project.slug}/`}
                    className="group block"
                  >
                    <div className="h-[400px] overflow-hidden bg-[#F7F7F7] lg:h-[560px] wxl:h-[600px]">
                      <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title} — designed and developed by 100xelevate`}
                        width={880}
                        height={970}
                        sizes="(max-width: 767px) 654px, (max-width: 1023px) 435px, (max-width: 1199px) 342px, (max-width: 1365px) 456px, 628px"
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                      />
                    </div>

                    <h3 className="mt-4 text-[16px] font-medium leading-[22px] text-black">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-w-[95%] text-[14px] leading-[18px] text-[#757575]">
                      {project.description}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-1 flex items-center justify-end gap-5 pr-7">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous project"
              className="grid size-10 cursor-pointer place-items-center text-black transition-opacity hover:opacity-60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-[25px]"
                viewBox="0 0 20 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.470012 8.53006C0.329561 8.38943 0.250671 8.19881 0.250671 8.00006C0.250671 7.80131 0.329561 7.61069 0.470012 7.47006L7.45701 0.470059C7.52616 0.398395 7.60889 0.341221 7.70038 0.301871C7.79186 0.262522 7.89027 0.241786 7.98985 0.240874C8.08944 0.239963 8.1882 0.258892 8.28039 0.296559C8.37258 0.334227 8.45635 0.389877 8.5268 0.460263C8.59725 0.530649 8.65298 0.614361 8.69074 0.706515C8.72849 0.79867 8.74751 0.89742 8.74669 0.997005C8.74588 1.09659 8.72523 1.19501 8.68597 1.28653C8.64671 1.37806 8.58961 1.46084 8.51801 1.53006L2.81001 7.24906L19 7.23806C19.1989 7.2378 19.3898 7.31656 19.5306 7.45702C19.6715 7.59749 19.7507 7.78815 19.751 7.98706C19.7513 8.18597 19.6725 8.37684 19.532 8.51768C19.3916 8.65852 19.2009 8.7378 19.002 8.73806L2.80801 8.74806L8.51901 14.4701C8.59061 14.5393 8.64771 14.6221 8.68697 14.7136C8.72623 14.8051 8.74688 14.9035 8.74769 15.0031C8.74851 15.1027 8.72949 15.2015 8.69174 15.2936C8.65398 15.3858 8.59825 15.4695 8.5278 15.5399C8.45735 15.6102 8.37358 15.6659 8.28139 15.7036C8.1892 15.7412 8.09044 15.7602 7.99085 15.7592C7.89127 15.7583 7.79286 15.7376 7.70138 15.6982C7.60989 15.6589 7.52716 15.6017 7.45801 15.5301L0.470012 8.53006Z"
                  fill="black"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next project"
              className="grid size-10 cursor-pointer place-items-center text-black transition-opacity hover:opacity-60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-[25px]"
                viewBox="0 0 20 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.53 7.46994C19.6705 7.61057 19.7493 7.80119 19.7493 7.99994C19.7493 8.19869 19.6705 8.38931 19.53 8.52994L12.543 15.5299C12.4739 15.6016 12.3911 15.6588 12.2996 15.6981C12.2082 15.7375 12.1097 15.7582 12.0102 15.7591C11.9106 15.76 11.8118 15.7411 11.7196 15.7034C11.6274 15.6658 11.5437 15.6101 11.4732 15.5397C11.4028 15.4694 11.347 15.3856 11.3093 15.2935C11.2715 15.2013 11.2525 15.1026 11.2533 15.003C11.2541 14.9034 11.2748 14.805 11.314 14.7135C11.3533 14.6219 11.4104 14.5392 11.482 14.4699L17.19 8.75094L1 8.76194C0.801092 8.7622 0.610221 8.68344 0.469381 8.54298C0.32854 8.40251 0.249269 8.21185 0.249004 8.01294C0.248739 7.81403 0.327501 7.62316 0.467966 7.48232C0.608431 7.34148 0.799091 7.2622 0.998003 7.26194L17.192 7.25194L11.481 1.52994C11.4094 1.46072 11.3523 1.37794 11.313 1.28641C11.2738 1.19489 11.2531 1.09647 11.2523 0.996883C11.2515 0.897299 11.2705 0.798549 11.3083 0.706395C11.346 0.614241 11.4018 0.530528 11.4722 0.460142C11.5427 0.389756 11.6264 0.334106 11.7186 0.296439C11.8108 0.258772 11.9096 0.239842 12.0092 0.240754C12.1087 0.241666 12.2072 0.262401 12.2986 0.301751C12.3901 0.3411 12.4729 0.398275 12.542 0.469939L19.53 7.46994Z"
                  fill="black"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkCarousel;
