import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Reviews - 100xelevate",
  description: "See what clients say about 100xelevate. Real Shopify reviews showcasing our design, development, and CRO results.",
  path: "/reviews/",
});

export default function Page() {
  return <main>{/* TODO: implement /reviews/ */}</main>;
}
