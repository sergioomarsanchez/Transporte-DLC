import React, { useContext } from "react";
import { ThemeContext } from "@/app/context/themeContext";
import { LangContext } from "@/app/context/langContext";
import CargoIcon from "@/app/assests/icons/CargoIcon";

function Cargo() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  return (
    <div
      className={`h-fit flex flex-col p-5 border-[0.5px] rounded-lg pb-28 md:pb-5 ${
        theme === "dark" ? "border-yellow-100" : "border-yellow-800"
      }`}
    >
      <header className="flex justify-center items-center mb-4">
        <h3 className="relative flex items-center justify-center font-bold font-serif text-lg md:text-xl my-2 md:my-5 whitespace-nowrap -translate-x-2 md:-translate-x-4">
          {
            <CargoIcon className="absolute h-10 w-10 md:h-16 md:w-16 -left-20" />
          }
          {lang === "es" ? "Cargas" : "Cargo"}
        </h3>
      </header>
      <p className="font-thin italic font-mono text-xs">
        {lang === "es" ? (
          <>
            <ul className="flex flex-col gap-2">
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  Carga general:
                </span>
                <p className="text-sm md:text-base font-light">
                  Transportamos todo tipo de mercancías, desde productos
                  manufacturados hasta materias primas.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  Carga peligrosa:
                </span>
                <p className="text-sm md:text-base font-light">
                  Contamos con personal y vehículos especializados para el
                  transporte seguro de mercancías peligrosas.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  Carga perecedera:
                </span>
                <p className="text-sm md:text-base font-light">
                  Ofrecemos servicios de transporte refrigerado para mantener la
                  frescura y calidad de sus productos perecederos.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  Carga frágil:
                </span>
                <p className="text-sm md:text-base font-light">
                  Manipulamos y transportamos con cuidado sus mercancías
                  frágiles para evitar daños durante el trayecto.
                </p>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="flex flex-col gap-2">
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  General cargo:
                </span>
                <p className="text-sm md:text-base font-light">
                  We transport all types of goods, from manufactured products to
                  raw materials.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  Hazardous cargo:
                </span>
                <p className="text-sm md:text-base font-light">
                  We have specialized personnel and vehicles for the safe
                  transport of hazardous materials.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  Perishable cargo:
                </span>
                <p className="text-sm md:text-base font-light">
                  We offer refrigerated transportation services to maintain the
                  freshness and quality of your perishable products.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  Fragile cargo:
                </span>
                <p className="text-sm md:text-base font-light">
                  We carefully handle and transport your fragile goods to
                  prevent damage during the journey.
                </p>
              </li>
            </ul>
          </>
        )}
      </p>
    </div>
  );
}

export default Cargo;
