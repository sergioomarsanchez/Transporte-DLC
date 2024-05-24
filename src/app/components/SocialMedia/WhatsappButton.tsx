import React, { useContext } from "react";
import { LangContext } from "@/app/context/langContext";
import WhatsappIcon from "@/app/assests/icons/WhatsappIcon";
import clsx from "clsx";

function WhatsappButton({ footerVisible }: { footerVisible: boolean }) {
  const { lang } = useContext(LangContext);
  const phoneNumber = "+5493447535258";
  return (
    <section className="flex justify-center items-center">
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          "group right-6 bottom-4 flex items-center justify-center p-2 bg-green-500 shadow-lg hover:bg-green-600 duration-300 group drop-shadow-xl from-gray-800 font-semibold hover:rounded-[50%] transition-all hover:from-[#331029] hover:to-[#310413]",
          {
            "fixed rounded-full": !footerVisible,
            "hover:translate-y-3 rounded-md": footerVisible,
          }
        )}
      >
        <WhatsappIcon className="w-5 h-5 text-white" />
        <span className="absolute whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:text-xs group-hover:-translate-y-8 duration-700">
          {lang === "es" ? "Whatsapp" : "WhatsApp me"}
        </span>
      </a>
    </section>
  );
}

export default WhatsappButton;
