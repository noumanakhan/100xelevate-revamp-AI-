import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "WooCommerce to Shopify - 100xelevate",
  description: "WooCommerce to Shopify migration with zero downtime. 100xelevate ensures safe transfer of products, customers, SEO & subscriptions.",
  path: "/services/migration/woocommerce-to-shopify/",
});

export default function Page() {
  return <main>{/* TODO: implement /services/migration/woocommerce-to-shopify/ */}</main>;
}
