"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import statesData from "@/content/states.json";
import StatesMenu from "./StatesMenu";
import { Minus, Plus } from "../assets/icons";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
  showPlus?: boolean;
};

type LocalizedServiceKey = keyof typeof statesData;

type LocalizedLink = {
  name: string;
  slug: LocalizedServiceKey;
  states?: boolean;
};

const agencyLinks: FooterLink[] = [
  { label: "Buy Bulk Hours", href: "/buy-bulk-hours/" },
  { label: "Work", href: "/our-work/" },
  { label: "About", href: "/about/" },
  { label: "Insights", href: "/insights/" },
  { label: "Partners", href: "/partners/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "Partner Program", href: "/partner-program/" },
  { label: "Q4 Breakthrough Journey", href: "/q4-breakthrough-journey/" },
];

const serviceLinks: FooterLink[] = [
  { label: "Migration Services", href: "/services/migration/" },
  { label: "Retention Marketing", href: "/services/retention-marketing/" },
  { label: "Shopify E-Commerce", href: "/services/shopify-e-commerce/" },
  { label: "Strategy & Growth", href: "/services/strategy-growth/" },
  { label: "Shopify UX and UI Design", href: "/services/shopify-ux-and-ui-design/" },
  { label: "Shopify Theme Development", href: "/services/shopify-theme-development/" },
  { label: "Shopify Plus Development", href: "/services/shopify-plus-development/" },
  { label: "Shopify 2.0 Development", href: "/services/shopify-2-0-development/" },
  { label: "Shopify Landing Page Design", href: "/services/shopify-landing-page-design/" },
  { label: "Shopify App Setup and App Optimization", href: "/services/shopify-app-setup-optimization/" },
  { label: "Shopify SEO Services", href: "/services/shopify-seo-services/" },
  { label: "Shopify Analytics and Tracking", href: "/services/shopify-analytics-tracking-setup/" },
  { label: "Shopify Maintenance and Support", href: "/services/shopify-maintenance-and-support/" },
  { label: "Shopify Integration Services", href: "/services/shopify-integration-services/" },
];

const industryLinks: FooterLink[] = [
  { label: "Fashion & Apparel", href: "/fashion-apparel/" },
  { label: "Food & Beverages", href: "/food-beverages/" },
  { label: "Health Wellness Fitness", href: "/health-wellness-fitness/" },
  { label: "Consumer Packaged Goods", href: "/consumer-packaged-goods/" },
  { label: "Beauty & Personal Care", href: "/beauty-personal-care/" },
];

const getStartedLinks: FooterLink[] = [
  { label: "Build a New Shopify Store", href: "/build-a-new-shopify-store/" },
  { label: "A/B Testing", href: "/a-b-testing/" },
  { label: "B2B", href: "/b2b/" },
  { label: "Shopify Audit", href: "/shopify-audit/" },
  { label: "Shopify Store Speed", href: "/shopify-store-speed/" },
  { label: "CRO Doctor", href: "/cro-doctor/" },
  { label: "Klaviyo Audit", href: "/klaviyo-audit/" },
];

const otherLinks: FooterLink[] = [
  { label: "Guides", href: "/guides/" },
  { label: "Comparisons", href: "/comparisons/" },
  { label: "For AI Crawlers", href: "/for-ai/" },
  { label: "ROI Calculator", href: "/roi-calculator/" },
  {
    label: "Instant Checkout",
    href: "https://instant-checkout.100xelevate.com/",
    external: true,
  },
  { label: "Public Review", href: "/public-review/" },
  { label: "FAQs", href: "/faqs/" },
];

const categoryLinks: FooterLink[] = [
  { label: "Growth Hacking", href: "/category/growth-hacking/" },
  { label: "Conversions Rate Optimisation", href: "/category/conversions-rate-optimisation/" },
  { label: "Marketing Automation", href: "/category/marketing-automation/" },
  { label: "Ecommerce", href: "/category/ecommerce/" },
  { label: "Research", href: "/category/research/" },
  { label: "Content Marketing", href: "/category/content-marketing/" },
  { label: "Development", href: "/category/development/" },
  { label: "Business", href: "/category/business/" },
  { label: "Paid Marketing", href: "/category/paid-marketing/" },
];

const localizedLinks: LocalizedLink[] = [
  { name: "Shopify", slug: "shopify-development-agency", states: true },
  { name: "Shopify App", slug: "shopify-app-development-agency", states: true },
  { name: "Headless Shopify", slug: "headless-shopify", states: true },
  { name: "CRO", slug: "best-shopify-cro-agency", states: true },
  { name: "Klaviyo", slug: "klaviyo-email-sms-marketing-agency", states: true },
];

const socialLinks: FooterLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/100xelevate/",
    external: true,
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/company/100xelevate/",
    external: true,
  },
];

