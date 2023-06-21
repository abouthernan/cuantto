import { useTranslation } from 'react-i18next'

export function Estadistics() {
  const { t } = useTranslation()

  const ESTADISTICS = [
    {
      text: t('ESTADISTICS.one'),
      value: '37%'
    },
    {
      text: t('ESTADISTICS.two'),
      value: '41%'
    },
    {
      text: t('ESTADISTICS.three'),
      value: '90%'
    },
    {
      text: t('ESTADISTICS.four'),
      value: '60%'
    },
    {
      text: t('ESTADISTICS.five'),
      value: '66%'
    },
    {
      text: t('ESTADISTICS.six'),
      value: '95%'
    },
    {
      text: t('ESTADISTICS.seven'),
      value: '64%'
    }
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
            <span className="text-customGreen text-2xl font-semibold">
              {stadistic.value}
            </span>
            {stadistic.text}
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
            <span className="text-customGreen text-2xl font-semibold">
              {stadistic.value}
            </span>
            {stadistic.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
