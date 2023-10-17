import { useTranslation, Trans } from "react-i18next";

export const Banner2 = () => {
  const { t } = useTranslation("translation");
  return (
    <section className="text-qBlack container w-full mt-28 mx-auto relative">
      <div className="flex max-w-5xl bg-qSky rounded-3xl justify-center items-center mx-auto my-8 shadow-2xl space-y-6 relative overflow-hidden">
        <div className="max-w-md z-10">
          <img
            className="w-full h-full aspect-square object-contain"
            src="/images/robot.png"
            alt="robot image"
          />
        </div>
        <div className="max-w-lg z-10">
          <h2 className="text-3xl font-bold">{t("BANNER2.title")}</h2>
          <p className="mt-3">
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
