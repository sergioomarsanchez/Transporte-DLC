import { z } from "zod";

export const ContactValidator = z.object({
  name: z.string().min(2, { message: "El nombre es requerido" }),
  companyName: z
    .string()
    .min(2, { message: "El nombre de la empresa es requerido" }),
  email: z
    .string()
    .min(2, { message: "El nombre es requerido" })
    .email({ message: "El email no es válido" }),
  message: z.string().min(2, { message: "El mensaje es requerido" }),
});
export type Contact = z.infer<typeof ContactValidator>;

export interface Theme {
  theme: "light" | "dark";
}
export interface Lang {
  lang: "en" | "es";
}
