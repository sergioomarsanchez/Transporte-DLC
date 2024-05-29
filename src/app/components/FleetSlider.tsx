import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import img1 from "@/app/assests/img/LoadedBySide2.jpeg"; // replace with your image paths
import img2 from "@/app/assests/img/LoadedBySide.jpeg";
import img3 from "@/app/assests/img/Loaded.jpeg";
import img4 from "@/app/assests/img/Loaded2.jpeg";
import img5 from "@/app/assests/img/LoadedOnTheStreat.jpeg";
import img6 from "@/app/assests/img/LoadedOnTheStreat2.jpeg";
import img7 from "@/app/assests/img/LoadedTrailer2.jpeg";
import { LangContext } from "../context/langContext";
const images = [img1, img2, img3, img4, img5, img6, img7];

function FleetSlider() {
  const [index, setIndex] = useState(0);
  const { lang } = useContext(LangContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="my-10">
      <div className="mb-10">
        <div className="text-lg ">
          <h3 className="text-xl md:text-2xl font-extrabold italic my-10">
            {lang === "es" ? "Galería" : "Gallery"}
          </h3>
          <p>
            {lang === "es"
              ? "Contamos con una flota de camiones altamente equipados y listos paramanejar diferentes tipos de carga."
              : "We have a fleet of highly equipped trucks ready to handle different types of cargo."}
          </p>
        </div>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={images[index]}
            alt={`Truck ${index + 1}`}
            layout="responsive"
            className="max-h-screen mt-5"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default FleetSlider;
