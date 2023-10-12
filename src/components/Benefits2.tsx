import { useTranslation, Trans } from "react-i18next";

export const Benefits2 = () => {
  const { t } = useTranslation("translation");
  return (
    <section className="text-white/80 mt-24">
      <p className="text-center">{t("BENEFITS2.subtitle")}</p>
      <h2 className="text-center text-3xl text-white font-semibold max-w-md balance mx-auto">
        <Trans i18nKey="BENEFITS2.title">
          Dale <span className="text-qGreen">superpoderes</span> a tu equipo de
          ventas
        </Trans>
      </h2>
      <p className="text-center mt-2">
        <Trans i18nKey="BENEFITS2.description">
          Crea tu equipo y <strong className="text-white">asigna roles</strong>
          personalizados.
        </Trans>
      </p>

      <div className="grid md:grid-cols-2 place-items-center mt-20 gap-5">
        {/* // <!-- item --> */}
        <div className="flex gap-5 items-start">
          <div className="w-14 h-14 rounded-full p-3 bg-qPurple text-qBlack">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              width="100%"
              fill="currentColor"
              viewBox="0 0 384 512"
            >
              <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
            </svg>
          </div>
          <div className="max-w-sm">
            <h3 className="text-lg font-semibold text-white">
              {t("BENEFITS2.list.one.title")}
            </h3>
            <p className="font-light text-base">
              <Trans i18nKey="BENEFITS2.list.one.desc">
                Tu negocio estará disponible las{" "}
                <strong className="text-white font-bold">
                  24 horas del día, los 7 días de la semana
                </strong>
                , sin costos adicionales y sin sacrificar la disponibilidad para
                tus clientes.
              </Trans>
            </p>
          </div>
        </div>
        {/* // <!-- item --> */}
        <div className="flex gap-5 items-start">
          <div className="w-14 h-14 rounded-full p-3 bg-qPurple text-qBlack">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              width="100%"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z"></path>
            </svg>
          </div>
          <div className="max-w-sm">
            <h3 className="text-lg font-semibold text-white">
              {t("BENEFITS2.list.two.title")}
            </h3>
            <p className="font-light text-base">
              <Trans i18nKey="BENEFITS2.list.two.desc">
                Al poder ofrecer cotizaciones precisas y personalizadas de
                manera rápida,{" "}
                <strong className="text-white font-bold">
                  te vuelves más competitivo en el mercado
                </strong>{" "}
                y puedes ganar más negocios.
              </Trans>
            </p>
          </div>
        </div>
        {/* // <!-- item --> */}
        <div className="flex gap-5 items-start">
          <div className="w-14 h-14 rounded-full p-3 bg-qPurple text-qBlack">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="currentColor"
              viewBox="0 0 576 512"
            >
              <path d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"></path>
            </svg>
          </div>
          <div className="max-w-sm">
            <h3 className="text-lg font-semibold text-white">
              {t("BENEFITS2.list.three.title")}
            </h3>
            <p className="font-light text-base">
              <Trans i18nKey="BENEFITS2.list.three.desc">
                Qantto proporciona herramientas de análisis de datos que
                permiten a las empresas obtener información valiosa sobre las{" "}
                <strong className="text-white font-bold">
                  preferencias y comportamientos de sus clientes.
                </strong>
              </Trans>
            </p>
          </div>
        </div>
        {/* // <!-- item --> */}
        <div className="flex gap-5 items-start">
          <div className="w-14 h-14 rounded-full p-3 bg-qPurple text-qBlack">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              width="100%"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"></path>
            </svg>
          </div>
          <div className="max-w-sm">
            <h3 className="text-lg font-semibold text-white">
              {t("BENEFITS2.list.four.title")}
            </h3>
            <p className="font-light text-base">
              <Trans i18nKey="BENEFITS2.list.four.desc">
                Al proporcionar cotizaciones basadas en valores específicos,
                creas transparencia en la estructura de precios, lo que{" "}
                <strong className="text-white font-bold">
                  genera confianza en los clientes.
                </strong>
              </Trans>
            </p>
          </div>
        </div>
        {/* // <!-- item --> */}
        <div className="flex gap-5 items-start">
          <div className="w-14 h-14 rounded-full p-3 bg-qPurple text-qBlack">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              width="100%"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
            </svg>
          </div>
          <div className="max-w-sm">
            <h3 className="text-lg font-semibold text-white">
              {t("BENEFITS2.list.five.title")}
            </h3>
            <p className="font-light text-base">
              <Trans i18nKey="BENEFITS2.list.five.desc">
                Al ofrecer cotizaciones en tiempo real, puedes llegar a un
                público global y{" "}
                <strong className="text-white font-bold">
                  expandir tu alcance más allá de las limitaciones geográficas.
                </strong>
              </Trans>
            </p>
          </div>
        </div>
        {/* // <!-- item --> */}
        <div className="flex gap-5 items-start">
          <div className="w-14 h-14 rounded-full p-3 bg-qPurple text-qBlack">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              width="100%"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
            </svg>
          </div>
          <div className="max-w-sm">
            <h3 className="text-lg font-semibold text-white">
              {t("BENEFITS2.list.six.title")}
            </h3>
            <p className="font-light text-base">
              {t("BENEFITS2.list.six.desc")}
            </p>
          </div>
        </div>
        {/* // <!-- item --> */}
        <div className="flex gap-5 items-start">
          <div className="w-14 h-14 rounded-full p-3 bg-qPurple text-qBlack">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              width="100%"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"></path>
            </svg>
          </div>
          <div className="max-w-sm">
            <h3 className="text-lg font-semibold text-white">
              {t("BENEFITS2.list.seven.title")}
            </h3>
            <p className="font-light text-base">
              <Trans i18nKey="BENEFITS2.list.seven.desc">
                Al{" "}
                <strong className="text-white font-bold">
                  eliminar tareas manuales repetitivas
                </strong>
                , con Qantto libera a tu equipo para centrarse en actividades
                más estratégicas y creativas.
              </Trans>
            </p>
          </div>
        </div>
        {/* // <!-- item --> */}
        <div className="flex gap-5 items-start">
          <div className="w-14 h-14 rounded-full p-3 bg-qPurple text-qBlack">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              width="100%"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zm53.5-96.7l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"></path>
            </svg>
          </div>
          <div className="max-w-sm">
            <h3 className="text-lg font-semibold text-white">
              {t("BENEFITS2.list.eight.title")}
            </h3>
            <p className="font-light text-base">
              <Trans i18nKey="BENEFITS2.list.eight.desc">
                La automatización reduce la posibilidad de errores humanos en
                las cotizaciones, lo que{" "}
                <strong className="text-white font-bold">
                  mejora la confiabilidad
                </strong>
              </Trans>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
