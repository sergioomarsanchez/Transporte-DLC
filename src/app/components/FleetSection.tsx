import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import Image from "next/image";
import atMorning from "@/app/assests/img/3AtMorning.jpeg";
import atNight from "@/app/assests/img/3AtNight.jpeg";
import { LangContext } from "../context/langContext";
import FleetSlider from "./FleetSlider";

function FleetSection() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  return (
    <div className="flex flex-col gap-2">
      <div className="p-2 md:px-14 md:pt-20 flex flex-col justify-center items-start md:flex-row gap-5 md:gap-0 h-full">
        <section className="flex flex-col justify-start items-start">
          <h2 className="text-xl md:text-2xl font-extrabold italic my-10">
            {lang === "es" ? "Nuestra Flota" : "Our Fleet"}
          </h2>
          <p className="my-5 text-sm md:text-base">
            {lang === "es"
              ? "Día y Noche trabajamos para ofrecer el mejor servicio de transporte"
              : "Day and Night we work to offer the best transport service"}
          </p>
          {/* <div className="flex gap-2 justify-center items-center w-fit h-fit">
            <button className="px-4 py-2 font-semibold rounded-full hover:bg-yellow-600 bg-yellow-400 hover:scale-[102%] text-black transition-all delay-200 active:scale-[98%]">
              Cotizar
            </button>
            <button className="px-4 py-2 font-semibold border-[1px] border-yellow-400 bg-transparent rounded-full hover:bg-yellow-600 hover:scale-[102%] transition-all delay-200 active:scale-[98%]">
              Llamar
            </button>
          </div> */}
        </section>
        <section className="flex flex-col -mb-32">
          <Image
            className={`-translate-y-16 ${
              theme === "dark" ? "shadow-gray-400" : "shadow-black"
            }`}
            src={atMorning}
            alt="Freight truck parked on a wet road with a rainbow in the sky after a storm."
            width={700}
            height={700}
            style={{ clipPath: "inset(80px 0px 80px 0px)" }}
          />
          <Image
            className={`-translate-y-32 ${
              theme === "dark" ? "shadow-gray-400" : "shadow-black"
            }`}
            src={atNight}
            alt="Freight truck parked on a wet road with a rainbow in the sky after a storm."
            width={700}
            height={700}
            style={{ clipPath: "inset(0px 0px 20px 0px)" }}
          />
        </section>
      </div>
      <section className="p-2 md:px-14 md:pt-20">
        <FleetSlider />
      </section>
    </div>
  );
}

export default FleetSection;
