import type { Metadata } from "next";

const BASE_URL = "https://100xelevate.com";

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  type = "website",
}: {
  title: string;
  description: string;
  path: string; // e.g. "/services/shopify-plus-development/"
  ogImage?: string;
  type?: "website" | "article";
}): Metadata {
  const url = `${BASE_URL}${path}`;
  const image = ogImage ?? `${BASE_URL}/images/og-default.jpg`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type,
      images: [{ url: image }],
      siteName: "100xElevate",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
