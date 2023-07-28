import { motion } from 'framer-motion'

import { InvitationModal } from './InvitationModal'
import { useTranslation } from 'react-i18next'

export const Hero = () => {
  const { t } = useTranslation()
  return (
    <section
      className="w-screen z-10 min-h-screen grid place-content-center bg-customDarkBg1 hero-bg-gradient relative"
      id="home"
    >
      <span className="ondas" />
      <div className="w-full max-w-5xl flex flex-col justify-center items-center px-2 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-customGreen text-[18px] mb-6 sm:mt-20 font-bold">
            {t('HERO.sub')}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-3xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-white">
            <h1 className="inline px-1 md:px-0 whitespace-break-spaces">
              {t('HERO.title')}
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
            {t('HERO.description')}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 justify-center">
            <a className="custom-button-colored w-64 sm:w-52 h-12 mr-0 mb-2 sm:mb-0 transition-all duration-300"
            href='https://calendly.com/qantto/30min?back=1&month=2023-07'
            target='_blank'
            >
              {t('HERO.cta')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
