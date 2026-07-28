import {
  FAQAccordion,
  type FAQItem,
} from "@/components/core/services/FAQAccordion";

type FAQsSectionProps = {
  faqs?: readonly FAQItem[];
  answerAdditionlClass?: string;
};

export const FAQsSection = ({
  faqs,
  answerAdditionlClass,
}: FAQsSectionProps) => {
  return (
    <section className="w-full md:px-8 px-4">
      <div className="w-full max-w-300 mx-auto md:py-[86px] py-[32px] flex flex-col xl:gap-[50px] lg:gap-[64px] md:gap-[32px] gap-[16px]">
        {/* Heading */}
        <h2 className="xl:text-[48px] md:text-[40px] text-[32px] font-semibold md:text-center text-start xl:leading-[58px] md:leading-[46px] leading-[40px]">
          Frequently Asked Questions
        </h2>

        {/* Accordion */}
        <FAQAccordion faqs={faqs} answerAdditionlClass={answerAdditionlClass} />
      </div>
    </section>
  );
};
