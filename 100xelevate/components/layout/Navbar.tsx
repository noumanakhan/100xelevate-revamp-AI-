"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Chevron } from "../assets/icons";
import {
  MEGA_MENU_ICONS,
  NAV_ITEMS,
  type MegaMenuLinkGroup,
  type MegaMenuSubLink,
  type NavItem,
  type NavMegaItem,
} from "@/constants/navbar";
import { HOME_ROUTE, INSIGHTS_ROUTE } from "@/constants/routes";
import { ButtonLink } from "../shared/ButtonLink";

const MOBILE_CTA_SCROLL_THRESHOLD = 8;

function pathMatches(pathname: string, href: string) {
  const h = href.replace(/\/$/, "") || "/";
  if (h === "/") return pathname === "/";
  return pathname === h || pathname.startsWith(`${h}/`);
}

function isMegaItem(item: NavItem): item is NavMegaItem {
  return "links" in item && Array.isArray(item.links);
}

function isSimpleNavLink(item: NavItem): item is { title: string; href: string } {
  return "href" in item && typeof (item as { href?: string }).href === "string";
}

function megaMenuActive(item: NavMegaItem, pathname: string): boolean {
  for (const link of item.links) {
    if ("subLinks" in link && link.subLinks) {
      for (const sub of link.subLinks) {
        if (pathMatches(pathname, sub.href)) return true;
      }
    } else if ("href" in link && link.href) {
      if (pathMatches(pathname, link.href)) return true;
    }
  }
  if (item.card?.href && pathMatches(pathname, item.card.href)) return true;
  return false;
}

function hasSubLinks(
  link: MegaMenuLinkGroup,
): link is { name: string; subLinks: MegaMenuSubLink[] } {
  return "subLinks" in link && Array.isArray((link as { subLinks?: unknown }).subLinks);
}

