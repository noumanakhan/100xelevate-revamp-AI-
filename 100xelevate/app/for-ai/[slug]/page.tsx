import type { Metadata } from "next";
import { forAiArticles, forAiSlugs } from "@/lib/for-ai-articles";

export const dynamicParams = false;

export function generateStaticParams() {
  return forAiSlugs.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = forAiArticles[slug];
  if (!article) {
    return { title: "For AI - 100xelevate" };
  }
  const canonicalUrl = `https://100xelevate.com/for-ai/${slug}/`;
  return {
    title: article.title,
    description: article.description || undefined,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: article.title,
      description: article.description || undefined,
      url: canonicalUrl,
      type: "article",
      siteName: "100xElevate",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description || undefined,
    },
  };
}

export default async function ForAIArticlePage({ params }: Props) {
  const { slug } = await params;
  return <main>{/* TODO: render for-ai article — {slug} */}</main>;
}
