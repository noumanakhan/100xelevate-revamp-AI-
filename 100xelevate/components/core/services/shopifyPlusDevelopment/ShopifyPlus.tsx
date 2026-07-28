import Image from "next/image";
import { ButtonLink } from "@/components/shared/ButtonLink";

const LOGO_URL = "/images/2025/10/65d7a4f1e38f693a0ad31c1e_shopify_plus.png";

const ILLUSTRATION_URL = "/images/2025/11/Group-1000004266.webp";

export function ShopifyPlus() {
  return (
    <section className="w-full md:px-8 px-4">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col wmd:flex-row  md:py-[86px] py-8 xl:gap-[74px] lg:gap-[64px] md:gap-8 gap-6">
        {/* Left: text content */}
        <div className="flex-1 flex flex-col md:gap-6 gap-4 min-w-0">
          {/* Shopify Plus logo */}
          <div>
            <Image
              src={LOGO_URL}
              alt="Shopify Plus"
              width={640}
              height={142}
              className="h-auto w-auto md:max-w-[110px] max-w-[70px]"
              priority
              unoptimized
            />
          </div>

          {/* Heading */}
          <h1 className="xl:text-[48px] md:text-[40px] text-[32px] font-semibold text-start  xl:leading-[58px] md:leading-[46px] leading-[40px] ">
            Shopify<span className="hcolor2"> Plus Development </span>for
            Scaling eCommerce Brands
          </h1>

          {/* Description */}
          <p className="text-[#707070] md:text-base text-[14px] md:leading-5 leading-[22px] max-w-[640px]">
            We develop stable, high-performing Shopify Plus stores built for
            growth. Our work covers custom architecture, refined checkout logic,
            integrations, automation, and performance optimisation. Each build
            follows a clear structure and clean code to support long-term
            scalability. The result is a dependable Shopify Plus foundation that
            helps modern brands handle higher volume, improve user flow, and
            convert more customers across all devices.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap md:mt-4 mt-0">
            <ButtonLink href="/book-a-demo/" className="px-[20px] py-[12px]">
              Book a call
            </ButtonLink>
          </div>
        </div>

        {/* Right: illustration */}
        <div className="flex-1 min-w-0">
          {/* Mobile-only image */}
          <div className="sm:hidden">
            <Image
              src={ILLUSTRATION_URL}
              alt="Shopify Plus development visuals showing coded features, optimized product pages, variant selectors, and customer reviews."
              width={905}
              height={717}
              className="w-[80%] mx-auto h-auto"
              priority
            />
          </div>
          {/* Tablet and desktop image */}
          <div className="hidden sm:block">
            <Image
              src={ILLUSTRATION_URL}
              alt="Shopify Plus development visuals showing coded features, optimized product pages, variant selectors, and customer reviews."
              width={905}
              height={717}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
