import { ToggleLang } from "./ToggleLang";
import { useTranslation } from "react-i18next";

export const Nav = () => {

  const { t } = useTranslation("translation");

  const menu = [
  {
    label: t("NAV.benefits"),
    path: "/#benefits",
  },
  {
    label: t("NAV.pricing"),
    path: "/#pricing",
  },
  {
    label: t("NAV.resources"),
    path: "/#resources",
  },
  {
    label: t("NAV.questions"),
    path: "/#faqs",
  },
];

const menuButtons = [
  {
    label: t("CTA.login"),
    path: "https://app.qantto.com/login",
  },
  {
    label: t("CTA.signup"),
    path: "https://app.qantto.com/register",
  },
];

  return (
    <>
      <nav className="grid nav-mobil duration-300 lg:hidden fixed px-2 w-full top-0 left-0 py-5 backdrop-blur-xl right-0 bottom-0 place-items-center h-[calc(100vh-88px)] text-center md:space-x-4 items-center transition-all -translate-y-full bg-qBg">
        {menu.map(({ label, path }) => (
          <a
            className="text-white/90 font-normal text-lg py-3 w-full"
            href={path}
          >
            {label}
          </a>
        ))}

        <div className="nav-button w-full grid gap-2">
          {menuButtons.map(({ label, path }) => (
            <a
              className="text-white text-center font-normal text-lg rounded-md py-2 px-4 border border-transparent transition-colors duration-300 ease-in-out"
              href={path}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* nav desktop */}

      <nav className="hidden lg:flex place-items-center text-center space-x-10 items-center">
        {menu.map(({ label, path }) => (
          <a className="text-white/90 font-normal" href={path}>
            {label}
          </a>
        ))}

        <div className="nav-button">
          {menuButtons.map(({ label, path }) => (
            <a
              className="text-white text-center font-bold rounded-md py-2 border border-transparent transition-colors duration-300 ease-in-out"
              href={path}
            >
              {label}
            </a>
          ))}
        </div>

        <ToggleLang />
      </nav>
    </>
  );
};
