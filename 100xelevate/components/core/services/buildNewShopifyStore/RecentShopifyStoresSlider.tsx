"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { type ReactNode } from "react";

const U = "/images/2025/10";

const IconPrev = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    aria-hidden
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.470012 8.53006C0.329561 8.38943 0.250671 8.19881 0.250671 8.00006C0.250671 7.80131 0.329561 7.61069 0.470012 7.47006L7.45701 0.470059C7.52616 0.398395 7.60889 0.341221 7.70038 0.301871C7.79186 0.262522 7.89027 0.241786 7.98985 0.240874C8.08944 0.239963 8.1882 0.258892 8.28039 0.296559C8.37258 0.334227 8.45635 0.389877 8.5268 0.460263C8.59725 0.530649 8.65298 0.614361 8.69074 0.706515C8.72849 0.79867 8.74751 0.89742 8.74669 0.997005C8.74588 1.09659 8.72523 1.19501 8.68597 1.28653C8.64671 1.37806 8.58961 1.46084 8.51801 1.53006L2.81001 7.24906L19 7.23806C19.1989 7.2378 19.3898 7.31656 19.5306 7.45702C19.6715 7.59749 19.7507 7.78815 19.751 7.98706C19.7513 8.18597 19.6725 8.37684 19.532 8.51768C19.3916 8.65852 19.2009 8.7378 19.002 8.73806L2.80801 8.74806L8.51901 14.4701C8.59061 14.5393 8.64771 14.6221 8.68697 14.7136C8.72623 14.8051 8.74688 14.9035 8.74769 15.0031C8.74851 15.1027 8.72949 15.2015 8.69174 15.2936C8.65398 15.3858 8.59825 15.4695 8.5278 15.5399C8.45735 15.6102 8.37358 15.6659 8.28139 15.7036C8.1892 15.7412 8.09044 15.7602 7.99085 15.7592C7.89127 15.7583 7.79286 15.7376 7.70138 15.6982C7.60989 15.6589 7.52716 15.6017 7.45801 15.5301L0.470012 8.53006Z"
      fill="currentColor"
    />
  </svg>
);

const IconNext = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    aria-hidden
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.53 7.46994C19.6705 7.61057 19.7493 7.80119 19.7493 7.99994C19.7493 8.19869 19.6705 8.38931 19.53 8.52994L12.543 15.5299C12.4739 15.6016 12.3911 15.6588 12.2996 15.6981C12.2082 15.7375 12.1097 15.7582 12.0102 15.7591C11.9106 15.76 11.8118 15.7411 11.7196 15.7034C11.6274 15.6658 11.5437 15.6101 11.4732 15.5397C11.4028 15.4694 11.347 15.3856 11.3093 15.2935C11.2715 15.2013 11.2525 15.1026 11.2533 15.003C11.2541 14.9034 11.2748 14.805 11.314 14.7135C11.3533 14.6219 11.4104 14.5392 11.482 14.4699L17.19 8.75094L1 8.76194C0.801092 8.7622 0.610221 8.68344 0.469381 8.54298C0.32854 8.40251 0.249269 8.21185 0.249004 8.01294C0.248739 7.81403 0.327501 7.62316 0.467966 7.48232C0.608431 7.34148 0.799091 7.2622 0.998003 7.26194L17.192 7.25194L11.481 1.52994C11.4094 1.46072 11.3523 1.37794 11.313 1.28641C11.2738 1.19489 11.2531 1.09647 11.2523 0.996883C11.2515 0.897299 11.2705 0.798549 11.3083 0.706395C11.346 0.614241 11.4018 0.530528 11.4722 0.460142C11.5427 0.389756 11.6264 0.334106 11.7186 0.296439C11.8108 0.258772 11.9096 0.239842 12.0092 0.240754C12.1087 0.241666 12.2072 0.262401 12.2986 0.301751C12.3901 0.3411 12.4729 0.398275 12.542 0.469939L19.53 7.46994Z"
      fill="currentColor"
    />
  </svg>
);

const ShopifyIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 23 26"
    height="26"
    width="23"
    className={className}
    aria-hidden
  >
    <path
      fill="currentColor"
      d="M19.249 5.17394C19.2887 5.21088 19.3149 5.26007 19.3234 5.31365C19.3405 5.43991 22.0626 23.8416 22.0626 23.8416L15.3917 25.5L0 22.8375C0 22.8375 1.83667 8.63616 1.90501 8.13616C1.99667 7.47408 2.01876 7.45283 2.72084 7.23241L5.1046 6.49366C5.25335 5.43032 5.77668 4.05698 6.46502 2.96365C7.44294 1.41031 8.64919 0.535724 9.86003 0.501141C10.4875 0.482391 11.0117 0.694891 11.42 1.13239C11.449 1.16425 11.4772 1.19676 11.5046 1.22989C11.5131 1.22919 11.5215 1.22848 11.5299 1.22776C11.5867 1.22296 11.6426 1.21823 11.6992 1.21823H11.703C12.6405 1.21989 13.4171 1.75448 13.9463 2.76573C14.0921 3.04735 14.212 3.34161 14.3046 3.6449C14.4351 3.60451 14.5508 3.56871 14.6498 3.53806C14.9063 3.45868 15.0512 3.41383 15.0521 3.41323C15.1638 3.3799 15.4509 3.33573 15.598 3.48282C15.745 3.62948 17.2334 5.07532 17.2334 5.07532C17.2334 5.07532 19.0134 5.1024 19.1042 5.1099C19.1583 5.11446 19.2093 5.13701 19.249 5.17394ZM12.3392 4.25324L13.5334 3.88365C13.3425 3.26365 12.8905 2.22406 11.9717 2.0499C12.2575 2.78698 12.33 3.64032 12.3392 4.25324ZM8.96419 5.29865L11.5338 4.50282V4.50324C11.5421 3.83365 11.4696 2.84406 11.1346 2.1449C10.778 2.29198 10.4771 2.54906 10.2621 2.78031C9.68336 3.40073 9.21253 4.34782 8.96419 5.29865ZM10.6121 1.49781C10.4075 1.36323 10.1684 1.30073 9.88378 1.30698C8.01461 1.36114 6.38377 4.28032 5.9671 6.22574C6.4463 6.0779 6.95534 5.92019 7.47877 5.75801C7.67671 5.69668 7.87672 5.63472 8.07794 5.57241C8.31294 4.33657 8.90253 3.05531 9.6717 2.23031C9.96836 1.91198 10.2846 1.66781 10.6121 1.49781ZM10.9198 11.44L11.6948 8.54169C11.6948 8.54169 11.0269 8.20877 9.72144 8.29293C6.33309 8.50627 4.79767 10.8759 4.94559 13.2138C5.04413 14.7745 5.96369 15.4271 6.76965 15.9991C7.3984 16.4452 7.95802 16.8424 8.00476 17.5834C8.0306 17.9917 7.77643 18.5696 7.06601 18.6146C5.97851 18.6834 4.62017 17.6584 4.62017 17.6584L4.10059 19.868C4.10059 19.868 5.45017 21.3138 7.90226 21.1596C9.94477 21.0305 11.3623 19.3963 11.2119 17.0075C11.0959 15.1709 9.8027 14.3416 8.78063 13.6862C8.11283 13.2579 7.56079 12.9039 7.52851 12.3917C7.5131 12.1538 7.52893 11.2067 9.03143 11.1113C10.0556 11.0471 10.9198 11.44 10.9198 11.44Z"
      clipRule="evenodd"
      fillRule="evenodd"
    />
  </svg>
);

const KlaviyoIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 26 26"
    height="26"
    width="26"
    className={className}
    aria-hidden
  >
    <path
      fill="currentColor"
      d="M25.4744 13C25.4744 19.9035 19.7858 25.5 12.7685 25.5C5.75116 25.5 0.0625 19.9035 0.0625 13C0.0625 6.09644 5.75116 0.5 12.7685 0.5C19.7858 0.5 25.4744 6.09644 25.4744 13ZM9.90884 11.4354L9.75488 11.2727C9.3159 10.853 8.74337 10.6241 8.13846 10.6241C6.85359 10.6241 5.79341 11.6729 5.79341 12.9784C5.79341 14.284 6.85359 15.3328 8.13846 15.3328C8.74593 15.3328 9.32065 15.1019 9.76038 14.6787L14.64 9.82247L14.6449 9.81758L14.65 9.81283C15.4643 9.0468 16.5313 8.62303 17.6527 8.62303C20.0755 8.62303 22.0314 10.5917 22.0314 12.9954C22.0314 15.3991 20.0755 17.3679 17.6527 17.3679C16.5313 17.3679 15.4643 16.9442 14.65 16.1781L14.6463 16.1747L14.6427 16.1712L14.6309 16.1596L14.6267 16.1555L14.6225 16.1512L14.3574 15.8784L14.0252 15.5366L14.3622 15.1994L15.099 14.4619L15.4577 14.1031L15.8111 14.4669L16.0623 14.7256C16.4976 15.1291 17.0609 15.3497 17.6527 15.3497C18.9376 15.3497 19.9976 14.3009 19.9976 12.9952C19.9976 11.6897 18.9376 10.6409 17.6527 10.6409C17.0594 10.6409 16.4948 10.8625 16.059 11.2682L11.19 16.1144L11.1875 16.1168L11.185 16.1192C10.3652 16.9122 9.28223 17.351 8.13846 17.351C5.71563 17.351 3.75962 15.3822 3.75962 12.9784C3.75962 10.5747 5.71563 8.60593 8.13846 8.60593C9.28223 8.60593 10.3652 9.04469 11.185 9.83761L11.1852 9.83776L11.1918 9.84416L11.1996 9.8517L11.207 9.85953L11.3715 10.0335L11.6947 10.375L11.3621 10.7078L10.6253 11.4449L10.262 11.8084L9.90884 11.4354Z"
      clipRule="evenodd"
      fillRule="evenodd"
    />
  </svg>
);

function AppIconsRow({ variant }: { variant: "navy" | "purple" | "light" }) {
  const thirdLogo = { src: `${U}/partner_logo_5.svg`, w: 109, h: 32 };
  const color =
    variant === "navy" || variant === "purple" ? "text-white" : "text-black";
  const inv =
    variant === "navy" || variant === "purple" ? "brightness-0 invert" : "";
  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-4.5">
      <ShopifyIcon className={["h-4 w-auto md:h-5", color].join(" ")} />
      <KlaviyoIcon className={["h-4 w-auto md:h-5", color].join(" ")} />
      <Image
        src={thirdLogo.src}
        alt=""
        width={thirdLogo.w}
        height={thirdLogo.h}
        unoptimized
        className={["h-4 w-auto object-contain md:h-5", inv]
          .filter(Boolean)
          .join(" ")}
      />
    </div>
  );
}

