import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Fashion & Apparel - 100xelevate",
  description: "We help fashion & apparel brands scale with Shopify stores built for growth premium design, smooth checkout, and conversion-focused strategy.",
  path: "/fashion-apparel/",
});

export default function Page() {
  return <main>{/* TODO: implement /fashion-apparel/ */}</main>;
}
