"use client";
import clsx from "clsx";
import Image from "next/image";
import logo from "@/app/assests/brandImgs/Logo-noBG.png";
import React, { useContext } from "react";
import { LangContext } from "../context/langContext";
import { ThemeContext } from "../context/themeContext";

function Footer() {
  const { lang } = useContext(LangContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
      <footer
        className={clsx(
          "static bottom-0 w-full flex flex-col justify-start md:flex-row p-10 lg:p-20 gap-5 bg-gradient-to-br bg-opacity-30 rounded-lg shadow-md",
          {
            "from-yellow-900 to-darkBackground": theme === "dark",
            "from-yellow-400 to-lightBackground": theme === "light",
          }
        )}
      >
        <section className="flex flex-col justify-center items-center h-full w-full bg-red-500">
          <Image
            src={logo}
            className={`flex -translate-y-3 ${
              theme === "dark" ? "" : "invert"
            }`}
            alt="logo"
            width={300}
            height={150}
            style={{ clipPath: "inset(50px 35px 25px 35px)" }}
          />
        </section>
        <section className="flex flex-col justify-center items-center h-full w-full bg-blue-500">
          <nav>Nav</nav>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
