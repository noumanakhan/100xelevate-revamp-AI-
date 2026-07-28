import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Shopify E-Commerce - 100xelevate",
  description: "Boost your Shopify E-Commerce store with 100xelevate frictionless checkout, and conversion-focused strategies for fast-growing brands.",
  path: "/services/shopify-e-commerce/",
});

export default function Page() {
  return <main>{/* TODO: implement /services/shopify-e-commerce/ */}</main>;
}
