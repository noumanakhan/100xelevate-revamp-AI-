/**
 * Content and configuration for the Shopify UX & UI Design "Services we offer" section.
 */

export type ShopifyUxUiServiceOfferItem = {
  title: string;
  description: string;
};

export const SHOPIFY_UX_UI_SERVICE_OFFER_HEADING =
  "Shopify UX and UI Design Services We Offer";

export const SHOPIFY_UX_UI_SERVICE_OFFER_ACCORDION_LABEL = "Service details";

export const SHOPIFY_UX_UI_SERVICE_OFFER_ITEMS: readonly ShopifyUxUiServiceOfferItem[] = [
  {
    title: "Comprehensive UX and UI Design",
    description:
      "We refine key templates with clearer structure, modern visuals, and layouts that guide customers naturally through your store.",
  },
  {
    title: "Engaging Email Marketing Design",
    description:
      "We design branded email templates that support product highlights and encourage stronger engagement.",
  },
  {
    title: "Shopify App Design Excellence",
    description:
      "We create simple, intuitive app interfaces with organized flows and clean UI elements that improve ease of use.",
  },
  {
    title: "Interactive Prototyping for User Flows",
    description:
      "We build prototypes that map how customers move through your store, helping you review and adjust early in the process.",
  },
  {
    title: "Distinctive Branding and Identity Design",
    description:
      "We develop visual elements and style directions that keep your Shopify experience consistent and recognizable.",
  },
] as const;

export const SHOPIFY_UX_UI_SERVICE_OFFER_IMAGE = {
  src: "/images/2025/11/Group-1000004261-e1766516122642.webp",
  alt: "Core Design Services",
  width: 1276,
  height: 1328,
} as const;

/**
 * "Our Shopify UX and UI Design Process" section
 */

export type ShopifyUxUiProcessStep = {
  title: string;
  description: string;
};

export const SHOPIFY_UX_UI_PROCESS_HEADING = "Our Shopify UX and UI Design Process";

export const SHOPIFY_UX_UI_PROCESS_STEPS: readonly ShopifyUxUiProcessStep[] = [
  {
    title: "1. Discovery and Research",
    description:
      "We review your goals, products, and customer behavior to identify gaps in your current Shopify experience and set a clear UX direction.",
  },
  {
    title: "2. UX Planning and Concept Development",
    description:
      "We define page structure, user flows, and content to create a smoother path through your store.",
  },
  {
    title: "3. Prototyping and Interaction Design",
    description:
      "We build low-fidelity and high-fidelity prototypes that visualize layout behavior, key interactions, and overall user movement.",
  },
  {
    title: "4. UI Design and Visual System",
    description:
      "We design clean, consistent interfaces using balanced typography, spacing, color systems, and reusable components.",
  },
  {
    title: "5. Final Handoff and Implementation Support",
    description:
      "We prepare organized design files and assist your developers to ensure accurate implementation of the Shopify UX and UI Design work.",
  },
] as const;
