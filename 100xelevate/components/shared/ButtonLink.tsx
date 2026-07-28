import Link from "next/link";
import type { ComponentProps } from "react";

export type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: "solid" | "outlined" | "light";
  className?: string;
};

const base =
  "relative inline-flex items-center justify-center gap-2 font-medium tracking-[0.01em] rounded-full overflow-hidden transition-all duration-200";

const variantClass: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  solid:
    "bg-black text-white text-[15px] px-[20px] py-[12px] h-[39px] hover:scale-[1.02]",
  outlined:
    "h-[43px] border-[2px] border-black bg-transparent text-black text-[15px] px-[20px] py-[12px] h-[39px] hover:scale-[1.02]",
  light:
    "bg-white text-black text-[15px] px-[20px] py-[12px] h-[39px] hover:scale-[1.02]",
};

export function ButtonLink({
  variant = "solid",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={[base, variantClass[variant], className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
