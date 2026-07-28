import React from "react";

const trustBadges = [
  {
    title: "Level 1 PCI DSS compliant",
    description: "Highest level of global payment security certification built natively into every Shopify storefront.",
  },
  {
    title: "Publishes a Transparency Report",
    description: "Regular open reporting on platform security, data privacy, and infrastructure integrity.",
  },
  {
    title: "SOC 2 Type II and SOC 3 certified",
    description: "Independently audited enterprise compliance for security, availability, and confidentiality.",
  },
  {
    title: "Privacy-First by Design (GDPR/CCPA)",
    description: "Built-in customer data governance meeting strict European and US privacy standards.",
  },
];

export default function SecuritySection() {
  return (
    <section className="bg-[#f7f7f7] py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Built to Stay Secure Over Time
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Unlike Salesforce&apos;s manual architecture upgrades, Shopify handles security patches, global compliance, and infrastructure updates centrally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBadges.map((badge, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{badge.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
