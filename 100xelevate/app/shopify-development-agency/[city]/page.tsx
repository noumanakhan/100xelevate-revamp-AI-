import type { Metadata } from "next";
import { shopifyDevCitySlugs } from "@/lib/city-slugs";

export const dynamicParams = false;

export function generateStaticParams() {
  return shopifyDevCitySlugs.map((city) => ({ city }));
}

type Props = { params: Promise<{ city: string }> };

function formatCityName(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityName = formatCityName(city);
  const canonicalUrl = `https://100xelevate.com/shopify-development-agency/${city}/`;
  return {
    title: `Shopify Development Agency in ${cityName} | 100xelevate`,
    description: `100xelevate is a leading Shopify development agency in ${cityName} providing custom store builds, theme development, SEO, migrations, and Shopify Plus solutions to improve sales and performance.`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `Shopify Development Agency in ${cityName} | 100xelevate`,
      description: `100xelevate is a leading Shopify development agency in ${cityName} providing custom store builds, theme development, SEO, migrations, and Shopify Plus solutions to improve sales and performance.`,
      url: canonicalUrl,
      type: "website",
      siteName: "100xElevate",
    },
    twitter: {
      card: "summary_large_image",
      title: `Shopify Development Agency in ${cityName} | 100xelevate`,
      description: `100xelevate is a leading Shopify development agency in ${cityName} providing custom store builds, theme development, SEO, migrations, and Shopify Plus solutions to improve sales and performance.`,
    },
  };
}

export default async function ShopifyDevelopmentAgencyCityPage({
  params,
}: Props) {
  const { city } = await params;
  const cityName = formatCityName(city);
  return <main>{/* TODO: render city page — {cityName} */}</main>;
}
