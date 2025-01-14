'use client'

import {useState} from 'react'

import Image from "next/image"
import HomeAdvantages from "./HomeAdvantages"

const Present = () => {

  const [isOpen, setIsOpen] = useState<Boolean>(false)
  const toggleModal = () => {
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
                onClick={toggleModal}  
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
        className={`fixed z-10 top-0 left-0 w-full h-full transition-all duration-[0.3s] bg-overlayDark
          ${isOpen ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none"}  
        `}
        onClick={toggleModal}
      >
        <div
          className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] flex max-w-[718px] w-full h-[520px] bg-white rounded-xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className='md:block hidden w-[50%] pt-9 px-5 bg-lightGreen'>
            <h6 className='text-[30px]/[35px] font-bold mb-4'>«Энмит» энтеральное питание</h6>
            <p className=''>Может применяться в качестве основного или дополнительного источника питания, особенно в после- операционный период, и позволит решить проблему приедаемости пищи и расширить ассортимент предлагаемых продуктов для энтерального питания</p>
            <Image
              className="absolute bottom-0 left-0"
              src="/modal-img.webp"
              alt="product"
              width={564}
              height={431}
              priority
            />
          </div>
          <div className='w-[50%]'>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Present