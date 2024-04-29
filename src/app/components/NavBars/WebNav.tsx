import React, { useContext } from "react";
import { mobileMenuData as data } from "@/app/data/textData";
import { ThemeContext } from "@/app/context/themeContext";
import { LangContext } from "@/app/context/langContext";

function WebNav() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  return (
    <nav className="w-full">
      <ul className="flex justify-between w-[75%] gap-4 px-5">
        {data?.map((element) => {
          return (
            <li
              key={element.en}
              className={`w-full flex items-center justify-center p-2 border-[0.5px] border-transparent cursor-pointer rounded transition-colors active:bg-opacity-70 whitespace-nowrap ${
                theme === "dark"
                  ? "active:border-accent active:bg-accent-400 text-darkText active:text-lightText hover:border-accent"
                  : "active:border-accent-900 active:bg-accent-800 text-lightText active:text-darkText hover:border-accent-900"
              }`}
            >
              <a href={element.href}>
                {lang === "es" ? element.es : element.en}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default WebNav;
