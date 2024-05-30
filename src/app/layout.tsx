import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/themeContext";
import { LangProvider } from "./context/langContext";
import Navbar from "./components/NavBars/Navbar";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://transporte-dlc.vercel.app/"),
  title: "Transporte DLC Concepción del Uruguay E.R.",
  description:
    "Transporte confiable y eficiente de carga por tierra desde Concepción del Uruguay hacia cualquier destino en Argentina.",
  keywords: [
    "transporte de carga",
    "camiones",
    "Concepción del Uruguay",
    "Argentina",
    "logística",
    "distribución",
    "carga general",
    "carga peligrosa",
    "carga refrigerada",
    "envíos",
  ],
  authors: {
    url: "https://sergioomarsanchez.netlify.app/",
    name: "Sergio Sánchez",
  },
  icons: {
    icon: "./Small-black.png",
    apple: "./Small-black.png",
  },
  openGraph: {
    type: "website",
    //TODO:Change url once in production.
    //url: "",
    title: "Transporte DLC",
    description:
      "Transporte confiable y eficiente de carga por tierra desde Concepción del Uruguay hacia cualquier destino en Argentina.",
    siteName: "Transporte DLC Website",
    images: [
      {
        url: "DLC/src/app/assests/brandImgs/DLC_Logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <LangProvider>
        <html lang="en">
          <body className={inter.className}>
            <Navbar />
            {children}
            <Footer />
          </body>
        </html>
      </LangProvider>
    </ThemeProvider>
  );
}
