export type ShopifyFaqItem = {
  question: string;
  answer: string;
};


export const getShopifyHeadlessFaqs = (
  city: string,
): readonly ShopifyFaqItem[] => [
  {
    question: "1. What is a headless Shopify Agency?",
    answer: `A headless Shopify agency builds ecommerce stores using a custom frontend connected to the Shopify or Shopify Plus backend through the Storefront API. This approach gives brands in ${city} more control over speed, structure, content, and user experience than a theme-based store. The best headless Shopify agencies work with modern frameworks and know how to connect carts, products, customers, and checkout to a fast and reliable headless setup.`,
  },
  {
    question: `2. What does the best headless Shopify agency in ${city} do?`,
    answer: `The best agencies support the full process from planning and design to development, integrations, and optimization, and help brands in ${city} choose the right structure for long-term growth.`,
  },
  {
    question: "3. What are the benefits of a headless Shopify store?",
    answer:
      "A headless Shopify store offers faster load times, stronger SEO, and greater flexibility in layout and UX. It supports advanced features, complex buying journeys, and international operations. This structure often leads to improved user engagement and more opportunities to optimize conversion paths.",
  },
  {
    question: `4. Is headless Shopify right for my ${city} business?`,
    answer:
      "A headless Shopify setup is best for brands that need custom design, high performance, or advanced integrations. It suits Shopify Plus merchants with large catalogs, fast growth, or international requirements. Brands with simpler needs can still use it, but should consider the additional development work involved.",
  },
  {
    question: "5. Will headless Shopify improve performance and SEO?",
    answer:
      "A well-built headless Shopify store can improve search visibility by delivering faster pages, clean code, and better control over content structure. Modern frameworks help meet performance targets that influence ranking and user experience. Many brands choose headless for this reason.",
  },
];

export const SHOPIFY_HEADLESS_FAQS = getShopifyHeadlessFaqs("USA");
