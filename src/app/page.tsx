"use client";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Service from "./components/Service";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-10 md:p-24 ${
        theme === "dark" ? "dark-theme" : "light-theme"
      }`}
      id="home"
    >
      <div className="max-w-5xl w-full items-center">
        <HeroSection />
      </div>
      <div className="max-w-5xl w-full items-center" id="about">
        <About />
      </div>
      <div className="max-w-5xl w-full items-center" id="services">
        <Service />
      </div>
    </main>
  );
}
