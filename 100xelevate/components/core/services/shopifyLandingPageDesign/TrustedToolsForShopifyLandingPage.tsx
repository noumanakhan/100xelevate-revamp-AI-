import Image from "next/image";

const trustedTools = [
  {
    name: "PageFly",
    image: "/images/2025/12/Frame-42-1024x404.png",
  },
  {
    name: "Shopify landing page platform",
    image: "/images/2025/12/Frame-44-1024x404.png",
  },
  {
    name: "Shopify optimisation platform",
    image: "/images/2025/12/Frame-43-1024x404.png",
  },
  {
    name: "Landing page design tool",
    image: "/images/2025/12/Frame-41-1024x404.png",
  },
  {
    name: "Shopify conversion tool",
    image: "/images/2025/12/Frame-46-1024x404.png",
  },
  {
    name: "Shopify performance tool",
    image: "/images/2025/12/Frame-39-1024x404.png",
  },
  {
    name: "Shopify analytics tool",
    image: "/images/2025/12/Frame-38-1024x404.png",
  },
  {
    name: "Shopify landing page integration",
    image: "/images/2025/12/Frame-49-1024x404.png",
  },
];

const TrustedToolsForShopifyLandingPage = () => {
  return (
    <section className="bg-[#F7F7F7] px-4 py-8 md:px-8 md:py-24">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center wmd:gap-[50px] md:gap-[64px] gap-8">
        <h2 className="max-w-[1000px] text-center text-[32px] font-semibold leading-[38px] md:text-[40px] md:leading-[46px] xl:text-[48px] xl:leading-[58px]">
          Trusted Tools and Platforms for High-Performing Landing Pages
        </h2>

        <p className="text-[#707070] w-full max-w-[1000px] text-center md:mt-[-30px] mt-[-10px] md:text-base text-[14px] md:leading-5 leading-[22px]">
          We use trusted Shopify apps and optimisation tools that help us build
          fast, reliable landing pages with clearer user flow and dependable
          performance.
        </p>

        <div className="grid w-full  md:gap-10 gap-5 grid-cols-2 md:grid-cols-4">
          {trustedTools.map((tool) => (
            <div
              key={tool.image}
              className="flex py-10 items-center justify-center overflow-hidden bg-white"
            >
              <Image
                src={tool.image}
                alt={tool.name}
                width={1024}
                height={404}
                className="h-full w-full md:max-w-[100px] max-w-[80px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedToolsForShopifyLandingPage;
