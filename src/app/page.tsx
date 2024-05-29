"use client";
import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";
import HeroCard from "./components/HeroCard";
import About from "./components/About";
import Service from "./components/Service";
import ContactForm from "./components/ContactForm";
import FleetSection from "./components/FleetSection";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-10 px-2 md:p-24 ${
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
      <div className="max-w-5xl w-full items-center" id="fleet">
        <FleetSection />
      </div>
      <div className="max-w-5xl w-full items-center" id="contact">
        <ContactForm
          imageColor={theme === "dark" ? "bg-yellow-800" : "bg-yellow-200"}
        />
      </div>
    </main>
  );
}
