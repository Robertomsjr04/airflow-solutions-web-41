
import React from "react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  variant?: "default" | "subtle" | "dark";
}

const SectionDivider = ({
  className,
  variant = "default",
}: SectionDividerProps) => {
  // Define variant styles
  const variantStyles = {
    default: "bg-gray-200 my-0",
    subtle: "bg-gray-100 my-0",
    dark: "bg-gray-300 my-0",
  };

  return (
    <div className="w-full py-0 relative">
      <Separator
        className={cn(
          "h-[1px] w-full",
          variantStyles[variant],
          className
        )}
        decorative
      />
    </div>
  );
};

export { SectionDivider };
