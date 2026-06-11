import * as React from "react";
import { cn } from "../../utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/14 bg-white/8 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-white/78 uppercase backdrop-blur-md",
        className
      )}
      {...props}
    />
  );
}
