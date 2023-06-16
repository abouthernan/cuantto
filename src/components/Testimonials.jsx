import { motion } from 'framer-motion'

import { QuoteIcon } from '../assets/icons/QuoteIcon'
import testimonial1 from '../assets/images/testimonial1.png'
import testimonial2 from '../assets/images/testimonial2.png'
import testimonial3 from '../assets/images/testimonial3.png'
import { useTranslation } from 'react-i18next'

export const Testimonials = () => {
  const { t } = useTranslation()

  const testimonialsData = [
    {
      customerName: t('TESTIMONIALS.clients.one.name'),
      customerTitle: t('TESTIMONIALS.clients.one.role'),
      content: t('TESTIMONIALS.clients.one.quote'),
      image: testimonial1
    },
    {
      customerName: t('TESTIMONIALS.clients.two.name'),
      customerTitle: t('TESTIMONIALS.clients.two.role'),
      content: t('TESTIMONIALS.clients.two.quote'),
      image: testimonial2
    },
    {
      customerName: t('TESTIMONIALS.clients.three.name'),
      customerTitle: t('TESTIMONIALS.clients.three.role'),
      content: t('TESTIMONIALS.clients.three.quote'),
      image: testimonial3
    }
  ]

  return (
    <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customBg relative">
      <div className="flex flex-col w-full lg:w-[1150px] justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="custom-block-subtitle text-center mb-6">
            {t('TESTIMONIALS.sub')}
          </p>
          <h3 className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
            {t('TESTIMONIALS.title')}
          </h3>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
            {testimonialsData.map((testimonial, index) => (
              <div
                className="w-11/12 relative lg:h-[495px] sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
                key={`${testimonial.customerName}-${index}`}
              >
                <div className="flex mb-2">
                  <QuoteIcon />
                </div>
                <div className="custom-content-text-white">
                  "{testimonial.content}"
                </div>
                <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4 lg:absolute lg:bottom-2">
                  <img src={testimonial.image} alt="" width="45px" />
                  <div className="flex flex-col ml-4">
                    <div className="custom-content-text-white font-medium">
                      {testimonial.customerName}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.customerTitle}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
