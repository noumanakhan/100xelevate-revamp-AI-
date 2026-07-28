import { ButtonLink } from "@/components/shared/ButtonLink";
import Image from "next/image";
import Link from "next/link";

export default function WhoWeAreSection() {
  return (
    <section className="w-full sm:px-[32px] px-[16px] bg-[#F7F7F7]">
      <div className="w-full mx-auto flex flex-col items-center sm:py-[96px] py-[32px]">
        <div className="w-full flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="flex-1 md:max-w-[40%] w-full">
            <Image
              src="/images/2025/06/Container-3-1.webp"
              alt="Professionals working together over a laptop, brainstorming solutions."
              width={1400}
              height={1000}
              className="w-full h-auto grayscale"
            />
          </div>

          {/* Text */}
          <div className="w-full flex-1 flex flex-col gap-[28px] lg:ps-[96px] md:ps-[32px] pt-[32px] md:p-[10px]">
            <div className="w-full max-w-[800px] flex flex-col gap-[28px]">

              <p className="text-sm font-normal uppercase text-black">
                Who are we
              </p>
              <h2 className="text-[32px] lg:text-[48px] font-medium lg:leading-[58px] leading-[38px]">
                High-quality design that makes your brand impossible to ignore.
              </h2>
              <div>

                <p className="text-[#707070] text-sm mb-[14px] ">
                  We create designs that help your business grow and flourish like a
                  well-nurtured plant. At oldCreatives, our senior-level designers and
                  developers are detail-obsessed experts. We don&apos;t just work on your
                  project; we partner with you, putting your goals front and center from
                  day one. Every step of the way, we&apos;re here with sharp insights and
                  strategic guidance to ensure you thrive.
                </p>
                <p className="text-[#707070] text-sm mb-[14px] ">
                  Choosing 100xelevate means choosing a partner committed to your
                  success. We&apos;re here to bring your vision to life with unmatched
                  creativity and precision.
                </p>
              </div>

              <div className="">
                <ButtonLink
                  href="/our-work/"
                  variant="outlined"
                >
                  View work
                </ButtonLink>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
