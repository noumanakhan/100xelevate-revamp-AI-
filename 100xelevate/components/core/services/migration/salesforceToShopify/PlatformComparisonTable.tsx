import React from "react";

const capabilities = [
  {
    name: "Platform uptime",
    sfcc: "99% uptime",
    shopify: "99.99% uptime",
  },
  {
    name: "Commitment to commerce",
    sfcc: "Spread across multiple products (CRM + internal tools)",
    shopify: "Fully dedicated to commerce",
  },
  {
    name: "Checkout",
    sfcc: "Requires custom dev, longer release cycles",
    shopify: "Industry-leading, conversion-built, handles high volume",
  },
  {
    name: "Payments",
    sfcc: "Common gateways; wallets complex/costly",
    shopify: "Native payments ecosystem (Shop Pay, Audiences, protection tools)",
  },
  {
    name: "Flexible theme design",
    sfcc: "Complex, developer-reliant",
    shopify: "No-code/low-code/headless options",
  },
  {
    name: "Commerce-focused tools",
    sfcc: "Largely acquired, need integration",
    shopify: "Native tools designed to work together",
  },
  {
    name: "Global selling",
    sfcc: "Requires developer-led implementation",
    shopify: "Markets: localize from single backend",
  },
  {
    name: "Automation capabilities",
    sfcc: "Supports merchandising/fulfillment workflows",
    shopify: "Built-in automation across ops",
  },
  {
    name: "Speed",
    sfcc: "Akamai CDN, first-party infra",
    shopify: "Google Cloud + Cloudflare CDN + proprietary renderer",
  },
];

export default function PlatformComparisonTable() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Salesforce Commerce Cloud vs. Shopify
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Compare key enterprise capabilities between Salesforce Commerce Cloud and Shopify.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
          <div className="grid grid-cols-3 bg-gray-900 text-white font-semibold text-sm md:text-base py-4 px-6 md:px-8">
            <div>Capability</div>
            <div>Salesforce Commerce Cloud</div>
            <div>Shopify</div>
          </div>

          <div className="divide-y divide-gray-100">
            {capabilities.map((row, index) => (
              <div key={index} className="grid grid-cols-3 py-5 px-6 md:px-8 gap-4 text-xs md:text-sm">
                <div className="font-semibold text-gray-900">{row.name}</div>
                <div className="text-gray-600">{row.sfcc}</div>
                <div className="text-gray-900 font-medium">{row.shopify}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
