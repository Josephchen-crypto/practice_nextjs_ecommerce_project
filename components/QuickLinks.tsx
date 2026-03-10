import { title } from "process";
import React from "react";

const quickLinks = [
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
  {
    title: "Privacy Policy",
    href: "/privacy",
  },
  {
    title: "Terms of Service",
    href: "/terms",
  },
  {
    title: "FAQ",
    href: "/faq",
  },
  {
    title: "Support",
    href: "/support",
  },
];

const QuickLinks = () => {
  return (
    <div>
      <h2 className="font-semibold mb-5">Quick Links</h2>
      <ul className=" space-y-2">
        {quickLinks.map((link, index) => (
          <li key={index}>
            <a
              className="text-sm text-gray-600 hover:text-shop-dark-green transition-colors hoverEffect"
              href={link.href}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
