import React from "react";
import { type Contact, ContactValidator } from "../types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function ContactForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Contact>({
    resolver: zodResolver(ContactValidator),
  });
  async function onSubmit(data: Contact) {
    console.log(data);
    reset();
  }
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          {...register("name")}
          placeholder="Nombre"
          required
          className="bg-darkBackground"
        />
        {errors?.name ? (
          <p className="* text-xs italic text-red-500 m-2">
            {errors.name?.message}
          </p>
        ) : (
          <p className="* text-xs italic text-red-500 p-2 m-2"></p>
        )}
      </div>
      <div>
        <label htmlFor="companyName">Nombre de la empresa:</label>
        <input
          type="text"
          id="companyName"
          {...register("companyName")}
          placeholder="Nombre de la empresa"
          required
          className="bg-darkBackground"
        />
        {errors?.companyName ? (
          <p className="* text-xs italic text-red-500 m-2">
            {errors.companyName?.message}
          </p>
        ) : (
          <p className="* text-xs italic text-red-500 p-2 m-2"></p>
        )}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register("email")}
          required
          className="bg-darkBackground"
        />
        {errors?.email ? (
          <p className="* text-xs italic text-red-500 m-2">
            {errors.email?.message}
          </p>
        ) : (
          <p className="* text-xs italic text-red-500 p-2 m-2"></p>
        )}
      </div>
      <div>
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          {...register("message")}
          required
          className="bg-darkBackground"
        ></textarea>
        {errors?.message ? (
          <p className="* text-xs italic text-red-500 m-2">
            {errors.message?.message}
          </p>
        ) : (
          <p className="* text-xs italic text-red-500 p-2 m-2"></p>
        )}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;