export default function Navbar() {
  const pathname = usePathname() ?? "/";
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);
  const [showMobileBookCall, setShowMobileBookCall] = useState(
    () => typeof window !== "undefined" && window.scrollY > MOBILE_CTA_SCROLL_THRESHOLD,
  );
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback((title: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveMenu(title);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeout.current = setTimeout(() => setActiveMenu(null), 120);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const nextValue = window.scrollY > MOBILE_CTA_SCROLL_THRESHOLD;
      setShowMobileBookCall((prev) => (prev === nextValue ? prev : nextValue));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navText = "text-black";
  const dotBg = "bg-black";
  const chevronStroke = "#000000";
  const showScrolledMobileCta = showMobileBookCall && !mobileOpen;

  return (
    <header
      className={`
        sticky top-0 z-[9999] bg-white
        w-full px-5 lg:px-[32px]
      `}
    >
      <div className="relative w-full max-w-[1400px] mx-auto  flex items-center justify-between lg:h-[86px] h-[66px]">
        <Link href={HOME_ROUTE.href} className="shrink-0 flex items-center" aria-label="Go to homepage">
          <Image
            src="/images/2025/02/Layer_1-1.png"
            alt="100xElevate"
            width={179}
            height={34}
            className="object-contain h-[21px] lg:h-auto lg:w-[179px] w-[151px]"
            priority
          />
        </Link>

        <div className="flex items-center justify-center gap-[52px]">
          <div className="hidden lg:flex flex-1 justify-center items-center gap-5  px-4">
            {NAV_ITEMS.map((item) => {
              if (isSimpleNavLink(item)) {
                const active = pathMatches(pathname, item.href);
                return (
                  <div key={item.href} className={`flex items-center ${navText}`}>
                    <Link
                      href={item.href}
                      className="relative flex items-center justify-center text-[16px] font-normal leading-normal cursor-pointer ps-3 pt-1 pb-0.5 pe-2 tracking-[0.01em]"
                    >
                      {item.title}
                      {/* {active && (
                        <span
                          className={`absolute left-0 right-0 bottom-[-6px] min-w-1 w-1 min-h-1 h-1 rounded-full mx-auto transition-all duration-300 ${dotBg}`}
                        />
                      )} */}
                    </Link>
                  </div>
                );
              }

              if (!isMegaItem(item)) return null;

              const megaActive = megaMenuActive(item, pathname);
              const menuOpen = activeMenu === item.title;

              return (
                <div
                  key={item.title}
                  className={`${navText} flex justify-center items-center gap-5 `}
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className={` flex gap-1.5 items-center justify-center text-[16px] font-normal leading-normal cursor-pointer ps-3 pt-1 pb-0.5 pe-2 h-fit transition-all duration-300
                    }`}
                  >
                    {
                      item?.mainLink ? (
                        <Link href={item.mainLink}>
                          {item.title}
                        </Link>
                      ) : (
                        <span>
                          {item.title}
                        </span>
                      )
                    } 
                    <span
                      className={`transition-transform duration-500 shrink-0 ${menuOpen ? "-rotate-180" : ""}`}
                    >
                      <Chevron
                        stroke={menuOpen ? "#000000" : chevronStroke}
                        size={14}
                      />
                    </span>
                    {/* {megaActive && !menuOpen && (
                      <span
                        className={`absolute left-0 right-0 bottom-[-6px] min-w-1 w-1 min-h-1 h-1 rounded-full mx-auto transition-all duration-500 ${dotBg}`}
                      />
                    )} */}
                  </button>

                  {item.links && (
                    <div
                      onMouseEnter={() => handleMouseEnter(item.title)}
                      onMouseLeave={handleMouseLeave}
                      className={`
                      absolute left-0 right-0 mx-auto top-[80px]
                      max-w-[1400px] w-[100%] bg-white
                      flex  z-[9999] border border-[#0000001A] shadow-[0_0_10px_0px_rgba(178,178,178,0.5)]
                      transition-all duration-300 ease-in-out will-change-[opacity,transform]
                      ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"}
                    `}
                    >
                      <div className="w-full max-w-[100%] flex flex-col justify-between p-2.5 text-black">
                        <div className="flex-1 grid gap-4 w-full grid-cols-1">
                          {item.links.map((link) => (
                            <div key={link.name} className="w-full">
                              {hasSubLinks(link) ? (
                                <div className="min-w-0 flex flex-col gap-4">

                                  <ul className="grid grid-cols-2 gap-x-[50px]">
                                    {link.subLinks.map((sub) => (
                                      <li key={sub.name} className="h-full">
                                        <Link
                                          href={sub.href}
                                          onClick={() => setActiveMenu(null)}
                                          className="w-full h-full hover:bg-[#f7f7f7] border border-white hover:border-[#F2F2F2] pt-5 px-5 pb-5  block  cursor-pointer"
                                        >
                                          <div className="flex gap-4 items-start">
                                            {typeof sub.icon === "function" ? (
                                              <span className="w-6 h-6 object-contain shrink-0"><sub.icon /></span>
                                            ) : (
                                              <Image
                                                src={sub.icon || "/images/2025/10/icon.svg"}
                                                alt={sub.name}
                                                width={24}
                                                height={24}
                                                className="w-6 h-6 object-contain shrink-0"
                                              />
                                            )}
                                            <div className="flex flex-col gap-2 min-w-0">
                                              <span className="text-[16px] font-medium leading-normal text-black">{sub.name}</span>
                                              {sub.description ? (
                                                <span className="text-[#707070] text-[12px] leading-[18px] font-normal">
                                                  {sub.description}
                                                </span>
                                              ) : null}
                                            </div>
                                          </div>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ) : (
                                <Link
                                  href={link.href}
                                  onClick={() => setActiveMenu(null)}
                                  className="text-black block text-2xl font-semibold cursor-pointer leading-7 max-w-[270px]"
                                >
                                  {link.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between gap-3 bg-[#f7f7f7] p-5 border border-[#0000001A] mt-5 flex-wrap mb-2.5">
                          {MEGA_MENU_ICONS.map((icon) => (
                            <Image
                              key={icon.id}
                              src={icon.icon}
                              alt={icon.name}
                              className="w-[67px] xl:w-[100px] h-auto object-contain"
                              width={100}
                              height={100}
                            />
                          ))}
                        </div>
                      </div>

                      {item.card && (
                        <div className={`relative min-w-[33%] w-full max-w-[33%] overflow-hidden shrink-0 hidden lg:flex flex-col justify-between   border-l border-[#0000001A] ${item.card.title && item.card.description ? "pt-[40px] px-[40px] bg-[#f7f7f7]" : "p-[10px] max-h-[421px]"}`}>
                          {item.card.title && item.card.description && (
                            <div>
                              <h3 className="text-[24px] font-semibold leading-[27px] text-black mb-[20px]">{item.card.title}</h3>
                              <p className="text-[#707070] text-[16px] leading-[20px] font-normal">{item.card.description}</p>
                            </div>
                          )}
                          <Image
                            src={item.card.image}
                            alt={item.card.btnText || ""}
                            width={1000}
                            height={1000}
                            className={`w-full h-full  ${item.card.title && item.card.description ? "object-fit max-h-[321px]" : "object-none "}`}
                          />
                          {item.card.btnText && item.card.href ? (
                            <div
                              className="absolute bottom-[50px] left-[50px]"
                            >

                              <ButtonLink
                                href={item.card.href}
                                onClick={() => setActiveMenu(null)}
                                variant="light"
                              >
                                {item.card.btnText}
                              </ButtonLink>
                            </div>

                          ) : null}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            <div className={`flex items-center ${navText}`}>
              <Link
                href={INSIGHTS_ROUTE.href}
                className="relative flex items-center justify-center text-[16px] font-normal leading-normal cursor-pointer ps-3 pt-1 pb-0.5 pe-2 tracking-[0.01em]"
              >
                {INSIGHTS_ROUTE.title}
                {pathMatches(pathname, INSIGHTS_ROUTE.href) && (
                  <span
                    className={`absolute left-0 right-0 bottom-[-6px] min-w-1 w-1 min-h-1 h-1 rounded-full mx-auto transition-all duration-300 ${dotBg}`}
                  />
                )}
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center shrink-0">
            <ButtonLink href={"/book-a-demo"} variant="solid">
              Book a call
            </ButtonLink>
          </div>
        </div>

        {/* {showScrolledMobileCta ? (
          <Link
            href="/book-a-demo/"
            className="lg:hidden ml-auto flex flex-col items-center justify-center text-[16px] font-medium text-black leading-[22px] border-b"
            aria-label="Book a call"
          >
            Book a call
          </Link>
        ) : ( */}
          <button
            type="button"
            className="lg:hidden ml-auto  flex flex-col items-center justify-center text-[16px] font-medium text-black leading-[22px] border-b"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            Menu
          </button>
        {/* )} */}
      </div>

      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          className="absolute inset-0 bg-black/20"
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`relative ml-auto flex h-dvh w-full max-w-[625px] flex-col bg-black text-white transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >


          <div className="flex-1 overflow-y-auto pt-5 px-[16px] pb-[16px]">
            <div className="flex items-center justify-between">
              <Link
                href={HOME_ROUTE.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center"
                aria-label="Go to homepage"
              >
                <Image
                  src="/images/2025/02/Layer_1-1.png"
                  alt="100xElevate"
                  width={149}
                  height={20}
                  className="h-[20px]  invert"
                />
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="text-[40px] leading-none text-white"
              >
                ×
              </button>
            </div>
            <div className="flex flex-col gap-1 mt-8">
              {NAV_ITEMS.map((item) => {
                if (isSimpleNavLink(item)) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-2 text-[32px] leading-[38px] font-medium text-white"
                    >
                      {item.title}
                    </Link>
                  );
                }

                if (!isMegaItem(item)) return null;

                const expanded = mobileExpandedMenu === item.title;

                return (
                  <div key={item.title} className="py-1">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpandedMenu(expanded ? null : item.title)
                      }
                      className="flex w-full items-center justify-between gap-4 py-2 text-left text-[32px] leading-[38px] font-medium text-white"
                      aria-expanded={expanded}
                    >
                      <span>{item.title}</span>
                      <span
                        className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""
                          }`}
                      >
                        <Chevron stroke="#ffffff" size={24} />
                      </span>
                    </button>

                    <div
                      className={`grid overflow-hidden transition-all duration-300 ease-in-out ${expanded
                        ? "grid-rows-[1fr] pt-1 opacity-100"
                        : "grid-rows-[0fr] pt-0 opacity-0"
                        }`}
                    >
                      <div className="min-h-0 pt-2">
                        {item.links.map((link) =>
                          hasSubLinks(link) ? (
                            <div key={link.name} className="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-2.5">
                              {link.subLinks.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block border border-[#333333] bg-[#FFFFFF1F] px-[10px] pt-[10px] pb-[20px] "
                                >
                                  <div className="flex items-start gap-[10px]">
                                    {typeof sub.icon === "function" ? (
                                      <span className="mt-0.5 h-5 w-5 shrink-0">
                                        <sub.icon />
                                      </span>
                                    ) : (
                                      <Image
                                        src={sub.icon || "/images/2025/10/icon.svg"}
                                        alt={sub.name}
                                        width={20}
                                        height={20}
                                        className=" h-5 w-5 shrink-0 object-contain invert mt-[10px]"
                                      />
                                    )}
                                    <div className="min-w-0">
                                      <div className="text-[16px] font-medium leading-[20px] text-white mt-[8px]">
                                        {sub.name}
                                      </div>
                                      {sub.description ? (
                                        <div className="mt-2 text-[12px] leading-[18px] text-white">
                                          {sub.description}
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              className="block border border-white/10 bg-[#1F1F1F] px-4 py-4 text-[16px] font-medium text-white"
                            >
                              {link.name}
                            </Link>
                          ),
                        )}

                        {item.card?.image ? (
                          <div className={`relative  overflow-hidden border border-[#333333] bg-[#FFFFFF1F]  mt-[10px]
                          ${item.card.title && item.card.description ? "pt-[20px] px-[20px]" : " max-h-[150px]"}
              `}>
                            {item.card.title && item.card.description && (
                              <div>
                                <h3 className="text-[16px] font-semibold leading-[27px] text-white mb-[20px]">{item.card.title}</h3>
                                <p className="text-[#f7f7f7] text-[14px] leading-[22px] font-normal mb-[20px]">{item.card.description}</p>
                              </div>
                            )}
                            <Image
                              src={item.card.image}
                              alt={item.card.btnText || item.title}
                              width={650}
                              height={150}
                              className={` 
                              ${item.card.title && item.card.description ? "w-full h-[116px] sm:h-[173px] mx-auto max-w-full max-h-full object-contain" : " h-[150px] w-full object-cover"}
                              `}
                            />
                            {item.card.btnText && item.card.href ? (
                              <div className="absolute bottom-4 left-4">
                                <ButtonLink
                                  href={item.card.href}
                                  onClick={() => setMobileOpen(false)}
                                  variant="light"
                                >
                                  {item.card.btnText}
                                </ButtonLink>
                              </div>
                            ) : null}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}

              <Link
                href={INSIGHTS_ROUTE.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-[32px] leading-[38px] font-medium text-white"
              >
                {INSIGHTS_ROUTE.title}
              </Link>
            </div>

            <ButtonLink
              href={"/book-a-demo"}
              onClick={() => setMobileOpen(false)}
              variant="light"
              className="sm:mt-4 mt-[48px] md:w-fit w-full"
            >
              Book a call
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
