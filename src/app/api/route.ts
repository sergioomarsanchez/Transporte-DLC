import nodemailer from "nodemailer";
import { z } from "zod";
import { ContactValidator } from "../types";
import { NextResponse, NextRequest } from "next/server";


export async function POST(req: NextRequest) {
  const userEmail = process.env.EMAIL;
  const pass = process.env.EMAIL_PASS;
  try {

    const body = await req.json();
    const validatedData = ContactValidator.parse(body);

    const { name, companyName, email, message } = validatedData;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: userEmail,
        pass,
      },
    });
    let mailOptions = {
      from: userEmail,
      to: userEmail,
      subject: "Nuevo mensaje de contacto",
      text: `Nombre: ${name}\n Nombre de la empresa: ${companyName}\nEmail: ${email}\nMensaje: ${message}`,
      html: `<h1>Nombre: ${name}</h1><h2>Nombre de la empresa: ${companyName}</h2><p>Email: ${email}</p><p>Mensaje: ${message}</p>`,
    };


    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Correo enviado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {

      return NextResponse.json(
        { message: "Datos inválidos", errors: error.errors },
        { status: 400 }
      );
    } else {

      console.error(error);
      return NextResponse.json(
        { message: "Error al enviar el correo" },
        { status: 500 }
      );
    }
  }
}

// export async function GET() {
//   return NextResponse.json({ message: "Hola" }, { status: 200 });
// }