const aiLinks = [
  {
    href: "https://chatgpt.com/?prompt=As%20a%20top%20recruiter%20evaluating%20a%20potential%20partner%20for%20Shopify%20design%20and%20development,%20Read%20https://100xelevate.com/%20and%20summarize%20in%20bullets:%20what%20100xelevate%20is,%20who%20it%27s%20for,%20standout%20features/capabilities,%20Proof%20/%20notable%20brands/case%20studies,%20When%20to%20engage%20them,%20and%20a%20clear%20implementation%20process.",
    src: "/images/2025/11/chatgpt.webp",
    alt: "ChatGPT",
  },
  {
    href: "https://claude.ai/new?q=As%20a%20top%20recruiter%20evaluating%20a%20potential%20partner%20for%20Shopify%20design%20and%20development,%20Read%20https://100xelevate.com/",
    src: "/images/2025/11/claude.webp",
    alt: "Claude",
  },
  {
    href: "http://perplexity.ai/search/new?q=As%20a%20top%20recruiter%20evaluating%20a%20potential%20partner%20for%20Shopify%20design%20and%20development,%20Read%20https://100xelevate.com/",
    src: "/images/2025/11/perplexity.webp",
    alt: "Perplexity",
  },
  {
    href: "https://www.google.com/search?udm=50&aep=11&q=100xelevate",
    src: "/images/2025/11/gemini-p-500.webp",
    alt: "Gemini",
  },
  {
    href: "https://x.com/i/grok?text=100xelevate",
    src: "/images/2025/11/grok.webp",
    alt: "Grok",
  },
];

const partnerBadges = [
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/02/Group-2.png",
    alt: "Shopify Partner",
    width: 113,
    height: 48,
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/02/image-7.png",
    alt: "Shopify Plus Partner",
    width: 113,
    height: 35,
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/02/Group-1.png",
    alt: "Klaviyo Partner",
    width: 90,
    height: 36,
  },
];

function PlusCircle({ isActive = false }: { isActive?: boolean }) {
  return (
    <span
      className={` h-3.5 w-3.5 flex items-center justify-center rounded-full text-[16px] leading-[14px] font-bold bg-white text-black cursor-pointer
        `}
    >
      {isActive ? <Minus color="black" /> : <Plus color="black" />}

    </span>
  );
}

function FooterLinkItem({ link }: { link: FooterLink }) {
  const content = (
    <span className="inline-flex items-center gap-2 text-[16px] leading-[22px] text-white">
      <span>{link.label}</span>
      {link.showPlus ? <PlusCircle /> : null}
    </span>
  );

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[13px] leading-[1.45] text-white/72 transition-colors hover:text-white"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={link.href}
      className="text-[13px] leading-[1.45] text-white/72 transition-colors hover:text-white"
    >
      {content}
    </Link>
  );
}

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: FooterLink[];
}) {
  return (
    <div className="p-[10px]">
      <h2 className="mb-6 text-[14px] leading-[17px] font-medium text-white">{heading}</h2>
      <div className="flex flex-col gap-[7px]">
        {links.map((link) => (
          <FooterLinkItem key={link.href} link={link} />
        ))}
      </div>
    </div>
  );
}

