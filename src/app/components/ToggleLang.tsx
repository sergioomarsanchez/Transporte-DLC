import { useContext } from "react";
import { LangContext } from "../context/langContext";
import { ThemeContext } from "../context/themeContext";

const ToggleLang = () => {
  const { lang, toggleLang } = useContext(LangContext);
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleLang}
      className={`p-1 rounded-sm border-[0.5px] border-transparent hover:border-yellow-500 transition-all linear w-8 drop-shadow-2xl ${
        theme === "dark" ? "text-darkText" : "text-lightText"
      }`}
      style={{
        filter:
          theme === "dark"
            ? "drop-shadow(1px 1px 2px white)"
            : "drop-shadow(1px 1px 2px black)",
      }}
    >
      {lang === "en" ? "EN" : "ES"}
    </button>
  );
};

export default ToggleLang;
