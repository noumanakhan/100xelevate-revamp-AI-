import React from "react";
import { ButtonLink } from "@/components/shared/ButtonLink";

const propsCards = [
  {
    title: "Proven Enterprise Migration Experience",
    description: "Hundreds of successful replatforming projects completed with full data integrity and zero revenue loss.",
  },
  {
    title: "Built Around Your Business",
    description: "Tailored migration strategies designed around your unique catalog, ERP integrations, and long-term growth goals.",
  },
  {
    title: "Hands-On, Accountable Support",
    description: "Direct access to senior Shopify architects and project managers from initial scoping to post-launch optimization.",
  },
];

export default function WhyChoose100xElevate() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Why Choose 100xelevate?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {propsCards.map((card, index) => (
            <div key={index} className="bg-[#f7f7f7] p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <ButtonLink href="/book-a-demo" variant="solid">
            Book a free consultation
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
