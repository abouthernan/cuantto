import { useTranslation, Trans } from "react-i18next";
import { useCountClients } from "./useCountClients";

export const Banner3 = () => {
  const { t } = useTranslation("translation");
  const count = useCountClients();
  return (
    <section className="text-white container w-full mt-14 mx-auto relative px-2">
      <div className="flex max-w-5xl flex-col bg-qBlack rounded-3xl justify-center items-center py-10 mx-auto my-8 shadow-2xl space-y-6 overflow-hidden">
        <p className="text-6xl text-white font-bold">
          <small>+</small>
          {count.toLocaleString()}
        </p>

        <h2 className="z-10 text-3xl max-w-sm text-center balance font-semibold">
          <Trans i18nKey="BANNER3.title">
            <span className="text-qGreen">
              aumentando sus ingresos con Qannto
            </span>
          </Trans>
        </h2>

        <span className="z-10 text-4xl">🤗</span>

        <p className="z-10">{t("BANNER3.desc")}</p>
      </div>
    </section>
  );
};
