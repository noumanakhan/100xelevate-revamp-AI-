import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Prestashop to Shopify - 100xelevate",
  description: "Migrate from PrestaShop to Shopify with a structured process that protects SEO, data, and performance. Built for growing brands.",
  path: "/services/migration/prestashop-to-shopify/",
});

export default function Page() {
  return <main>{/* TODO: implement /services/migration/prestashop-to-shopify/ */}</main>;
}
