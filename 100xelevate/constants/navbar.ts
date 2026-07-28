import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  PARTNERS_ROUTE,
  REVIEWS_ROUTE,
  WORK_ROUTE,
} from "./routes";
import type { ComponentType } from "react";
import { Shopify } from "@/components/assets/icons";

/** Partner / badge strip under mega menu (paths under `public/`) */
export const MEGA_MENU_ICONS = [
  { id: 1, name: "Shoify Reciews", icon: "/icons/awards/shopify-review.svg" },
  { id: 2, name: "Shopify", icon: "/icons/awards/Shopify.svg" },
  { id: 3, name: "Google", icon: "/images/2025/10/google.svg" },
  { id: 4, name: "Trustpilot", icon: "/images/2025/10/trustpilot.svg" },
  { id: 5, name: "Clutch", icon: "/images/2025/10/clutch.svg" },
  { id: 6, name: "Shopify", icon: "/images/2025/10/shopify_platinum.svg" },
];

export type MegaMenuSubLink = {
  name: string;
  href: string;
  icon?: string | ComponentType;
  description?: string;
};

export type MegaMenuLinkGroup =
  | { name: string; subLinks: MegaMenuSubLink[] }
  | { name: string; href: string };

export type NavMegaItem = {
  title: string;
  links: MegaMenuLinkGroup[];
  mainLink?: string;
  card?: {
    title?: string;
    description?: string;
    image: string;
    btnText?: string;
    href?: string;
  };
};

export type NavItem = { title: string; href: string } | NavMegaItem;

export const NAV_ITEMS: NavItem[] = [
  WORK_ROUTE,

  {
    title: "Services",
    mainLink: "/services",

    links: [
      {
        name: "Core Services",
        subLinks: [
          {
            name: "Build a New Shopify Store",
            href: "/build-a-new-shopify-store/",
            icon: Shopify,
            description:
              "100xelevate's award-winning Shopify team builds custom hybrid apps and integrations connecting your ERP, POS, and warehouse for flawless D2C and B2B performance.",
          },
          {
            name: "Shopify UX and UI Design",
            href: "/services/shopify-ux-and-ui-design/",
            icon: "/icons/services/ui-ux.svg",
            description:
              "Professional Shopify UX and UI design for better structure, smoother flows, and higher conversions. Optimize your store for mobile and desktop performance.",
          },
          {
            name: "Shopify Plus Development",
            href: "/services/shopify-plus-development/",
            icon: "/icons/services/shopify-plus-development.svg",
            description:
              "Shopify Plus development for high-growth brands, delivering scalable storefronts, custom features, optimized checkout, and seamless integrations.",
          },
          {
            name: "Shopify App Development",
            href: "/shopify-app-development-agency/",
            icon: "/icons/services/shopify-app-development.svg",
            description:
              "Build powerful, scalable solutions with our custom Shopify app development agency, from private apps to advanced Shopify Plus integrations.",
          },
          {
            name: "Shopify Store Speed",
            href: "/shopify-store-speed/",
            icon: "/icons/services/shopify-store-speed.svg",
            description:
              "Boost performance and sales with 100xelevate's Shopify speed optimization team, trusted by 500+ top brands worldwide.",
          },
          {
            name: "Shopify Audit",
            href: "/shopify-audit/",
            icon: "/icons/services/shopify-audit.svg",
            description:
              "150+ Shopify brands trust 100xelevate's audit framework to uncover hidden revenue leaks using behavior-backed insights and proven CRO methods.",
          },
          {
            name: "A/B Testing",
            href: "/a-b-testing/",
            icon: "/icons/services/ab-testing.svg",
            description:
              "Boost CVR, RPV, and AOV with data-driven A/B testing for Shopify, so every change drives measurable growth.",
          },
          {
            name: "CRO Doctor",
            href: "/cro-doctor/",
            icon: "/icons/services/cro-doctor.svg",
            description:
              "Quickly find and fix hidden revenue leaks with 100xelevate's Shopify CRO audits to recover lost sales and boost conversions.",
          },
        ],
      },
    ],
    card: {
      title: "100% Satisfaction Guarantee",
      description:
        "We stand behind our service with a 100% Satisfaction Guarantee. If you’re not completely satisfied with our service, we’ll make it right at no additional cost, or provide a full refund with no questions asked. Your success is our success.",
      image: "/images/navbar/services-navbar-image.webp",
    },
  },
  {
    title: "Company",
    links: [
      {
        name: "Company",
        subLinks: [ABOUT_ROUTE, REVIEWS_ROUTE, PARTNERS_ROUTE, CONTACT_ROUTE],
      },
    ],
    card: {
      image: "/images/navbar/company-navbar-image.avif",
      btnText: "About",
      href: ABOUT_ROUTE.href,
    },
  },
];
