"use client";
import React, { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/hooks";

interface SideMenuProps {
  isMenuOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SideMenuProps> = ({ isMenuOpen, onClose }) => {
  const pathName = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 shadow-xl text-white ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} hoverEffectTranslate`}
    >
      <div
        ref={sidebarRef}
        className="min-w-72 max-w-96 h-full bg-black p-10 border-r border-r-shop-light-green flex flex-col gap-6"
      >
        <div className="flex items-center justify-between">
          <Logo className="text-white" spanClassName="group-hover:text-white" />
          <button onClick={onClose}>
            <X className="hover:text-shop-light-green hoverEffect" />
          </button>
        </div>
        <div className="space-y-3.5 font-semibold tracking-wide">
          {headerData?.map((item) => (
            <div key={item.title}>
              <Link
                href={item.href}
                onClick={onClose}
                className={cn(
                  "hover:text-shop-light-green hoverEffect",
                  pathName === item.href && "text-shop-light-green",
                )}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <SocialMedia iconClassName="hover:text-shop-light-green hover:border-shop-light-green hoverEffect" />
      </div>
    </div>
  );
};

export default SideMenu;
