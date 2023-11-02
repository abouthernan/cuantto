import { useTranslation, Trans } from "react-i18next";

export const Banner2 = () => {
  const { t } = useTranslation("translation");
  return (
    <section className="text-qBlack container w-full mt-28 mx-auto relative px-2 md:px-0 z-0">
      <div className="flex flex-col lg:flex-row max-w-5xl bg-qSky rounded-3xl justify-center items-center mx-auto my-8 shadow-2xl relative overflow-hidden">
        <div className="max-w-md z-0">
          <img
            className="w-full h-52 md:h-full aspect-square object-contain"
            src="/images/robot.png"
            alt="robot image"
          />
        </div>
        <div className="max-w-lg z-0 px-5 pb-10 lg:pb-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left">{t("BANNER2.title")}</h2>
          <p className="mt-4">
            <Trans i18nKey="BANNER2.desc">
              <strong>
                tu empresa recibe un informe detallado y personalizado que
                analiza los datos recopilados. Este informe no solo destaca los
                resultados clave, sino que también identifica oportunidades y
                estrategias de mejora específicas
              </strong>
            </Trans>
          </p>
        </div>
      </div>
    </section>
  );
};
