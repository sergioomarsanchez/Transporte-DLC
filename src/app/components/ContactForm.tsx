import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/themeContext";
import { LangContext } from "../context/langContext";
import { type Contact, ContactValidator } from "../types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import EmailIcon from "../assests/icons/EmailIcon";
import SendIcon from "../assests/icons/SendIcon";

function ContactForm({ imageColor }: { imageColor: string }) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Contact>({
    resolver: zodResolver(ContactValidator),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  async function onSubmit(data: Contact) {
    console.log(data);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.status === 200) {
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  }
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);

  return (
    <div className="p-2 md:px-24">
      <h3 className="text-xl md:text-2xl font-extrabold italic my-10">
        {lang === "es" ? "Contacto" : "Contact"}
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(
          "card m-auto text-gray-300 w-clamp h-auto hover:brightness-90 transition-all duration-300 ease-in-out group bg-gradient-to-tl rounded-lg overflow-hidden relative",
          {
            "dark-theme from-darkBackground to-[#100f06] hover:from-[#200f06] hover:to-#300f06 border-gray-900":
              theme === "dark",
            "light-theme from-lightBackground to-lightBackground hover:from-[#edffed] hover:to-[#ecffed] border border-gray-100":
              theme === "light",
          }
        )}
      >
        <div className="flex flex-col gap-8 px-8 py-10">
          <header className="w-[60%] md:w-[57%] flex items-center justify-between">
            <i
              className={`${imageColor} p-2 w-fit rounded-xl rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-yellow-900 transition-all`}
            >
              <EmailIcon className="h-6 w-6 md:w-8 md:h-8" />
            </i>
            <h3 className="text-lg md-xl font-extrabold">
              {lang === "es" ? "Contáctanos" : "Contact us"}
            </h3>
          </header>
          <div className="flex items-center justify-center w-full md:justify-start">
            <div className="relative w-full">
              <input
                type="text"
                id="name"
                {...register("name")}
                className="w-full md:w-[50%] border-b border-gray-300 py-1 focus:border-b-2 focus:border-yellow-700 transition-colors focus:outline-none peer bg-inherit"
              />
              <label
                htmlFor="name"
                className="absolute left-0 cursor-text peer-focus:text-base text-xs -top-5 transition-all peer-focus:text-yellow-700"
              >
                {lang === "es" ? "Nombre" : "Name"}
              </label>
              {errors?.name ? (
                <p className="text-xs italic text-red-500 m-2">
                  {lang === "es" ? errors.name.message : "Name is required"}
                </p>
              ) : (
                <p className="text-xs h-4 m-2"></p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center w-full md:justify-start">
            <div className="relative w-full">
              <input
                type="text"
                id="companyName"
                {...register("companyName")}
                className="w-full md:w-[50%] border-b border-gray-300 py-1 focus:border-b-2 focus:border-yellow-700 transition-colors focus:outline-none peer bg-inherit"
              />
              <label
                htmlFor="companyName"
                className="absolute left-0 cursor-text peer-focus:text-base text-xs -top-5 transition-all peer-focus:text-yellow-700"
              >
                {lang === "es" ? "Nombre de Empresa" : "Company name"}
              </label>
              {errors?.companyName ? (
                <p className="text-xs italic text-red-500 m-2">
                  {lang === "es"
                    ? errors.companyName.message
                    : "Company name is required"}
                </p>
              ) : (
                <p className="text-xs h-4 m-2"></p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center w-full md:justify-start">
            <div className="relative w-full">
              <input
                type="email"
                id="email"
                {...register("email")}
                className="w-full md:w-[50%] border-b border-gray-300 py-1 focus:border-b-2 focus:border-yellow-700 transition-colors focus:outline-none peer bg-inherit"
              />
              <label
                htmlFor="email"
                className="absolute left-0 cursor-text peer-focus:text-base text-xs -top-5 transition-all peer-focus:text-yellow-700"
              >
                Email:
              </label>
              {errors?.email ? (
                <p className="text-xs italic text-red-500 m-2">
                  {lang === "es"
                    ? errors.email.message
                    : errors.email.message === "El email es requerido"
                    ? "Email is required"
                    : "Email is not valid"}
                </p>
              ) : (
                <p className="text-xs h-4 m-2"></p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="relative w-full">
              <textarea
                id="message"
                {...register("message")}
                className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-yellow-700 transition-colors focus:outline-none peer bg-inherit"
                maxLength={5000}
                rows={5}
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 cursor-text peer-focus:text-base text-xs -top-5 transition-all peer-focus:text-yellow-700"
              >
                {lang === "es" ? "Mensaje" : "Message"}
              </label>
              {errors?.message ? (
                <p className="text-xs italic text-red-500 m-2">
                  {lang === "es"
                    ? errors.message.message
                    : "Message is required"}
                </p>
              ) : (
                <p className="text-xs h-4 m-2"></p>
              )}
            </div>
          </div>
          <button
            className={`${imageColor} flex justify-center items-center relative py-2 px-5 md:pr-14 md:py-3 rounded-full rounded-tl-none mb-4 hover:shadow-lg hover:shadow-red-900 transition-all md:self-end md:w-fit`}
            type="submit"
          >
            {lang === "es" ? "Enviar" : "Send"}
            <i className="absolute right-5">
              <SendIcon className="h-6 w-6 md:w-8 md:h-8" />
            </i>
          </button>
        </div>
        <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
        <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-yellow-950 group-hover:via-yellow-500 w-7/10 m-auto rounded transition-all"></div>
      </form>
    </div>
  );
}

export default ContactForm;
