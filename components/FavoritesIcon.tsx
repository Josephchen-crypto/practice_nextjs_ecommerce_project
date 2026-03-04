import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

const FavoritesIcon = () => {
  return (
    <Link href="/cart" className="group relative">
      <Heart className="w-5 h-5 hover:text-shop-light-green hoverEffect" />
      <span className="text-white bg-shop-dark-green absolute -top-1 -right-1 text-xs rounded-full px-1 font-semibold flex items-center justify-center">
        0
      </span>
    </Link>
  );
};

export default FavoritesIcon;
