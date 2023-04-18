import { useState } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5/index'

export function ToggleMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <button
      className={`burger ${isOpen ? 'open' : ''}`}
      title="menu"
      onClick={handleClick}
    >
      {isOpen ? <IoClose /> : <IoMenu />}
    </button>
  )
}
