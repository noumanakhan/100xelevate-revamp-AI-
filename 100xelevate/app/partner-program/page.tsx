import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Partner Program - 100xelevate",
  description: "Join the 100xelevate Partner Program and earn lifetime commissions while rapidly growing your eCommerce business.",
  path: "/partner-program/",
});

export default function Page() {
  return <main>{/* TODO: implement /partner-program/ */}</main>;
}
