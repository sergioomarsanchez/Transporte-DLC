// import nodemailer from "nodemailer";
// import { z } from "zod";
// import { ContactValidator } from "../types";
// import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";

const userEmail = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

// export async function POST(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     try {
//       const validatedData = ContactValidator.parse(req.body);

//       const { name, companyName, email, message } = validatedData;

//       // Configura el transporter de Nodemailer
//       let transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: userEmail,
//           pass,
//         },
//       });
//       // Configura las opciones del correo
//       let mailOptions = {
//         from: userEmail, // Dirección del remitente
//         to: userEmail, // Dirección del destinatario
//         subject: "Nuevo mensaje de contacto",
//         text: `Nombre: ${name}\n Nombre de la empresa: ${companyName}\nEmail: ${email}\nMensaje: ${message}`,
//         html: `<h1>Nombre: ${name}</h1><h2>Nombre de la empresa: ${companyName}</h2><p>Email: ${email}</p><p>Mensaje: ${message}</p>`,
//       };

//       // Envía el correo
//       await transporter.sendMail(mailOptions);
//       return res.status(200).json({ message: "Correo enviado correctamente" });
//     } catch (error) {
//       console.error(error);
//       if (error instanceof z.ZodError) {
//         // Error de validación
//         return res
//           .status(400)
//           .json({ message: "Datos inválidos", errors: error.errors });
//       } else {
//         // Error general
//         console.error(error);
//        return res.status(500).json({ message: "Error al enviar el correo" });
//       }
//     }
// }
// }

export async function GET(){
  return NextResponse.json({ message: "Hola" });
}
