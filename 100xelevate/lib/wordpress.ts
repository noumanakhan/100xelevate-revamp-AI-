const WP_API_BASE = "https://100xelevate.com/wp-json/wp/v2";

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  modified: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  categories: number[];
  tags: number[];
  yoast_head_json?: {
    title?: string;
    description?: string;
    og_image?: { url: string }[];
    canonical?: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string; alt_text: string }[];
    "wp:term"?: { id: number; name: string; slug: string }[][];
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
  description: string;
}

export async function getPosts(params?: {
  page?: number;
  perPage?: number;
  categorySlug?: string;
  search?: string;
}): Promise<{ posts: WPPost[]; total: number; totalPages: number }> {
  const { page = 1, perPage = 10, categorySlug, search } = params ?? {};

  const url = new URL(`${WP_API_BASE}/posts`);
  url.searchParams.set("page", String(page));
  url.searchParams.set("per_page", String(perPage));
  url.searchParams.set("_embed", "1");

  if (search) url.searchParams.set("search", search);

  if (categorySlug) {
    const categories = await getCategories();
    const cat = categories.find((c) => c.slug === categorySlug);
    if (cat) url.searchParams.set("categories", String(cat.id));
  }

  const res = await fetch(url.toString(), {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return { posts: [], total: 0, totalPages: 0 };

  const posts: WPPost[] = await res.json();
  const total = Number(res.headers.get("X-WP-Total") ?? 0);
  const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? 0);

  return { posts, total, totalPages };
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const res = await fetch(
    `${WP_API_BASE}/posts?slug=${slug}&_embed=1`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) return null;

  const posts: WPPost[] = await res.json();
  return posts[0] ?? null;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const slugs: string[] = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    const res = await fetch(
      `${WP_API_BASE}/posts?per_page=${perPage}&page=${page}&_fields=slug`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) break;

    const posts: { slug: string }[] = await res.json();
    slugs.push(...posts.map((p) => p.slug));

    const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? 1);
    if (page >= totalPages) break;
    page++;
  }

  return slugs;
}

export async function getCategories(): Promise<WPCategory[]> {
  const res = await fetch(`${WP_API_BASE}/categories?per_page=100`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return [];
  return res.json();
}
