import React, { useContext } from "react";
import { ThemeContext } from "@/app/context/themeContext";
import { LangContext } from "@/app/context/langContext";
import RoutesIcon from "@/app/assests/icons/RoutesIcon";

function Routes() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  return (
    <div
      className={`h-fit flex flex-col p-5 border-[0.5px] rounded-lg pb-48 md:pb-28 ${
        theme === "dark" ? "border-yellow-100" : "border-yellow-800"
      }`}
    >
      <header className="flex justify-center items-center mb-4">
        <h3 className="relative flex items-center justify-center font-bold font-serif text-lg md:text-xl my-2 md:my-5 whitespace-nowrap -translate-x-2 md:-translate-x-4">
          {
            <RoutesIcon className="absolute h-10 w-10 md:h-16 md:w-16 -left-16 md:-left-20" />
          }
          {lang === "es" ? "Rutas" : "Routes"}
        </h3>
      </header>
      <p className="font-thin italic font-mono text-xs">
        {lang === "es" ? (
          <>
            <ul className="flex flex-col gap-2">
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  Planificación de rutas:
                </span>
                <p className="text-sm md:text-base font-light">
                  Diseñamos rutas optimizadas para minimizar los tiempos de
                  tránsito y reducir los costos de transporte.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  Seguimiento de envíos:
                </span>
                <p className="text-sm md:text-base font-light">
                  Brindamos seguimiento en tiempo real de sus envíos para que
                  pueda estar informado sobre su ubicación y estado.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  Gestión de aduanas:
                </span>
                <p className="text-sm md:text- font-light">
                  Nos encargamos de todos los trámites aduaneros necesarios para
                  sus importaciones y exportaciones.
                </p>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="flex flex-col gap-2">
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  Route planning:
                </span>
                <p className="text-sm md:text-base font-light">
                  We design optimized routes to minimize transit times and
                  reduce transportation costs.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  Shipment tracking:
                </span>
                <p className="text-sm md:text-base font-light">
                  We provide real-time tracking of your shipments so you can
                  stay informed about their location and status.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold italic text-base md:text-lg">
                  Customs management:
                </span>
                <p className="text-sm md:text-base font-light">
                  We handle all necessary customs procedures for your imports
                  and exports.
                </p>
              </li>
            </ul>
          </>
        )}
      </p>
    </div>
  );
}

export default Routes;
