
export type ShopifyThemeDevelopmentServicesItem = {
  title: string;
  description: string;
};

export const SHOPIFY_THEME_DEVELOPMENT_SERVICES_ACCORDION_LABEL = "Accordion. Open links with Enter or Space, close with Escape, and navigate with Arrow Keys";

export const SHOPIFY_THEME_DEVELOPMENT_ITEMS: readonly ShopifyThemeDevelopmentServicesItem[] = [
  {
    title: "Purpose-Built for Your Brand",
    description:
      "A theme shaped around your products and customers, giving your store a clearer path from browsing to purchase.",
  },
  {
    title: "Theme Redesign and Upgrades",
    description:
      "We rebuild outdated layouts into modern, faster, and cleaner structures. Your store becomes easier to navigate and performs better across all devices.",
  },
  {
    title: "UX and UI Improvements",
    description:
      "We refine page layouts, information order, and interactive elements so customers move through the store with less friction and more confidence.",
  },
  {
    title: "Performance and Speed Optimization",
    description:
      "We streamline code, reduce bloat, optimize media, and improve load times to support stronger engagement and higher conversion.",
  },
  {
    title: "Conversion-Focused Page Structures",
    description:
      "We organize home, collection, and product pages around buyer behavior, helping visitors discover products quickly and complete purchases with fewer barriers.",
  },
  {
    title: "Flexible Sections and Components",
    description:
      "We create modular sections and reusable blocks, allowing your team to update content easily while keeping the store consistent.",
  },
  {
    title: "App-Free Feature Development",
    description:
      "We replace unnecessary apps with native theme features when possible, improving speed, stability, and long-term maintainability.",
  },
  {
    title: "Shopify Plus Enhancements",
    description:
      "For high-volume brands, we prepare themes to support advanced features, scalable merchandising, and a smoother enterprise-level experience.",
  },
] as const;

export const SHOPIFY_THEME_DEVELOPMENT_SERVICES_IMAGE = {
  src: "/images/2025/10/image-Photoroom-17-2-1.png",
  alt: "Shopify mobile analytics dashboard showing performance and conversion rate metrics",
  width: 2564,
  height: 2489,
} as const;

export type ProcessItemData = {
  title: string;
  description: string;
};

export const SHOPIFY_THEME_DEVELOPMENT_PROCESS_ITEMS: readonly ProcessItemData[] = [
  {
    title: "1. Discovery and Planning",
    description:
      "We review your goals, product range, and customer flow. This helps us define the structure your theme needs and establish a clear project path.",
  },
  {
    title: "2. UX Architecture and Layout Design",
    description:
      "We map out page layouts, section order, and functional elements. The aim is to create a smooth, intuitive experience that supports how customers browse and buy.",
  },
  {
    title: "3. Theme Development",
    description:
      "Using Shopify 2.0 standards, we build a fast, stable theme with clean Liquid, responsive components, and flexible sections your team can manage easily.",
  },
  {
    title: "4. Testing and Performance Review",
    description:
      "We test the theme across major devices and browsers, checking speed, layout behavior, and functional accuracy to ensure everything works as expected.",
  },
  {
    title: "5. Launch and Support",
    description:
      "Once the theme goes live, we monitor performance, resolve feedback, and help your team settle into the new structure with confidence.",
  },
] as const;

export type ShopifyFaqItem = {
  question: string;
  answer: string;
};


export const SHOPIFY_THEME_DEVELOPMENT_FAQS: readonly ShopifyFaqItem[] = [
  {
    question: "1. How much does Shopify theme development cost?",
    answer:
      "Costs depend on the size of your store, the number of layouts required, and the condition of your current theme. Once we review your goals and technical needs, we will share a clear, fixed estimate. This helps you understand the full scope before any work begins.",
  },
  {
    question: "2. How long does a Shopify theme development project take?",
    answer:
      "Timelines vary based on complexity, required templates, and development depth. Smaller builds take a few weeks, while larger projects with more structure or functionality take longer. After reviewing your store, we create a detailed timeline and keep you informed at every stage.",
  },
  {
    question: "3. Can you improve my existing Shopify theme instead of building a new one?",
    answer:
      "Yes. Many stores benefit from refinements rather than a full rebuild. We evaluate your current theme, identify structural or performance issues, and apply targeted improvements. This may include layout adjustments, speed optimization, UX fixes, or updated Shopify 2.0 features.",
  },
  {
    question: "4. Can I use a pre-built Shopify theme instead of theme development?",
    answer:
      "You can, and many stores start with pre-built themes. However, most templates require adjustments to match your brand, products, and layout needs. Theme development helps refine these areas, making your store easier to navigate and better suited to your long-term goals.",
  },
  {
    question: "5. How do I track progress during theme development?",
    answer:
      "We provide regular updates through email or chat, depending on what your team prefers. You receive clear milestones as we complete planning, development, and testing. Our team stays available throughout the day if you need additional details or clarification.",
  },
  {
    question: "6. Do you follow Shopify 2.0 development standards?",
    answer:
      "Yes. All themes are built using Shopify 2.0 practices, including modular sections, optimized Liquid, and clean JSON templates. This improves speed, flexibility, and long-term maintainability, helping your store handle new features and higher traffic without performance issues.",
  },
  {
    question: "7. Will the new theme affect my SEO or traffic?",
    answer:
      "A well-structured theme supports stronger SEO. Clean code, faster load times, and improved layout clarity help search engines understand your site more easily. We ensure your current metadata, URLs, and key settings remain intact during development.",
  },
  {
    question: "8. What happens after the theme is launched?",
    answer:
      "After launch, we monitor performance, review early feedback, and make small refinements where needed. We help your team adjust to the new layout and ensure the theme stays stable as customers begin interacting with it.",
  },
  {
    question: "9. Can you migrate my store from another platform to a Shopify theme?",
    answer:
      "Yes. We help migrate products, customers, collections, and core settings from platforms like WooCommerce, Magento, or BigCommerce. After the data is moved, we apply your Shopify theme and prepare the store for a stable, well-structured launch.",
  },
  {
    question: "10. What problems does Shopify theme development solve for DTC brands?",
    answer:
      "DTC brands often face slow pages, outdated layouts, unclear product presentation, and navigation issues. Theme development improves structure, speed, and visual flow, helping customers browse more comfortably and complete purchases with fewer obstacles.",
  },
] as const;