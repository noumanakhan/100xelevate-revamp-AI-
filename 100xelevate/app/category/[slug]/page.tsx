import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

const CATEGORY_META: Record<string, { title: string; description: string }> = {
  ecommerce:        { title: "Ecommerce Insights | 100xElevate",         description: "Expert ecommerce insights, strategies, and analysis from the 100xElevate team." },
  research:         { title: "Research | 100xElevate",                   description: "Data-driven research and reports on Shopify, ecommerce, and conversion optimisation." },
  "content-marketing": { title: "Content Marketing Insights | 100xElevate", description: "Content marketing strategies and guides for ecommerce brands from 100xElevate." },
  development:      { title: "Development Insights | 100xElevate",       description: "Shopify development tips, tutorials, and best practices from certified Shopify experts." },
  business:         { title: "Business Insights | 100xElevate",          description: "Business strategy and growth insights for ecommerce operators from 100xElevate." },
  "paid-marketing": { title: "Paid Marketing Insights | 100xElevate",    description: "Paid marketing strategies for Shopify stores — Google, Meta, and beyond." },
  guides:           { title: "Guides | 100xElevate",                     description: "Step-by-step Shopify guides for ecommerce operators from the 100xElevate team." },
  comparisons:      { title: "Platform Comparisons | 100xElevate",       description: "Unbiased ecommerce platform comparisons to help you make the right technology choices." },
  "case-studies":   { title: "Case Studies | 100xElevate",               description: "Real results from real brands. Browse 100xElevate's Shopify case studies." },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = CATEGORY_META[slug] ?? {
    title: "Insights | 100xElevate",
    description: "Expert Shopify insights and guides from the 100xElevate team.",
  };
  const canonicalUrl = `https://100xelevate.com/category/${slug}/`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: canonicalUrl },
    openGraph: { title: meta.title, description: meta.description, url: canonicalUrl, type: "website", siteName: "100xElevate" },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  return <main>{/* TODO: render category — slug: {slug} */}</main>;
}
