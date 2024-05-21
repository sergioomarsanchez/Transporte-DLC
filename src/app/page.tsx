"use client";
import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";
import HeroCard from "./components/HeroCard";
import About from "./components/About";
import Service from "./components/Service";
import ContactForm from "./components/ContactForm";

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
        <HeroCard />
      </div>
      <div className="max-w-5xl w-full items-center" id="about">
        <About />
      </div>
      <div className="max-w-5xl w-full items-center" id="services">
        <Service />
      </div>
      <div className="max-w-5xl w-full items-center" id="services">
        <ContactForm />
      </div>
    </main>
  );
}
