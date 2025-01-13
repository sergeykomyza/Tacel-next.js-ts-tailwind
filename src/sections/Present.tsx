'use client'

import {useState} from 'react'

import Image from "next/image"
import HomeAdvantages from "./HomeAdvantages"

const Present = () => {

  const [isOpen, setIsOpen] = useState<Boolean>(false)
  const showModal = () => {
    setIsOpen(!isOpen)
  }

  return(
    <section className=" lg:pb-60 pb-20 pt-28 lg:pt-48 bg-present-gradient">
      <div className="container">
        <div className="relative flex flex-col-reverse lg:flex-row items-center mb-7 lg:mb-36">
          <div className="relative z-[1]"> 
            <h1 className="mb-7 font-bold text-lg lg:text-xl">
              Новый продукт на основе мяса для <br className="hidden lg:block"/> энтерального питания- жидкая, <br className="hidden lg:block"/> готовая к употреблению, смесь
            </h1>
            <p className="mb-14 font-light text-[14px]/[1] lg:text-[18px]/[21px]">
              Полученный от здоровых животных, которые были выращены без <br className="hidden lg:block"/> использования стимуляторов роста, гормональных препаратов и других <br className="hidden lg:block"/> нетрадиционных кормовых добавок
            </p>
            <div className="flex items-center flex-wrap gap-4 lg:gap-30">
              <button 
                className="flex items-center justify-center w-[244px] h-[60px] text-[16px]/[19px] font-bold text-white rounded-30 bg-button-green"
                onClick={showModal}  
              >
                Купить смесь
              </button>
              <button className="flex items-center justify-center w-[244px] h-[60px] text-[16px]/[19px] font-bold text-green rounded-30 bg-transparent border-solid border-green border ">Скачать презентацию</button>
            </div>
          </div>
          <Image
            className="static lg:absolute -right-28 -top-40 w-[43.4vw] 2xl:w-[625px]"
            src="/home-img.webp"
            alt="product"
            width={625}
            height={771}
            priority
          />
        </div>
        <HomeAdvantages />
      </div>

      <div 
        className={`fixed z-10 top-0 left-0 w-full h-full
          ${isOpen ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none"}  
        `}
        onClick={showModal}
      >
        <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] max-w-[718px] w-full h-[520px] bg-white rounded-xl">

        </div>
      </div>

    </section>
  )
}

export default Present