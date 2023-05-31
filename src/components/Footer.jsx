import { FacebookIcon } from '../assets/icons/FacebookIcon'
import { InstagramIcon } from '../assets/icons/InstagramIcon'
import QuanttoLogo from '../assets/logos/QuanttoLogoClaro.svg'
import { TwitterIcon } from '../assets/icons/TwitterIcon'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <a href="/" className="flex justify-center lg:justify-start items-center grow basis-0">
                <img src={QuanttoLogo} alt="Quantto Logo" width={150} />
              </a>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                {t('FOOTER.description')}
              </p>
              <div className="w-38 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customBg custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://www.facebook.com/qantto.io"
                  target="_blank"
                  title="facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customBg custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="#"
                >
                  <TwitterIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customBg custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://www.instagram.com/qantto.io/"
                  target="_blank"
                  title="instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-end">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  {t('FOOTER.product')}
                </h3>
                <ul>
                  <li className="mb-4">
                    <a className="text-gray-400 hover:text-gray-300" href="#pricing" aria-label="" >
                      {t('FOOTER.pricesAndPlans')}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-400 hover:text-gray-300" href="#" aria-label="" >
                      {t('FOOTER.termsAndConditions')}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-400 hover:text-gray-300" href="#" aria-label="" >
                      {t('FOOTER.privacyPolicy')}
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-gray-300" href="mailto:hello@qantto.io" aria-label="email" >
                      hello@qantto.io
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            {t('FOOTER.copyright')} {new Date().getFullYear()}.
          </p>
        </div>
      </div>
    </footer>
)}
