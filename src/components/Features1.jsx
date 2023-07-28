import { motion } from 'framer-motion'

// spanish
import img1es from '../assets/images/feature1/es/1.webp'
import img2es from '../assets/images/feature1/es/2.webp'
import img3es from '../assets/images/feature1/es/3.webp'
import img4es from '../assets/images/feature1/es/4.webp'

// english
import img1en from '../assets/images/feature1/en/1.webp'
import img2en from '../assets/images/feature1/en/2.webp'
import img3en from '../assets/images/feature1/en/3.webp'
import img4en from '../assets/images/feature1/en/4.webp'

const IMGS = {
  es: [img1es, img2es, img3es, img4es],
  en: [img1en, img2en, img3en, img4en],
}


import { CheckArrowIcon } from '../assets/icons/CheckArrowIcon'
import { useTranslation } from 'react-i18next'

export const Features1 = () => {
  const { t } = useTranslation()

  const lang = useTranslation().i18n.language
  const isEs = lang === 'es'

  return (
    <section
      className="w-full bg-customBg mb-8 sm:mt-16 sm:mb-16"
      id="benefits"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="custom-block-subtitle">
                {t('FEATURES1.sub')}
              </span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                {t('FEATURES1.title')}
              </h2>
              <p className="mb-10 text-customGrayText leading-loose">
                {t('FEATURES1.description')}
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>{t('FEATURES1.list.one')}</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>{t('FEATURES1.list.two')}</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>{t('FEATURES1.list.three')}</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>{t('FEATURES1.list.four')}</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>{t('FEATURES1.list.five')}</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>{t('FEATURES1.list.six')}</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>{t('FEATURES1.list.seven')}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
                  src={IMGS[isEs ? 'es' : 'en'][0]}
                  alt="f1"
                  className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded ">
                <img
                  src={IMGS[isEs ? 'es' : 'en'][1]}
                  alt="f2"
                  className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
                />
              </div>
            </div>
            <div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={IMGS[isEs ? 'es' : 'en'][2]}
                  alt="f3"
                  className="rounded-xl  custom-border-gray"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded-lg ">
                <img

                  src={IMGS[isEs ? 'es' : 'en'][3]}
                  alt="f4"
                  className="rounded-xl  custom-border-gray"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
