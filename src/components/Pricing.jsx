import { useState } from 'react'
import { motion } from 'framer-motion'

import { InvitationModal } from './InvitationModal'
import { CheckArrowIcon } from '../assets/icons/CheckArrowIcon'
import { useTranslation } from 'react-i18next'

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { t } = useTranslation()

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
      t('PRICING.cards.two.list.nine'),
  ]

const pricingDataPro = [
    t('PRICING.cards.three.list.one'),
    t('PRICING.cards.three.list.two'),
    t('PRICING.cards.three.list.three'),
    t('PRICING.cards.three.list.four'),
    t('PRICING.cards.three.list.five'),
    t('PRICING.cards.three.list.six'),
    t('PRICING.cards.three.list.seven'),
    t('PRICING.cards.three.list.eight'),
    t('PRICING.cards.three.list.nine'),
    t('PRICING.cards.three.list.ten'),
    t('PRICING.cards.three.list.eleven')
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
      <div className="pb-20 pt-12 bg-customBg  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
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
              <br />
              <label className="mx-auto bg-customDarkBg3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
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
                  </div>
                </div>
              </label>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row lg:items-baseline -mx-4 items-center lg:mt-32">
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
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

                  <ul className="mb-2 2xl:mb-6 text-white">
                    {pricingDataFree.map((text, index) => (
                      <li className="mb-1 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    href="/signup"
                  >
                    {t('PRICING.cards.one.cta')}
                  </a>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0 lg:relative lg:-top-14">
                <div className="px-8 py-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-white text-left">
                    {t('PRICING.cards.two.title')}
                  </h4>
                  <div className="flex justify-start items-end mb-10">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      {isMonthly ? '$8' : '$5'}
                    </div>
                    <div className="text-gray-500">{t('PRICING.month')}</div>
                  </div>

                  <ul className="mb-14 text-white">
                    {pricingDataStarter.map((text, index) => (
                      <li className="mb-1 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    className="inline-block text-center py-2 px-4 w-full custom-button-colored leading-loose transition duration-200 mt-20"
                    href="/signup"
                  >
                    {t('PRICING.cards.two.cta')}
                  </a>
                </div>
              </div>

              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    {t('PRICING.cards.three.title')}
                  </h4>
                  <div className="flex justify-start items-end mb-10">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      {isMonthly ? '$12' : '$10'}
                    </div>
                    <div className="text-gray-500">{t('PRICING.month')}</div>
                  </div>

                  <ul className="mb-2 2xl:mb-6 text-white">
                    {pricingDataPro.map((text, index) => (
                      <li className="mb-1 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    href="/signup"
                  >
                    {t('PRICING.cards.three.cta')}
                  </a>
                </div>
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
