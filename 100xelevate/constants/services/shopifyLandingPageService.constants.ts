
export type ShopifyLandingPageServicesItem = {
  title: string;
  description: string;
};

export const SHOPIFY_LANDING_PAGE_SERVICES_ACCORDION_LABEL = "Accordion. Open links with Enter or Space, close with Escape, and navigate with Arrow Keys";

export const SHOPIFY_LANDING_PAGE_SERVICES_ITEMS: readonly ShopifyLandingPageServicesItem[] = [
  {
    title: "UX Planning",
    description:
      "We plan the page’s structure and flow to guide visitors smoothly from first impression to action.",
  },
  {
    title: "Wireframes",
    description:
      "We map the layout in simple frames to confirm the order of sections and the user journey’s logic.",
  },
  {
    title: "Custom Design",
    description:
      "We create a clean, brand-focused design that supports clarity, trust, and easy decision-making.",
  },
  {
    title: "Modular Shopify 2.0 Sections",
    description:
      "We build flexible sections you can edit or reorder without developer help, ready for future updates.",
  },
  {
    title: "Copy Guidance",
    description:
      "We refine key messages so your offer is clear, balanced, and easy for visitors to understand.",
  },
  {
    title: "Speed and Performance Checks",
    description:
      "We optimise code and assets to keep the landing page fast, stable, and reliable across devices.",
  },
  {
    title: "Mobile-First Layout",
    description:
      "We design with mobile behaviour in mind, ensuring strong readability and smooth interactions.",
  },
  {
    title: "A/B Test Variants",
    description:
      "We prepare alternate versions for structured testing to help refine the page over time.",
  },
  {
    title: "App or Integration Setup",
    description:
      "We set up the necessary apps or integrations required for the landing page to function properly.",
  },
] as const;

export const SHOPIFY_LANDING_PAGE_SERVICES_IMAGE = {
  src: "/images/2025/11/main_banner_landscape-1-1.webp",
  alt: "100xelevate shopify develepment agency banner image",
  width: 2564,
  height: 2489,
} as const;

export type ProcessItemData = {
  title: string;
  description: string;
};

export const SHOPIFY_LANDING_PAGE_PROCESS_ITEMS: readonly ProcessItemData[] = [
  {
    title: "1. Discovery and Research",
    description:
      "We review your product, offer, audience, and traffic source to understand the purpose of the page. This gives us a clear direction for structure, messaging, and user flow.",
  },
  {
    title: "2. UX and Wireframes",
    description:
      "We outline the page in simple frames, mapping each section in a logical order. The aim is to create a smooth path that supports clarity and helps visitors move toward action.",
  },
  {
    title: "3. Custom Design",
    description:
      "We design a clean, balanced layout aligned with your brand. Every visual element is shaped to support the message, improve readability, and build trust across devices.",
  },
  {
    title: "4. Shopify 2.0 Development",
    description:
      "We build the page with Shopify 2.0 standards, using modular sections that load quickly and can be updated easily. The page remains stable, fast, and mobile-ready.",
  },
  {
    title: "5. Testing and Launch",
    description:
      "We review performance across devices, check speed, refine interactions, and confirm structural accuracy. Once everything is ready, we publish the page and ensure a smooth handoff to your team.",
  },
] as const;

export type ShopifyFaqItem = {
  question: string;
  answer: string;
};


export const SHOPIFY_LANDING_PAGE_FAQS: readonly ShopifyFaqItem[] = [
  {
    question: "1. How long does it take to design a Shopify landing page?",
    answer:
      "A Shopify landing page usually takes 7 to 9 days to complete, depending on complexity, content, and required integrations. Our process includes UX planning, wireframes, custom design, Shopify 2.0 development, and performance checks to ensure the page is ready for paid traffic and conversion optimization.",
  },
  {
    question: "2. What is included in your Shopify landing page design service?",
    answer:
      "Our landing page service includes UX planning, wireframes, custom design, Shopify 2.0 sections, mobile-first layouts, performance optimization, and launch support. Each page is built to improve clarity, user experience, and conversion rate across paid campaigns and organic traffic sources.",
  },
  {
    question: "3. Can a custom landing page improve my Shopify store’s conversion rate?",
    answer:
      "Yes. A well-structured Shopify landing page reduces friction, highlights key offers, and guides visitors toward action. We use CRO principles, heatmap insights, and proven design patterns to help DTC brands increase conversions from Meta ads, TikTok ads, email campaigns, and product launch traffic.",
  },
  {
    question: "4. Do you build landing pages for paid ads and influencer traffic?",
    answer:
      "We design landing pages specifically for paid ads, ensuring the structure matches visitor intent and traffic temperature. Pages are optimized for Meta, TikTok, and Google campaigns, helping reduce bounce, improve message clarity, and increase the likelihood of purchase or lead capture.",
  },
  {
    question: "5. Will my Shopify landing page be mobile-optimized?",
    answer:
      "Yes. We design every landing page using a mobile-first approach because most DTC traffic comes from mobile devices. Layout, spacing, typography, and image optimization ensure a smooth, fast user experience that supports higher conversion rates on all screen sizes.",
  },
  {
    question: "6. Can I update the landing page myself after it is launched?",
    answer:
      "Yes. We build landing pages with flexible Shopify 2.0 sections, allowing your team to update text, images, offers, and modules without developer help. This makes ongoing optimization easier as campaigns evolve or new products are introduced.",
  },
  {
    question: "7. How much does a Shopify landing page design cost?",
    answer:
      "Pricing varies based on scope, integrations, and customization. We provide clear project estimates after reviewing your goals, offer structure, and required features. Both fixed-price and custom landing page design options are available for DTC brands of different sizes.",
  },
  {
    question: "8. Do you offer both landing page design and Shopify development?",
    answer:
      "Yes. Our team handles UX, UI, and Shopify 2.0 development end to end. This ensures the landing page is not only visually strong but also fast, scalable, and stable. We also manage integrations, tracking, app setup, and performance optimization.",
  },
  {
    question: "9. Can you redesign my existing landing page to improve performance?",
    answer:
      "We can refine or fully rebuild your current Shopify landing page. Our redesign process focuses on improving layout clarity, messaging hierarchy, speed, and mobile usability. These improvements help increase conversion rate and deliver more efficient results from paid traffic.",
  },
  {
    question: "10. Do you support A/B testing for landing pages?",
    answer:
      "Yes. We create A/B-ready layouts and alternative sections to help you test headlines, offers, structure, or creative. Pages can be tested through Shopify, Replo, ConvertFlow, or external CRO tools, allowing your brand to refine performance over time.",
  },
] as const;