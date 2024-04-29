import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`p-1 rounded-sm border-[0.5px] border-transparent hover:border-yellow-500 transition-all linear drop-shadow-lg ${
        theme === "dark" ? "text-darkText" : "text-lightText"
      }`}
      style={{
        filter:
          theme === "dark"
            ? "drop-shadow(1px 1px 2px white)"
            : "drop-shadow(1px 1px 2px black)",
      }}
    >
      {theme === "light" ? (
        <MoonIcon className="h-6 w-6  bg-transparent" />
      ) : (
        <SunIcon className="h-6 w-6  bg-transparent" />
      )}
    </button>
  );
};

export default ToggleTheme;
