import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import Image from "next/image";
import heroImg from "@/app/assests/img/heroImg.jpeg";

function HeroSection() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="md:mx-10 flex flex-col justify-center items-start md:flex-row gap-5 md:gap-0">
      <section className="flex flex-col justify-start items-start">
        <h1 className="font-bold font-serif text-lg md:text-3xl">
          Transporte DLC
        </h1>
        <p className="my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <div className="flex gap-2 justify-center items-center w-fit h-fit">
          <button className="px-4 py-2 font-semibold rounded-full hover:bg-yellow-600 bg-yellow-400 hover:scale-[102%] text-black transition-all delay-200 active:scale-[98%]">
            Cotizar
          </button>
          <button className="px-4 py-2 font-semibold border-[1px] border-yellow-400 bg-transparent rounded-full hover:bg-yellow-600 hover:scale-[102%] transition-all delay-200 active:scale-[98%]">
            Llamar
          </button>
        </div>
      </section>
      <section>
        <Image
          className={`rounded-lg shadow-sm ${
            theme === "dark" ? "shadow-gray-400" : "shadow-black"
          }`}
          src={heroImg}
          alt="Freight truck parked on a wet road with a rainbow in the sky after a storm."
          width={700}
          height={700}
        />
      </section>
    </div>
  );
}

export default HeroSection;
