import { ComponentProps, createElement, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/_utils";

const text = cva(["text-slate-950", "text-base"], {
  variants: {
    as: {
      h1: "",
      h2: "",
      h3: "",
      h4: "",
      h5: "",
      p: "",
    },
    size: {
      84: "text-[84px] leading-[128%] tracking-[-1.3px]",
      56: "text-[56px] leading-[120%] tracking-[-0.46px]",
      42: "text-[42px] leading-[120%] tracking-[-0.8px]",
      34: "text-[34px] leading-[140%] tracking-[-0.2px]",
      28: "text-[28px] leading-[140%] tracking-normal",
      18: "text-lg leading-[140%] tracking-normal",
      16: "text-base leading-[160%] tracking-normal",
      14: "text-sm leading-[160%] tracking-normal",
      13: "text-[13px] leading-normal tracking-normal",
    },
  },
  defaultVariants: {
    size: 16,
  },
});

interface HeadingProps
  extends ComponentProps<"h1" | "h2" | "h3" | "h4" | "h5"> {}
interface ParagraphProps extends ComponentProps<"p"> {}

interface TextProperties
  extends HeadingProps,
    ParagraphProps,
    VariantProps<typeof text> {
  children: ReactNode;
  [props: string]: any;
}

export const Text = ({
  as = "p",
  size,
  className,
  children,
  props,
}: TextProperties) => {
  return createElement(
    as as string,
    { className: cn(text({ as, size, className })), ...props },
    children
  );
};
