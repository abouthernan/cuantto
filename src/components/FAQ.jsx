import { useState } from 'react'
import { motion } from 'framer-motion'

export const FAQ = () => (
  <section
    className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden"
    id="faq"
  >
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
            ¿Tienes alguna pregunta?
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
            Preguntas frecuentes (FAQ)
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            <div className="w-full p-1">
              <FAQBox
                title="¿Qué es Qantto?"
                content="En Qantto entendemos que cotizar productos y servicios puede ser una tarea complicada y consumir muchos recursos tecnológicos y humanos. Por eso, hemos creado una herramienta tecnológica que te permite personalizar cada aspecto de la cotización y generar cientos de propuestas de manera automática y ágil, en tiempo real, 24/7.

Nuestra aplicación está diseñada para ayudar empresas, negocios y personas a ahorrar tiempo y dinero en el proceso de cotización, eliminando la necesidad de tener un gran equipo de ventas y permitiendo enfocarte en lo más importante, el cierre de la venta."
              />
            </div>

            <div className="w-full p-1">
              <FAQBox
                title="¿Cómo funciona?"
                content="Para ti:
Imagina poder entregar una cotización personalizada y precisa en minutos, sin tener que invertir en personal de ventas y dedicar horas a la tareas de cotización. Con Qantto, este sueño es una realidad. 

Para tus clientes:

El proceso es fácil y rápido. Primero, seleccionan el servicio que necesitan. Luego, responden a las preguntas que configuran previamente desde la plataforma sobre el servicio que desean cotizar. El algoritmo procesará las respuestas y proporcionará una cotización personalizada en minutos, así de sencillo."
              />
            </div>

            <div className="w-full p-1">
              <FAQBox
                title="¿Porqué elegirnos?"
                content="Con Qantto puedes ahorrar tiempo y dinero en el proceso de cotización. Lo que te permitirá enfocarte en hacer crecer tu negocio. Nuestra aplicación es fácil de usar y completamente personalizable, lo que te permitirá adaptarla a las necesidades de tus negocio y de tus clientes. Además te brindamos soporte técnico y asesoramiento personalizado para ayudarte en el proceso de implementación.  No esperes más, únete a Qantto y ahórrale tiempo y recursos valiosos a tu organización."
              />
            </div>

            <div className="w-full p-1">
              <FAQBox
                title="¿Cómo se personaliza la herramienta para mi negocio?"
                content="Paso a paso:

1. Crear una cuenta y adquirir un plan: El usuario debera crear una cuenta en Qantto y seleccionar el plan que mejor se adapte a sus necesidades. Puede optar por un plan pago o utilizar la opción gratuita para probar la herramienta.

2. Personalizar la plataforma: Una vez registrado y con un plan activo, el usuario puede personalizar la herramienta según su negocio. Puede agregar su marca, una descripción de su empresa y configurar los servicios que ofrece.

3. Configurar parámetros y características del servicio: Para cada servicio, el usuario puede configurar los parámetros o características específicas, como materiales utilizados, tiempo estimado, cantidad requerida, entre otros. Estos parámetros ayudarán a calcular el valor de cada servicio.

4. Validar los costos finales: Después de configurar las preguntas y servicios, el usuario puede validar los costos finales de los servicios proporcionados por Qantto. Esto le permitirá tener una visión clara de los precios y realizar ajustes si es necesario.

5. Guardar la configuración y compartir el enlace: Una vez que se haya completado la personalización, el usuario puede guardar la configuración y generar un enlace único para compartir con sus clientes. Esto les permitirá acceder a la herramienta y comenzar a cotizar los servicios ofrecidos."
              />
            </div>

            <div className="w-full p-1">
              <FAQBox
                title="¿Necesito conocimientos técnicos o de terceros para hacerlo?"
                content="No, para utilizar Qantto no se requieren conocimientos técnicos avanzados ni la intervención de terceros. El proceso de configuración inicial consiste en definir las opciones y respuestas posibles para cada pregunta y asignarles un valor. Esta configuración puede ser realizada por el propietario del negocio o la persona encargada de realizar las cotizaciones. Una vez que se haya completado esta configuración inicial, podrás utilizar Qantto de manera autónoma y sin necesidad de conocimientos técnicos adicionales."
              />
            </div>

            <div className="w-full p-1">
              <FAQBox
                title="¿Cómo se asegura la herramienta de que la cotización que proporciona es precisa y confiable?"
                content="Qantto se basa en la configuración realizada por el usuario para calcular la cotización de cada servicio de acuerdo con los requerimientos establecidos. El usuario tiene la capacidad de configurar sus propios precios y especificar los detalles necesarios para cada proyecto.

Sin embargo, es importante tener en cuenta que cada proyecto es único y puede presentar requerimientos específicos adicionales. Como resultado, el valor proporcionado por la herramienta es un estimado y podría variar hasta un 20% dependiendo de los requerimientos individuales."
              />
            </div>

            <div className="w-full p-1">
              <FAQBox
                title="¿Qué medidas de seguridad tiene en cuenta para proteger los datos de mis clientes?"
                content="Tomamos medidas de seguridad para proteger los datos de los clientes. Se utilizan encriptación de datos, acceso restringido, respaldo y recuperación de datos, protección contra amenazas y vulnerabilidades, y se cumple con las normativas de protección de datos. Estas medidas garantizan la confidencialidad, integridad y disponibilidad de la información de los clientes."
              />
            </div>

            <div className="w-full p-1">
              <FAQBox
                title="¿Qué tipo de soporte técnico o asesoramiento se ofrece después de la implementación de la herramienta?"
                content="Ofrecemos un sólido servicio de soporte técnico y asesoramiento después de la implementación de la herramienta. Nuestro equipo de soporte está disponible para ayudarte con cualquier consulta técnica o problema que puedas enfrentar. Además, contamos con asesores expertos que te brindarán orientación en la configuración de la herramienta y te ayudarán a optimizar tus procesos. Estamos comprometidos en brindarte un servicio completo para garantizar tu éxito con Qantto."
              />
            </div>

            <div className="w-full p-1">
              <FAQBox
                title="¿Qué pasa si mi negocio tiene requisitos específicos que no pueden ser cubiertos por la herramienta?"
                content="Aunque la herramienta ofrece una amplia personalización, comprendemos que cada negocio es único y puede tener requisitos particulares.

En situaciones donde los requisitos específicos de tu negocio no puedan ser cubiertos directamente por la herramienta, ofrecemos soluciones personalizadas. Nuestro equipo de expertos está disponible para evaluar tus necesidades y trabajar contigo para encontrar una solución que se adapte a tu negocio de manera individualizada.

Ya sea mediante la personalización adicional de la herramienta existente o mediante el desarrollo de nuevas funcionalidades, nos esforzaremos por satisfacer tus requisitos específicos y asegurarnos de que obtengas el máximo valor de nuestra plataforma."
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
)

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-md bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden break-words whitespace-pre-wrap ${
            isOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? 'rotate-[360deg]' : 'rotate-[180deg]'
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#6ef96e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  )
}
