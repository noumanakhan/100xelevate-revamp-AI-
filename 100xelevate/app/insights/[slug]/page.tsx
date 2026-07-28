import type { Metadata } from "next";
import { getPostBySlug as getPost } from "@/lib/wordpress";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug).catch(() => null);

  if (!post) {
    return { title: "Insights | 100xElevate" };
  }

  const description = post.excerpt?.rendered
    ? post.excerpt.rendered.replace(/<[^>]+>/g, "").slice(0, 160)
    : "Expert Shopify insights from 100xElevate.";

  const canonicalUrl = `https://100xelevate.com/insights/${slug}/`;
  const ogImage =
    (post as { _embedded?: { "wp:featuredmedia"?: Array<{ source_url?: string }> } })._embedded?.[
      "wp:featuredmedia"
    ]?.[0]?.source_url ?? "https://100xelevate.com/wp-content/uploads/2025/10/image-80-1-1-1.webp";

  return {
    title: `${post.title.rendered.replace(/<[^>]+>/g, "")} | 100xElevate`,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: post.title.rendered.replace(/<[^>]+>/g, ""),
      description,
      url: canonicalUrl,
      type: "article",
      siteName: "100xElevate",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.rendered.replace(/<[^>]+>/g, ""),
      description,
      images: [ogImage],
    },
  };
}

export default async function InsightsPostPage({ params }: Props) {
  const { slug } = await params;
  return <main>{/* TODO: render post — slug: {slug} */}</main>;
}
