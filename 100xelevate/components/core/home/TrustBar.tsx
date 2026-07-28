import Image from "next/image";

const badges = [
  {
    src: "/images/2025/10/review.svg",
    alt: "5-star reviews on Shopify",
    width: 124,
    height: 46,
  },
  {
    src: "/images/2025/10/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-1.svg",
    alt: "Official Shopify partner",
    width: 198,
    height: 56,
  },
  {
    src: "/images/2025/10/google.svg",
    alt: "5-star Google reviews from verified clients",
    width: 134,
    height: 46,
  },
  {
    src: "/images/2025/10/trustpilot.svg",
    alt: "5-star Trustpilot reviews from customers",
    width: 134,
    height: 46,
  },
  {
    src: "/images/2025/10/clutch.svg",
    alt: "Top-rated agency on Clutch with 5-star reviews",
    width: 134,
    height: 46,
  },
  {
    src: "/images/2025/10/shopify_platinum.svg",
    alt: "Shopify Platinum Partner agency",
    width: 268,
    height: 87,
  },
];

export default function TrustBar() {
  return (
    <div className="bg-[#F7F7F7] py-6">
      <div className="container-site">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {badges.map((badge) => (
            <Image
              key={badge.src}
              src={badge.src}
              alt={badge.alt}
              width={badge.width}
              height={badge.height}
              className="h-10 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
