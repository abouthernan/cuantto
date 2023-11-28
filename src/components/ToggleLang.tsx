import { type FC, useState } from 'react'
import i18n from 'i18next'

export interface ToggleLangProps {}

export const ToggleLang: FC<ToggleLangProps> = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng, () => {
      if (lng === 'us') {
        document.documentElement.lang = 'en'
        window.location.pathname = '/en'
      } else {
        document.documentElement.lang = 'es'
        window.location.pathname = '/'
      }
    })
    setShowMenu(false)
  }

  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  const lang = i18n.language === 'en' ? 'us' : 'es'

  return (
    <div className="relative text-left">
      <button
        onClick={handleClick}
        type="button"
        className="inline-flex space-x-1 items-center px-3 py-2 rounded-md shadow-sm text-sm font-medium text-white bg-transparent focus:outline-none "
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <img
          src={`https://flagcdn.com/${lang}.svg`}
          alt={`${i18n.language} Flag`}
          className="w-6 h-6 mr-2 rounded-full object-cover aspect-video"
        />
        {i18n.language === 'en' ? 'EN' : 'ES'}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </button>

      <div
        className={`${
          showMenu ? 'block' : 'hidden'
        } origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-1" role="none">
          <button
            onClick={() => handleLanguageChange('us')}
            className="text-gray-700 flex w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            role="menuitem"
          >
            <img
              src="https://flagcdn.com/us.svg"
              alt="US Flag"
              className="w-5 h-5 mr-2 object-cover aspect-video"
            />
            English
          </button>
          <button
            onClick={() => handleLanguageChange('es')}
            className="text-gray-700 flex w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            role="menuitem"
          >
            <img
              src="https://flagcdn.com/es.svg"
              alt="ES Flag"
              className="w-5 h-5 mr-2 object-cover aspect-video"
            />
            Español
          </button>
        </div>
      </div>
    </div>
  )
}
