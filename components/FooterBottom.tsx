import React from "react";
import Logo from "./Logo";
import QuickLinks from "./QuickLinks";
import SocialMedia from "./SocialMedia";
import { SubText } from "./ui/text";

const FooterBottom = () => {
  return (
    <div>
      <div className="py-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex-1 space-y-5">
          <Logo />
          <SubText className="text-gray-600 text-sm">
            Discover curated furniture collections at JosephChen, blending style
            and comfort to elevate your living space
          </SubText>
          <SocialMedia
            className="justify-start text-dark/60"
            iconClassName="border-1 border-gray-300 hover:text-shop-light-green hover:border-shop-light-green hoverEffect"
          />
        </div>
        <div className="flex-1">
          <QuickLinks />
        </div>
      </div>
      <div className="text-center">底部的协议声明</div>
    </div>
  );
};

export default FooterBottom;
