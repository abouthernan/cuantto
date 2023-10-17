/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "es",
  locales: ["es", "en"],
  load: ["server", "client"],
  i18nextClientPlugins: {
    "{initReactI18next}": "react-i18next",
  },
  i18nextServerPlugins: {
    "{initReactI18next}": "react-i18next",
  },
};
