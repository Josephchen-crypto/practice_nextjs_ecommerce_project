"use client";

import { AlignLeft } from "lucide-react";
import SideMenu from "./SideMenu";
import { useState } from "react";

const MobileMenu = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden cursor-pointer"
        onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
      >
        <AlignLeft className="hover:text-dark hoverEffect" />
      </button>
      <div className="md:hidden">
        <SideMenu
          isMenuOpen={isSideMenuOpen}
          onClose={() => setIsSideMenuOpen(false)}
        />
      </div>
    </>
  );
};

export default MobileMenu;
