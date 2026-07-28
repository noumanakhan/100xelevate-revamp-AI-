import { ButtonLink } from "@/components/shared/ButtonLink";
import Image from "next/image";
import Link from "next/link";

const HeadlessShopifyHeroSection = ({
  areaName = "USA",
}: {
  areaName?: string;
}) => {
  return (
    <section className="w-full bg-white px-4 py-8 text-center md:px-8 md:py-[86px]">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center wxl:gap-5 xl:gap-16 md:gap-8 gap-4">
        <div className="flex items-center justify-center gap-2.5">
          <Image
            src="/images/2025/10/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-1.svg"
            alt="Official Shopify partner"
            width={198}
            height={56}
            className="h-auto w-[60px] md:w-[100px]"
            priority
            unoptimized
          />
          <span className="h-[22px] w-px bg-black " aria-hidden="true" />
          <Image
            src="/images/2025/10/65d7a4f1e38f693a0ad31c1e_shopify_plus.png"
            alt="Shopify Plus"
            width={640}
            height={142}
            className="h-auto w-[70px] md:w-[110px]"
            priority
          />
        </div>

        <h1 className=" lg:max-w-[1120px] md:max-w-[671px] w-full  text-[36px] font-semibold leading-[39px] text-black xl:text-[52px] xl:leading-[58px] md:text-[44px] md:leading-[46px]">
          <span className="block">
            Best Headless Shopify Agency in the {areaName}.
          </span>
          <span className="block text-[#A3A3A3]">
            Lightning fast, built to convert.
          </span>
          <span className="block">Powered by Shopify.</span>
        </h1>

        <ButtonLink href="/book-a-demo/" className=" md:mt-4 min-h-[43px]">
          Tell us about your Shopify headless project.
        </ButtonLink>

        <p className="md:text-[14px] text-[12px] font-normal leading-6 text-black">
          Explore our Headless Shopify services in the {areaName}.
        </p>

        <div className="mt-[10px] w-full md:mt-[50px]">
          <Image
            src="/images/2025/11/Group-1-5.webp"
            alt={`A leading Headless Shopify Agency ${areaName} delivering fast, scalable Shopify Plus stores built with React, Hydrogen, and the Storefront API.`}
            width={1920}
            height={1131}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeadlessShopifyHeroSection;
