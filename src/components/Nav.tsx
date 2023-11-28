import { ToggleLang } from './ToggleLang'
import { useTranslation, getI18n } from 'react-i18next'
import { dashboardRouter } from '../constants'

interface NavProps {
  handleClick: () => void
}

export const Nav: React.FC<NavProps> = ({ handleClick }) => {
  const { t } = useTranslation('translation')

  const lang = getI18n().language
  const path = lang === 'en' ? '/en' : ''

  const menu = [
    {
      label: t('NAV.benefits'),
      path: `${path}/#benefits`
    },
    {
      label: t('NAV.pricing'),
      path: `${path}/#pricing`
    },
    {
      label: t('NAV.resources'),
      path: 'https://www.youtube.com/channel/UCha0Ys8Y_h_XWnaKrGZoc_Q',
      external: true
    },
    {
      label: t('NAV.questions'),
      path: `${path}/#faqs`
    }
  ]

  const menuButtons = [
    {
      label: t('CTA.login'),
      path: dashboardRouter.login
    },
    {
      label: t('CTA.signup'),
      path: dashboardRouter.register
    }
  ]

  return (
    <>
      <nav className="grid nav-mobil z-50 duration-300 lg:hidden fixed px-2 w-full top-0 left-0 py-5 backdrop-blur-xl right-0 bottom-0 place-items-center h-[calc(100dvh-88px)] text-center md:space-x-4 items-center transition-all -translate-y-full bg-qBg">
        {menu.map(({ label, path, external }) => (
          <a
            className="text-white/90 font-normal text-lg py-3 w-full"
            href={path}
            key={label}
            target={external ? '_blank' : ''}
            onClick={handleClick}
          >
            {label}
          </a>
        ))}

        <div className="nav-button w-full grid gap-2">
          {menuButtons.map(({ label, path }) => (
            <a
              className="text-white text-center font-normal text-lg rounded-md py-2 px-4 border border-transparent transition-colors duration-300 ease-in-out"
              href={path}
              key={label}
              onClick={handleClick}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* nav desktop */}

      <nav className="hidden lg:flex place-items-center text-center space-x-10 items-center">
        {menu.map(({ label, path, external }) => (
          <a
            className="text-white/90 font-normal"
            href={path}
            key={label}
            target={external ? '_blank' : ''}
          >
            {label}
          </a>
        ))}

        <div className="nav-button">
          {menuButtons.map(({ label, path }) => (
            <a
              className="text-white text-center font-bold rounded-md py-2 border border-transparent transition-colors duration-300 ease-in-out"
              href={path}
              key={label}
            >
              {label}
            </a>
          ))}
        </div>

        <ToggleLang />
      </nav>
    </>
  )
}
