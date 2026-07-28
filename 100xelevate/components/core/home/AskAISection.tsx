import { ButtonLink } from "@/components/shared/ButtonLink";

interface AskAISectionProps {
  text?: string;
  buttonName?: string;
  url?: string;
  bgColor?: string;
}

export default function AskAISection({
  text = "See what's holding your website back from converting",
  buttonName = "Book a call",
  url = "/book-a-demo",
  bgColor = "#F7F7F7",
}: AskAISectionProps) {
  return (
    <section
      className="w-full px-[16px] sm:py-[40px] py-[32px]"
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center gap-4 ">
        <h2 className="w-full text-[24px] md:text-[28px] leading-[32px] md:leading-[36px] font-semibold md:max-w-[75%]">
          {text}
        </h2>
        <div className="w-full max-w-[13%] ">
          <ButtonLink
            href={url}
            className="h-[49px] w-[149px] hover:bg-white! hover:text-black! border hover:border-black!  "
          >
            {buttonName}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
