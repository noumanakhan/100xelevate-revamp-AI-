import Image from "next/image";
import { ButtonLink } from "@/components/shared/ButtonLink";

type LetsTalkProps = {
  title?: string;
  description?: string;
  showLogo?: boolean;
  buttonText?: string;
  buttonLink?: string;
  mainContainerClass?: string;
  contentMaxWidthClass?: string;
  bgImageClasses?: string;
};

export const LetsTalk = ({
  title = "Let's talk Shopify Plus Development.",
  description = "We help brands build stronger, faster, and more scalable stores with Shopify Plus. If you're preparing for a migration, planning new features, or improving performance for growth, our team can guide you through every stage. Share your goals with us and see how far your store can go.",
  showLogo = false,
  buttonText = "Book a call",
  buttonLink = "/book-a-demo/",
  mainContainerClass = "max-w-[1300px] mx-auto md:py-[86px] py-[30px]",
  contentMaxWidthClass = "md:max-w-[60.4%]",
  bgImageClasses = "bg-cover bg-center bg-no-repeat",
}: LetsTalkProps) => {
  return (
    <section className="w-full">
      <div className={mainContainerClass}>
        <div
          className={
            bgImageClasses +
            " w-full h-auto lg:px-[60px] md:px-[32px] px-4 md:py-0 py-[32px]"
          }
          style={{ backgroundImage: "url('/images/2025/11/plusbarbkg.jpg')" }}
        >
          <div
            className={
              contentMaxWidthClass + " flex flex-col  gap-5 md:py-[60px] py-0"
            }
          >
            {showLogo && (
              <Image
                src="/images/2025/11/shopifyshopifyplus.png"
                alt="Shopify and Shopify Plus"
                width={517}
                height={68}
                className="w-full max-w-[200px] h-auto"
              />
            )}

            <h2 className="wmd:text-[32px] md:text-[40px] text-[32px] font-semibold text-white wmd:leading-[40px] md:leading-[46px] leading-[38px]">
              {title}
            </h2>

            <p className="text-white text-[14px] md:text-[16px] leading-[22px] md:leading-[20px] font-normal">
              {description}
            </p>

            <div className="md:pt-4">
              <ButtonLink
                href={buttonLink}
                variant="light"
                className="px-[20px] py-[12px] h-[43px]"
              >
                {buttonText}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
