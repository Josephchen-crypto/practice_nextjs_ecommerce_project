import React from "react";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import Container from "./Container";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavoritesIcon from "./FavoritesIcon";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";

const Header = async () => {
  const user = await currentUser();
  console.log(user, "dont have user");

  return (
    <header className="bg-white py-5 border-b border-black/10">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className="flex gap-5 w-auto items-center justify-end">
          <SearchBar />
          <CartIcon />
          <FavoritesIcon />
          {/* ClerkLoaded is used to ensure that the Clerk components are loaded before rendering */}
          <ClerkLoaded>
            {/* Render UserButton if user is signed in */}
            <SignedIn>
              <UserButton />
            </SignedIn>
            {/* Render SignIn if user is not signed in */}
            {!user && <SignIn />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
