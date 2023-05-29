import { motion } from 'framer-motion'
import 'two-up-element'

import { InvitationModal } from './InvitationModal'
import dashboard from '../assets/images/dashboard.webp'
import app from '../assets/images/app.webp'

export const Hero = () => {
  return (
    <section
      className="w-screen z-10 flex justify-center items-center bg-customDarkBg1 hero-bg-gradient relative"
      id="home"
    >
      <span className="ondas" />
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-customGreen text-sm sm:text-base mb-6 sm:mt-32 mt-16 font-bold">
            Cambiamos la forma de cotizar
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-3xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-white">
            <h1 className="inline px-1 md:px-0">
              Cotizaciones automáticas 24/7 para tus clientes
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
            Permite a tus clientes potenciales obtener cotizaciones de tus
            productos o servicios en minutos.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <a className="custom-button-colored w-64 sm:w-52 h-12 mr-0 mb-2 sm:mb-0 transition-all duration-300">
              ¿Cómo funciona?
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
