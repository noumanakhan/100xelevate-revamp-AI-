import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About - 100xelevate",
  description: "Learn about 100xelevate, a Shopify Plus agency creating high-performing ecommerce stores, custom designs, and growth-focused solutions for global brands.",
  path: "/about/",
});

export default function Page() {
  return <main>{/* TODO: implement /about/ */}</main>;
}
