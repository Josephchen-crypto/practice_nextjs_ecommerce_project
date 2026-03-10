import { cn } from "@/lib/utils";
import React from "react";

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-2xl md:text-4xl font-bold text-shop-dark-green capitalize tracking-wide font-sans",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export { Title };
