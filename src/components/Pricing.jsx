import { useState } from 'react'
import { motion } from 'framer-motion'

import { InvitationModal } from './InvitationModal'
import { CheckArrowIcon } from '../assets/icons/CheckArrowIcon'
import { useTranslation } from 'react-i18next'

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { t } = useTranslation()

  const lang = useTranslation().i18n.language
  const isEs = lang === 'es'

  const pricingDataFree = [
    t('PRICING.cards.one.list.one'),
    t('PRICING.cards.one.list.two'),
    t('PRICING.cards.one.list.three'),
    t('PRICING.cards.one.list.four'),
    t('PRICING.cards.one.list.five'),
    t('PRICING.cards.one.list.six'),
  ]

  const pricingDataStarter = [
    t('PRICING.cards.two.list.one'),
    t('PRICING.cards.two.list.two'),
    t('PRICING.cards.two.list.three'),
    t('PRICING.cards.two.list.four'),
    t('PRICING.cards.two.list.five'),
    t('PRICING.cards.two.list.six'),
    t('PRICING.cards.two.list.seven'),
    t('PRICING.cards.two.list.eight'),
  ]

  const pricingDataBusines = [
    t('PRICING.cards.three.list.one'),
    t('PRICING.cards.three.list.two'),
    t('PRICING.cards.three.list.three'),
    t('PRICING.cards.three.list.four'),
    t('PRICING.cards.three.list.five'),
    t('PRICING.cards.three.list.six'),
    t('PRICING.cards.three.list.seven'),
    t('PRICING.cards.three.list.eight'),
    t('PRICING.cards.three.list.nine')
  ]

  const pricingDataEnterprise = [
    t('PRICING.cards.four.list.one'),
    t('PRICING.cards.four.list.two'),
    t('PRICING.cards.four.list.three'),
    t('PRICING.cards.four.list.four'),
    t('PRICING.cards.four.list.five'),
    t('PRICING.cards.four.list.six'),
    t('PRICING.cards.four.list.seven'),
    t('PRICING.cards.four.list.eight'),
    t('PRICING.cards.four.list.nine')
  ]

  const handleChange = () => {
    setIsMonthly(!isMonthly)
  }

  return (
    <section
      className="w-screen flex justify-center bg-customBg relative"
      id="pricing"
    >
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-customBg w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="custom-block-subtitle">{t('PRICING.sub')}</span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                {t('PRICING.title')}
              </h2>
              <p className="text-gray-300 w-full text-center">
                {t('PRICING.description')}
              </p>
              <br />
              <label className="mx-auto bg-customDarkBg3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer overflow-hidden">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  checked={!isMonthly}
                  onChange={handleChange}
                />
                <span className="h-8 w-[5.5rem] flex items-center pr-2 bg-customDarkBg3 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-customGreen   after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
                <div className="flex absolute text-gray-700 text-sm font-bold">
                  <div
                    className={
                      isMonthly ? 'mr-9 ml-3' : 'mr-9 ml-3 text-gray-400'
                    }
                  >
                    {t('PRICING.monthly')}
                  </div>
                  <div className={isMonthly && 'text-gray-400'}>
                    {t('PRICING.yearly')}
                    <span className='absolute text-black bg-orange-400 shadow -top-[7px] -right-[60px] w-24 text-[11px] rotate-[45deg]'>25% Off</span>
                  </div>
                </div>
              </label>
            </div>

            <div className="grid place-items-center grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center items-start gap-2 lg:mt-20">

              <div className="w-[300px] p-8 bg-customDarkBg3 rounded-3xl">
                <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                  {t('PRICING.cards.one.title')}
                </h4>
                <div className="flex justify-start items-end mb-10">
                  <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                    $0
                  </div>
                  <div className="text-gray-500">
                    {isMonthly ? t('PRICING.month') : t('PRICING.year')}
                  </div>
                </div>

                <ul className="mb-2 sm:min-h-[316px] text-white">
                  {pricingDataFree.map((text, index) => (
                    <li className="mb-1 flex" key={`${text}-${index}`}>
                      <CheckArrowIcon />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                <a
                  className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-5"
                  href="https://calendly.com/qantto/30min?back=1&month=2023-07"
                  target='_blank'
                >
                  {t('PRICING.cards.one.cta')}
                </a>
              </div>

              <div className="w-[300px] p-8 bg-customDarkBg3 rounded-3xl">
                <h4 className="mb-2 text-2xl font-bold font-heading text-white text-left">
                  {t('PRICING.cards.two.title')}
                </h4>
                <div className="flex justify-start items-end mb-10">
                  <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                    {isMonthly ? '$48' : '$432'}
                  </div>
                  <div className="text-gray-500">
                    {isMonthly ? t('PRICING.month') : t('PRICING.year')}
                  </div>
                </div>

                <ul className="mb-2 sm:min-h-[316px] text-white">
                  {pricingDataStarter.map((text, index) => (
                    <li className="mb-1 flex" key={`${text}-${index}`}>
                      <CheckArrowIcon />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                <a
                  className="inline-block text-center py-2 px-4 w-full custom-button-colored leading-loose transition duration-200 mt-5"
                  href="https://calendly.com/qantto/30min?back=1&month=2023-07"
                  target='_blank'
                >
                  {t('PRICING.cards.two.cta')}
                </a>
              </div>

              <div className="w-[300px] p-8 bg-customDarkBg3 rounded-3xl">
                <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                  {t('PRICING.cards.three.title')}
                </h4>
                <div className="flex justify-start items-end mb-10">
                  <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                    {isMonthly ? '$250' : '$2.244'}
                  </div>
                  <div className="text-gray-500">
                    {isMonthly ? t('PRICING.month') : t('PRICING.year')}
                  </div>
                </div>

                <ul className="mb-2 sm:min-h-[316px] text-white">
                  {pricingDataBusines.map((text, index) => (
                    <li className="mb-1 flex" key={`${text}-${index}`}>
                      <CheckArrowIcon />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                <a
                  className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-5"
                  href="https://calendly.com/qantto/30min?back=1&month=2023-07"
                  target='_blank'
                >
                  {t('PRICING.cards.three.cta')}
                </a>
              </div>

              <div className="w-[300px] p-8 bg-customDarkBg3 rounded-3xl">
                <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                  {t('PRICING.cards.four.title')}
                </h4>
                <div className="flex justify-start items-end mb-10">
                  <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                    {isMonthly ? '$498' : '$4.476'}
                  </div>
                  <div className="text-gray-500">
                    {isMonthly ? t('PRICING.month') : t('PRICING.year')}
                  </div>
                </div>

                <ul className="mb-2 sm:min-h-[316px] text-white">
                  {pricingDataEnterprise.map((text, index) => (
                    <li className="mb-1 flex" key={`${text}-${index}`}>
                      <CheckArrowIcon />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                <a
                  className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-5"
                  href="https://calendly.com/qantto/30min?back=1&month=2023-07"
                  target='_blank'
                >
                  {t('PRICING.cards.four.cta')}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  )
}
