import React from "react";
import { CaseStudies } from "../shopifyAppDevelopmentAgency/CaseStudies";

const caseStudies = [
  {
    stat: "+96%",
    label: "Conversion Rate Lift",
    bgImage: "/images/2025/10/MacBook_Mockup_1-1.webp",
    logo: {
      src: "/images/2025/10/Group-2-2.png",
      alt: "Shopify Partner badge for e-commerce services",
      width: 117,
      height: 23,
    },
    title:
      "+96% Growth in Conversion Rate Andrea Maack Elevates Shopify Sales  with 100xelevate.",
    href: "/our-work/andrea-maack-cro-case-study/",
  },
  {
    stat: "+439%",
    label: "Conversion Rate Lift",
    bgImage: "/images/2025/10/image-48.webp",
    logo: {
      src: "/images/2025/10/STK1910P_Logos_REV_GUM_horizontal_white-1.png",
      alt: "REVGUM",
      width: 177,
      height: 22,
    },
    title:
      "+439% Growth in Shopify Conversion Rate, Chew REV Gum Scales 282% in Sales.",
    href: "/our-work/chew-rev-gum-cro-case-study/",
  },
  {
    stat: "+66%",
    label: "Conversion Rate Lift",
    bgImage: "/images/2025/10/MacBook_Mockup_1-2.webp",
    logo: {
      src: "/images/2025/10/Mask-group-7.png",
      alt: "Rodeo",
      width: 74,
      height: 23,
    },
    title:
      "+66% Growth in Shopify Conversion Rate Living in Sunshine Increases Orders and Social Sales.",
    href: "/our-work/living-in-sunshine-cro-case-study/",
  },
];

export const CROCaseStudies = () => {
  return (
    <div>
      <CaseStudies caseStudiesArray={caseStudies} />
    </div>
  );
};
