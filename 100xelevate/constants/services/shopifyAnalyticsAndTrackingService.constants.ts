
export type ShopifyAnalyticsServicesItem = {
  title: string;
  description: string;
};

export const SHOPIFY_ANALYTICS_SERVICES_ACCORDION_LABEL = "Accordion. Open links with Enter or Space, close with Escape, and navigate with Arrow Keys";

export const SHOPIFY_ANALYTICS_ITEMS: readonly ShopifyAnalyticsServicesItem[] = [
  {
    title: "GA4 Setup and Ecommerce Tracking",
    description:
      "Full GA4 setup with ecommerce events for product views, add-to-cart, checkout, and purchases, giving accurate performance tracking.",
  },
  {
    title: "Google Tag Manager Configuration",
    description:
      "Flexible tag management that supports new events, pixels, and marketing platforms without constant theme changes or code edits.",
  },
  {
    title: "Meta and TikTok Conversion Tracking",
    description:
      "Conversion tracking for Meta and TikTok, improving attribution, retargeting accuracy, and reporting across paid channels.",
  },
  {
    title: "Shopify Checkout and Purchase Events",
    description:
      "Reliable tracking of checkout steps and completed purchases, reducing data gaps and ensuring revenue numbers stay accurate.",
  },
  {
    title: "Custom Event and Data Layer Setup",
    description:
      "Custom events and data layers for actions like upsells, subscriptions, or forms, giving insight into behaviour beyond pageviews.",
  },
  {
    title: "Server-Side and Client-Side Tracking",
    description:
      "Server-side or client-side setups, based on store needs, to improve data quality, conversion accuracy, and long-term performance.",
  },
  {
    title: "Cross-Domain and UTM Tracking",
    description:
      "Cross-domain and UTM tracking to maintain attribution across landing pages, apps, and external funnels without losing campaign data.",
  },
  {
    title: "Testing, Audit, and Validation",
    description:
      "Testing and validation to confirm all events fire correctly, avoid duplicates, and maintain consistent reporting across devices.",
  },
  {
    title: "Analytics Review and Reporting Setup",
    description:
      "Clear reporting views for performance, attribution, and funnels so your team can make decisions without digging through raw data.",
  },
] as const;

export const SHOPIFY_ANALYTICS_SERVICES_IMAGE = {
  src: "/images/2025/10/image-Photoroom-17-2-1.png",
  alt: "Shopify mobile analytics dashboard showing performance and conversion rate metrics",
  width: 2564,
  height: 2489,
} as const;


export type ProcessItemData = {
  title: string;
  description: string;
};

export const SHOPIFY_ANALYTICS_PROCESS_ITEMS: readonly ProcessItemData[] = [
  {
    title: "1. Review and Plan",
    description:
      "We assess your current tracking, traffic, and checkout flow, then identify the exact events and revenue metrics your brand needs to measure growth correctly.",
  },
  {
    title: "2. Configure and Install",
    description:
      "We set up GA4 and core pixels through GTM or native integrations, building a reliable measurement framework that supports future campaigns and scaling.",
  },
  {
    title: "3. Track Key Events",
    description:
      "We configure ecommerce actions, including product views, add-to-cart, checkout steps, and purchases, creating visibility across the entire buying journey.",
  },
  {
    title: "4. Test and Verify",
    description:
      "We confirm events fire properly across devices and browsers, correct duplicates or gaps, and ensure accurate order and revenue tracking inside analytics.",
  },
  {
    title: "5. Set Up Reporting",
    description:
      "We prepare reporting views and dashboards so you can clearly see performance, understand where customers convert, and identify profitable channels.",
  },
  {
    title: "6. Train and Support",
    description: "We show your team how to read results, maintain events, and adapt tracking as products and campaigns evolve, keeping data accurate as you grow."
  },
] as const;

export type ShopifyFaqItem = {
  question: string;
  answer: string;
};


export const SHOPIFY_ANALYTICS_FAQS: readonly ShopifyFaqItem[] = [
  {
    question: "1. Will Shopify Analytics and Tracking Setup work on every Shopify plan?",
    answer:
      "Yes. GA4, Google Tag Manager, Meta, and TikTok tracking methods work on all Shopify plans, including Basic. We adapt installation to your store type and checkout settings, so every tracking event is captured accurately and stays future-proof as you grow.",
  },
  {
    question: "2. Can Shopify analytics fix older incorrect data from before setup?",
    answer:
      "No tracking solution can correct historic data, but we replace unreliable measurements with verified events going forward. This ensures future revenue, attribution, and performance reporting are accurate, consistent, and aligned with Shopify and GA4 ecommerce tracking standards.",
  },
  {
    question: "3. Why do Shopify, GA4, Meta, and TikTok show different tracking numbers?",
    answer:
      "Each platform uses different attribution windows, tracking rules, and conversion logic. We align Shopify metrics with GA4 ecommerce and advertising platforms to reduce discrepancies so performance decisions are based on verified, consistent data rather than conflicting attribution models.",
  },
  {
    question: "4. Do I really need server-side tracking for Shopify analytics?",
    answer:
      "Not always. Server-side tracking is valuable when your brand depends heavily on paid acquisition, multi-channel attribution, or privacy-restricted traffic. We recommend server-side solutions based on scale, markets, compliance, and the accuracy required to evaluate campaign results.",
  },
  {
    question: "5. Does Shopify already track conversions automatically?",
    answer:
      "Shopify tracks orders, but full analytics requires GA4 ecommerce measurement, Google Tag Manager, Meta Pixel, and event-level tracking. This reveals user behaviour, abandonment points, and channel attribution, which basic Shopify analytics cannot provide at a conversion or funnel level.",
  },
  {
    question: "6. Can you set up GA4, Google Tag Manager, Meta Pixel, TikTok Pixel, and CAPI?",
    answer:
      "Yes. We configure GA4, GTM, Meta Pixel, Conversion API, TikTok events, and other marketing pixels. Each setup includes ecommerce tracking, real conversion measurement, and accurate attribution across campaigns, channels, devices, and user journeys in Shopify.",
  },
  {
    question: "7. Can this track subscription orders, upsells, forms, or custom events?",
    answer:
      "Yes. We configure data layers and custom events for subscription orders, post-purchase upsells, newsletters, forms, or any funnel action. This gives full visibility into revenue, engagement, and purchasing behaviour across standard and non-standard Shopify customer flows.",
  },
  {
    question: "8. Can analytics show which ads and campaigns are actually profitable?",
    answer:
      "Yes. We build attribution reporting that identifies profitable channels, ROAS, and revenue-driving campaigns instead of relying on clicks or impressions. This improves advertising decisions, removes wasted spend, and provides clarity across Meta, TikTok, Google, and Shopify results.",
  },
  {
    question: "9. How long does Shopify Analytics and Tracking Setup usually take?",
    answer:
      "A complete setup takes about one to two weeks, depending on store complexity, checkout configuration, and the number of custom events required. Complex tracking, such as server-side, subscription flows, or multi-currency stores, may require a longer implementation timeline.",
  },
  {
    question: "10. Will analytics continue working after theme updates or Shopify checkout changes?",
    answer:
      "Yes. We build tracking designed to survive theme changes, app updates, and checkout upgrades. Our structure separates tracking logic from theme code, ensuring GA4, GTM, Meta, TikTok, and ecommerce events remain reliable as your Shopify store evolves.",
  },
] as const;