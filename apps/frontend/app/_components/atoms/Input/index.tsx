import { cn } from "@/app/_utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps } from "react";

const input = cva(
  ["rounded-md", "border", "boder-gray-200", "focus:outline-sky-500", "w-full"],
  {
    variants: {
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-3 py-1 text-base",
        lg: "px-4 py-2 text-[18px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

interface InputProperties
  extends Omit<ComponentProps<"input">, "size">, VariantProps<typeof input> {
  type?: "text" | "number" | "tel";
  placeholder?: string;
  [props: string]: any;
}
export const Input = ({
  size,
  type = "text",
  placeholder = "Placeholder text.",
  className,
  props,
}: InputProperties) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn(input({ size, className }))}
      {...props}
    />
  );
};
