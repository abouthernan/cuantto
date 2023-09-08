import { motion } from 'framer-motion'

import vehementLogo from '../assets/images/partners/vehement.webp'
import locknetLogo from '../assets/images/partners/locknet.webp'
import avillionLogo from '../assets/images/partners/avillion.webp'
import { useTranslation } from 'react-i18next'
import { CountClients } from './CountClients'

export const Brands = () => {
  const { t } = useTranslation()
  return (
    <section className="py-12 sm:py-24 bg-customDarkBg1 w-full mb-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
          <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center text-center">
            <div className="w-full px-4 mb-12 lg:mb-0">
              <div className="flex flex-col w-full mx-auto">
                <p className="text-3xl lg:text-6xl text-white lg:mb-2">
                  +
                  <span className="font-semibold">
                    <CountClients />
                  </span>
                </p>
                <h2 className="mb-2 text-xl sm:text-2xl lg:text-6xl font-bold tracking-normal text-white">
                  {t('BRANDS.title')}{' '}
                  <span className="font-bold tracking-normal text-customGreen">
                    Qantto
                  </span>
                </h2>
              </div>
            </div>
            {/* <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10"> */}
            {/* <div className="flex flex-wrap -m-4"> */}
            {/*   <div className="w-1/2 sm:w-1/3 py-6 flex justify-center"> */}
            {/*     <img */}
            {/*       width={120} */}
            {/*       height={50} */}
            {/*       className="aspect-video object-contain" */}
            {/*       src={vehementLogo} */}
            {/*     /> */}
            {/*   </div> */}
            {/*   <div className="w-1/2 sm:w-1/3 py-6 flex  justify-center"> */}
            {/*     <img */}
            {/*       width={120} */}
            {/*       height={50} */}
            {/*       className="aspect-video object-contain filter invert" */}
            {/*       src={locknetLogo} */}
            {/*     /> */}
            {/*   </div> */}
            {/*   <div className="w-1/2 sm:w-1/3 py-6 flex  justify-center"> */}
            {/*     <img */}
            {/*       width={120} */}
            {/*       height={50} */}
            {/*       className="aspect-video object-contain" */}
            {/*       src={avillionLogo} */}
            {/*     /> */}
            {/*   </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
