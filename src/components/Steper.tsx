import { useTranslation, Trans } from "react-i18next";

export const Steper = () => {
  const { t } = useTranslation("translation");
  return (
    <>
      <section className="container px-2 lg:px-0 py-20 max-w-7xl mx-auto">
        <div className="text-white balance text-left flex w-full justify-start mb-[70px]">
          <p className="max-w-sm text-center relative left-[9%]">
            <Trans i18nKey="STEPER.textOne">
              <span className="text-qRed">18 y 42 horas...</span>
            </Trans>
          </p>
        </div>

        {/* // <!-- stepper --> */}
        <div className="mt-5 md:px-6 relative">
          <div className="flex items-center flex-col md:flex-row gap-9 md:gap-0 md:before:absolute md:before:left-0 md:before:w-1/2 md:before:h-44 md:before:rounded-xl md:before:bg-qGreen/5">
            {/* // <!-- step --> */}
            <div className="flex items-center text-white relative">
              <div className="rounded-full h-20 w-20 border border-white">
                <img
                  className="w-full h-full rounded-full aspect-square object-cover"
                  src="https://randomuser.me/api/portraits/men/47.jpg"
                  alt="puede ser una imagen de una persona"
                />
              </div>
              <div className="absolute top-0 -ml-6 text-center mt-[85px] w-32 text-white">
                {t("MESSAGES.lead")}
              </div>
            </div>
            <div className="flex-auto border-t border-dashed border-white"></div>
            {/* // <!-- step --> */}
            <div className="flex items-center text-white relative">
              <div className="rounded-2xl h-20 w-20 py-5 border bg-qPurple border-qPurple">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="100%"
                  width="100%"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"></path>
                </svg>
              </div>
              <div className="absolute top-0 -ml-6 text-center mt-[85px] w-32 text-white">
                {t("MESSAGES.contact")}
              </div>
            </div>
            <div className="flex-auto border-t border-dashed border-gray-300"></div>
            {/* // <!-- step --> */}
            <div className="flex items-center text-white relative">
              <div className="rounded-2xl h-20 w-20 py-5 border bg-qGreen border-qGreen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="100%"
                  width="100%"
                  fill="currentColor"
                  viewBox="0 0 384 512"
                >
                  <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
                </svg>
              </div>
              <div className="absolute top-0 -ml-6 text-center mt-[85px] w-32 text-white">
                {t("MESSAGES.quote")}
              </div>
            </div>
            <div className="flex-auto border-t border-dashed border-gray-300"></div>
            {/* step  */}
            <div className="flex items-center text-white relative">
              <div className="rounded-2xl h-20 w-20 py-5 border bg-qSky border-qSky">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="100%"
                  width="100%"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                </svg>
              </div>
              <div className="absolute top-0 -ml-6 text-center mt-[85px] w-32 text-white">
                {t("MESSAGES.accept")}
              </div>
            </div>
            <div className="flex-auto border-t border-dashed border-gray-300"></div>
            {/* step */}
            <div className="flex items-center text-white relative">
              <div className="rounded-2xl h-20 w-20 py-5 border border-[#8A8D00] bg-[#8A8D00]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="100%"
                  width="100%"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M318.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-120 120c-12.5 12.5-12.5 32.8 0 45.3l16 16c12.5 12.5 32.8 12.5 45.3 0l4-4L325.4 293.4l-4 4c-12.5 12.5-12.5 32.8 0 45.3l16 16c12.5 12.5 32.8 12.5 45.3 0l120-120c12.5-12.5 12.5-32.8 0-45.3l-16-16c-12.5-12.5-32.8-12.5-45.3 0l-4 4L330.6 74.6l4-4c12.5-12.5 12.5-32.8 0-45.3l-16-16zm-152 288c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l48 48c12.5 12.5 32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-1.4-1.4L272 285.3 226.7 240 168 298.7l-1.4-1.4z"></path>
                </svg>
              </div>
              <div className="absolute top-0 -ml-6 text-center mt-[85px] w-32 text-white">
                {t("MESSAGES.hire")}
              </div>
            </div>
            <div className="flex-auto border-t border-dashed border-gray-300"></div>
            {/* step */}
            <div className="flex items-center text-white relative">
              <div className="rounded-2xl h-20 w-20 py-5 border border-[#F9A06E] bg-[#F9A06E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="100%"
                  width="100%"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d="M192 128c0-17.7 14.3-32 32-32s32 14.3 32 32v7.8c0 27.7-2.4 55.3-7.1 82.5l-84.4 25.3c-40.6 12.2-68.4 49.6-68.4 92v71.9c0 40 32.5 72.5 72.5 72.5c26 0 50-13.9 62.9-36.5l13.9-24.3c26.8-47 46.5-97.7 58.4-150.5l94.4-28.3-12.5 37.5c-3.3 9.8-1.6 20.5 4.4 28.8s15.7 13.3 26 13.3H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H460.4l18-53.9c3.8-11.3 .9-23.8-7.4-32.4s-20.7-11.8-32.2-8.4L316.4 198.1c2.4-20.7 3.6-41.4 3.6-62.3V128c0-53-43-96-96-96s-96 43-96 96v32c0 17.7 14.3 32 32 32s32-14.3 32-32V128zm-9.2 177l49-14.7c-10.4 33.8-24.5 66.4-42.1 97.2l-13.9 24.3c-1.5 2.6-4.3 4.3-7.4 4.3c-4.7 0-8.5-3.8-8.5-8.5V335.6c0-14.1 9.3-26.6 22.8-30.7zM24 368c-13.3 0-24 10.7-24 24s10.7 24 24 24H64.3c-.2-2.8-.3-5.6-.3-8.5V368H24zm592 48c13.3 0 24-10.7 24-24s-10.7-24-24-24H305.9c-6.7 16.3-14.2 32.3-22.3 48H616z"></path>
                </svg>
              </div>
              <div className="absolute top-0 -ml-6 text-center mt-[85px] w-32 text-white">
                {t("MESSAGES.sign")}
              </div>
            </div>
            <div className="flex-auto border-t border-dashed border-gray-300"></div>
            {/* step */}
            <div className="flex items-center text-white relative">
              <div className="rounded-2xl h-20 w-20 py-5 border border-qPurple bg-qPurple">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="100%"
                  width="100%"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                >
                  <path d="M0 112.5V422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM128 416H64V352c35.3 0 64 28.7 64 64zM64 224V160h64c0 35.3-28.7 64-64 64zM448 352c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM384 256c0 61.9-43 112-96 112s-96-50.1-96-112s43-112 96-112s96 50.1 96 112zM252 208c0 9.7 6.9 17.7 16 19.6V276h-4c-11 0-20 9-20 20s9 20 20 20h24 24c11 0 20-9 20-20s-9-20-20-20h-4V208c0-11-9-20-20-20H272c-11 0-20 9-20 20z"></path>
                </svg>
              </div>
              <div className="absolute top-0 -ml-6 text-center mt-[85px] w-32 text-white">
                {t("MESSAGES.pay")}
              </div>
            </div>
            <div className="flex-auto border-t border-dashed border-gray-300"></div>
            {/* // <!-- step --> */}
            <div className="flex items-center text-white relative">
              <div className="rounded-2xl h-20 w-20 py-5 border border-qGreen bg-qGreen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="100%"
                  width="100%"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M32 0C49.7 0 64 14.3 64 32V48l69-17.2c38.1-9.5 78.3-5.1 113.5 12.5c46.3 23.2 100.8 23.2 147.1 0l9.6-4.8C423.8 28.1 448 43.1 448 66.1V345.8c0 13.3-8.3 25.3-20.8 30l-34.7 13c-46.2 17.3-97.6 14.6-141.7-7.4c-37.9-19-81.3-23.7-122.5-13.4L64 384v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V400 334 64 32C0 14.3 14.3 0 32 0zM64 187.1l64-13.9v65.5L64 252.6V318l48.8-12.2c5.1-1.3 10.1-2.4 15.2-3.3V238.7l38.9-8.4c8.3-1.8 16.7-2.5 25.1-2.1l0-64c13.6 .4 27.2 2.6 40.4 6.4l23.6 6.9v66.7l-41.7-12.3c-7.3-2.1-14.8-3.4-22.3-3.8v71.4c21.8 1.9 43.3 6.7 64 14.4V244.2l22.7 6.7c13.5 4 27.3 6.4 41.3 7.4V194c-7.8-.8-15.6-2.3-23.2-4.5l-40.8-12v-62c-13-3.8-25.8-8.8-38.2-15c-8.2-4.1-16.9-7-25.8-8.8v72.4c-13-.4-26 .8-38.7 3.6L128 173.2V98L64 114v73.1zM320 335.7c16.8 1.5 33.9-.7 50-6.8l14-5.2V251.9l-7.9 1.8c-18.4 4.3-37.3 5.7-56.1 4.5v77.4zm64-149.4V115.4c-20.9 6.1-42.4 9.1-64 9.1V194c13.9 1.4 28 .5 41.7-2.6l22.3-5.2z"></path>
                </svg>
              </div>
              <div className="absolute top-0 -ml-6 text-center mt-[85px] w-32 text-white">
                {t("MESSAGES.start")}
              </div>
            </div>
            {/* // <!-- step --> */}
          </div>
        </div>

        <div className="text-white balance text-left flex w-full justify-center mt-[70px] max-w-sm">
          <p className="relative left-[32%] text-center">
            <Trans i18nKey="STEPER.textTwo">
              <span className="text-qGreen font-bold">Qantto</span> le tomará{" "}
              <strong>10 minutos.</strong>
            </Trans>
          </p>
        </div>
      </section>
    </>
  );
};
