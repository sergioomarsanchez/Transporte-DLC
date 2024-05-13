import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { LangContext } from "../context/langContext";
import { aboutText as data } from "../data/textData";
import ValueCard from "./ValueCard";

function About() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  const dataLang = lang === "es" ? data.es : data.en;
  return (
    <div className="p-2 md:p-24">
      <h2 className="text-xl md:text-2xl font-extrabold italic my-10">
        {dataLang.title}
      </h2>
      <p className="text-sm md:text-base">{dataLang.description}</p>
      <h3 className="text-lg md:text-xl font-bold italic my-5">
        {lang === "es" ? "Nuestra Historia" : "Our History"}
      </h3>
      <p className="text-sm md:text-base">{dataLang.history}</p>
      <h3 className="text-lg md:text-xl font-bold italic my-5">
        {lang === "es" ? "Nuestros Valores" : "Our Values"}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-2 h-fit w-fit">
        {dataLang?.values?.map((value) => {
          return (
            <ValueCard key={value.name} name={value.name} description={value.description} />
          );
        })}
      </div>
    </div>
  );
}

export default About;