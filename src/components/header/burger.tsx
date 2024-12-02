// 'use client'

type BurgerProps = {
  isOpen: boolean,
  setIsOpen: (value: boolean) => void
}

export default function Burger({isOpen, setIsOpen}: BurgerProps){

  const handleClick = ()=>{
    setIsOpen(!isOpen)
  }

  return(
    <button 
      className="focus:outline-none w-6 h-8 cursor-pointer lg:hidden "
      onClick={handleClick}
    > 
      <span 
        className={`bg-black transition-all duration-300 ease-in-out block h-0.5 w-6 ${
          isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
        }`}
      ></span>
      <span 
        className={`bg-black transition-all duration-300 ease-in-out block h-0.5 w-6 my-0.5 ${
        isOpen ? "-translate-x-5 opacity-0" : "translate-x-0 opacity-100"
        }`}
      ></span>
      <span 
        className={`bg-black transition-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm ${
          isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
        }`}
      ></span>
    </button>
  )
}