import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "How to Migrate to Shopify - 100xelevate",
  description: "Migrate to Shopify with a step-by-step guide that helps you move products, customers, orders, and SEO safely without losing traffic or revenue, and with minimal downtime.",
  path: "/migrate-to-shopify/",
});

export default function Page() {
  return <main>{/* TODO: implement /migrate-to-shopify/ */}</main>;
}
