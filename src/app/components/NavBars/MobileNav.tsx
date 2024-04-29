import React, { Dispatch, useContext, Fragment } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { Dialog, Transition } from "@headlessui/react";
import { ThemeContext } from "@/app/context/themeContext";
import { LangContext } from "@/app/context/langContext";
import { mobileMenuData as data } from "@/app/data/textData";
import ToggleLang from "../ToggleLang";
import ToggleTheme from "../ToggleTheme";

function MobileNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
}) {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(true);
  };
  return (
    <>
      {!isOpen && (
        <button
          className="p-1 rounded-sm border-[0.5px] border-primary"
          onClick={handleOpenModal}
        >
          <Bars3Icon className="h-8 w-8" />
        </button>
      )}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" open={isOpen} onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-[0.4]" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div
              className={`absolute top-10 right-5 z-10 w-[70%] h-fit border-[0.5px] rounded-lg flex flex-col items-center border-primary-600 opacity-[95%] ${
                theme === "dark"
                  ? "from-primary-700 to-primary-900 to-70% bg-gradient-to-br"
                  : "from-primary-400 to-primary-600 to-70% bg-gradient-to-br"
              }`}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full gap-2 flex flex-col items-center justify-evenly py-5">
                  <div className="flex absolute top-4 right-4 items-center justify-around transition-none">
                    <ToggleTheme />
                    <ToggleLang />
                  </div>
                  <Dialog.Title
                    className={`${
                      theme === "dark"
                        ? "text-accent-400"
                        : "text-accent-900"
                    } font-bold text-lg pt-5`}
                  >
                    {lang === "es" ? "Menú" : "Menu"}
                  </Dialog.Title>
                  <nav className="w-full">
                    <ul className="flex flex-col justify-between w-full px-5">
                      {data?.map((element) => {
                        return (
                          <li
                            key={element.en}
                            className={`w-full flex items-center justify-center p-2 border-[0.5px] border-transparent cursor-pointer rounded transition-colors active:bg-opacity-70 ${
                              theme === "dark"
                                ? "active:border-accent active:bg-accent-400 text-darkText active:text-lightText hover:border-accent"
                                : "active:border-accent-900 active:bg-accent-800 text-lightText active:text-darkText hover:border-accent-900"
                            }`}
                          >
                            <a href={element.href}>
                              {lang === "es" ? element.es : element.en}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default MobileNav;
