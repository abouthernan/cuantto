import { useTranslation } from 'react-i18next'
import whatsapp from '../assets/logos/whatsapp.png'
import zapier from '../assets/logos/zapier.svg'
import amocrm from '../assets/logos/amocrm.svg'
import hubspot from '../assets/logos/hubspot.svg'
import paypal from '../assets/logos/paypal.svg'
import pipedrive from '../assets/logos/pipedrive.svg'
import salesforce from '../assets/logos/salesforce.svg'
import verisign from '../assets/logos/verisign.svg'
import zoho from '../assets/logos/zoho.svg'
import signstation from '../assets/logos/signstation.png'

const integrations1 = [whatsapp, zapier, amocrm, hubspot, signstation]
const integrations2 = [paypal, pipedrive, salesforce, verisign, zoho]

export const Integrations = () => {
  const { t } = useTranslation()
  return (
    <div
      className="container block mx-auto mb-24 -my-14 overflow-hidden pt-4 2xl:w-[1280px] xl:w-10/12 w-11/12 mt-10"
      id="services"
    >
      <span className="custom-block-subtitle text-center block">
        {t('INTEGRATIONS.sub')}
      </span>
      <h2 className="text-white text-center text-4xl lg:text-5xl font-bold my-6">
        {t('INTEGRATIONS.title')}
      </h2>
      <p className="text-gray-300 w-full text-center mb-10">
        {t('INTEGRATIONS.description')}
      </p>

      <ul className="gap-x-5 animate-integrations overflow-hidden space-x-4 sm:space-x-10 inline-flex w-[calc(240px*10)]">
        {integrations1.map(item => (
          <li className="relative h-28 w-60 rounded-md text-gray-300">
            <img
              src={item}
              alt="logo"
              className="aspect-video object-contain object-center w-full h-full"
            />
          </li>
        ))}
        {integrations1.map(item => (
          <li className="relative h-28 w-60 rounded-md text-gray-300">
            <img
              src={item}
              alt="logo"
              className="aspect-video object-contain object-center w-full h-full"
            />
          </li>
        ))}
      </ul>

      <ul className="gap-x-5 animate-integrations overflow-hidden space-x-4 sm:space-x-10 inline-flex w-[calc(240px*10)] mt-5 direction-reverse">
        {integrations2.map(item => (
          <li className="relative h-28 w-60 rounded-md text-gray-300">
            <img
              src={item}
              alt="logo"
              className="aspect-video object-contain object-center w-full h-full"
            />
          </li>
        ))}
        {integrations2.map(item => (
          <li className="relative h-28 w-60 rounded-md text-gray-300">
            <img
              src={item}
              alt="logo"
              className="aspect-video object-contain object-center w-full h-full"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
