import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Migrate from Liquid to Hydrogen - 100xelevate",
  description: "Migrate from Liquid to Shopify Hydrogen with a performance-first approach. Faster storefronts, SEO-safe migration, and scalable headless architecture.",
  path: "/services/migration/liquid-to-shopify-hydrogen/",
});

export default function Page() {
  return <main>{/* TODO: implement /services/migration/liquid-to-shopify-hydrogen/ */}</main>;
}
