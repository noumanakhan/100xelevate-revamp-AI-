import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Shopify POS Migration Services - 100xelevate",
  description: "Migrate from Square or Lightspeed to Shopify POS with clean data, zero downtime, and unified retail operations. Shopify POS migration experts.",
  path: "/services/migration/shopify-pos/",
});

export default function Page() {
  return <main>{/* TODO: implement /services/migration/shopify-pos/ */}</main>;
}
