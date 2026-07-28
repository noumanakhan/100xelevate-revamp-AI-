import Image from "next/image";
import {
  BrandingIdentityContent,
  BrandingIdentityContentProps,
} from "../BrandingIdentityContent";
import { col1, col2, col3, ScrollColumn } from "../../home/MobileAppSection";

const Features = [
  "Shopify-focused design approach",
  "User-driven structure and flow",
  "Clear, intuitive navigation",
  "Intuitive Navigation",
  "Modern and visually balanced interfaces",
  "Fully responsive layouts",
];

const title = "Shopify App UX & UI Design";

const description =
  "We design user interfaces and experiences tailored for Shopify apps, ensuring they are simple to use and support a smoother e-commerce workflow.";

export const ShopifyAppSection = (
  contentProps: BrandingIdentityContentProps,
) => {
  return (
    <section className="w-full bg-white md:px-8 px-4">
      <div className="max-w-max mx-auto md:py-[86px] py-[32px] flex flex-col items-center xl:gap-[74px] lg:gap-[64px] md:gap-[32px] gap-[30px] wmd:flex-row">
        {/* Left: scrolling image columns */}
        {/* Scrolling image columns */}
        <div className="flex-1 flex gap-4 md:max-h-[600px] max-h-[400px] overflow-hidden w-full lg:max-w-[50%]">
          <ScrollColumn images={col1} direction="up" speed={16} />
          <ScrollColumn images={col2} direction="up" speed={8} />
          <ScrollColumn images={col3} direction="up" speed={25} />
        </div>

        {/* Right: text content */}
        <BrandingIdentityContent
          {...contentProps}
          title={title}
          description={description}
          points={Features}
          buttonText="Looking to build a custom Shopify app?"
          buttonUrl="/shopify-app-development-agency"
        />
      </div>
    </section>
  );
};
