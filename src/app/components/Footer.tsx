"use client";
import clsx from "clsx";
import Image from "next/image";
import logo from "@/app/assests/brandImgs/Logo-noBG.png";
import React, { useContext, useEffect, useRef, useState } from "react";
import { mobileMenuData as data } from "@/app/data/textData";
import { LangContext } from "../context/langContext";
import { ThemeContext } from "../context/themeContext";
import SocialMedia from "./SocialMedia/SocialMedia";

function Footer() {
  const [footerVisible, setFooterVisible] = useState(false);
  const socialMediaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setFooterVisible(entry.isIntersecting);
    });

    if (socialMediaRef.current) {
      observer.observe(socialMediaRef.current);
    }

    return () => observer.disconnect();
  }, [socialMediaRef]);

  const { lang } = useContext(LangContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
      <footer
        className={clsx(
          "static bottom-0 w-full flex flex-col justify-start md:flex-row p-10 lg:p-12 gap-5 bg-gradient-to-br bg-opacity-30 rounded-lg shadow-md",
          {
            "from-yellow-900 to-darkBackground": theme === "dark",
            "from-yellow-400 to-lightBackground": theme === "light",
          }
        )}
      >
        <section className="flex flex-col justify-center items-center h-full w-full">
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
        <section className="flex flex-col lg:flex-row justify-between md:justify-evenly items-center h-full w-full">
          <section className="flex flex-col justify-center item-center w-fit px-5">
            <h4 className="text-base lg:text-lg w-full text-center">
              {lang === "es"
                ? "Contáctanos por estos medios"
                : "Get in contact here"}
            </h4>
            <div
              ref={socialMediaRef}
              className="flex justify-center items-center my-5 w-full"
            >
              <SocialMedia footerVisible={footerVisible} />
            </div>
            <div className="flex justify-center items-center w-full">
              <a
                href={"mailto:transportedimotta@gmail.com"}
                target="_blank"
                rel="noreferrer"
                className="anchor"
              >
                transportedimotta@gmail.com
              </a>
            </div>
          </section>
          <nav className="flex justify-center items-center ">
            <ul className="grid gap-3 grid-cols-3 w-full mt-5 lg:mt-0 lg:justify-start lg:w-fit px-5 text-xs md:grid-cols-2 lg:grid-cols-1">
              {data?.map((element) => {
                return (
                  <li
                    key={element.en}
                    className={`w-full flex items-start justify-start py-[0.2px] cursor-pointer whitespace-nowrap`}
                  >
                    <a
                      href={element.href}
                      className="hover:underline hover:text-blue-300"
                    >
                      {lang === "es" ? element.es : element.en}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
