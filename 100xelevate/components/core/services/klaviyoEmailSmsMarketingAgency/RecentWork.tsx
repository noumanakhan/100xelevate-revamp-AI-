import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const items = [
  {
    image:
      "https://100xelevate.com/wp-content/uploads/2026/05/Group-2147226402.webp",
    alt: "Screenshot of Graham Platner store – Designed and developed by 100xelevate.",
    width: 880,
    height: 970,
    title: "Graham Platner",
    titleHref: "https://100xelevate.com/our-work/graham-platner/",
    description:
      "Fast-Turn Campaign Merch Store Build for U.S. Senate Candidate",
  },
  {
    image:
      "https://100xelevate.com/wp-content/uploads/2026/05/Liss-2.webp",
    alt: "Screenshot of Stayforever store – Designed and developed by 100xelevate.",
    width: 880,
    height: 970,
    title: "Stayforever",
    titleHref: "https://100xelevate.com/our-work/stayforever/",
    description:
      "+112% Online Revenue Growth for Gift Shop Stay Forever",
  },
  {
    image:
      "https://100xelevate.com/wp-content/uploads/2026/05/Liss-1.webp",
    alt: "Screenshot of Blue Ruby store – Designed and developed by 100xelevate.",
    width: 880,
    height: 970,
    title: "Blue Ruby",
    titleHref: "https://100xelevate.com/our-work/blue-ruby/",
    description:
      "+34% Conversion Lift for Jewellery Boutique Blue Ruby",
  },
  {
    image:
      "https://100xelevate.com/wp-content/uploads/2026/05/Liss.webp",
    alt: "Screenshot of LISS store – Designed and developed by 100xelevate.",
    width: 880,
    height: 970,
    title: "LISS",
    titleHref: "https://100xelevate.com/our-work/liss/",
    description:
      "+52% PDP Conversion for Premium Surf Storage Brand",
  },
  {
    image:
      "https://100xelevate.com/wp-content/uploads/2026/05/Retro.webp",
    alt: "Screenshot of Retro Rifle store – Designed and developed by 100xelevate.",
    width: 880,
    height: 970,
    title: "Retro Rifle",
    titleHref: "https://100xelevate.com/our-work/retro-rifle/",
    description:
      "x Drop-Day Revenue and Zero Site Crashes",
  },
  {
    image:
      "https://100xelevate.com/wp-content/uploads/2026/05/Mealmax.webp",
    alt: "Screenshot of Meal Max store – Designed and developed by 100xelevate.",
    width: 880,
    height: 970,
    title: "Meal Max",
    titleHref: "https://100xelevate.com/our-work/meal-max/",
    description:
      "Custom Bundle Builder Built From Scratch",
  },
];


export const RecentWork = ({ areaName }: { areaName?: string }) => {
  return (
    <div>
      <section className="w-full md:px-8 px-4">
        <div className="max-w-max mx-auto md:pt-[86px] pt-[30px] md:pb-0 pb-5 flex flex-col md:items-center items-start md:gap-[20px] gap-[8px] ">
          <h2 className="wmd:text-[48px] text-[32px] font-medium text-start  wmd:leading-[58px] leading-[38px] max-w-[595px]">
            {areaName ? `Recent Work & Results` : "Recent Work"}
          </h2>
          {areaName && (
            <p className='text-[14px] leading-[20px] text-[#707070]'>
            Here are some of the ways we’ve helped brands in {areaName} and globally scale with Klaviyo.
          </p>
          )}
        </div>
      </section>


      <div className="   md:px-8 px-4 xl:pt-10 md:pb-[86px] pb-8 pt-0">
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
                  className="wxl:h-[600px] lg:h-[560px] h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
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
    </div>
  )
}
