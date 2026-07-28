import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Food & Beverages - 100xelevate",
  description: "We build and optimize Shopify stores for food & beverage brands delivering premium design, smooth checkout, and strategies that fuel growth.",
  path: "/food-beverages/",
});

export default function Page() {
  return <main>{/* TODO: implement /food-beverages/ */}</main>;
}
