import Image from "next/image";
import Link from "next/link";

type CaseStudyCardProps = {
  data: {
    slug: string;
    name: string;
    cardDescription: string;
    card: {
      image: string;
      alt: string;
      width: number;
      height: number;
    };
  };
};

export default function CaseStudyCard({
  data,
}: CaseStudyCardProps) {
  return (
    <Link href={`/our-work/${data.slug}`} className="group flex flex-col gap-[8px]">
      <div className="overflow-hidden bg-[#F7F7F7]">
        <Image
          src={data.card.image}
          alt={data.card.alt}
          width={data.card.width}
          height={data.card.height}
          className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-[12px]">
        <h2 className="text-[16px] font-medium leading-[1.2] text-black">
          {data.name}
        </h2>
        <p className="mt-[6px] text-[14px] leading-widget text-[#6f6f6f]">
          {data.cardDescription}
        </p>
      </div>
    </Link>
  );
}
