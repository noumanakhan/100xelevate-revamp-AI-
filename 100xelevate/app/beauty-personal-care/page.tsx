import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Beauty & Personal Care - 100xelevate",
  description: "Powering beauty & personal care brands with custom Shopify development, optimized design, and seamless shopping experiences that fuel growth.",
  path: "/beauty-personal-care/",
});

export default function Page() {
  return <main>{/* TODO: implement /beauty-personal-care/ */}</main>;
}
