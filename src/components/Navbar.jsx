import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import QuanttoLogo from '../assets/logos/QuanttoLogoClaro.svg'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  const navbarLinks = [
    {
      label: t('HEADER.nav.benefits'),
      href: '#benefits',
      ariaLabel: 'Benefits'
    },
    { label: t('HEADER.nav.prices'), href: '#pricing', ariaLabel: 'Pricing' },
    { label: t('HEADER.nav.faqs'), href: '#faqs', ariaLabel: 'Faqs' }
  ]

  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-transparent z-40 backdrop-blur-xl">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a className="navbar-link" href="/" aria-label="Home">
            <div className="flex justify-start items-center grow basis-0">
              <img src={QuanttoLogo} alt="Quantto Logo" width={150} />
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="text-white flex items-center justify-center h-full px-4 hover:text-customGreen transition-colors duration-300"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="grow basis-0 justify-end hidden lg:flex items-center space-x-4">
            {/* <a
              className="text-white hover:text-customGreen rounded-md font-semibold transition-colors durantion-300 "
              href="/login"
            >
              {t('HEADER.buttons.login')}
            </a> */}
            <a
              className="text-customDarkBlue rounded-md font-bold transition-colors durantion-300
           bg-customGreen hover:bg-customGreen/80 px-6 py-2 text-sm flex"
              href="https://calendly.com/qantto/30min?back=1&month=2023-07"
              target='_blank'
            >
              <span className="pt-px">{t("HERO.cta")}</span>
              {/* <span className="pt-px">{t('HEADER.buttons.signup')}</span> */}
            </a>
          </div>
        </motion.div>
        <div
          className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 "></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0 bg-customDarkBg1 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10
        "
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="navbar-link"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}

              <div className="flex items-center justify-center space-x-4">
                {/* <a className="text-white font-semibold py-1 px-2" href="/login">
                  {t('HEADER.buttons.login')}
                </a> */}

                <a
                  className="text-customDarkBlue rounded-md font-bold bg-customGreen hover:bg-customGreen/80 pl-6 pr-8 pt-2 pb-2 text-sm flex"
                  href="https://calendly.com/qantto/30min?back=1&month=2023-07"
              target='_blank'
                >
                  {t("HERO.cta")}
                </a>

                {/* <a
                  className="text-customDarkBlue rounded-md font-bold bg-customGreen hover:bg-customGreen/80 pl-6 pr-8 pt-2 pb-2 text-sm flex"
                  href="/signup"
                >
                  {t('HEADER.buttons.signup')}
                </a> */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
