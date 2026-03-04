"use client";

import { headerData } from "@/constants/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathName = usePathname();
  return (
    <div className="hidden md:inline-flex gap-7 text-sm font-semibold text-light">
      {headerData?.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={cn(
            "hover:text-shop-light-green hoverEffect relative group",
            pathName === item.href && "text-shop-light-green",
          )}
        >
          {item.title}
          <span
            className={cn(
              "absolute bottom-0 left-0 w-full h-0.5 bg-shop-light-green transform transition-transform duration-300 ease-in-out",
              pathName === item.href
                ? "scale-x-100"
                : "scale-x-0 group-hover:scale-x-100",
            )}
          />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
