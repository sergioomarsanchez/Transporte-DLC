import React, { useContext } from "react";
import { LangContext } from "../context/langContext";
import { ThemeContext } from "../context/themeContext";
import Transportation from "./Services/Transportation";
import Cargo from "./Services/Cargo";
import Routes from "./Services/Routes";
import { Tab } from "@headlessui/react";

function Service() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  return (
    <div className="p-2 md:px-24">
      <h2 className="text-xl md:text-2xl font-extrabold italic my-10">
        {" "}
        {lang === "es" ? "Servicios" : "Services"}
      </h2>
      <Tab.Group>
        <Tab.List
          className={`w-fit flex gap-4 p-2 rounded-lg rounded-b-none bg-gradient-to-tr bg-opacity-70 transition-all delay-500 ${
            theme === "dark"
              ? "from-yellow-700 to-darkBackground"
              : "from-yellow-200 to-lightBackground"
          }`}
        >
          <Tab className="ui-selected:bg-orange-700 px-2 py-1 rounded-lg ui-selected:text-darkText ui-not-selected:bg-gray-300 ui-not-selected:text-gray-500 transition-color duration-200">
            {lang === "es" ? "Transporte" : "Transportation"}
          </Tab>
          <Tab className="ui-selected:bg-orange-700 px-2 py-1 rounded-lg ui-selected:text-darkText ui-not-selected:bg-gray-300 ui-not-selected:text-gray-500 transition-color duration-200">
            {lang === "es" ? "Rutas" : "Routes"}
          </Tab>
          <Tab className="ui-selected:bg-orange-700 px-2 py-1 rounded-lg ui-selected:text-darkText ui-not-selected:bg-gray-300 ui-not-selected:text-gray-500 transition-color duration-200">
            {lang === "es" ? "Cargas" : "Cargo"}
          </Tab>
        </Tab.List>
        <Tab.Panels
          className={`w-full p-2 bg-gradient-to-br bg-opacity-70 rounded-lg rounded-tl-none ${
            theme === "dark"
              ? "from-yellow-700 to-darkBackground"
              : "from-yellow-200 to-lightBackground"
          }`}
        >
          <Tab.Panel className="p-2">
            <Transportation />
          </Tab.Panel>
          <Tab.Panel className="p-2">
            <Routes />
          </Tab.Panel>
          <Tab.Panel className="p-2">
            <Cargo />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Service;
