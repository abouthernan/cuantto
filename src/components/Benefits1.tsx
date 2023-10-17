import { useTranslation, Trans } from "react-i18next";

export const Benefits1 = () => {
  const { t } = useTranslation("translation");
  return (
    <section
      className="container max-w-7xl mx-auto flex justify-between flex-wrap"
      id="benefits"
    >
      <div className="flex items-center">
        <img
          className="max-w-xs max-h-xs aspect-square object-contain p-4"
          src="/images/rocket.png"
          alt="rocket image"
        />
        <div className="max-w-md">
          <h2 className="text-qGreen font-bold text-3xl balance">
            <Trans i18nKey="BENEFITS.title">
              <span className="text-white">tu Tasa de Converción hasta</span> en
              un 30%
            </Trans>
          </h2>
          <p className="text-white mt-5 font-light">
            {t("BENEFITS.description")}
          </p>
        </div>
      </div>
      <div className="steper">
        <ol className="relative text-white border-l border-dashed h-[55%] border-gray-200 max-w-sm">
          <li className="mb-10 ml-12">
            <span className="absolute flex items-center justify-center w-14 h-14 py-3 bg-qSky rounded-full -left-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="#1F2122"
                viewBox="0 0 384 512"
              >
                <path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM288 437v11H96V437c0-25.5 10.1-49.9 28.1-67.9L192 301.3l67.9 67.9c18 18 28.1 42.4 28.1 67.9z"></path>
              </svg>
            </span>
            <h3 className="font-bold leading-tight text-xl">
              {t("BENEFITS.steps.one.title")}
            </h3>
            <p className="text-white/90 mt-2 font-light">
              <Trans i18nKey="BENEFITS.steps.one.description">
                <strong className="text-white font-bold">una sola vez</strong>,
              </Trans>
            </p>
          </li>
          <li className="mb-10 ml-12">
            <span className="absolute flex items-center justify-center w-14 h-14 py-3 bg-qSky rounded-full -left-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="#1F2122"
                viewBox="0 0 576 512"
              >
                <path d="M3.9 22.9C10.5 8.9 24.5 0 40 0H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L396.4 195.6C316.2 212.1 256 283 256 368c0 27.4 6.3 53.4 17.5 76.5c-1.6-.8-3.2-1.8-4.7-2.9l-64-48c-8.1-6-12.8-15.5-12.8-25.6V288.9L9 65.3C-.7 53.4-2.8 36.8 3.9 22.9zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm120.8-32.6c.6-.9 1.8-2.1 4.2-3.4c5.1-2.7 12.5-4.1 18.7-4c8.2 .1 17.1 1.8 26.4 4.1c8.6 2.1 17.3-3.1 19.4-11.7s-3.1-17.3-11.7-19.4c-5.6-1.4-11.6-2.7-17.9-3.7V288c0-8.8-7.2-16-16-16s-16 7.2-16 16v9.5c-6.1 1.2-12.3 3.2-18 6.3c-11.8 6.3-23 18.4-21.8 37.2c1 16 11.7 25.3 21.6 30.7c8.8 4.7 19.7 7.8 28.6 10.3l1.8 .5c10.3 2.9 17.9 5.2 23.2 8.3c4.5 2.7 4.7 4.2 4.7 5.6c.1 2.4-.5 3.7-1 4.5c-.6 1-1.8 2.2-4 3.3c-4.7 2.5-11.8 3.8-18.5 3.6c-9.5-.3-18.5-3.1-29.9-6.8c-1.9-.6-3.8-1.2-5.8-1.8c-8.4-2.6-17.4 2.1-20 10.5s2.1 17.4 10.5 20c1.6 .5 3.3 1 5 1.6l0 0 0 0c7 2.3 15.1 4.8 23.7 6.6v11.4c0 8.8 7.2 16 16 16s16-7.2 16-16V438.7c6.2-1.1 12.5-3.1 18.3-6.2c12.1-6.5 22.3-18.7 21.7-36.9c-.5-16.2-10.3-26.3-20.5-32.3c-9.4-5.6-21.2-8.9-30.5-11.5l-.2 0c-10.4-2.9-18.3-5.2-23.9-8.2c-4.8-2.6-4.8-4-4.8-4.5l0-.1c-.1-1.9 .3-2.9 .8-3.6z"></path>
              </svg>
            </span>
            <h3 className="font-bold leading-tight text-xl">
              {t("BENEFITS.steps.two.title")}
            </h3>
            <p className="text-white/90 mt-2 font-light">
              <Trans i18nKey="BENEFITS.steps.two.description">
                <strong className="text-white font-bold">más eficiente</strong>{" "}
              </Trans>
            </p>
          </li>
          <li className="mb-10 ml-12">
            <span className="absolute flex items-center justify-center w-14 h-14 py-3 bg-qSky rounded-full -left-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="#1F2122"
                viewBox="0 0 576 512"
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5zM576 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L416 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z"></path>
              </svg>
            </span>
            <h3 className="font-bold leading-tight text-xl">
              {t("BENEFITS.steps.three.title")}
            </h3>
            <p className="text-white/90 mt-2 font-light whitespace-pre-wrap word-wrap">
              <Trans i18nKey="BENEFITS.steps.three.description">
                <strong className="text-white font-bold">
                  match perfecto precio-calidad.
                </strong>
              </Trans>
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};
