"use client";
import React, { useContext, useEffect, useState } from "react";
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
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 110);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`flex items-center justify-between sticky top-0 shadow-lg h-16 md:h-20 ${
        theme === "dark" ? "dark-theme bg-darkBackground/75 shadow-gray-900" : "light-theme bg-lightBackground/75"
      } ${isScrolling?"opacity-60 hover:opacity-100":""}`}
    >
      <Image
        src={logo}
        className={`hidden md:flex -translate-y-3 ${theme === "dark" ? "" : "invert"}`}
        alt="logo"
        width={300}
        height={150}
        style={{clipPath: "inset(50px 35px 25px 35px)"}}
      />
      <Image
        src={logoSmall}
        className={`ml-5 mt-1 md:hidden flex ${theme === "dark" ? "invert" : ""}`}
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
      <div className="md:hidden flex absolute top-3 right-5 items-center justify-around">
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default Navbar;
