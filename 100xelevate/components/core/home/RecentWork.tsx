"use client";

import { ButtonLink } from "@/components/shared/ButtonLink";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Water Boy",
    description: "Optimized Shopify Store Design Boosting Conversions & Retention by 20%",
    image: "/images/2025/02/Frame-427320691-16-e1761683894682.webp",
    alt: "Screenshot of Waterboy store – Designed and developed by 100xelevate.",
    width: 880,
    height: 970,
    href: "/our-work/",
  },
  {
    name: "Andrea Maack",
    description: "Developed Luxury Shopify Store Increasing Revenue per User by 22X",
    image: "/images/2025/02/Frame-427320720-e1761683932868.webp",
    alt: "Screenshot of Andrea Maack store – Designed and developed by 100xelevate.",
    width: 880,
    height: 970,
    href: "/our-work/",
  },
  {
    name: "Peak Chocolate",
    description: "Revamped Shopify Plus Store for Enhanced Engagement & Brand Visibility",
    image: "/images/2025/10/Frame-427320691-15-1-e1761684011146.webp",
    alt: "Screenshot of Peak Chocolate – Designed and developed by 100xelevate.",
    width: 880,
    height: 970,
    href: "/our-work/",
  },
  {
    name: "Tonight We Dine",
    description: "Enhanced Restaurant Site Design to Boost Online Orders & Engagement",
    image: "/images/2025/10/Frame-1000001511-1-e1761684044269.webp",
    alt: "Tonight We Dine",
    width: 880,
    height: 970,
    href: "/our-work/",
  },
  {
    name: "Cambie",
    description: "Shopify Store Development Driving 200x ROI and Engagement Boost",
    image: "/images/2025/02/cambie-fetured-e1765466658496.webp",
    alt: "Screenshot of Cambie store – Designed and developed by 100xelevate.",
    width: 760,
    height: 841,
    href: "/our-work/",
  },
  {
    name: "Hoodies For Heroes",
    description: "Built Custom Shopify Store to Enhance Sales & Brand Presence",
    image: "/images/2025/02/Frame-1000001678-1.webp",
    alt: "Screenshot of Hoodies For Heroes store – Designed and developed by 100xelevate.",
    width: 1470,
    height: 1626,
    href: "/our-work/",
  },
];

function formatDate() {
  const d = new Date();
  const day = d.getDate();
  const suffix =
    day === 1 || day === 21 || day === 31
      ? "st"
      : day === 2 || day === 22
        ? "nd"
        : day === 3 || day === 23
          ? "rd"
          : "th";
  const month = d.toLocaleString("en-US", { month: "long" });
  const year = d.getFullYear();
  return `Updated: ${day}${suffix} of ${month} ${year}`;
}

export default function RecentWork() {
  return (
    <section className="w-full sm:px-[22px] px-[16px] ">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center sm:py-[86px] pt-[38px] pb-[68px]">
        <div className="w-[100%] md:text-center md:mb-12 mb-[20px]">
          <h2 className="text-[32px] md:text-[48px] font-normal">Recent Work</h2>
          <p className=" md:text-[16px] text-[12px] font-normal mt-3 underline underline-offset-2">
            {formatDate()}
          </p>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-3 md:gap-y-[40px] gap-y-[30px] gap-x-[20px]">
          {projects.map((project) => (
            <Link key={project.name} href={project.href} className="group block">
              <div className="overflow-hidden bg-[#F7F7F7]">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-normal text-base">{project.name}</h3>
                <p className="text-[#707070] font-normal text-sm mt-1.5 tracking-[-0.6px]">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-[20px] text-center">
          <ButtonLink
            href="/our-work/"
            variant="outlined"
          >
            View work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
