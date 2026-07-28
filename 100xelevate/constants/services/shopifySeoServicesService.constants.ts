

export type ShopifySeoServicesItem = {
  title: string;
  description: string;
};

export const SHOPIFY_SEO_SERVICES_ACCORDION_LABEL = "Accordion. Open links with Enter or Space, close with Escape, and navigate with Arrow Keys";

export const SHOPIFY_SEO_ITEMS: readonly ShopifySeoServicesItem[] = [
  {
    title: "Shopify SEO Audit",
    description:
      "A full review of structure, indexation, speed and schema to identify issues and improvements that strengthen long-term search visibility.",
  },
  {
    title: "Keyword Research & Strategy",
    description:
      "We find buyer-intent keywords and align them with products, collections, and content to build a clear and effective search strategy.",
  },
  {
    title: "Technical SEO Enhancements",
    description:
      "We improve crawl health, speed, structured data, and duplicate paths, and fix Liquid theme issues to ensure clean rendering and consistent metadata.",
  },
  {
    title: "On-Page SEO Optimization",
    description:
      "We refine titles, descriptions, metadata, and headings to improve relevance and help search engines interpret your pages correctly.",
  },
  {
    title: "Content Strategy and Optimization",
    description:
      "We create and refine content that supports your main categories, builds authority, and encourages longer, more meaningful visits.",
  },
  {
    title: "Site Architecture Improvements",
    description:
      "We organise navigation, collections, and linking patterns to create a clear structure that improves discovery and search clarity.",
  },
  {
    title: "Link Building and Authority Development",
    description:
      "We secure reputable backlinks that strengthen credibility and support stronger rankings across competitive terms.",
  },
  {
    title: "Local SEO for Shopify Stores",
    description:
      "We optimise local listings and map profiles to improve visibility for customers searching in your area or nearby markets.",
  },
  {
    title: "Ongoing Performance Monitoring",
    description:
      "We track ranking behaviour, indexation, search trends, and site health to maintain steady performance as your store grows.",
  },
  {
    title: "Migration and New Store SEO Setup",
    description:
      "We prepare new builds and migrations with clean structures, redirects, and optimisation to ensure a stable, search-ready launch.",
  },
] as const;

export const SHOPIFY_SEO_SERVICES_IMAGE = {
  src: "/images/2025/10/annie-spratt-QckxruozjRg-unsplash-e1766787363105.webp",
  alt: "An Elite Team of Experts in CRO and Shopify",
  width: 2564,
  height: 2489,
} as const;

export type ProcessItemData = {
  title: string;
  description: string;
};

export const SHOPIFY_SEO_PROCESS_ITEMS: readonly ProcessItemData[] = [
  {
    title: "1. Audit and Assessment",
    description:
      "We begin by reviewing your store's technical health, indexation, page structure and search performance. This helps us identify issues affecting visibility and establish a clear direction for your SEO plan.",
  },
  {
    title: "2. Keyword and Content Mapping",
    description:
      "We research buyer-intent keywords and align them with your products, collections and content. The aim is to build a search framework that matches how customers discover items in your category.",
  },
  {
    title: "3. Technical Improvements",
    description:
      "We refine the technical foundation of your store by improving speed, structured data, crawl behavior, and duplicate paths. These updates help search engines read your site more accurately.",
  },
  {
    title: "4. On-Page Optimization",
    description:
      "We update titles, descriptions, headings, and internal linking across priority pages. This creates clearer communication for both customers and search engines, improving relevance and engagement.",
  },
  {
    title: "5. Monitoring and Refinement",
    description:
      "Once core improvements are in place, we track performance signals, ranking behavior, and indexation changes. This helps maintain stability and support long-term organic growth.",
  },
] as const;

export type ShopifyFaqItem = {
  question: string;
  answer: string;
};


export const SHOPIFY_SEO_FAQS: readonly ShopifyFaqItem[] = [
  {
    question: "1. What are Shopify SEO services?",
    answer:
      "Shopify SEO services improve your store's visibility on search engines by optimizing keywords, product pages, site structure, and technical elements. The goal is to help your products rank higher, attract qualified buyers, and increase conversions without relying heavily on paid advertising.",
  },
  {
    question: "2. Why is SEO important for Shopify stores?",
    answer:
      "SEO drives long-term, purchase-ready traffic to your Shopify store. When your pages rank higher on Google, more buyers discover your products naturally, reducing your ad costs and improving your store's overall sales performance. Strong SEO also enhances user experience, which leads to higher conversions.",
  },
  {
    question: "3. How long does Shopify SEO take to show results?",
    answer:
      "Most Shopify stores begin seeing ranking and traffic improvements within three to six months. Timelines depend on your niche, competition level, keyword strategy, and the current health of your site. Consistent content, technical fixes, and optimization accelerate progress and sustain long-term growth.",
  },
  {
    question: "4. What is included in Shopify SEO services?",
    answer:
      "A complete Shopify SEO service includes a site audit, keyword research, on-page optimization, technical improvements, content strategy, internal linking, link building, and ongoing performance tracking. These combined efforts help your store rank better, load faster, and convert more visitors into customers.",
  },
  {
    question: "5. Can Shopify SEO increase sales, not just traffic?",
    answer:
      "Yes. SEO attracts buyers already searching for your products, bringing higher-quality traffic than ads or social media alone. By optimizing product pages, improving speed, and refining search intent targeting, Shopify stores see higher checkout conversions and stronger year-round revenue growth.",
  },
  {
    question: "6. Do Shopify stores need technical SEO?",
    answer:
      "Technical SEO ensures your store loads quickly, is crawlable, uses clean code, and avoids issues like duplicate content. These technical improvements help Google better understand your site, improve rankings, and create a smoother experience that increases conversions on mobile and desktop.",
  },
  {
    question: "7. What makes Shopify SEO different from regular SEO?",
    answer:
      "Shopify SEO focuses on optimizing Shopify's platform-specific structure, including collections, product templates, URL formats, apps, speed, and Liquid theme code. Unlike general SEO, it requires knowledge of Shopify's limitations and features to improve rankings while keeping the store fast and conversion-friendly.",
  },
  {
    question: "8. Do you provide ongoing Shopify SEO management?",
    answer:
      "Yes. Ongoing SEO management helps your store stay competitive as search trends, competitors, and algorithms change. Monthly monitoring, content updates, speed improvements, and keyword adjustments ensure consistent growth in rankings, traffic, and revenue throughout the year.",
  },
  {
    question: "9. Do I need a Shopify store before starting SEO?",
    answer:
      "You can start SEO during or after development. Optimizing the structure as you build the store prevents issues later, reduces migration risks, and sets a strong foundation for rankings. For existing stores, a full audit helps identify what needs improvement immediately.",
  },
  {
    question: "10. Can you handle SEO for international Shopify stores?",
    answer:
      "Yes. International Shopify SEO includes optimizing multi-language pages, country-specific keywords, hreflang tags, and regional content. This ensures search engines show the right version of your store to global shoppers, helping you grow visibility and sales across different countries and markets.",
  },
] as const;