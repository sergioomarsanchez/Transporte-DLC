"use client";
import React, { createContext, useState, useEffect } from "react";
import type { Theme } from "../types";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme["theme"]>("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
