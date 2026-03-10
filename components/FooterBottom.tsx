import React from "react";
import Logo from "./Logo";
import QuickLinks from "./QuickLinks";
import SocialMedia from "./SocialMedia";

const FooterBottom = () => {
  return (
    <div>
      <div className="border-b flex items-start gap-10 py-15">
        <div className="flex-1 space-y-5">
          <Logo />
          <p>
            Discover curated furniture collections at JosephChen, blending style
            and comfort to elevate your living space
          </p>
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
