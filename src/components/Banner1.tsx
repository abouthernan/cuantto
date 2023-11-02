import { Trans } from "react-i18next";

export const Banner1 = () => {
  return (
    <section className="text-white container w-full mt-14 mx-auto relative px-2 md:px-0 z-0">
      <div className="flex max-w-5xl flex-col bg-qBlack rounded-3xl justify-center items-center py-10 mx-auto my-8 shadow-2xl space-y-6 circuit overflow-hidden">
        <p className="z-[1]">
          <Trans i18nKey="BANNER1.subtitle">
            <span className="text-qGreen">Elimina</span>
          </Trans>
        </p>

        <h2 className="z-[1] text-3xl max-w-sm text-center balance font-semibold">
          <Trans i18nKey="BANNER1.title">
            <span className="text-qGreen">100% automáticas</span>
          </Trans>
        </h2>

        <p className="z-[1]">
          <Trans i18nKey="BANNER1.description">
            <span className="text-qGreen">No Somos</span>
          </Trans>
        </p>
        <span className="z-[1] text-4xl">😉</span>
      </div>
      <span className="circuit-mask z-0"></span>
    </section>
  );
};
