import { useTranslation, Trans } from 'react-i18next'
import '../styles/integrations.css'

const integrations1 = [
  '/images/integrations/whatsapp.png',
  '/images/integrations/zapier.svg',
  '/images/integrations/amocrm.svg',
  '/images/integrations/hubspot.svg',
  '/images/integrations/signstation.png'
]

const integrations2 = [
  '/images/integrations/paypal.svg',
  '/images/integrations/pipedrive.svg',
  '/images/integrations/salesforce.svg',
  '/images/integrations/verisign.svg',
  '/images/integrations/zoho.svg'
]

export const Integrations = () => {
  const { t } = useTranslation('translation')
  return (
    <div
      className="container block mx-auto my-40 overflow-hidden pt-4 max-w-7xl px-2"
      id="services"
    >
      <h2 className="text-white text-center text-2xl sm:text-3xl font-bold">
        <Trans i18nKey="INTEGRATIONS.title">
          <span className="text-qGreen">Potencia</span>
        </Trans>
      </h2>
      <p className="text-white/80 w-full text-sm sm:text-base text-center mb-10 mt-3">
        <Trans i18nKey="INTEGRATIONS.desc">
          <span className="text-qGreen font-bold">Qantto</span>{' '}
        </Trans>
      </p>

      <div className="wrapper">
        <div id="visual" data-countchildren>
          <span className="dot">
            <img
              src="/images/integrations/hubspot.svg"
              alt=""
              title=""
              width="222"
              height="184"
              draggable="false"
            />
          </span>
          <span className="dot">
            <img
              src="/images/integrations/signstation.png"
              alt=""
              title=""
              width="222"
              height="184"
              draggable="false"
            />
          </span>
          <span className="dot">
            <img
              src="/images/integrations/whatsapp.png"
              alt=""
              title=""
              width="222"
              height="184"
              draggable="false"
            />
          </span>
          <span className="dot">
            <img
              src="/images/integrations/zapier.svg"
              alt=""
              title=""
              width="222"
              height="184"
              draggable="false"
            />
          </span>
          <span className="dot">
            <img
              src="/images/integrations/amocrm.svg"
              alt=""
              title=""
              width="222"
              height="184"
              draggable="false"
            />
          </span>
        </div>

        <div id="visual2" data-countchildren>
          <span className="dot">
            <img
              src="/images/integrations/salesforce.svg"
              alt=""
              title=""
              width="222"
              height="184"
              draggable="false"
            />
          </span>
          <span className="dot">
            <img
              src="/images/integrations/verisign.svg"
              alt=""
              title=""
              width="222"
              height="184"
              draggable="false"
            />
          </span>
          <span className="dot">
            <img
              src="/images/integrations/zoho.svg"
              alt=""
              title=""
              width="222"
              height="184"
              draggable="false"
            />
          </span>
          <span className="dot">
            <img
              src="/images/integrations/paypal.svg"
              alt=""
              title=""
              width="222"
              height="184"
              draggable="false"
            />
          </span>
          <span className="dot">
            <img
              src="/images/integrations/pipedrive.svg"
              alt=""
              title=""
              width="222"
              height="184"
              draggable="false"
            />
          </span>
        </div>
      </div>
    </div>
  )
}
