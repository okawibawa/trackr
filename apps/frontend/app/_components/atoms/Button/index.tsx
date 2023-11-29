import { cn } from "@/app/_utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";

const button = cva(["text-neutral-50", "whitespace-nowrap", "rounded-full"], {
  variants: {
    variant: {
      primary: "bg-sky-500 hover:bg-sky-600",
      secondary: "bg-neutral-400 hover:bg-neutral-500",
      outline:
        "bg-transparent border border-sky-500 text-sky-500 hover:bg-sky-50",
      ghost: "bg-transparent text-sky-500 hover:bg-sky-50",
      error: "bg-red-500 hover:bg-red-600",
      warning: "bg-yellow-500 hover:bg-yellow-600",
    },
    size: {
      sm: "text-sm py-1 px-2",
      md: "text-base py-2 px-4",
      lg: "text-[18px] py-3 px-6",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonProperties
  extends ComponentProps<"button">,
    VariantProps<typeof button> {
  onClick?: () => void;
  [props: string]: any;
}

export const Button = ({
  variant,
  size,
  children,
  className,
  onClick,
  props,
}: ButtonProperties) => {
  return (
    <button
      onClick={onClick}
      className={cn(button({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};
