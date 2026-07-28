import Image from "next/image";

export default function PartnerBadges() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-site">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <Image
            src="/images/2025/02/Group-2.png"
            alt="Shopify Partner badge for e-commerce services"
            width={1358}
            height={578}
            className="h-16 w-auto object-contain"
          />
          <Image
            src="/images/2025/02/image-7.png"
            alt="Shopify Plus Partner badge for advanced e-commerce development"
            width={950}
            height={300}
            className="h-12 w-auto object-contain"
          />
          <Image
            src="/images/2025/02/Group-1.png"
            alt="Klaviyo Partner badge for email and SMS marketing"
            width={2181}
            height={867}
            className="h-12 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
