import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Consumer Packaged Goods - 100xelevate",
  description: "We build and optimize Shopify stores for consumer packaged goods brands delivering premium design, higher conversions, and measurable growth.",
  path: "/consumer-packaged-goods/",
});

export default function Page() {
  return <main>{/* TODO: implement /consumer-packaged-goods/ */}</main>;
}
