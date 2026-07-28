type TabButtonsProps = {
  tabs: { label: string }[] | string[];
  activeTab: number;
  onChange: (index: number) => void;
  buttonColor?: string;
};

export const TabButtons = ({
  tabs,
  activeTab,
  onChange,
  buttonColor = "bg-[#F7F7F7]",
}: TabButtonsProps) => {
  const labels = tabs.map((t) => (typeof t === "string" ? t : t.label));

  return (
    <>
      <span className="text-[10px] text-[#707070] flex justify-end items-end md:hidden mb-1">
        Scroll Right to see more &gt;&gt;
      </span>
      <div className="w-full min-w-0 overflow-x-auto overscroll-x-contain scrollbar-none">
        <div className="inline-flex min-w-full flex-row justify-center gap-5">
          {labels.map((label, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={activeTab === i}
              onClick={() => onChange(i)}
              className={`flex shrink-0 items-center justify-center whitespace-nowrap xl:px-8.75 xl:py-3.75 px-2.5 py-4 xl:text-[16px] lg:text-[14px] text-[12px] font-medium text-center rounded-none transition-all duration-300 ${
                activeTab === i
                  ? "bg-black text-white border-black"
                  : `${buttonColor} text-black hover:bg-black hover:text-white hover:border-black`
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
