import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from 'typed.js';
import 'two-up-element';

import { InvitationModal } from "./InvitationModal";
import dashboard from "../assets/images/dashboard.webp";
import app from "../assets/images/app.webp";

export const Hero = () => {
  const el = useRef('.tagline');

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['website', 'app', 'producto', 'consultoría'],
      typeSpeed: 90,
      loop: true,
      backSpeed: 70,
      startDelay: 180
    })

    return () => typed.destroy()
  }, [])
  return (
    <section
      className="w-screen z-10 flex justify-center items-center bg-customDarkBg1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0 relative"
      id="home"
    >
      <span className="ondas" />
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-customPrimary text-sm sm:text-base mb-6 sm:mt-32 mt-16 font-bold">
            ¡Ahorra tiempo cotizando!
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-3xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-white" >
            <h1 className="inline">¿Cuánto cuesta mi<br/>
              <span className="mt-2 sm:mt-2 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-black text-white tagline" />
              ?
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
            Permite a tus potenciales clientes obtener cotizaciones de tus productos o servicios en minutos.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <a
              href="/demo"
              className="custom-button-colored w-64 sm:w-52 h-12 mr-0 mb-2 sm:mb-0 transition-all duration-300"
            >
              Ir al demo
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="md:absolute mx-auto left-0 right-0 max-w-screen-xl px-2 overflow-hidden">
            <two-up>
            <img
              src={dashboard}
              alt="puede ser una imagen del dashboard de qantto.io"
              className="rounded-xl custom-border-gray hero-dashboard-border-gradient aspect-square object-cover max-h-[80vh] w-full"
            />
            <img
              src={app}
              alt="puede ser una imagen de la app de qantto.io"
              className="rounded-xl custom-border-gray hero-dashboard-border-gradient aspect-square object-cover max-h-[80vh] w-full"
            />
            </two-up>
          </div>
        </motion.div>
        <div className="relative w-screen flex justify-center ">
          <div className="custom-shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className=" bg-customDarkBg2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill custom-bg-dark1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
