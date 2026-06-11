import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-[#d6a85f] text-slate-950 hover:bg-[#e3b97c] border-[#d6a85f]/70",
  secondary:
    "bg-white/10 text-white hover:bg-white/14 border-white/16 backdrop-blur-md",
  ghost:
    "bg-transparent text-white/78 hover:text-white hover:bg-white/8 border-transparent",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: Variant;
}

export function Button({
  asChild = false,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6a85f]/70 disabled:pointer-events-none disabled:opacity-50",
        styles[variant],
        className
      )}
      {...props}
    />
  );
}
