import { Trans } from "react-i18next";

const integrations1 = [
  "/images/integrations/whatsapp.png",
  "/images/integrations/zapier.svg",
  "/images/integrations/amocrm.svg",
  "/images/integrations/hubspot.svg",
  "/images/integrations/signstation.png",
];

const integrations2 = [
  "/images/integrations/paypal.svg",
  "/images/integrations/pipedrive.svg",
  "/images/integrations/salesforce.svg",
  "/images/integrations/verisign.svg",
  "/images/integrations/zoho.svg",
];

export const Integrations = () => {
  return (
    <div
      className="container block mx-auto my-40 overflow-hidden pt-4 max-w-7xl"
      id="services"
    >
      <h2 className="text-white text-center text-3xl font-bold">
        <Trans i18nKey="INTEGRATIONS.title">
          <span className="text-qGreen">Potencia</span>
        </Trans>
      </h2>
      <p className="text-white/80 w-full text-center mb-10 mt-3">
        <Trans i18nKey="INTEGRATIONS.desc">
          <span className="text-qGreen font-bold">Qantto</span>{" "}
        </Trans>
      </p>

      <ul className="gap-x-5 animate-integrations overflow-hidden space-x-4 sm:space-x-10 inline-flex w-[calc(240px*10)]">
        {integrations1.map((item) => (
          <li className="relative h-28 w-60 rounded-md text-gray-300">
            <img
              src={item}
              alt="logo"
              className="aspect-video object-contain object-center w-full h-full"
            />
          </li>
        ))}
        {integrations1.map((item) => (
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
        {integrations2.map((item) => (
          <li className="relative h-28 w-60 rounded-md text-gray-300">
            <img
              src={item}
              alt="logo"
              className="aspect-video object-contain object-center w-full h-full"
            />
          </li>
        ))}
        {integrations2.map((item) => (
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
  );
};
