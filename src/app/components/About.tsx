import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { ThemeContext } from "../context/themeContext";
import { LangContext } from "../context/langContext";
import { aboutText as data } from "../data/textData";
import ValueCard from "./ValueCard";

function About() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  const dataLang = lang === "es" ? data.es : data.en;
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the element is in view
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="p-2 md:px-24 md:pt-20">
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
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-2 h-fit w-fit"
      >
        {dataLang?.values?.map((value, index) => {
          return (
            <motion.section
              initial="hidden"
              animate={controls}
              variants={variants}
              key={value.name}
              transition={{ duration: 0.5, delay: index * 0.5 }}
              className="flex flex-col justify-center items-center h-full w-full"
            >
              <ValueCard
                name={value.name}
                description={value.description}
              />
            </motion.section>
          );
        })}
      </motion.div>
    </div>
  );
}

export default About;