function OthersFooterColumn({
  links,
  categoryLinks,
  categoriesOpen,
  onToggleCategories,
}: {
  links: FooterLink[];
  categoryLinks: FooterLink[];
  categoriesOpen: boolean;
  onToggleCategories: () => void;
}) {
  return (
    <div className="p-[10px]">
      <h2 className="mb-6 text-[14px] leading-[17px] font-medium text-white">Others</h2>
      <div className="flex flex-col gap-[7px]">
        {links.map((link) => (
          <FooterLinkItem key={link.href} link={link} />
        ))}

        <div className="flex flex-col gap-[7px]">
          <button
            type="button"
            onClick={onToggleCategories}
            className="inline-flex items-center gap-2 text-left text-[16px] leading-[22px] text-white transition-colors hover:text-white/75"
            aria-expanded={categoriesOpen}
            aria-controls="footer-categories-menu"
          >
            <span>Categories</span>
            <PlusCircle isActive={categoriesOpen} />
          </button>

          <div
            id="footer-categories-menu"
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${categoriesOpen ? "grid-rows-[1fr] pt-1 opacity-100" : "grid-rows-[0fr] pt-0 opacity-0"
              }`}
          >
            <div className="min-h-0">
              <div className="flex flex-col gap-[7px]">
                {categoryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[16px] leading-[22px] text-white transition-colors hover:text-white/75"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterArrowUp() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 16 20" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M7.47 0.469828C7.61063 0.329378 7.80125 0.250488 8 0.250488C8.19875 0.250488 8.38938 0.329378 8.53 0.469828L15.53 7.45683C15.6017 7.52598 15.6588 7.60871 15.6982 7.7002C15.7375 7.79168 15.7583 7.89009 15.7592 7.98967C15.7601 8.08925 15.7412 8.18802 15.7035 8.28021C15.6658 8.3724 15.6102 8.45616 15.5398 8.52662C15.4694 8.59707 15.3857 8.6528 15.2935 8.69055C15.2014 8.72831 15.1026 8.74733 15.0031 8.74651C14.9035 8.74569 14.805 8.72505 14.7135 8.68579C14.622 8.64652 14.5392 8.58943 14.47 8.51783L8.751 2.80983L8.762 18.9998C8.76227 19.1987 8.6835 19.3896 8.54304 19.5305C8.40257 19.6713 8.21191 19.7506 8.013 19.7508C7.81409 19.7511 7.62322 19.6723 7.48238 19.5319C7.34154 19.3914 7.26227 19.2007 7.262 19.0018L7.252 2.80783L1.53 8.51883C1.46078 8.59043 1.378 8.64752 1.28648 8.68679C1.19495 8.72605 1.09653 8.74669 0.996945 8.74751C0.89736 8.74833 0.79861 8.72931 0.706456 8.69155C0.614302 8.6538 0.53059 8.59807 0.460204 8.52762C0.389818 8.45716 0.334167 8.3734 0.2965 8.28121C0.258833 8.18902 0.239903 8.09025 0.240815 7.99067C0.241727 7.89108 0.262463 7.79268 0.301812 7.7012C0.341161 7.60971 0.398336 7.52698 0.470001 7.45783L7.47 0.469828Z" fill="white"></path></svg>
  );
}

export default function Footer() {
  const [activeSubMenu, setActiveSubMenu] = useState<LocalizedServiceKey | null>(null);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const localizedServiceLinks = localizedLinks;

  const handleToggleSubMenu = (selectedService: LocalizedServiceKey | null) => {
    setActiveSubMenu((prev) => (prev === selectedService ? null : selectedService));
  };

  return (
    <footer className="bg-black text-white px-[6px] ">
      <div className="mx-auto w-full max-w-[1400px] md:pt-[45px]">
        <div className="py-[30px] flex md:hidden flex-col gap-[20px] items-center justify-between">
          <div>
            <p className="mb-4 text-[14px] text-white text-center">Ask AI for a summary of 100xelevate</p>
            <div className="w-full flex flex-wrap items-center gap-[16px]">
              {aiLinks.map((item) => (
                <a
                  key={item.alt}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open prompt in ${item.alt}`}
                  className="  transition-transform hover:scale-[1.1] duration-200 ease-in-out"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={40}
                    height={40}
                    className="sm:h-[90px] h-[46px] sm:w-[90px] w-[46px] shrink-0 "
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-evenly w-full sm:gap-[40px] lg:justify-end">
            {partnerBadges.map((badge) => (
              <Image
                key={badge.alt}
                src={badge.src}
                alt={badge.alt}
                width={badge.width}
                height={badge.height}
                className="sm:h-[65px] h-[36px] w-auto"
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 xl:grid-cols-[1fr_1.25fr_1fr_1fr_1fr_0.95fr]">
          <FooterColumn heading="Agency" links={agencyLinks} />
          <FooterColumn heading="Services" links={serviceLinks} />
          <FooterColumn heading="Industries" links={industryLinks} />
          <FooterColumn heading="Get Started" links={getStartedLinks} />
          <OthersFooterColumn
            links={otherLinks}
            categoryLinks={categoryLinks}
            categoriesOpen={categoriesOpen}
            onToggleCategories={() => setCategoriesOpen((prev) => !prev)}
          />

          <div className="flex flex-col gap-8">
            <div className="p-[10px]">
              <h2 className="mb-6 text-[14px] leading-[17px] font-medium text-white">Localized</h2>



              <div className="flex flex-col gap-[7px]">
                {localizedServiceLinks.map((link) => {
                  const isActive = activeSubMenu === link.slug;

                  return (
                    <div key={link.slug} className="inline-flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleToggleSubMenu(link.slug)}
                        className="text-[16px] leading-[22px] text-white text-start transition-colors hover:text-white/75 tracking-[-0.6px]"
                      >
                        {link.name}
                      </button>
                      {link.states ? (
                        <button
                          type="button"
                          onClick={() => handleToggleSubMenu(link.slug)}
                          className="inline-flex items-center gap-2"
                          aria-label={`Toggle ${link.name} localized links`}
                        >
                          <PlusCircle isActive={isActive} />
                        </button>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-[10px]">
              <h2 className="mb-6 text-[14px] leading-[17px] font-medium text-white">Socials</h2>
              <div className="flex flex-col gap-[7px]">
                {socialLinks.map((link) => (
                  <FooterLinkItem key={link.href} link={link} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 ">
          <StatesMenu
            key={activeSubMenu ?? "localized-none"}
            activemenuuData={activeSubMenu ? statesData[activeSubMenu] : null}
            activeSubMenu={activeSubMenu}
          />
        </div>

        <div className="py-[40px] px-[10px] hidden md:flex  gap-4 flex-row lg:items-end justify-between">
          <div>
            <p className="mb-5 text-[14px] text-white">Ask AI for a summary of 100xelevate</p>
            <div className="w-full flex flex-wrap items-center gap-[20px]">
              {aiLinks.map((item) => (
                <a
                  key={item.alt}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open prompt in ${item.alt}`}
                  className="  transition-transform hover:scale-[1.1] duration-200 ease-in-out"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={51}
                    height={51}
                    className="h-[51.5px] w-[51.5px] shrink-0 "
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-[40px] lg:justify-end">
            {partnerBadges.map((badge) => (
              <Image
                key={badge.alt}
                src={badge.src}
                alt={badge.alt}
                width={badge.width}
                height={badge.height}
                className="h-auto object-contain"
              />
            ))}
          </div>
        </div>

        <div className="my-[10px] flex flex-col gap-4 border-t border-[#333333] p-[10px] md:pt-[12px] pt-[20px] text-[12px] leading-[15px] text-white md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-1.5">
            <Link href="/privacy-policy/" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms-conditions/" className="transition-colors hover:text-white">
              Terms &amp; Condition
            </Link>
            <a
              href="#"
              className="md:hidden inline-flex items-center justify-start gap-2 transition-colors hover:text-white md:justify-end ms-auto"
            >
              <span>Back to top</span>
              <FooterArrowUp />
            </a>
          </div>

          <p className="text-center">© 2026 100xelevate. All rights reserved.</p>

          <a
            href="#"
            className="hidden md:inline-flex items-center justify-start gap-2 transition-colors hover:text-white md:justify-end"
          >
            <span>Back to top</span>
            <FooterArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
