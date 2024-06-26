import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../context/themeContext";
import { LangContext } from "../context/langContext";
import Image from "next/image";
import heroImg from "@/app/assests/img/heroImg.jpeg";
import clsx from "clsx";
import QuotationForm from "./QuotationForm";
import CallIcon from "../assests/icons/CallIcon";

function HeroCard() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  const [isOpen, setIsOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHeroVisible(entry.isIntersecting);
    });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, [heroRef]);
  return (
    <div
      className={clsx(
        "relative p-10 pt-4 mb-20 bg-gradient-to-br bg-opacity-30 from-[1%] to-[100%] lg:pt-10 flex flex-col justify-start items-start gap-2 w-[100%] h-[25rem] duration-500 rounded-lg",
        {
          "from-yellow-900 to-darkBackground": theme === "dark",
          "from-yellow-200 to-lightBackground": theme === "light",
          "group hover:-translate-y-2 hover:shadow-xl": heroVisible,
        }
      )}
    >
      <Image
        src={heroImg}
        alt="Freight truck parked on a wet road with a rainbow in the sky after a storm."
        width={400}
        height={400}
        className="absolute w-[90%] sm:max-w-[500px] md:w-[40%] duration-700 shadow-md lg:scale-100 -bottom-20 rounded-lg md:group-hover:-translate-y-4 md:group-hover:-translate-x-4 md:-bottom-16 right-4 md:-right-10 lg:-bottom-2"
      />

      <div
        className={
          "h-fit flex flex-col justify-center items-center md:justify-start md:items-start"
        }
      >
        <h1 className="font-extrabold font-serif text-2xl md:text-3xl text-yellow-600">
          Transporte DLC
        </h1>
        <p className="my-2 md:my-5 text-xs md:text-base md:w-[60%] text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </div>
      <div
        ref={heroRef}
        className="flex gap-2 justify-center items-center w-full md:w-fit  text-sm md:text-base"
      >
        <QuotationForm
          heroVisible={heroVisible}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          imageColor={theme === "dark" ? "bg-yellow-700" : "bg-yellow-300"}
        />
        <button
          className={`bg-transparent disabled:grayscale-1 flex justify-center items-center py-2 px-5 pr-12 rounded-full rounded-tl-none mb-4 hover:shadow-lg transition-all md:self-end md:w-fit border ${
            theme === "dark"
              ? "border-gray-500 hover:shadow-gray-500"
              : "border-blue-900 hover:shadow-blue-900"
          }`}
        >
          <a href="tel:+5493516137695" className="w-full relative">
            <span
              className={clsx("", {
                hidden: !heroVisible,
              })}
            >
              {lang === "es" ? "Llamar" : "Call"}
            </span>
            <i
              className={clsx("", {
                "fixed right-6 bottom-16 z-20": !heroVisible,
                "absolute -right-10": heroVisible,
              })}
            >
              <CallIcon
                className={clsx("brightness-[90%] ", {
                  "h-9 w-9 hover:brightness-105 transition-all delay-200":
                    !heroVisible,
                  "h-6 w-6": heroVisible,
                })}
              />
            </i>
          </a>
        </button>
      </div>
    </div>
  );
}

export default HeroCard;
