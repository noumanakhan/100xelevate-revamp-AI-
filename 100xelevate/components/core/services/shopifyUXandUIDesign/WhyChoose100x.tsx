import React from "react";

type WhyChooseCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  titleClasses?: string;
};

export const WhyChooseCard = ({ icon,
  title,
  description,
  titleClasses = "",
  bgColor = "bg-[#F7F7F7]"
} :
 WhyChooseCardProps & { bgColor?: string }) => {
  return (
    <div className={`flex flex-col gap-5 ${bgColor} p-[30px]`}>
      <div className="w-10 h-10 flex items-center justify-center">{icon}</div>
      <h3 className={titleClasses}>
        {title}
      </h3>
      <p className="text-sm text-[#707070] leading-[20px] font-normal">
        {description}
      </p>
    </div>
  );
};

const cards = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 64 64"
        fill="none"
      >
        <g>
          <path
            d="M55.972 7.042H8.028A4.033 4.033 0 0 0 4 11.07v31.06a4.033 4.033 0 0 0 4.028 4.028h19.58c.124 2.37-3.85 6.561-7.02 9.008a1 1 0 0 0 .612 1.792h21.6a1.006 1.006 0 0 0 .579-1.815c-.067-.048-6.252-4.505-6.76-8.985h19.353A4.033 4.033 0 0 0 60 42.13V11.07a4.033 4.033 0 0 0-4.028-4.028zm-47.944 2h47.944A2.03 2.03 0 0 1 58 11.07v26.338H6V11.07a2.03 2.03 0 0 1 2.028-2.028zm31.984 45.916h-16.08c2.353-2.14 5.723-5.752 5.675-8.8h5.012c.304 3.54 3.254 6.845 5.393 8.8zm15.96-10.8H8.028A2.03 2.03 0 0 1 6 42.13v-2.722h52v2.722a2.03 2.03 0 0 1-2.028 2.028z"
            fill="#000000"
          />
          <path
            d="M34.216 40.5h-4.733a1 1 0 0 0 0 2h4.733a1 1 0 0 0 0-2zM15.46 29.368a4.01 4.01 0 0 0 4.389-3.96v-6.403a1 1 0 0 0-2 0v6.403a1.962 1.962 0 0 1-1.96 1.96 2.033 2.033 0 0 1-2.381-1.952v-6.371a1 1 0 0 0-2 0v6.37a3.956 3.956 0 0 0 3.952 3.953zM21.491 29.178a1 1 0 0 0 1.397-.223l2.44-3.366 2.263 3.34a1 1 0 0 0 1.656-1.122l-2.669-3.94 3.1-4.275a1 1 0 0 0-1.62-1.174l-2.673 3.687-2.479-3.66a1 1 0 0 0-1.656 1.12l2.886 4.262-2.867 3.954a1 1 0 0 0 .222 1.397zM30.464 32.324a1.001 1.001 0 0 0 1.333-.472l7.318-15.33a1 1 0 0 0-1.804-.86L29.992 30.99a.999.999 0 0 0 .472 1.333zM44.271 29.368a4.012 4.012 0 0 0 4.39-3.96v-6.403a1 1 0 0 0-2 0v6.403a1.963 1.963 0 0 1-1.96 1.96 2.033 2.033 0 0 1-2.382-1.952v-6.371a1 1 0 0 0-2 0v6.37a3.956 3.956 0 0 0 3.952 3.953zM51.492 29.368a1 1 0 0 0 1-1v-9.363a1 1 0 1 0-2 0v9.363a1 1 0 0 0 1 1z"
            fill="#000000"
          />
        </g>
      </svg>
    ),
    title: "Experienced UX Professionals",
    description:
      "Our team brings years of hands-on Shopify experience, combining research, design, and user behavior insights to strengthen every part of your store\u2019s experience.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 512 512"
      >
        <g>
          <path
            d="M302.933 42.667h-51.2c-7.074 0-12.8 5.726-12.8 12.8s5.726 12.8 12.8 12.8h51.2c7.074 0 12.8-5.726 12.8-12.8s-5.726-12.8-12.8-12.8z"
            fill="#000000"
          />
          <path
            d="M358.4 0H153.6c-28.228 0-51.2 22.972-51.2 51.2v409.6c0 28.228 22.972 51.2 51.2 51.2h204.8c28.228 0 51.2-22.972 51.2-51.2V51.2c0-28.228-22.972-51.2-51.2-51.2zM384 460.8c0 14.14-11.46 25.6-25.6 25.6H153.6c-14.14 0-25.6-11.46-25.6-25.6V51.2c0-14.14 11.46-25.6 25.6-25.6h204.8c14.14 0 25.6 11.46 25.6 25.6v409.6z"
            fill="#000000"
          />
          <circle cx="256" cy="443.733" r="25.6" fill="#000000" />
          <circle cx="209.067" cy="55.467" r="12.8" fill="#000000" />
        </g>
      </svg>
    ),
    title: "Comprehensive UX & UI Solutions",
    description:
      "We handle the full spectrum of UX and UI work, including user flows, wireframes, prototypes, visual systems, and page-level refinement across your entire storefront.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 512 512"
      >
        <g>
          <path
            d="M280.142 156.879a8 8 0 0 0-8 8v199.385a8 8 0 0 0 8 8h50.183a8 8 0 0 0 8-8V164.879a8 8 0 0 0-8-8zm42.182 199.385h-34.183V172.879h34.183zM186.959 209.549a8 8 0 0 0-8 8v146.715a8 8 0 0 0 8 8h50.183a8 8 0 0 0 8-8V217.549a8 8 0 0 0-8-8zm42.184 146.715H194.96V225.549h34.183zm194.36-246.767H373.32a8 8 0 0 0-8 8v246.766a8 8 0 0 0 8 8h50.183a8 8 0 0 0 8-8V117.497a8 8 0 0 0-8-8zm-8 246.766H381.32V125.497h34.183zM93.778 259.99a8 8 0 0 0-8 8v96.272a8 8 0 0 0 8 8h50.182a8 8 0 0 0 8-8V267.99a8 8 0 0 0-8-8zm42.182 96.273h-34.182V275.99h34.182zM80.941 223.095a8 8 0 0 1 4.924-10.186C206.396 170.935 312.443 109.904 401.392 31.4l-17.588.955c-4.413.227-8.183-3.144-8.422-7.555a8 8 0 0 1 7.555-8.422L423.07 14.2a8.002 8.002 0 0 1 8.35 9.141l-5.792 39.772a8.003 8.003 0 0 1-9.07 6.764 8 8 0 0 1-6.764-9.068l2.587-17.769c-90.595 80.055-198.57 142.254-321.256 184.979a7.967 7.967 0 0 1-2.631.447 8.004 8.004 0 0 1-7.553-5.371zm382.442 171.869H48.617a8 8 0 0 0-8 8v86.848a8 8 0 0 0 8 8h414.767a8 8 0 0 0 8-8v-86.848a8.001 8.001 0 0 0-8.001-8zm-8 86.848H56.617v-70.848h32.192v44.564a8 8 0 0 0 16 0v-44.564h23.798v18.282a8 8 0 0 0 16 0v-18.282h23.798v44.564a8 8 0 0 0 16 0v-44.564h23.798v18.282a8 8 0 0 0 16 0v-18.282H248v44.564a8 8 0 0 0 16 0v-44.564h23.798v18.282a8 8 0 0 0 16 0v-18.282h23.797v44.564a8 8 0 0 0 16 0v-44.564h23.798v18.282a8 8 0 0 0 16 0v-18.282h23.797v44.564a8 8 0 0 0 16 0v-44.564h32.192v70.848z"
            fill="#000000"
          />
        </g>
      </svg>
    ),
    title: "Focus on Measurable Outcomes",
    description:
      "Every decision is shaped by user behavior and business goals. We design with clarity and impact in mind, supporting conversion growth, better engagement, and stronger retention.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 682.667 682.667"
      >
        <g transform="matrix(0.97,0,0,0.97,10.24,10.24)">
          <g transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
            <path
              d="M0 0h-120.929a8.722 8.722 0 0 0-8.723 8.723v26.51a8.723 8.723 0 0 0 8.723 8.724H0a8.724 8.724 0 0 0 8.723-8.724V8.723A8.723 8.723 0 0 0 0 0Z"
              transform="translate(164.643 8.154)"
              fill="none"
              stroke="#000000"
              strokeWidth="21"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0 0c3.521-7.57 6.622-14.682 8.878-20.58a35.316 35.316 0 0 0 2.338-12.621v-12.778"
              transform="translate(40.238 98.09)"
              fill="none"
              stroke="#000000"
              strokeWidth="21"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0 0c.426.999.888 1.984 1.415 2.941L21.72 43.863a74.995 74.995 0 0 1 7.12 41.658l-4.102 35.092v90.591c0 10.44-4.024 18.902-14.464 18.902-18.442 1.99-40.282-36.234-40.282-64.726 0-13.814.002-29.503.004-38.152a15.977 15.977 0 0 0-4.706-11.317l-.157-.156c-4.997-4.998-15.69-6.012-21.807-2.472l-31.287 31.282a36.089 36.089 0 0 0-10.571 25.518v81.654c-14.921-11.914-29.078-24.444-34.874-29-6.444-5.065-8.774-12.551-9.545-20.711l-8.813-74.694a52.753 52.753 0 0 1 6.64-30.992c3.045-5.367 6.586-11.884 10.265-18.911"
              transform="translate(159.498 52.11)"
              fill="none"
              stroke="#000000"
              strokeWidth="21"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0 0h-14.093a8.723 8.723 0 0 0-8.722 8.723v26.551a8.722 8.722 0 0 0 8.722 8.723h120.929a8.724 8.724 0 0 0 8.724-8.723V8.723A8.725 8.725 0 0 0 106.836 0H34.994"
              transform="translate(361.45 459.849)"
              fill="none"
              stroke="#000000"
              strokeWidth="21"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0 0a33.073 33.073 0 0 0-1.415-2.941L-21.72-43.863a74.995 74.995 0 0 1-7.12-41.658l4.102-35.092v-90.591c0-10.44 4.024-18.902 14.464-18.902 18.442-1.99 40.282 36.235 40.282 64.726 0 13.814-.002 29.503-.004 38.152a15.972 15.972 0 0 0 4.707 11.317l.155.156c4.998 4.998 15.691 6.012 21.809 2.472l31.286-31.282a36.089 36.089 0 0 0 10.571-25.518v-81.654c14.921 11.915 29.078 24.444 34.874 29 6.444 5.065 8.774 12.551 9.545 20.711l8.814 74.694a52.752 52.752 0 0 1-6.642 30.992c-10.622 18.724-27.287 51.457-34.741 70.941a35.312 35.312 0 0 0-2.338 12.621V0"
              transform="translate(352.502 459.849)"
              fill="none"
              stroke="#000000"
              strokeWidth="21"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0 0v51.192a5.891 5.891 0 0 1-5.891 5.891h-45.67c-2.932 0-5.466 2.15-5.83 5.06C-59.88 82.09-76.897 97.525-97.52 97.525c-20.622 0-37.639-15.435-40.128-35.382-.364-2.91-2.898-5.06-5.83-5.06h-45.67a5.891 5.891 0 0 1-5.891-5.891V8.029"
              transform="translate(256.005 295.819)"
              fill="none"
              stroke="#000000"
              strokeWidth="21"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    ),
    title: "Clear and Collaborative Workflow",
    description:
      "We work with you throughout each step, sharing progress, gathering feedback, and shaping the final direction so the design reflects both your brand and your customers\u2019 needs.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="#000000"
      >
        <path d="M9.207 6.562A7.224 7.224 0 0 1 14 4.75c4.001 0 7.25 3.249 7.25 7.25s-3.249 7.25-7.25 7.25a7.224 7.224 0 0 1-4.793-1.812.75.75 0 0 0-.993 1.124A8.715 8.715 0 0 0 14 20.75c4.829 0 8.75-3.921 8.75-8.75S18.829 3.25 14 3.25a8.715 8.715 0 0 0-5.786 2.188.75.75 0 1 0 .993 1.124z" />
        <path d="M12.85 7.6v4c0 .199.079.39.22.53l3.2 3.2a.749.749 0 1 0 1.06-1.06L14.35 11.289V7.6a.75.75 0 0 0-1.5 0zM2 9.25h6a.75.75 0 0 0 0-1.5H2a.75.75 0 0 0 0 1.5zM3 12.75h6a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0 0 1.5zM4 16.25h6a.75.75 0 0 0 0-1.5H4a.75.75 0 0 0 0 1.5z" />
      </svg>
    ),
    title: "Reliable and On-Time Execution",
    description:
      "Our team follows a clear process and defined timelines. You receive organized, development-ready deliverables without delays or workflow interruptions.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 32 32"
      >
        <g>
          <path
            d="M28 1H4a3.003 3.003 0 0 0-3 3v10a1 1 0 0 0 2 0V4a1.001 1.001 0 0 1 1-1h24a1.001 1.001 0 0 1 1 1v24a1.001 1.001 0 0 1-1 1H18a1 1 0 0 0 0 2h10a3.003 3.003 0 0 0 3-3V4a3.003 3.003 0 0 0-3-3z"
            fill="#000000"
          />
          <path
            d="M4 31h8a3.003 3.003 0 0 0 3-3v-8a3.003 3.003 0 0 0-3-3H4a3.003 3.003 0 0 0-3 3v8a3.003 3.003 0 0 0 3 3zM3 20a1.001 1.001 0 0 1 1-1h8a1.001 1.001 0 0 1 1 1v8a1.001 1.001 0 0 1-1 1H4a1.001 1.001 0 0 1-1-1zM16.293 15.707a1.027 1.027 0 0 0 1.414 0L24 9.414V12a1 1 0 0 0 2 0V7a1.016 1.016 0 0 0-1-1h-5a1 1 0 0 0 0 2h2.586l-6.293 6.293a1 1 0 0 0 0 1.414z"
            fill="#000000"
          />
        </g>
      </svg>
    ),
    title: "Scalable Design Support",
    description:
      "Whether you\u2019re updating individual templates or shaping a full experience overhaul, our approach adapts to your pace, ensuring long-term consistency as your store grows.",
  },
];

export const WhyChoose100x = () => {
  return (
    <section className="bg-white md:px-8 px-4 ">
      <div className="max-w-300 mx-auto flex flex-col md:py-[96px] py-[32px] md:gap-12.5 gap-[32px] ">
        <h2 className="wmd:text-[48px] md:text-[40px] text-[32px] font-semibold text-center max-w-[816px] mx-auto wmd:leading-[58px] md:leading-[46px] leading-[38px]">
          Why Brands Choose 100xelevate for Shopify UX and UI Design
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, index) => (
            <WhyChooseCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <p className="text-sm md:text-[16px] text-[#707070] text-center">
          No risk: <strong>100% satisfaction guarantee.</strong> If you&apos;re
          not thrilled, get a full refund.
        </p>
      </div>
    </section>
  );
};
