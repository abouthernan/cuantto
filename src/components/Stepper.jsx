import { useEffect } from 'react'
import { useTranslation } from "react-i18next"

export const Stepper = () => {

  const { t } = useTranslation()

  const stepper = [
    {
      title: t('ONBOARDING.one'),
      position: 'right',
    },
    {
      title: t('ONBOARDING.two'),
      position: 'left',
    },
    {
      title: t('ONBOARDING.three'),
      position: 'right',
    },
    {
      title: t('ONBOARDING.four'),
      position: 'left',
    },
    {
      title: t('ONBOARDING.five'),
      position: 'right',
    },
  ]

  useEffect(() => {
    const items = document.querySelectorAll('.item')
    const numbers = document.querySelectorAll('.number')

    // add animation with intersection observer with tailwindcss when items center in viewport
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100')
            observer.unobserve(entry.target) // Dejar de observar el elemento una vez agregada la clase
          }
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -120px 0px',
        threshold: 0.5
      }
    )

    items.forEach(item => observer.observe(item))
    numbers.forEach(number => observer.observe(number))
  }, [])
  return (
    <div
      className="container max-w-[1220px]  mx-auto h-full px-5 md:pr-12 overflow-x-hidden mb-24"
    >
      <div className="relative wrap h-full w-full grid place-content-center">
        <div
          className="border-2-2 hidden md:block absolute border-opacity-20 border-gray-700 border h-full left-2/4"
        >
        </div>

        {stepper.map(({ title, position }, index) => (
          position === 'right'
            ? (
              <div key={index} className="mb-8 flex justify-between items-center w-full gap-5">
                <div className="hidden md:block w-5/12 min-w-[300px]"></div>
                <div
                  className="z-20 flex items-center order-1 bg-customGreen shadow-xl aspect-square w-8 h-8 rounded-full number transition-opacity duration-500 ease-in-out opacity-0"
                >
                  <p className="mx-auto font-semibold text-lg text-gray-800">{index+1}</p>
                </div>
                <div
                  className="order-1 rounded-lg shadow-xl border-customDarkBg3 border w-full md:w-5/12 px-6 py-4 item transition-all duration-500 ease-in-out opacity-0 min-w-[300px]"
                >
                  <h3 className="mb-3 font-bold text-white text-xl">
                    {title}
                  </h3>
                </div>
              </div>
            )
            : (
              <div
                key={index}
                className="mb-8 flex justify-between md:flex-row-reverse items-center w-full gap-5"
              >
                <div className="hidden md:block order-1 w-5/12 min-w-[300px]"></div>
                <div
                  className="z-20 flex items-center md:order-1 bg-customGreen shadow-xl aspect-square w-8 h-8 rounded-full number transition-opacity duration-500 ease-in-out opacity-0"
                >
                  <p className="mx-auto text-gray-800 font-semibold text-lg">{index+1}</p>
                </div>
                <div
                  className="md:order-1 border-customDarkBg3 border rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 item transition-all duration-500 ease-in-out  opacity-0 min-w-[300px]"
                >
                  <h3 className="mb-3 font-bold text-white text-xl">
                    {title}
                  </h3>
                </div>
              </div>
            )
        ))}
      </div>
    </div>

  )
}