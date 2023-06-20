import { useTranslation } from 'react-i18next'

export function Estadistics() {
  const { t } = useTranslation()
  const ESTADISTICS = [
    t('ESTADISTICS.one'),
    t('ESTADISTICS.two'),
    t('ESTADISTICS.three'),
    t('ESTADISTICS.four'),
    t('ESTADISTICS.five'),
    t('ESTADISTICS.six'),
    t('ESTADISTICS.seven')
  ]
  return (
    <div
      className="container block mx-auto mb-28 -my-14 overflow-hidden pt-4 2xl:w-[1280px] xl:w-10/12 w-11/12 mt-10"
      id="services"
    >
      <ul className="gap-x-5 animate-scroll overflow-hidden space-x-4 inline-flex w-[calc(320px*14)]">
        {ESTADISTICS.map((stadistic, index) => (
          <li
            key={index}
            className="relative border border-customDarkBg3 w-80 p-4 rounded-md text-gray-300"
          >
            <span className="relative flex h-2 w-2 mb-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-customGreen opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-customGreen" />
            </span>
            {stadistic}
          </li>
        ))}
        {ESTADISTICS.map((stadistic, index) => (
          <li
            key={index}
            className="relative border border-customDarkBg3 w-80 p-4 rounded-md text-gray-300"
          >
            <span className="relative flex h-2 w-2 mb-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-customGreen opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-customGreen" />
            </span>
            {stadistic}
          </li>
        ))}
      </ul>
    </div>
  )
}
