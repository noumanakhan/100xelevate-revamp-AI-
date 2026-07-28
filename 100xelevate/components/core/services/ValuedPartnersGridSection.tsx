import Image from "next/image";
import type { ReactNode } from "react";

const UPLOAD = "https://100xelevate.com/wp-content/uploads/2025/10";

export type ValuedPartnerLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Optional sizing, e.g. larger mark for the agency logo in the grid */
  className?: string;
};

export const DEFAULT_VALUED_PARTNER_LOGOS: ValuedPartnerLogo[] = [
  { src: `${UPLOAD}/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9.svg`, alt: "Shopify", width: 198, height: 38 },
  { src: `${UPLOAD}/partner_logo_2.svg`, alt: "Yotpo", width: 113, height: 35 },
  { src: `${UPLOAD}/partner_logo_3.svg`, alt: "Rebuy", width: 131, height: 32 },
  { src: `${UPLOAD}/partner_logo_4-1.svg`, alt: "Recharge", width: 150, height: 24 },
  { src: `${UPLOAD}/partner_logo_5.svg`, alt: "Klaviyo", width: 109, height: 36 },
  { src: `${UPLOAD}/partner_logo_6.svg`, alt: "Gorgias", width: 139, height: 28 },
  { src: `${UPLOAD}/partner_logo_7.svg`, alt: "Okendo", width: 150, height: 27 },
  { src: `${UPLOAD}/partner_logo_8.svg`, alt: "Nosto", width: 148, height: 25 },
  { src: `${UPLOAD}/partner_logo_9.svg`, alt: "ShipStation", width: 176, height: 20 },
  { src: `${UPLOAD}/partner_logo_10.svg`, alt: "Rise AI", width: 125, height: 39 },
  { src: `${UPLOAD}/partner_logo_11.svg`, alt: "Glew", width: 110, height: 35 },
  { src: `${UPLOAD}/partner_logo_12.svg`, alt: "Matrixify", width: 160, height: 23 },
  {
    src: `${UPLOAD}/Frame-1000003009.png`,
    alt: "100xelevate",
    width: 365,
    height: 240,
    className: "max-h-14 sm:max-h-16 md:max-h-[240px] w-auto max-w-full object-contain",
  },
  { src: `${UPLOAD}/partner_logo_13.svg`, alt: "Route", width: 150, height: 19 },
  { src: `${UPLOAD}/orderfrove.svg`, alt: "Ordergroove", width: 190, height: 21 },
  { src: `${UPLOAD}/vwo.svg`, alt: "VWO", width: 99, height: 41 },
  { src: `${UPLOAD}/eone.svg`, alt: "Eone", width: 132, height: 22 },
  { src: `${UPLOAD}/hawkemedia.svg`, alt: "Hawkemedia", width: 157, height: 50 },
  { src: `${UPLOAD}/smartrr.svg`, alt: "Smartrr", width: 132, height: 25 },
  { src: `${UPLOAD}/triple.svg`, alt: "Triple Whale", width: 202, height: 17 },
  { src: `${UPLOAD}/netsuite.svg`, alt: "NetSuite", width: 134, height: 20 },
  { src: `${UPLOAD}/aftersell.svg`, alt: "AfterSell", width: 142, height: 19 },
  { src: `${UPLOAD}/tapcart.svg`, alt: "Tapcart", width: 148, height: 29 },
  { src: `${UPLOAD}/layaltylion.svg`, alt: "LoyaltyLion", width: 192, height: 29 },
  { src: `${UPLOAD}/siena.svg`, alt: "Siena", width: 96, height: 36 },
];

export const defaultValuedPartnersIntro: ReactNode = (
  <p className="text-[#707070] text-[14px] md:text-[16px] leading-5 md:leading-5 max-w-[1000px] text-center mx-auto font-normal">
    100xelevate has built <strong className="font-semibold ">seriously strong relationships</strong>{" "}
    with fantastic companies that we refer to as{" "}
    <strong className="font-semibold ">commerce catalysts</strong>, and they have proven to contribute
    to our merchants&apos; success. We&apos;ve been given{" "}
    <strong className="font-semibold ">dedicated support lines</strong> by all our partners, enabling us
    to bypass ticketing and issue queues, allowing us to provide you with faster solutions when emergencies arise.
  </p>
);

export type ValuedPartnersGridSectionProps = {
  heading?: ReactNode;
  intro?: ReactNode;
  logos?: ValuedPartnerLogo[];
  className?: string;
};

export default function ValuedPartnersGridSection({
  heading = "Our Valued Partners",
  intro = defaultValuedPartnersIntro,
  logos = DEFAULT_VALUED_PARTNER_LOGOS,
  className,
}: ValuedPartnersGridSectionProps) {
  return (
    <section
      className={["w-full sm:px-[10px] px-[16px] bg-white", className].filter(Boolean).join(" ")}
    >
      <div className="w-full max-w-[1400px] mx-auto sm:pb-[86px] pb-12 sm:pt-6 pt-8">
        <header className="flex flex-col gap-5 mb-5 md:mb-6">
          <h2 className="text-[32px] md:text-[48px] font-[600] leading-[56px] text-center text-black py-2.5">{heading}</h2>
          {intro}
        </header>

        <ul
          className="grid grid-cols-3 md:grid-cols-5 border border-[#D9D9D9] list-none p-0 m-0 max-w-[1140px] mx-auto w-full"
        >
          {logos.map((logo, i) => {
            const isAgency = logo.alt === "100xelevate";
            // Responsive column calculation
            const agencyIdx = logos.findIndex(l => l.alt === "100xelevate");
            // On mobile, agency spans 3 cols (1 index but 3 slots), so items after it are offset by +2
            const mobileSlot = i > agencyIdx ? i + 2 : i;
            const isMdLastCol = (i + 1) % 5 === 0;
            const isSmLastCol = isAgency || mobileSlot % 3 === 2;
            const isMdLastRow = i >= logos.length - 5;
            const isSmLastRow = i >= logos.length - 3;
            return (
              <li
                key={logo.src}
                className={[
                  "flex items-center justify-center border-[#D9D9D9]",
                  !isSmLastCol ? "border-r-2" : "",
                  !isSmLastRow ? "border-b-2" : "",
                  !isMdLastCol ? "md:border-r-2" : "md:border-r-0",
                  !isMdLastRow ? "md:border-b-2" : "md:border-b-0",
                  "h-[120px] sm:h-[140px] md:h-[160px] w-full",
                  isAgency ? "p-0 col-span-3 md:col-span-1" : "p-4 sm:p-5 md:p-6",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  unoptimized
                  className={
                    isAgency
                      ? "h-[90%] md:h-[135.44px] w-auto max-w-full object-contain relative left-0 md:-left-10"
                      : (logo.className ?? "w-auto max-w-full max-h-[50px] sm:max-h-[70px] md:max-h-[90px] object-contain")
                  }
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 20vw"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
