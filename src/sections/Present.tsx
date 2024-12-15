import Image from "next/image"
import HomeAdvantages from "./HomeAdvantages"

export default function Present(){
  return(
      <section className=" lg:pb-60 pt-28 lg:pt-72 bg-present-gradient">
        <div className="container">
          <div className="relative flex flex-col-reverse lg:flex-row items-center mb-36">
            <div className="relative z-[1]"> 
              <h1 className="mb-7 font-bold text-[25px]/[25px] lg:text-[35px]/[41px]">
                Новый продукт на основе мяса для <br className="hidden lg:block"/> энтерального питания- жидкая, <br className="hidden lg:block"/> готовая к употреблению, смесь
              </h1>
              <p className="mb-14 font-light text-[14px]/[1] lg:text-[18px]/[21px]">
                Полученный от здоровых животных, которые были выращены без <br className="hidden lg:block"/> использования стимуляторов роста, гормональных препаратов и других <br className="hidden lg:block"/> нетрадиционных кормовых добавок
              </p>
              <div className="flex items-center flex-wrap gap-4 lg:gap-30">
                <button className="flex items-center justify-center w-[244px] h-[60px] text-[16px]/[19px] font-bold text-white rounded-30 bg-button-green">Купить смесь</button>
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
      </section>
    
  )
}