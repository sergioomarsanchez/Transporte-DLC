import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/themeContext";
import { LangContext } from "../context/langContext";
import Image from "next/image";
import heroImg from "@/app/assests/img/heroImg.jpeg";
import clsx from "clsx";
import QuotationForm from "./QuotationForm";

function HeroCard() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={clsx(
        "group p-10 pt-4 bg-gradient-to-br bg-opacity-30 from-[1%] to-[100%] lg:pt-10 flex flex-col justify-start items-start gap-2 w-[90%] h-[25rem] duration-500 relative rounded-lg p-4hover:-translate-y-2 hover:shadow-xl",
        {
          "from-yellow-900 to-darkBackground": theme === "dark",
          "from-yellow-200 to-lightBackground": theme === "light",
        }
      )}
    >
      <Image
        src={heroImg}
        alt="Freight truck parked on a wet road with a rainbow in the sky after a storm."
        width={400}
        height={400}
        className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-8 md:-bottom-16 md:scale-75 lg:scale-100 lg:-bottom-2 -right-10 rounded-lg"
      />

      <div className="h-fit">
        <h1 className="font-extrabold font-serif text-2xl md:text-3xl text-yellow-600">
          Transporte DLC
        </h1>
        <p className="my-2 md:my-5 text-xs md:text-base md:w-[60%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </div>
      <div className="flex gap-2 justify-center items-center w-fit h-fit text-sm md:text-base">
        <QuotationForm
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          imageColor={theme === "dark" ? "bg-green-300" : "bg-green-700"}
        />
        <button className="px-4 py-2 font-semibold border-[1px] border-yellow-400 bg-transparent rounded-full hover:bg-yellow-600 hover:scale-[102%] transition-all delay-200 active:scale-[98%]">
          Llamar
        </button>
      </div>
    </div>
  );
}

export default HeroCard;