function SlideCard({
  theme,
  children,
  className = "",
}: {
  theme: "navy" | "purple" | "light";
  children: ReactNode;
  className?: string;
}) {
  const map = {
    navy: "bg-white/10 backdrop-blur-sm  text-[#F7F7F7]",
    purple: "bg-white/10 backdrop-blur-sm  text-[#F7F7F7]",
    light: "bg-white text-black",
  } as const;
  return (
    <div
      className={[
        "w-full md:max-w-[513px] w-full rounded-[10px] p-[15px] md:px-[30px] md:py-[40px]",
        map[theme],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

function TestimonialByline({
  name,
  role,
  headshot,
  nameClass,
  roleClass,
}: {
  name: string;
  role: string;
  headshot: { src: string; width: number; height: number; alt: string };
  nameClass: string;
  roleClass: string;
}) {
  return (
    <div className="mt-5 flex max-md:inline-flex max-md:items-start md:flex-col md:items-start gap-2 md:gap-2 max-md:gap-x-2.5">
      <div className="shrink-0 w-[45px]">
        <Image
          src={headshot.src}
          alt={headshot.alt}
          width={headshot.width}
          height={headshot.height}
          className="h-11 w-11 rounded-full object-cover"
          unoptimized
        />
      </div>
      <div className="min-w-0 max-md:-mt-0.5 max-md:pl-0">
        <p
          className={["text-sm font-semibold leading-5 m-0", nameClass].join(
            " ",
          )}
        >
          {name}
        </p>
        <p
          className={["text-xs leading-5 m-0 mt-0.5 pb-[14px]", roleClass].join(
            " ",
          )}
        >
          {role}
        </p>
      </div>
    </div>
  );
}

export type RecentStoreSlide = {
  id: string;
  /** Visual theme: dark navy, purple, or light gray. */
  variant: "navy" | "purple" | "light";
  title: ReactNode;
  quote: ReactNode;
  author: {
    name: string;
    role: string;
    headshot: { src: string; width: number; height: number; alt: string };
  };
  product: {
    src: string;
    width: number;
    height: number;
    alt: string;
    className?: string;
  };
  /** Optional second product image (stacked / parallax) for the right column. */
  productSecondary?: {
    src: string;
    width: number;
    height: number;
    alt: string;
    className?: string;
  };
  /** Optional decorative right-side background (light/purple). */
  outerDecoImage?: { src: string; size: string };
};

const defaultHeading = "Recent Shopify Stores We Developed";

export const DEFAULT_RECENT_SHOPIFY_SLIDES: RecentStoreSlide[] = [
  {
    id: "state-liberty",
    variant: "navy",
    title: (
      <>
        A sophisticated <span className="font-bold">Shopify Store</span>{" "}
        designed and built for{" "}
        <span className="font-bold">State &amp; Liberty</span>
      </>
    ),
    quote: (
      <p className="m-0 md:text-[16px] text-[12px] leading-[16px] text-[#F7F7F7] md:leading-5 md:max-w-full max-w-[85%]">
        &ldquo;The turn around times are typically always within 24 hours,
        sometimes even faster, and the work done is always{" "}
        <strong className="font-semibold">phenomenal</strong>. We recommend
        100xelevate.&rdquo;
      </p>
    ),
    author: {
      name: "Jake Allain",
      role: "Chief Operating Officer",
      headshot: {
        src: `${U}/jake_medium_a2c572e5-6363-4130-94e0-bb8b8384a4b2_medium.webp`,
        width: 45,
        height: 45,
        alt: "",
      },
    },
    product: {
      src: `${U}/state_2048x2048_0d781555-7901-4e98-9668-99335e99ae1b_2048x2048.webp`,
      width: 1130,
      height: 1288,
      alt: "State & Liberty Shopify store",
      className:
        "w-full max-w-[min(100%,28rem)] -rotate-1 drop-shadow-[0_28px_50px_rgba(0,0,0,0.45)]",
    },
  },
  {
    id: "peanuts",
    variant: "purple",
    title: (
      <>
        An iconic <span className="font-bold">Shopify Store</span> designed and
        built for <span className="font-bold">Peanuts</span> aka Snoopy and the
        gang
      </>
    ),
    quote: (
      <p className="m-0 text-sm leading-5 text-[#F7F7F7] md:text-base md:leading-5">
        &ldquo;They created <strong className="font-semibold">engaging</strong>{" "}
        opportunities for our customers to interact with the characters we love,
        turning shopping into an{" "}
        <strong className="font-semibold">unforgettable</strong>{" "}
        experience.&rdquo;
      </p>
    ),
    author: {
      name: "Michael C.",
      role: "Principal, The Wildflower Group",
      headshot: {
        src: `${U}/michael_medium_0aaaa5cb-07f7-41ce-aa4b-0f22e2235521_medium.webp`,
        width: 45,
        height: 45,
        alt: "",
      },
    },
    product: {
      src: `${U}/Snoopy_Peanuts_2048x2048.webp`,
      width: 420,
      height: 314,
      alt: "Peanuts and Snoopy store",
      className: "drop-shadow-2xl rotate-1",
    },
  },
  {
    id: "moonbug-cocomelon",
    variant: "light",
    outerDecoImage: {
      src: `${U}/cocomelon_2048x2048_2f93d1da-ec1e-4d7e-9fbb-b647d509acb7_2048x2048.webp`,
      size: "50% auto",
    },
    title: (
      <>
        A delightful <span className="font-bold">Shopify Store</span> designed
        and built for <span className="font-bold">Moonbug &amp; Cocomelon</span>
      </>
    ),
    quote: (
      <p className="m-0 text-sm leading-5 text-[#000] md:text-base md:leading-5">
        Through{" "}
        <strong className="font-semibold">innovative initiatives</strong>, our
        customers were afforded the chance to form connections with beloved
        characters – transforming shopping into an entirely unique experience.
      </p>
    ),
    author: {
      name: "Michael C.",
      role: "Principal, The Wildflower Group",
      headshot: {
        src: `${U}/michael_medium_0aaaa5cb-07f7-41ce-aa4b-0f22e2235521_medium.webp`,
        width: 45,
        height: 45,
        alt: "",
      },
    },
    product: {
      src: `${U}/Moonbug_Cocomelon_2048x2048.webp`,
      width: 420,
      height: 314,
      alt: "Moonbug and Cocomelon store",
      className: "w-[90%] max-w-md md:w-full drop-shadow-md",
    },
  },
];

type Props = {
  heading?: ReactNode;
  slides?: RecentStoreSlide[];
  sliderMargin?: string;
  mainpadding?: string;
  sectionpadding?: string;
  containerMaxWidth?: string;
  ajustwidth?: boolean;
  className?: string;
};

function SlideView({ slide }: { slide: RecentStoreSlide }) {
  const { variant } = slide;
  const outer =
    variant === "navy"
      ? "bg-[#28264B] text-[#F7F7F7] rounded-[10px] px-5 md:px-[60px]"
      : variant === "purple"
        ? "bg-[#A686D1] text-[#F7F7F7] rounded-[10px] px-5 py-8 md:px-10 md:py-10"
        : "rounded-[10px] bg-[#F3F3F3] px-5 py-7 text-black md:px-10 md:py-10";

  const nameClass = variant === "light" ? "text-black" : "text-[#F7F7F7]";
  const roleClass = variant === "light" ? "text-black/80" : "text-[#F7F7F7]/90";
  const textLight = variant === "light" ? "text-black" : "text-[#F7F7F7]";
  const appsLabelClass = variant === "light" ? "text-black" : "text-[#f7f7f7]";

  const outerStyle =
    variant === "light" && slide.outerDecoImage
      ? {
          backgroundColor: "#F3F3F3",
          //   backgroundImage: `url(${slide.outerDecoImage.src})`,
          backgroundPosition: "right center" as const,
          backgroundRepeat: "no-repeat" as const,
          backgroundSize: slide.outerDecoImage.size,
        }
      : undefined;

  return (
    <div
      className={[
        outer,
        "flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden",
      ]
        .filter(Boolean)
        .join(" ")}
      style={outerStyle}
    >
      <div
        className={[
          "mx-auto flex min-h-0 w-full max-w-full flex-1 flex-col items-stretch py-5 max-lg:min-h-[658px]",
          "md:grid md:min-h-0 md:grid-cols-2 md:items-center md:py-0",
          "lg:h-full lg:min-h-0 lg:items-stretch",
        ].join(" ")}
      >
        <div className="flex w-full min-w-0 min-h-0 flex-col justify-center gap-6 md:min-w-0 md:gap-8 md:py-[60px] md:px-[10px] pt-[20px]">
          <div className="flex flex-col gap-1 flex-row sm:flex-wrap sm:items-center sm:gap-2.5 mt-6">
            <p
              className={[
                "me-2 text-[14px] font-semibold",
                appsLabelClass,
              ].join(" ")}
            >
              Apps we used:
            </p>
            <AppIconsRow variant={variant} />
          </div>
          <h2
            className={[
              "m-0 text-[24px] font-medium leading-8",
              "md:text-[30px] md:leading-[38px] sm:leading-9",
              "2xl:text-[44px] xl:text-[40px] xl:leading-[54px] max-md:text-[24px] max-md:leading-[30px]",
              textLight,
            ].join(" ")}
          >
            {slide.title}
          </h2>
          <div className="w-full min-w-0 max-w-full md:max-w-[90%] ">
            <SlideCard theme={variant}>
              {slide.quote}
              <TestimonialByline
                name={slide.author.name}
                role={slide.author.role}
                headshot={slide.author.headshot}
                nameClass={nameClass}
                roleClass={roleClass}
              />
            </SlideCard>
          </div>
        </div>
        <div className="relative flex w-full min-w-0 items-center justify-center md:min-w-0 md:justify-end md:pl-0 lg:pl-2 lg:min-h-0 lg:h-full">
          {slide.productSecondary ? (
            <div
              className="pointer-events-none absolute inset-0 -z-0 flex min-h-0 items-end justify-end pb-0 pr-0"
              aria-hidden
            >
              <Image
                src={slide.productSecondary.src}
                alt={slide.productSecondary.alt}
                width={slide.productSecondary.width}
                height={slide.productSecondary.height}
                unoptimized
                className={[
                  "h-auto max-h-full w-[72%] max-w-[20rem] object-contain opacity-90",
                  "translate-x-2 -translate-y-1 -rotate-6",
                  "drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]",
                  slide.productSecondary.className,
                ]
                  .filter(Boolean)
                  .join(" ")}
                sizes="(max-width: 768px) 50vw, 30vw"
              />
            </div>
          ) : null}
          <div className="relative z-[1] flex h-full min-h-0 w-full max-w-full items-center justify-center">
            <Image
              src={slide.product.src}
              alt={slide.product.alt}
              width={slide.product.width}
              height={slide.product.height}
              unoptimized
              className={[
                "h-auto w-full max-w-[min(100%,28rem)] object-contain lg:max-h-full",
                slide.product.className,
              ]
                .filter(Boolean)
                .join(" ")}
              sizes="(max-width: 768px) 90vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RecentShopifyStoresSlider({
  heading = defaultHeading,
  slides = DEFAULT_RECENT_SHOPIFY_SLIDES,
  sliderMargin = "mt-8 md:mt-12.5",
  mainpadding = "pt-2 pb-12 sm:pb-[86px]",
  sectionpadding = "md:px-[22px] px-0",
  containerMaxWidth = "max-w-[1300px]",
  ajustwidth = false,
  className,
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <section
      className={["w-full bg-white", sectionpadding, className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={`mx-auto w-full ${containerMaxWidth} ${mainpadding}   `}>
        <h2
          className={` ${ajustwidth ? "max-w-full" : "max-w-[726px]"} text-center mx-auto flex md:justify-center items-center m-0 text-[32px] font-semibold leading-tight text-black md:text-[48px] md:leading-[58px]`}
        >
          {heading}
        </h2>

        <div className={`${sliderMargin} relative`}>
          <div className="relative">
            <div className="overflow-hidden px-0 " ref={emblaRef}>
              {/* Row height = max(slide content); align-items stretch makes shorter slides match */}
              <div className="flex items-stretch">
                {slides.map((slide) => (
                  <div
                    className="flex min-h-0 w-full min-w-0 shrink-0 grow-0 basis-full"
                    key={slide.id}
                  >
                    <SlideView slide={slide} />
                  </div>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute left-[-40px] right-[-40px] inset-0 z-10 hidden  items-center justify-between md:flex">
              <button
                type="button"
                className="pointer-events-auto -m-1 inline-flex p-2 text-black transition hover:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-30"
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!emblaApi}
                aria-label="Previous store"
              >
                <IconPrev className="h-4 w-5" />
              </button>
              <button
                type="button"
                className="pointer-events-auto -m-1 inline-flex p-2 text-black transition hover:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-30"
                onClick={() => emblaApi?.scrollNext()}
                disabled={!emblaApi}
                aria-label="Next store"
              >
                <IconNext className="h-4 w-5" />
              </button>
            </div>
          </div>

          {/* <div
            className="mt-6 flex items-center justify-center gap-6 md:hidden"
            role="group"
            aria-label="Store carousel"
          >
            <button
              type="button"
              className="inline-flex p-2 text-neutral-800 transition hover:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/25 focus-visible:ring-offset-2"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!emblaApi}
              aria-label="Previous store"
            >
              <IconPrev className="h-4 w-5" />
            </button>
            <button
              type="button"
              className="inline-flex p-2 text-neutral-800 transition hover:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/25 focus-visible:ring-offset-2"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!emblaApi}
              aria-label="Next store"
            >
              <IconNext className="h-4 w-5" />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
