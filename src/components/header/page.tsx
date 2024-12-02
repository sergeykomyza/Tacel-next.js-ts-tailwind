'use client'

import Image from "next/image";
import {useState} from "react"
import { menu } from "./menu";
import Burger from "./burger";

export default function Header(){

  const [isOpen, setIsOpen] = useState<Boolean>(false)

  return(
    <header className="relative py-[25px]"> 
        <div className="container mx-auto"> 
          <nav className="flex items-center justify-between"> 
            <a className="flex items-center gap-[20px]" href="home.html"> 
              <Image
                className="dark:invert"
                src="/logo.png"
                alt="logo"
                width={131}
                height={40}
                priority
              />
              <span className="hidden lg:block font-[family-name:var(--roboto-regular)] text-[10px]/[10px]">Пищевой продукт <br/> для энтерального питания</span>
            </a>
            <ul 
              className={`absolute top-[98px] flex flex-col items-end w-[100%] px-[15px] lg:relative lg:top-0 lg:w-auto lg:flex-row transition-all ${
              isOpen ? "right-0" : "right-[-100%]"
              }`}
            >
              {menu.map((link)=>(
                <li className="mx-[15px] xl:mx-[24px]" key={link.id}> 
                  <a className="font-[family-name:var(--roboto-bold)] text-[13px] xl:text-[16px]" href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col">
              <a className="header__phone font-[family-name:var(--roboto-bold)]" href="tel:+74952487181">+7 (495) 248-71-81 </a>
              <a className="header__phone font-[family-name:var(--roboto-bold)]" href="tel:+79037928075">+7 (903) 792-80-75 </a>
            </div>

            <Burger isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* <button 
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
            </button> */}

          </nav>
        </div>
      </header>
  )
}
