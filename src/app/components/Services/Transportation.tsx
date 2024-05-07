import React, { useContext } from "react";
import { ThemeContext } from "@/app/context/themeContext";
import { LangContext } from "@/app/context/langContext";
import TransportationIcon from "@/app/assests/icons/TransportationIcon";

function Transportation() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  return (
    <div
      className={`h-fit flex flex-col p-5 border-[0.5px] rounded-lg ${
        theme === "dark" ? "border-yellow-100" : "border-yellow-800"
      }`}
    >
      <header className="flex justify-center items-center mb-4">
        <h3 className="relative flex items-center justify-center font-bold font-serif text-lg md:text-xl my-2 md:my-5 whitespace-nowrap -translate-x-2 md:-translate-x-4">
          {
            <TransportationIcon className="absolute h-10 w-10 md:h-16 md:w-16 -left-16 md:-left-20" />
          }
          {lang === "es" ? "Transporte" : "Transportation"}
        </h3>
      </header>
      <section className="font-thin italic font-mono text-xs">
        {lang === "es" ? (
          <>
            <ul className="flex flex-col gap-2">
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  Transporte terrestre:
                </span>
                <p className="text-sm md:text-base font-light">
                  Contamos con una moderna flota de camiones y vehículos para
                  transportar sus mercancías de manera segura y eficiente a
                  cualquier destino dentro del país.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  Transporte marítimo:
                </span>
                <p className="text-sm md:text-base font-light">
                  Ofrecemos servicios de transporte marítimo para envíos
                  internacionales, utilizando contenedores o carga a granel.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  Transporte aéreo:
                </span>
                <p className="text-sm md:text-base font-light">
                  Brindamos servicios de transporte aéreo para envíos urgentes o
                  de alto valor.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  Logística:
                </span>
                <p className="text-sm md:text-base font-light">
                  Ofrecemos soluciones logísticas integrales, que incluyen
                  almacenamiento, distribución, gestión de inventario y otros
                  servicios para optimizar su cadena de suministro.
                </p>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="flex flex-col gap-2">
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  Land transportation:
                </span>
                <p className="text-sm md:text-base font-light">
                  We have a modern fleet of trucks and vehicles to transport
                  your goods safely and efficiently to any destination within
                  the country.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  Ocean transportation:
                </span>
                <p className="text-sm md:text-base font-light">
                  We offer ocean transportation services for international
                  shipments, using containers or bulk cargo.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  Air transportation:
                </span>
                <p className="text-sm md:text-base font-light">
                  We provide air transportation services for urgent or
                  high-value shipments.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  Logistics:
                </span>
                <p className="text-sm md:text-base font-light">
                  We offer comprehensive logistics solutions, including
                  warehousing, distribution, inventory management, and other
                  services to optimize your supply chain.
                </p>
              </li>
            </ul>
          </>
        )}
      </section>
    </div>
  );
}

export default Transportation;
