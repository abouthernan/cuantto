import { useState } from 'react'
import { IoCheckmarkSharp } from 'react-icons/io5/index'

const listOfBenefist = [
  "Aumenta la rentabilidad de tu negocio al ahorrar tiempo y recursos en el proceso de ventas.",
  "Cotizaciones 24/7 para tus clientes, sin tener que mover un solo dedo.",
  "Estadísticas en tiempo real para tu negocio.",
  "Automatizas el proceso de cotización.",
  "Cotizaciones Personalizadas con cada detalle.",
  "Proporciona una experiencia más rápida y eficiente para tus clientes. Mejorando su satisfacción y fidelización.",
  "Reduce errores en el proceso de cotización, evitando mal entendidos y perdidas financieras.",
  "Permite una mejor gestión del proceso de cotización, ofreciendo una herramienta de seguimiento y control de las cotizaciones realizadas.",
  "Mejora la competitividad de tu empresa al brindar una experiencia de cotización más moderna y eficiente a tus clientes.",
  "Reduce la necesidad de tu personal de ventas.",
  "Enfócate en los clientes calificados.",
  "Entrega mas valor al cliente dando transparencia en tus costos.",
  "Gasta tu tiempo y recursos únicamente en clientes que se acomoden a tu metodología de trabajo, costos y alcance.",
  "Mejora la experiencia de usuario al poder tener una propuesta económica en tiempo real."
]


export function ListBenefits() {
  const [viewAll, setViewAll] = useState(false)

  const handleClick = () => {
    setViewAll(!viewAll)
  }
  return (
    <>
      <ul className="list">
        {listOfBenefist.map(item => (
          <li className="list__item" key={item}>
            <IoCheckmarkSharp />
            {item}
          </li>
        )).slice(0, viewAll ? listOfBenefist.length : 3)}
      </ul>

      <div className="buttons buttons-view-more">
        <button
          className="button button--outline"
          type="button"
          title="Ver más beneficios"
          onClick={handleClick}
        >
          {viewAll ? 'Ver menos beneficios' : 'Ver más beneficios'}
        </button>
      </div>
    </>
  )
}
