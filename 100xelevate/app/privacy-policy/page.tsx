import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy - 100xelevate",
  description: "100xElevate's Privacy Policy explains how we handle your data, ensuring security, transparency, and protection of personal information.",
  path: "/privacy-policy/",
});

export default function Page() {
  return <main>{/* TODO: implement /privacy-policy/ */}</main>;
}
