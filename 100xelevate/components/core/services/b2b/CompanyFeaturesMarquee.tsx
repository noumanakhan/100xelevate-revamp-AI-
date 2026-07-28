"use client";

import Image from "next/image";

const features = [
  {
    label: "Dedicated Team",
    img: "https://100xelevate.com/wp-content/uploads/2025/10/dedica_1024x1024.svg",
  },
  {
    label: "100% Satisfaction Guarantee",
    img: "https://100xelevate.com/wp-content/uploads/2025/10/sat_1024x1024.svg",
  },
  {
    label: "Fast Support",
    img: "https://100xelevate.com/wp-content/uploads/2025/10/fast_1024x1024.svg",
  },
  {
    label: "Dedicated Slack Channel",
    img: "https://100xelevate.com/wp-content/uploads/2025/10/slack_1024x1024.svg",
  },
];

// Repeat items enough times so the loop is seamless at any screen width
const REPEATS = 6;
const items = Array.from({ length: REPEATS }, () => features).flat();

export default function MarqueeBanner() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          /* We duplicate the full list, so animating -50% brings us back to start */
          animation: marquee 48s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="bg-black overflow-hidden w-full pt-[5px]">
        {/* Mask edges for soft fade */}
        <div
          className="relative"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          {/* Outer track — flex, no wrap, single line */}
          <div className="flex items-center ">
            <div className="marquee-track flex items-center whitespace-nowrap justify-center text-center gap-[50px]">
              {items.map((item, i) => (
                <div key={i} className="inline-flex items-center gap-[10px] ">
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={20}
                    height={20}
                    className="shrink-0 w-5 h-5 object-contain brightness-0 invert -mt-1"
                  />
                  <span className="text-white text-[16px] mt-2 mb-4 font-normal leading-[1.2]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
