import Image from "next/image";
import {
  BrandingIdentityContent,
  BrandingIdentityContentProps,
} from "../BrandingIdentityContent";

const Features = [
  "Wireframes tailored for your Shopify store",
  "Interactive prototype creation",
  "Clear visual mapping of user flows",
  "User testing to collect feedback",
  "Precise specifications for your developers",
];

const title = "User Flow Interactive Prototyping";

const description =
  "Create interactive prototypes that help you test and refine user flows, key interactions, and the overall shopping experience before development begins.";

export const UserFlow = (contentProps: BrandingIdentityContentProps) => {
  return (
    <section className="w-full bg-[#F7F7F7] md:px-8 px-4">
      <div className="max-w-max mx-auto md:py-[86px] py-[32px] flex flex-col items-center xl:gap-[74px] lg:gap-[64px] md:gap-[32px] gap-[30px] wmd:flex-row">
        {/* left: text content */}
        <BrandingIdentityContent
          {...contentProps}
          title={title}
          description={description}
          points={Features}
        />

        {/* right: image column */}
        <div
          className="flex gap-3 flex-1 min-w-0 md:w-full md:max-w-full wsm:max-w-[310px] max-w-[208px] "
          role="region"
          aria-label="User flow prototype showcase"
        >
          <div className="w-full">
            <Image
              src="/images/2025/11/2149930977.webp"
              alt="Interactive Shopify user flow prototype displayed on mobile screens for UX and UI design review."
              width={1000}
              height={667}
              className="w-full h-auto block object-cover "
              style={{ border: "1px solid #CCCCCC90", borderRightWidth: "2px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
