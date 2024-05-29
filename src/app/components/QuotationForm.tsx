import React, { Dispatch, useContext, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ThemeContext } from "@/app/context/themeContext";
import { LangContext } from "@/app/context/langContext";
import FrontTruck from "@/app/assests/icons/FrontTruck";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import clsx from "clsx";
import { ToastContainer, toast } from "react-toastify";
import EmailIcon from "../assests/icons/EmailIcon";
import SendIcon from "../assests/icons/SendIcon";
import Loader from "./Loader/Loader";
import QuotationIcon from "../assests/icons/QuotationIcon";

function QuotationForm({
  isOpen,
  setIsOpen,
  imageColor,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
  imageColor: string;
}) {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = z.object({
    senderName: z
      .string()
      .min(
        1,
        lang === "es"
          ? "El nombre del remitente es obligatorio"
          : "Sender name is required"
      ),
    senderContact: z
      .string()
      .min(
        1,
        lang === "es"
          ? "El contacto del remitente es obligatorio"
          : "Sender contact is required"
      ),
    senderEmail: z
      .string()
      .email(lang === "es" ? "Correo electrónico inválido" : "Invalid email"),
    receiverName: z
      .string()
      .min(
        1,
        lang === "es"
          ? "El nombre del receptor es obligatorio"
          : "Receiver name is required"
      ),
    receiverContact: z
      .string()
      .min(
        1,
        lang === "es"
          ? "El contacto del receptor es obligatorio"
          : "Receiver contact is required"
      ),
    cargoType: z
      .string()
      .min(
        1,
        lang === "es"
          ? "El tipo de carga es obligatorio"
          : "Cargo type is required"
      ),
    cargoDimensions: z
      .string()
      .min(
        1,
        lang === "es"
          ? "Las dimensiones de la carga son obligatorias"
          : "Cargo dimensions are required"
      ),
    cargoWeight: z
      .string()
      .min(
        1,
        lang === "es"
          ? "El peso de la carga debe ser mayor a 0"
          : "Cargo weight must be greater than 0"
      ),
    pickupAddress: z
      .string()
      .min(
        1,
        lang === "es"
          ? "La dirección de recogida es obligatoria"
          : "Pickup address is required"
      ),
    deliveryAddress: z
      .string()
      .min(
        1,
        lang === "es"
          ? "La dirección de entrega es obligatoria"
          : "Delivery address is required"
      ),
    pickupDate: z
      .string()
      .min(
        1,
        lang === "es"
          ? "La fecha de recogida es obligatoria"
          : "Pickup date is required"
      ),
    deliveryDate: z
      .string()
      .min(
        1,
        lang === "es"
          ? "La fecha de entrega es obligatoria"
          : "Delivery date is required"
      ),
    paymentMethod: z
      .string()
      .min(
        1,
        lang === "es"
          ? "El método de pago es obligatorio"
          : "Payment method is required"
      ),
    comments: z.string().optional(),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    reValidateMode: "onChange",
  });
  const onSubmit: SubmitHandler<FormData> = async (data, event) => {
    event?.preventDefault();
    try {
      setIsLoading(true);
      const res = await fetch("/api/quotation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.status === 200) {
        toast.success(
          lang === "es"
            ? "Mail enviado correctamente, responderemos a la brevedad!"
            : "Mail sent correctly, we will replay ASAP!",
          {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
        reset();
        setIsOpen(false);
      } else {
        toast.error(
          lang === "es"
            ? "Algo salió mal, por favo, intenta nuevamente."
            : "Something went wrong. Please try again.",
          {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      }
    } catch (error) {
      toast.error(
        lang === "es"
          ? "Hubo un error, por favo, intenta nuevamente."
          : "An error occurred. Please try again.",
        {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
    reset();
  };

  const textButton =
    isLoading && lang === "es"
      ? "Enviando..."
      : isLoading
      ? "Sending..."
      : lang === "es"
      ? "Enviar"
      : "Send";

  return (
    <>
      <button
        className={`${imageColor} disabled:grayscale-1 flex justify-center items-center relative py-2 px-5 pr-12 md:py-3 rounded-full rounded-tl-none mb-4 hover:shadow-lg hover:shadow-yellow-900 transition-all md:self-end md:w-fit`}
        onClick={handleOpenModal}
      >
        <i className="absolute right-2">
        <QuotationIcon className="h-6 w-6 brightness-[90%]" />
        </i>
        {lang === "es" ? "Cotizar" : "Quotation"}
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" open={isOpen} onClose={() => handleCloseModal()}>
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
          <div className="fixed flex justify-center items-center inset-0 overflow-y-auto z-20">
            <div
              className={`absolute top-20  z-20 w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] h-fit border-[0.5px] rounded-lg flex flex-col items-center border-yellow-600 ${
                theme === "dark"
                  ? "from-yellow-700 to-yellow-900 to-70% bg-gradient-to-br"
                  : "from-yellow-400 to-yellow-600 to-70% bg-gradient-to-br"
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
                <Dialog.Panel className="w-full h-full gap-2 flex flex-col items-center justify-evenly md:px-5 py-5">
                  {/* <div className="p-2 md:px-24">
                    <FrontTruck
                      className="h-8 w-8"
                      color={theme === "dark" ? "white" : "black"}
                    />
                  </div> */}
                  <Dialog.Title
                    className={`${
                      theme === "dark" ? "text-gray-400" : "text-gray-900"
                    } font-bold text-lg lg:text-xl pt-5`}
                  >
                    {lang === "es" ? "Cotizar" : "Quotation"}
                  </Dialog.Title>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={clsx(
                      "m-auto text-gray-300 w-full h-auto transition-all duration-300 ease-in-out group bg-gradient-to-tl rounded-lg overflow-hidden relative",
                      {
                        "dark-theme from-darkBackground to-[#100f06] hover:from-[#200f06] hover:to-#300f06 border-gray-900":
                          theme === "dark",
                        "light-theme from-lightBackground to-lightBackground hover:from-[#edffed] hover:to-[#ecffed] border border-gray-100":
                          theme === "light",
                      }
                    )}
                  >
                    {isLoading && <Loader />}
                    <div className="flex flex-col gap-8 px-8 py-10">
                      <header className="w-full flex items-center justify-center mb-5">
                        <i
                          className={`${imageColor} absolute top-5 left-5 p-2 w-fit rounded-xl rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-yellow-900 transition-all`}
                        >
                          <EmailIcon className="h-6 w-6 md:w-8 md:h-8" />
                        </i>
                        <h3 className="text-base lg:text-lg font-extrabold whitespace-nowrap">
                          {lang === "es"
                            ? "Pedido de cotización"
                            : "Quotation request"}
                        </h3>
                      </header>
                      <div
                        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full md:justify-start ${
                          isLoading && "invisible"
                        }`}
                      >
                        <div className="relative w-full">
                          <input
                            type="text"
                            id="senderName"
                            {...register("senderName")}
                            className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-yellow-700 transition-colors focus:outline-none peer bg-inherit"
                          />
                          <label
                            htmlFor="senderName"
                            className="absolute left-0 cursor-text peer-focus:text-base text-xs -top-5 transition-all peer-focus:text-yellow-700"
                          >
                            {lang === "es"
                              ? "Nombre del remitente"
                              : "Sender Name"}
                          </label>
                          {errors?.senderName ? (
                            <p className="text-xs italic text-red-500 m-2">
                              {errors.senderName.message}
                            </p>
                          ) : (
                            <p className="text-xs h-4 m-2"></p>
                          )}
                        </div>
                        <div className="relative w-full">
                          <input
                            type="text"
                            id="senderContact"
                            {...register("senderContact")}
                            className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-yellow-700 transition-colors focus:outline-none peer bg-inherit"
                          />
                          <label
                            htmlFor="senderContact"
                            className="absolute left-0 cursor-text peer-focus:text-base text-xs -top-5 transition-all peer-focus:text-yellow-700"
                          >
                            {lang === "es"
                              ? "Contacto del remitente"
                              : "Sender Contact"}
                          </label>
                          {errors?.senderContact ? (
                            <p className="text-xs italic text-red-500 m-2">
                              {errors.senderContact.message}
                            </p>
                          ) : (
                            <p className="text-xs h-4 m-2"></p>
                          )}
                        </div>
                        <div className="relative w-full">
                          <input
                            type="email"
                            id="senderEmail"
                            {...register("senderEmail")}
                            className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-yellow-700 transition-colors focus:outline-none peer bg-inherit"
                          />
                          <label
                            htmlFor="senderEmail"
                            className="absolute left-0 cursor-text peer-focus:text-base text-xs -top-5 transition-all peer-focus:text-yellow-700"
                          >
                            {lang === "es"
                              ? "Correo electrónico del remitente"
                              : "Sender Email"}
                          </label>
                          {errors?.senderEmail ? (
                            <p className="text-xs italic text-red-500 m-2">
                              {errors.senderEmail.message}
                            </p>
                          ) : (
                            <p className="text-xs h-4 m-2"></p>
                          )}
                        </div>
                        <div className="relative w-full">
                          <input
                            type="text"
                            id="receiverName"
                            {...register("receiverName")}
                            className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-yellow-700 transition-colors focus:outline-none peer bg-inherit"
                          />
                          <label
                            htmlFor="receiverName"
                            className="absolute left-0 cursor-text peer-focus:text-base text-xs -top-5 transition-all peer-focus:text-yellow-700"
                          >
                            {lang === "es"
                              ? "Nombre del receptor"
                              : "Receiver Name"}
                          </label>
                          {errors?.receiverName ? (
                            <p className="text-xs italic text-red-500 m-2">
                              {errors.receiverName.message}
                            </p>
                          ) : (
                            <p className="text-xs h-4 m-2"></p>
                          )}
                        </div>
                        <div className="relative w-full">
                          <input
                            type="text"
                            id="receiverContact"
                            {...register("receiverContact")}
                            className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-yellow-700 transition-colors focus:outline-none peer bg-inherit"
                          />
                          <label
                            htmlFor="receiverContact"
                            className="absolute left-0 cursor-text peer-focus:text-base text-xs -top-5 transition-all peer-focus:text-yellow-700"
                          >
                            {lang === "es"
                              ? "Contacto del receptor"
                              : "Receiver Contact"}
                          </label>
                          {errors?.receiverContact ? (
                            <p className="text-xs italic text-red-500 m-2">
                              {errors.receiverContact.message}
                            </p>
                          ) : (
                            <p className="text-xs h-4 m-2"></p>
                          )}
                        </div>
                        <div className="relative w-full">
                          <input
                            type="text"
                            id="cargoType"
                            {...register("cargoType")}
                            className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-yellow-700 transition-colors focus:outline-none peer bg-inherit"
                          />
                          <label
                            htmlFor="cargoType"
                            className="absolute left-0 cursor-text peer-focus:text-base text-xs -top-5 transition-all peer-focus:text-yellow-700"
                          >
                            {lang === "es" ? "Tipo de carga" : "Cargo Type"}
                          </label>
                          {errors?.cargoType ? (
                            <p className="text-xs italic text-red-500 m-2">
                              {errors.cargoType.message}
                            </p>
                          ) : (
                            <p className="text-xs h-4 m-2"></p>
                          )}
                        </div>
                        <div className="relative w-full">
                          <input
                            type="text"
                            id="cargoDimensions"
                            {...register("cargoDimensions")}
                            className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-yellow-700 transition-colors focus:outline-none peer bg-inherit"
                          />
                          <label
                            htmlFor="cargoDimensions"
                            className="absolute left-0 cursor-text peer-focus:text-base text-xs -top-5 transition-all peer-focus:text-yellow-700"
                          >
                            {lang === "es"
                              ? "Dimensiones de la carga"
                              : "Cargo Dimensions"}
                          </label>
                          {errors?.cargoDimensions ? (
                            <p className="text-xs italic text-red-500 m-2">
                              {errors.cargoDimensions.message}
                            </p>
                          ) : (
                            <p className="text-xs h-4 m-2"></p>
                          )}
                        </div>
                        <div className="relative w-full">
                          <input
                            type="number"
                            id="cargoWeight"
                            {...register("cargoWeight")}
                            className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-yellow-700 transition-colors focus:outline-none peer bg-inherit"
                          />
                          <label
                            htmlFor="cargoWeight"
                            className="absolute left-0 cursor-text peer-focus:text-base text-xs -top-5 transition-all peer-focus:text-yellow-700"
                          >
                            {lang === "es"
                              ? "Peso de la carga (kg)"
                              : "Cargo Weight (kg)"}
                          </label>
                          {errors?.cargoWeight ? (
                            <p className="text-xs italic text-red-500 m-2">
                              {errors.cargoWeight.message}
                            </p>
                          ) : (
                            <p className="text-xs h-4 m-2"></p>
                          )}
                        </div>
                        <div className="relative w-full">
                          <input
                            type="text"
                            id="pickupAddress"
                            {...register("pickupAddress")}
                            className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-yellow-700 transition-colors focus:outline-none peer bg-inherit"
                          />
                          <label
                            htmlFor="pickupAddress"
                            className="absolute left-0 cursor-text peer-focus:text-base text-xs -top-5 transition-all peer-focus:text-yellow-700"
                          >
                            {lang === "es"
                              ? "Dirección de recogida"
                              : "Pickup Address"}
                          </label>
                          {errors?.pickupAddress ? (
                            <p className="text-xs italic text-red-500 m-2">
                              {errors.pickupAddress.message}
                            </p>
                          ) : (
                            <p className="text-xs h-4 m-2"></p>
                          )}
                        </div>
                        <div className="relative w-full">
                          <input
                            type="text"
                            id="deliveryAddress"
                            {...register("deliveryAddress")}
                            className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-yellow-700 transition-colors focus:outline-none peer bg-inherit"
                          />
                          <label
                            htmlFor="deliveryAddress"
                            className="absolute left-0 cursor-text peer-focus:text-base text-xs -top-5 transition-all peer-focus:text-yellow-700"
                          >
                            {lang === "es"
                              ? "Dirección de entrega"
                              : "Delivery Address"}
                          </label>
                          {errors?.deliveryAddress ? (
                            <p className="text-xs italic text-red-500 m-2">
                              {errors.deliveryAddress.message}
                            </p>
                          ) : (
                            <p className="text-xs h-4 m-2"></p>
                          )}
                        </div>
                        <div className="relative w-full">
                          <input
                            type="date"
                            id="pickupDate"
                            {...register("pickupDate")}
                            className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-yellow-700 transition-colors focus:outline-none peer bg-inherit"
                          />
                          <label
                            htmlFor="pickupDate"
                            className="absolute left-0 cursor-text peer-focus:text-base text-xs -top-5 transition-all peer-focus:text-yellow-700"
                          >
                            {lang === "es"
                              ? "Fecha de recogida"
                              : "Pickup Date"}
                          </label>
                          {errors?.pickupDate ? (
                            <p className="text-xs italic text-red-500 m-2">
                              {errors.pickupDate.message}
                            </p>
                          ) : (
                            <p className="text-xs h-4 m-2"></p>
                          )}
                        </div>
                        <div className="relative w-full">
                          <input
                            type="date"
                            id="deliveryDate"
                            {...register("deliveryDate")}
                            className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-yellow-700 transition-colors focus:outline-none peer bg-inherit"
                          />
                          <label
                            htmlFor="deliveryDate"
                            className="absolute left-0 cursor-text peer-focus:text-base text-xs -top-5 transition-all peer-focus:text-yellow-700"
                          >
                            {lang === "es"
                              ? "Fecha de entrega"
                              : "Delivery Date"}
                          </label>
                          {errors?.deliveryDate ? (
                            <p className="text-xs italic text-red-500 m-2">
                              {errors.deliveryDate.message}
                            </p>
                          ) : (
                            <p className="text-xs h-4 m-2"></p>
                          )}
                        </div>
                      </div>
                      <div
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20 ${
                          isLoading && "invisible"
                        }`}
                      >
                        <div className="relative w-full">
                          <select
                            id="paymentMethod"
                            {...register("paymentMethod")}
                            className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-yellow-700 transition-colors focus:outline-none peer bg-inherit"
                          >
                            <option value="creditCard">
                              {lang === "es"
                                ? "Tarjeta de crédito"
                                : "Credit Card"}
                            </option>
                            <option value="cash">
                              {lang === "es" ? "Efectivo" : "Cash"}
                            </option>
                            <option value="bankTransfer">
                              {lang === "es"
                                ? "Transferencia bancaria"
                                : "Bank Transfer"}
                            </option>
                          </select>
                          <label
                            htmlFor="paymentMethod"
                            className="absolute left-0 cursor-text peer-focus:text-base text-xs -top-5 transition-all peer-focus:text-yellow-700"
                          >
                            {lang === "es"
                              ? "Método de pago"
                              : "Payment Method"}
                          </label>
                          {errors?.paymentMethod ? (
                            <p className="text-xs italic text-red-500 m-2">
                              {errors.paymentMethod.message}
                            </p>
                          ) : (
                            <p className="text-xs h-4 m-2"></p>
                          )}
                        </div>
                        <div className="relative w-full">
                          <textarea
                            id="comments"
                            {...register("comments")}
                            rows={3}
                            className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-yellow-700 transition-colors focus:outline-none peer bg-inherit"
                          />
                          <label
                            htmlFor="comments"
                            className="absolute left-0 cursor-text peer-focus:text-base text-xs -top-5 transition-all peer-focus:text-yellow-700"
                          >
                            {lang === "es" ? "Comentarios" : "Comments"}
                          </label>
                        </div>
                      </div>
                      <div className="flex gap-2 justify-between items-center md:justify-end">
                        <button
                          className={`bg-red-500 disabled:grayscale-1 flex justify-center items-center relative py-2 px-5 pr-10 md:py-3 rounded-full rounded-tl-none mb-4 hover:shadow-lg hover:shadow-red-900 transition-all md:self-end md:w-fit`}
                          onClick={() => handleCloseModal()}
                          disabled={isLoading}
                          type="button"
                        >
                          {lang === "es" ? "Cancelar" : "Cancel"}
                          <i className="absolute right-5">X</i>
                        </button>
                        <button
                          className={`${imageColor} disabled:grayscale-1 flex justify-center items-center relative py-2 px-5 pr-14 md:py-3 rounded-full rounded-tl-none mb-4 hover:shadow-lg hover:shadow-yellow-900 transition-all md:self-end md:w-fit`}
                          type="submit"
                          disabled={isLoading}
                        >
                          {textButton}
                          <i className="absolute right-5">
                            <SendIcon className="h-6 w-6 md:w-8 md:h-8" />
                          </i>
                        </button>
                      </div>
                    </div>
                    <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
                    <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-yellow-950 group-hover:via-yellow-500 w-7/10 m-auto rounded transition-all"></div>
                  </form>
                  <ToastContainer />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default QuotationForm;
