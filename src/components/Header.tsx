'use client'

import Image from "next/image";
import {useState} from "react"

const Header = () => {

  const [isOpen, setIsOpen] = useState<Boolean>(false)
  const handleClick = ()=>{
    setIsOpen(!isOpen)
  }

  const menu = [
    {id: 1, title: 'Где купить',      url: '#'},
    {id: 2, title: 'О компании',      url: '#'},
    {id: 3, title: 'Врачам',          url: '#'},
    {id: 4, title: 'Полезные статьи', url: '#'},
    {id: 5, title: 'Контакты',        url: '#'}
  ]

  return(
    <header className="w-[100%] py-[25px] bg-white"> 
        <div className="container mx-auto"> 
          <nav className="flex items-center justify-between"> 
            <a className="flex items-center gap-5" href="home.html"> 
              <Image
                className="dark:invert"
                src="/logo.png"
                alt="logo"
                width={131}
                height={40}
                priority
              />
              <span className="hidden lg:block font-regular text-[10px]/[10px]">Пищевой продукт <br/> для энтерального питания</span>
            </a>
            <ul 
              className={`
                absolute 
                z-10
                lg:relative 
                top-[90px] 
                lg:top-0 
                flex 
                flex-col 
                lg:flex-row
                items-end 
                left-0
                w-[100%] 
                lg:w-auto 
                px-[15px]
                pb-4
                lg:pb-0 
                box-border
                bg-white
                transition-opacity duration-300 ease-in-out
                ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto"}
              `}
            >
              {menu.map((link)=>(
                <li className="mx-[15px] xl:mx-[24px]" key={link.id}> 
                  <a className="font-bold text-[13px] xl:text-[16px]" href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col">
              <a className="header__phone text-[13px]/[1] lg:text-[16px]/[1] font-bold" href="tel:+74952487181">+7 (495) 248-71-81 </a>
              <a className="header__phone text-[13px]/[1] lg:text-[16px]/[1] font-bold" href="tel:+79037928075">+7 (903) 792-80-75 </a>
            </div>

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

          </nav>
        </div>
      </header>
  )
}

export default Header
