"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import WebNav from "./WebNav";
import logo from "@/app/assests/brandImgs/Logo-noBG.png";
import logoSmall from "@/app/assests/brandImgs/Small-black.png";
import MobileNav from "./MobileNav";
import ToggleTheme from "../ToggleTheme";
import { ThemeContext } from "@/app/context/themeContext";
import ToggleLang from "../ToggleLang";

function Navbar() {
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`flex items-center justify-between h-24 relative ${
        theme === "dark" ? "dark-theme" : "light-theme"
      }`}
    >
      <Image
        src={logo}
        className={`mt-5 hidden md:flex ${theme === "dark" ? "" : "invert"}`}
        alt="logo"
        width={400}
        height={200}
      />
      <Image
        src={logoSmall}
        className={`ml-5 md:hidden flex ${theme === "dark" ? "invert" : ""}`}
        alt="logo"
        width={100}
        height={50}
      />
      <div className="hidden md:flex items-center justify-end mr-20">
        <WebNav />
      </div>
      <div className="hidden md:flex absolute top-2 right-2 items-center justify-around">
        <ToggleTheme />
        <ToggleLang />
      </div>
      <div className="md:hidden flex absolute top-6 right-5 items-center justify-around">
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default Navbar;
