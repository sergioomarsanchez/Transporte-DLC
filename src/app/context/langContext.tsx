"use client";
import React, { createContext, useState, useEffect } from "react";
import type { Lang } from "../types";

const LangContext = createContext({
  lang: "en",
  toggleLang: () => {},
});

const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang["lang"]>("en");

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === "en" ? "es" : "en"));
    localStorage.setItem("lang", lang === "en" ? "es" : "en");
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang === "en" || storedLang === "es") {
      setLang(storedLang);
    }
  }, []);

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export { LangContext, LangProvider };
