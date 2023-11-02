import { useTranslation, Trans } from "react-i18next";
import { dashboardRouter } from "../constants";

export const Hero = () => {
  const { t, ready } = useTranslation("translation", { useSuspense: true });

  if (!ready) return "";
  return (
      <main className="lg:min-h-[calc(100dvh-88px)] grid place-items-center place-content-center gap-14 lg:gap-20 max-w-7xl mx-auto z-0 pt-10 lg:pt-0 px-2 lg:px-0">
      <section className="text-white text-center space-y-5 -z-10">
        <p className="text-qGreen text-sm sm:text-lg lg:text-2xl">{t("HERO.subtitle")}</p>

        <div className="flex text-sm sm:text-lg lg:text-base gap-0 space-x-7 items-center justify-center">
          <span className="border text-qPurple border-qPurple rounded-md px-4 py-1 relative after:absolute after:w-5 after:h-[1px] after:bg-qPurple after:-right-5 after:top-[15px] lg:text-lg">
            {t("MESSAGES.problem")}
          </span>
          <h2 className="text-sm sm:text-lg text-left lg:text-4xl">{t("HERO.textOne")}</h2>
        </div>

        <div className="flex text-sm sm:text-lg lg:text-base space-y-5 space-x-7 items-center justify-center">
          <h2 className="text-sm sm:text-lg text-left order-1 lg:text-4xl bg-qPurple text-qBlack font-semibold px-4 py-2 rounded-md">
            {t("HERO.textTwo")}
          </h2>

          <span className="border order-2 border-qGreen rounded-md px-4 py-1 relative after:absolute after:w-5 after:h-[1px] after:bg-qGreen text-qGreen after:-left-5 after:top-[15px] mt-[0!important]">
            {t("MESSAGES.solution")}
          </span>
        </div>

        <div className="flex text-sm sm:text-lg lg:text-base space-x-7 items-center justify-center">
          <span className="border text-qSky border-qSky rounded-md px-4 py-1 relative after:absolute after:w-5 after:-bottom-5 after:h-[1px] after:bg-qSky after:-right-5 after:top-[15px]">
            {t("MESSAGES.benefit")}
          </span>
          <h2 className="text-sm sm:text-lg text-left lg:text-4xl">{t("HERO.textThree")}</h2>
        </div>
      </section>

      <section className="text-white text-center text-sm sm:text-base space-y-5 lg:text-lg">
        <a
          href={dashboardRouter.register}
          className="px-4 py-2 bg-qGreen hover:bg-qGreen/80 transition-colors duration-300 text-qBlack font-semibold rounded-md"
        >
          {t("CTA.freeTrial")}
        </a>
        <div className="font-light text-base">
          <p>
            <Trans i18nKey="MESSAGES.qanttoWithDays">
              <span className="text-qGreen font-bold">Qantto</span>
              <strong className="font-bold">14 días.</strong>
            </Trans>
          </p>
          <p>{t("MESSAGES.noCreditCard")}</p>
        </div>
      </section>
    </main>
  );
};
