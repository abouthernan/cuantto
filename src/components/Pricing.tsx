import { useState } from 'react'
import { CheckArrowIcon } from '../assets/icons'
import { useTranslation } from "react-i18next";
import { dashboardRouter } from '../constants';

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true)

  const { t } = useTranslation('translation');

  const pricingDataStarter = [
    t("PRICING.cards.one.one"),
    t("PRICING.cards.one.two"),
    t("PRICING.cards.one.three"),
    t("PRICING.cards.one.four"),
    t("PRICING.cards.one.five"),
    t("PRICING.cards.one.six"),
    t("PRICING.cards.one.seven"),
    t("PRICING.cards.one.eight"),
    t("PRICING.cards.one.nine")
  ]

  const pricingDataTeams = [
    t("PRICING.cards.two.one"),
    t("PRICING.cards.two.two"),
    t("PRICING.cards.two.three"),
    t("PRICING.cards.two.four"),
    t("PRICING.cards.two.five"),
    t("PRICING.cards.two.six"),
    t("PRICING.cards.two.seven"),
    t("PRICING.cards.two.eight"),
    t("PRICING.cards.two.nine"),
    t("PRICING.cards.two.ten"),
    t("PRICING.cards.two.eleven")
  ]

  const pricingDataBusines = [
    t("PRICING.cards.three.one"),
    t("PRICING.cards.three.two"),
    t("PRICING.cards.three.three"),
    t("PRICING.cards.three.four"),
    t("PRICING.cards.three.five"),
    t("PRICING.cards.three.six"),
    t("PRICING.cards.three.seven"),
    t("PRICING.cards.three.eight"),
    t("PRICING.cards.three.nine"),
    t("PRICING.cards.three.ten"),
    t("PRICING.cards.three.eleven"),
    t("PRICING.cards.three.twelve"),
    t("PRICING.cards.three.thirteen")
  ]

  const pricingDataUltimate = [
    t("PRICING.cards.four.one"),
    t("PRICING.cards.four.two"),
    t("PRICING.cards.four.three"),
    t("PRICING.cards.four.four"),
    t("PRICING.cards.four.five"),
    t("PRICING.cards.four.six"),
    t("PRICING.cards.four.seven"),
    t("PRICING.cards.four.eight"),
    t("PRICING.cards.four.nine"),
    t("PRICING.cards.four.ten"),
    t("PRICING.cards.four.eleven"),
    t("PRICING.cards.four.twelve"),
    t("PRICING.cards.four.thirteen")
  ]

  const handleChange = () => {
    setIsMonthly(!isMonthly)
  }

  return (
    <>
      <section
        className="w-screen flex justify-center relative"
        id="pricing"
      >
        <div className="pb-20 bg-customBg w-full max-w-7xl">
          <div>
            <div className="container mx-auto px-4">
              <div className="max-w-[560px] mx-auto text-center mb-16">
                <span className="text-qGreen">{t("PRICING.subtitle")}</span>
                <h2 className="my-2 text-3xl font-bold  text-white">
                  {t("PRICING.title")} <span className="text-qGreen">{t("PRICING.title2")}</span> {t("PRICING.title3")}
                </h2>
                <p className="text-white/80 w-full text-center">
                  {t("PRICING.desc")}
                </p>
                <br />
                <label className="mx-auto bg-qGray relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer overflow-hidden">
                  <input
                    type="checkbox"
                    className="peer appearance-none"
                    checked={!isMonthly}
                    onChange={handleChange}
                  />
                  <span className="h-8 w-[5.5rem] flex items-center pr-2 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-qGreen after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
                  <div className="flex absolute text-qBlack text-sm font-bold">
                    <div
                      className={
                        isMonthly ? 'mr-9 ml-3 ' : 'mr-9 ml-3 text-white/80'
                      }
                    >
                      {t("MESSAGES.montly")}
                    </div>
                    <div className={isMonthly ? 'text-white/80' : ''}>
                      {t("MESSAGES.annual")}
                      <span className="absolute text-black bg-orange-400 shadow -top-[7px] -right-[60px] w-24 text-[11px] rotate-[45deg]">
                        25% Off
                      </span>
                    </div>
                  </div>
                </label>
              </div>

              <div className="grid place-items-center grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center items-start gap-2 lg:mt-20">
                {/* card */}
                <div className="w-[300px] p-8 bg-qGray rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    {t("PRICING.cards.one.name")}
                  </h4>
                  <div className="flex justify-start items-end mb-10">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      {isMonthly ? '$14' : '$168'}
                    </div>
                    <div className="text-white/80">
                      / {' '}
                      {isMonthly ? t('MESSAGES.month') : t('MESSAGES.year')}
                    </div>
                  </div>

                  <ul className="mb-2 md:min-h-[456px] text-white/80">
                    {pricingDataStarter.map((text, index) => (
                      <li className="mb-1 flex gap-3" key={`${text}-${index}`}>
                        <div className="w-6 h-6 aspect-square text-qGreen">
                          <CheckArrowIcon />
                        </div>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    className="inline-block text-center text-qBlack py-2 px-4 w-full rounded-xl rounded-t-xl bg-qGreen font-bold leading-loose mt-5"
                    href={dashboardRouter.register}
                    target="_blank"
                  >
                    {t("CTA.freeTrial")}
                  </a>

                  <div className="text-center text-sm text-white/80 mt-2">
                    <p>{t("MESSAGES.days14")} <strong className="text-white">{t("MESSAGES.free")}</strong>.</p>
                    <p>{t("MESSAGES.noCreditCard")}.</p>
                  </div>
                </div>
                {/* card */}
                <div className="w-[300px] p-8 bg-qGray rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    {t("PRICING.cards.two.name")}
                  </h4>
                  <div className="flex justify-start items-end mb-10">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      {isMonthly ? '$48' : '$432'}
                    </div>
                    <div className="text-white/80">
                      / {' '}
                      {isMonthly ? t('MESSAGES.month') : t('MESSAGES.year')}
                    </div>
                  </div>

                  <ul className="mb-2 md:min-h-[456px] text-white/80">
                    {pricingDataTeams.map((text, index) => (
                      <li className="mb-1 flex gap-3" key={`${text}-${index}`}>
                        <div className="w-6 h-6 aspect-square text-qGreen">
                          <CheckArrowIcon />
                        </div>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    className="inline-block text-center text-qBlack py-2 px-4 w-full rounded-xl rounded-t-xl bg-qGreen font-bold leading-loose mt-5"
                    href={dashboardRouter.register}
                    target="_blank"
                  >
                    {t("CTA.freeTrial")}
                  </a>

                  <div className="text-center text-sm text-white/80 mt-2">
                    <p>{t("MESSAGES.days14")} <strong className="text-white">{t("MESSAGES.free")}</strong>.</p>
                    <p>{t("MESSAGES.noCreditCard")}.</p>
                  </div>
                </div>
                {/* card */}
                <div className="w-[300px] p-8 bg-qGreen rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-qBlack text-left">
                    {t("PRICING.cards.three.name")}
                  </h4>
                  <div className="flex justify-start items-end mb-10">
                    <div className="text-4xl sm:text-5xl font-bold text-qBlack text-left mt-4 mr-2">
                      {isMonthly ? '$250' : '$2.244'}
                    </div>
                    <div className="text-qBlack/80">
                      / {' '}
                      {isMonthly ? t('MESSAGES.month') : t('MESSAGES.year')}
                    </div>
                  </div>

                  <ul className="mb-2 md:min-h-[456px] text-white/80">
                    {pricingDataBusines.map((text, index) => (
                      <li className="mb-1 flex gap-3" key={`${text}-${index}`}>
                        <div className="w-6 h-6 aspect-square text-qBlack">
                          <CheckArrowIcon />
                        </div>
                        <span className="text-qBlack">{text}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    className="inline-block text-center text-qGreen py-2 px-4 w-full rounded-xl rounded-t-xl bg-qBlack font-bold leading-loose mt-5"
                    href={dashboardRouter.register}
                    target="_blank"
                  >
                    {t("CTA.freeTrial")}
                  </a>

                  <div className="text-center text-sm text-qBlack mt-2">
                    <p>{t("MESSAGES.days14")} <strong className="text-qBlack">{t("MESSAGES.free")}</strong>.</p>
                    <p>{t("MESSAGES.noCreditCard")}.</p>
                  </div>
                </div>
                {/* card */}
                <div className="w-[300px] p-8 bg-qGray rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    {t("PRICING.cards.four.name")}
                  </h4>
                  <div className="flex justify-start items-end mb-10">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      {isMonthly ? '$498' : '$4.476'}
                    </div>
                    <div className="text-white/80">
                      / {' '}
                      {isMonthly ? t('MESSAGES.month') : t('MESSAGES.year')}
                    </div>
                  </div>

                  <ul className="mb-2 md:min-h-[456px] text-white/80">
                    {pricingDataUltimate.map((text, index) => (
                      <li className="mb-1 flex gap-3" key={`${text}-${index}`}>
                        <div className="w-6 h-6 aspect-square text-qGreen">
                          <CheckArrowIcon />
                        </div>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    className="inline-block text-center text-qBlack py-2 px-4 w-full rounded-xl rounded-t-xl bg-qGreen font-bold leading-loose mt-5"
                    href={dashboardRouter.register}
                    target="_blank"
                  >
                    {t("CTA.freeTrial")}
                  </a>

                  <div className="text-center text-sm text-white/80 mt-2">
                    <p>{t("MESSAGES.days14")} <strong className="text-white">{t("MESSAGES.free")}</strong>.</p>
                    <p>{t("MESSAGES.noCreditCard")}.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center text-white/80 max-w-xs mx-auto balance -mt-8 font-base">
        <p>{t("PRICING.footer.text1")} <span className="text-qGreen font-bold">{t("PRICING.footer.text2")}</span> {t("PRICING.footer.text3")}</p>
      </div>
    </>
  )
}
