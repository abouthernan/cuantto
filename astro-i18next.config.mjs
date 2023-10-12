/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "es",
  locales: ["es", "en"],
  load: ["server", "client"],
  i18nextServer: {
    debug: true,
  },
  i18nextClient: {
    debug: true,
  },
  i18nextClientPlugins: {
    "{initReactI18next}": "react-i18next",
  },
  i18nextServerPlugins: {
    "{initReactI18next}": "react-i18next",
  },
};
