import { useState } from 'preact/hooks'
import { CheckArrowIcon } from '../assets/icons/Icons'

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true)
  const t = (el: string) => el

  const pricingDataStarter = [
    '1 usuario',
    '1 Servicio',
    '2 Subservicios',
    '10 Leads',
    '10 Consultas',
    'Tus clientes podrán hacer cotizaciones ilimitadas',
    'Logo de tu empresa en las quotes',
    'Notificaciones en dashboard',
    'Agendamiento de citas'
  ]

  const pricingDataTeams = [
    '3 Usuarios',
    '2 Servicios',
    '4 Subservicios',
    '30 Leads',
    '30 Consultas',
    'Historial de hasta 5 últimos registros',
    'Tus clientes podrán hacer cotizaciones ilimitadas',
    'Logo de tu empresa en las quotes',
    'Notificaciones en dashboard',
    'Agendamiento de citas',
    'Estadísticas'
  ]

  const pricingDataBusines = [
    '5 Usuarios',
    '5 Servicios',
    '10 Subservicios',
    '60 Leads',
    '60 Consultas',
    'Historial de hasta 10 últimos registros',
    'Tus clientes podrán hacer cotizaciones ilimitadas',
    'Logo de tu empresa en las quotes',
    'Notificaciones en dashboard',
    'Agendamiento de citas',
    'Estadísticas avanzadas',
    'Reportes AI (Automáticos)',
    'Exportar data'
  ]

  const pricingDataUltimate = [
    'Usuarios ilimitados',
    'Servicios ilimitados',
    'Subservicios ilimitados',
    'Leads ilimitados',
    'Consultas ilimitadas',
    'Historial de registros ilimitado',
    'Tus clientes podrán hacer cotizaciones ilimitadas',
    'Logo de tu empresa en las quotes',
    'Notificaciones en dashboard',
    'Agendamiento de citas',
    'Estadísticas avanzadas',
    'Reportes AI (Automáticos)',
    'Exportar data',
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
        <div className="pb-20 pt-12 bg-customBg w-full max-w-7xl">
          <div>
            <div className="container mx-auto px-4">
              <div className="max-w-md mx-auto text-center mb-16">
                <span className="text-qGreen">Planes</span>
                <h2 className="my-2 text-3xl font-bold  text-white balance">
                  Paga solo por <span class="text-qGreen">oportunidades reales</span> de venta
                </h2>
                <p className="text-white/80 w-full text-center">
                  Pon tu proceso de ventas en piloto automático !Ahora!
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
                      Mensual
                    </div>
                    <div className={isMonthly ? 'text-white/80' : ''}>
                      Anual
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
                    Starter
                  </h4>
                  <div className="flex justify-start items-end mb-10">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      {isMonthly ? '$14' : '$14'}
                    </div>
                    <div className="text-white/80">
                      {isMonthly ? t('PRICING.month') : t('PRICING.year')}
                    </div>
                  </div>

                  <ul className="mb-2 md:min-h-[456px] text-white/80">
                    {pricingDataStarter.map((text, index) => (
                      <li className="mb-1 flex gap-3" key={`${text}-${index}`}>
                        <div class="w-6 h-6 aspect-square text-qGreen">
                          <CheckArrowIcon />
                        </div>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    className="inline-block text-center text-qBlack py-2 px-4 w-full rounded-xl rounded-t-xl bg-qGreen font-bold leading-loose mt-5"
                    href="https://calendly.com/qantto/30min?back=1&month=2023-07"
                    target="_blank"
                  >
                    Inicia tu Free-Trial Ahora
                  </a>

                  <div class="text-center text-sm text-white/80 mt-2">
                    <p>14 días <strong class="text-white">gratis</strong>.</p>
                    <p>No te pedimos tarjeta de crédito.</p>
                  </div>
                </div>
                {/* card */}
                <div className="w-[300px] p-8 bg-qGray rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    Teams
                  </h4>
                  <div className="flex justify-start items-end mb-10">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      {isMonthly ? '$48' : '$432'}
                    </div>
                    <div className="text-white/80">
                      {isMonthly ? t('PRICING.month') : t('PRICING.year')}
                    </div>
                  </div>

                  <ul className="mb-2 md:min-h-[456px] text-white/80">
                    {pricingDataTeams.map((text, index) => (
                      <li className="mb-1 flex gap-3" key={`${text}-${index}`}>
                        <div class="w-6 h-6 aspect-square text-qGreen">
                          <CheckArrowIcon />
                        </div>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    className="inline-block text-center text-qBlack py-2 px-4 w-full rounded-xl rounded-t-xl bg-qGreen font-bold leading-loose mt-5"
                    href="https://calendly.com/qantto/30min?back=1&month=2023-07"
                    target="_blank"
                  >
                    Inicia tu Free-Trial Ahora
                  </a>

                  <div class="text-center text-sm text-white/80 mt-2">
                    <p>14 días <strong class="text-white">gratis</strong>.</p>
                    <p>No te pedimos tarjeta de crédito.</p>
                  </div>
                </div>
                {/* card */}
                <div className="w-[300px] p-8 bg-qGreen rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-qBlack text-left">
                    Business
                  </h4>
                  <div className="flex justify-start items-end mb-10">
                    <div className="text-4xl sm:text-5xl font-bold text-qBlack text-left mt-4 mr-2">
                      {isMonthly ? '$250' : '$2.244'}
                    </div>
                    <div className="text-qBlack/80">
                      {isMonthly ? t('PRICING.month') : t('PRICING.year')}
                    </div>
                  </div>

                  <ul className="mb-2 md:min-h-[456px] text-white/80">
                    {pricingDataBusines.map((text, index) => (
                      <li className="mb-1 flex gap-3" key={`${text}-${index}`}>
                        <div class="w-6 h-6 aspect-square text-qBlack">
                          <CheckArrowIcon />
                        </div>
                        <span class="text-qBlack">{text}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    className="inline-block text-center text-qGreen py-2 px-4 w-full rounded-xl rounded-t-xl bg-qBlack font-bold leading-loose mt-5"
                    href="https://calendly.com/qantto/30min?back=1&month=2023-07"
                    target="_blank"
                  >
                    Inicia tu Free-Trial Ahora
                  </a>

                  <div class="text-center text-sm text-qBlack mt-2">
                    <p>14 días <strong class="text-qBlack">gratis</strong>.</p>
                    <p>No te pedimos tarjeta de crédito.</p>
                  </div>
                </div>
                {/* card */}
                <div className="w-[300px] p-8 bg-qGray rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    Ultimate
                  </h4>
                  <div className="flex justify-start items-end mb-10">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      {isMonthly ? '$498' : '$4.476'}
                    </div>
                    <div className="text-white/80">
                      {isMonthly ? t('PRICING.month') : t('PRICING.year')}
                    </div>
                  </div>

                  <ul className="mb-2 md:min-h-[456px] text-white/80">
                    {pricingDataUltimate.map((text, index) => (
                      <li className="mb-1 flex gap-3" key={`${text}-${index}`}>
                        <div class="w-6 h-6 aspect-square text-qGreen">
                          <CheckArrowIcon />
                        </div>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    className="inline-block text-center text-qBlack py-2 px-4 w-full rounded-xl rounded-t-xl bg-qGreen font-bold leading-loose mt-5"
                    href="https://calendly.com/qantto/30min?back=1&month=2023-07"
                    target="_blank"
                  >
                    Inicia tu Free-Trial Ahora
                  </a>

                  <div class="text-center text-sm text-white/80 mt-2">
                    <p>14 días <strong class="text-white">gratis</strong>.</p>
                    <p>No te pedimos tarjeta de crédito.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="text-center text-white/80 max-w-xs mx-auto balance -mt-8">
        <p>Todos los planes incluyen chat y <span class="text-qGreen">video soporte</span> con nuestro equipo.</p>
      </div>
    </>
  )
}