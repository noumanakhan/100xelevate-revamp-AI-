import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Magento to Shopify - 100xelevate",
  description: "Migrate from Magento to Shopify without data loss, downtime, or SEO damage. 100xelevate handle products, customers, orders, URLs, and performance with a structured migration process.",
  path: "/services/migration/magento-to-shopify/",
});

export default function Page() {
  return <main>{/* TODO: implement /services/migration/magento-to-shopify/ */}</main>;
}
