import nodemailer from "nodemailer";
import { z } from "zod";
import { NextResponse, NextRequest } from "next/server";

const formSchema = z.object({
  senderName: z.string().min(1, "Sender name is required"),
  senderContact: z.string().min(1, "Sender contact is required"),
  senderEmail: z.string().email("Invalid email"),
  receiverName: z.string().min(1, "Receiver name is required"),
  receiverContact: z.string().min(1, "Receiver contact is required"),
  cargoType: z.string().min(1, "Cargo type is required"),
  cargoDimensions: z.string().min(1, "Cargo dimensions are required"),
  cargoWeight: z.string().min(1, "Cargo weight must be greater than 0"),
  pickupAddress: z.string().min(1, "Pickup address is required"),
  deliveryAddress: z.string().min(1, "Delivery address is required"),
  pickupDate: z.string().min(1, "Pickup date is required"),
  deliveryDate: z.string().min(1, "Delivery date is required"),
  paymentMethod: z.string().min(1, "Payment method is required"),
  comments: z.string().optional(),
});


export async function POST(req: NextRequest) {
  const userEmail = process.env.EMAIL;
  const pass = process.env.EMAIL_PASS;
  try {
    const body = await req.json();
    const validatedData = formSchema.parse(body);

    const {
      senderName,
      senderContact,
      senderEmail,
      receiverName,
      receiverContact,
      cargoType,
      cargoDimensions,
      cargoWeight,
      pickupAddress,
      deliveryAddress,
      pickupDate,
      deliveryDate,
      paymentMethod,
      comments,
    } = validatedData;

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
      subject: "Nuevo Pedido de Cotización",
    text: `
      Nombre del remitente: ${senderName}
      Contacto del remitente: ${senderContact}
      Email del remitente: ${senderEmail}

      Nombre del receptor: ${receiverName}
      Contacto del receptor: ${receiverContact}

      Tipo de carga: ${cargoType}
      Dimensiones de la carga: ${cargoDimensions}
      Peso de la carga: ${cargoWeight} kg

      Dirección de recogida: ${pickupAddress}
      Dirección de entrega: ${deliveryAddress}

      Fecha de recogida: ${pickupDate}
      Fecha de entrega: ${deliveryDate}

      Método de pago: ${paymentMethod}

      Comentarios: ${comments || 'N/A'}
    `,
    html: `
      <h1>Solicitud de Cotización de Transporte de Carga</h1>
      <h2>Detalles del Remitente</h2>
      <p><strong>Nombre:</strong> ${senderName}</p>
      <p><strong>Contacto:</strong> ${senderContact}</p>
      <p><strong>Email:</strong> ${senderEmail}</p>

      <h2>Detalles del Receptor</h2>
      <p><strong>Nombre:</strong> ${receiverName}</p>
      <p><strong>Contacto:</strong> ${receiverContact}</p>

      <h2>Detalles de la Carga</h2>
      <p><strong>Tipo de carga:</strong> ${cargoType}</p>
      <p><strong>Dimensiones:</strong> ${cargoDimensions}</p>
      <p><strong>Peso:</strong> ${cargoWeight} kg</p>

      <h2>Detalles del Envío</h2>
      <p><strong>Dirección de recogida:</strong> ${pickupAddress}</p>
      <p><strong>Dirección de entrega:</strong> ${deliveryAddress}</p>
      <p><strong>Fecha de recogida:</strong> ${pickupDate}</p>
      <p><strong>Fecha de entrega:</strong> ${deliveryDate}</p>

      <h2>Pago y Comentarios</h2>
      <p><strong>Método de pago:</strong> ${paymentMethod}</p>
      <p><strong>Comentarios:</strong> ${comments || 'N/A'}</p>
    `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      message: "Correo enviado correctamente",
      status: 200,
    });
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        message: "Datos inválidos",
        errors: error.errors,
        status: 400,
      });
    } else {
      console.error(error);
      return NextResponse.json({
        message: "Error al enviar el correo",
        status: 500,
      });
    }
  }
}

// export async function GET() {
//   return NextResponse.json({ message: "Hola" }, { status: 200 });
// }
