import React from "react";
import { cn } from "@/utils/cn";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide" | "full";
}

export function Container({
  children,
  size = "default",
  className,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    default: "max-w-7xl",
    narrow: "max-w-5xl",
    wide: "max-w-[1600px]",
    full: "w-full",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto px-5 sm:px-8 lg:px-12",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
