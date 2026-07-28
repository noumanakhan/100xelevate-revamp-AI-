import React from "react";
import Image from "next/image";

const problems = [
  {
    title: "Poor Navigation Experience",
    description:
      "Lack of clear categories or shopping guidance makes it harder for customers to find what they need quickly.",
  },
  {
    title: "Weak Value Proposition",
    description:
      "Generic messaging fails to communicate unique benefits or create a connection, leaving potential customers unsure.",
  },
  {
    title: "Legibility Issues",
    description:
      "Poor text contrast and font choices make your content hard to read, frustrating customers, and increasing bounce rates.",
  },
  {
    title: "Confusing Visual Hierarchy",
    description:
      "Poorly placed logos or too much header space push important products off-screen, making them hard to find.",
  },
  {
    title: "Missing Trust Elements",
    description:
      "Missing shipping information, guarantees, or social proof adds friction and raises purchase anxiety.",
  },
  {
    title: "Inconsistent Layout Spacing",
    description:
      "Irregular gaps between sections create a disjointed experience that feels unprofessional and turns customers away.",
  },
  {
    title: "Incomplete Product Information",
    description:
      "Lack of clear pricing, variations, and benefits makes it hard for customers to make purchase decisions.",
  },
];

const solutions = [
  {
    title: "Prominent Value Proposition",
    description:
      'Clear messaging like "FREE shipping" establishes value and removes common objections.',
  },
  {
    title: "Streamlined Navigation",
    description:
      "Clean, simple navigation ensures customers can find what they're looking for with ease.",
  },
  {
    title: "Compelling Product Headlines",
    description:
      "Benefit-driven headlines with supporting copy help customers make quicker purchase decisions.",
  },
  {
    title: "Strategic Calls-to-Action (CTAs)",
    description:
      "Multiple action points guide customers based on their needs, improving their shopping experience.",
  },
  {
    title: "Consistent Visual Design",
    description:
      "Proper spacing and alignment ensure a clean layout that's easy on the eyes and easy to navigate.",
  },
  {
    title: "Enhanced Product Selection",
    description:
      "Suggestions and related products help customers explore more, driving higher order values.",
  },
  {
    title: "Clear Product Information",
    description:
      "Complete product details reduce friction and help customers confidently make their purchase.",
  },
  {
    title: "Trust-Building Elements",
    description:
      "Clear indicators like shipping info and ratings help create trust and reduce hesitation.",
  },
  {
    title: "Accessible Chat",
    description:
      "Live chat reduces friction and provides immediate answers, keeping customers engaged and ready to buy.",
  },
];

interface ListColumnProps {
  items: { title: string; description: string }[];
  startIndex?: number;
}

const ListColumn = ({ items, startIndex = 1 }: ListColumnProps) => (
  <div className="flex flex-col bg-white h-fit wxl:pl-[10px] wxl:p-[30px] pl-0 p-5 border border-[#0000001A]">
    <ol start={startIndex} className="list-decimal pl-10">
      {items.map((item, i) => (
        <li
          key={i}
          className={`py-[10px] text-[#707070] xl:text-[14px] text-[14px] xl:leading-[20px] leading-[20px] md:text-[12px] md:leading-[16px] font-normal ${
            i < items.length - 1 ? "border-b border-[#E0E0E0]" : ""
          }`}
        >
          <b>{item.title}&nbsp;</b>
          <span>{item.description}</span>
        </li>
      ))}
    </ol>
  </div>
);

export const RecoverLost = () => {
  return (
    <section className="bg-[#F7F7F7] md:px-8 px-4">
      <div className="max-w-[1400px] mx-auto flex flex-col wmd:gap-[30px] md:gap-[64px] gap-8 xl:py-[86px] md:py-[96px] py-8 ">
        {/* Heading + description */}
        <h2 className="w-full md:max-w-[867px] mx-auto xl:text-[48px] xl:leading-[58px]  md:text-[40px] md:leading-[46px] text-[32px] leading-[40px] text-center font-semibold">
          Recover Lost Sales Quickly With Our Actionable Conversion Insights
        </h2>
        <p className="text-[#707070] md:text-[16px] md:leading-[20px] text-[14px] leading-[22px] max-w-[625px] w-full mb-5 mx-auto text-center">
          Our comprehensive reports show exactly where your store is struggling
          and provide simple, immediate solutions to boost sales within your
          first week.
        </p>

        {/* Grid: [before list] [before img] [after img] [after list] */}
        <div className="grid grid-cols-1 md:grid-cols-2 wmd:grid-cols-4 gap-5 mt-[30px]">
          {/* Before — problems */}
          <ListColumn items={problems} startIndex={1} />

          {/* Before image */}
          <div className="flex items-start justify-center  my-auto">
            <Image
              src="https://100xelevate.com/wp-content/uploads/2025/11/before-fb.png"
              alt="Image 1 (before update): Mobile view of FIREBEASTS Trainer Laces collection with reflective rope lace and navigation bar."
              width={388}
              height={794}
              className="w-full max-w-[90%] h-auto"
            />
          </div>

          {/* After image */}
          <div className="flex items-start justify-center  my-auto">
            <Image
              loading="lazy"
              src="https://100xelevate.com/wp-content/uploads/2025/11/after-fb.png"
              alt="Image 2 (after update): Updated mobile view of FIREBEASTS Trainer Laces collection with descriptions, 'Filter' options, and pricing."
              width={392}
              height={802}
              className="w-full max-w-[90%] h-auto"
            />
          </div>

          {/* After — solutions */}
          <ListColumn items={solutions} startIndex={1} />
        </div>
      </div>
    </section>
  );
};
