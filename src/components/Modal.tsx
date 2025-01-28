import ReactDOM from "react-dom";
import { ReactNode } from "react";
import Image from "next/image";
import { InputMask } from "@react-input/mask"; // https://www.npmjs.com/package/@react-input/mask
import { useState } from "react";

interface ModalProps{
   isOpen: boolean
   onClose: () => void
   children: ReactNode
}

const Modal: React.FC<ModalProps>  = ({ isOpen, onClose, children }) => {

   if (!isOpen) return null;

   const [isChecked, setIsChecked] = useState<boolean>(true)

   const checking = () => {
      setIsChecked(!isChecked)
   }

   return ReactDOM.createPortal(
      <div
         className={`fixed z-10 top-0 left-0 w-full h-full transition-all duration-[0.3s] bg-overlayDark
         ${isOpen ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none"}  
      `}
         onClick={onClose}
      >
         <div
            className="absolute z-[1] top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] flex max-w-[718px] w-full h-[520px] bg-white rounded-xl"
            onClick={(e) => e.stopPropagation()}
         >

            <button
               className='absolute z-10 md:-top-4 md:-right-4 -top-4 right-[50%] md:translate-x-0 translate-x-[16px] w-8 h-8 rounded-full bg-green'
               onClick={onClose}
            >
               <svg viewBox="0 0 24 24">
                  <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z" fill='#FFF'></path>
               </svg>
            </button>

            <div className=' md:block hidden w-[50%] pt-9 px-5 bg-lightGreen rounded-s-xl'>
               <h6 className='text-[30px]/[35px] font-bold mb-4'>«Энмит» энтеральное питание</h6>
               <p className=''>Может применяться в качестве основного или дополнительного источника питания, особенно в после- операционный период, и позволит решить проблему приедаемости пищи и расширить ассортимент предлагаемых продуктов для энтерального питания</p>
               <Image
                  className="absolute bottom-0 left-0 pointer-events-none"
                  src="/modal-img.webp"
                  alt="product"
                  width={564}
                  height={431}
                  priority
               />
            </div>

            <div className='w-[100%] md:w-[50%] p-7'>
                  <h6 className="mb-5 text-[28px]/[30px] font-bold text-center">Форма заказа</h6>
                  <p className="mb-7 text-[15px]/[18px] font-light text-center">Заполните форму ниже и мы свяжемся с вами <b className="font-bold">в ближайшее время</b> </p>
                  <form>
                     <input 
                        type="text" 
                        placeholder="Ваше имя"
                        className="w-full h-14 mb-6 px-5 rounded-full text-[14px] font-bold bg-grey outline-none placeholder-shown:font-light"
                     />
                     <InputMask 
                        mask="+7 (___) ___-__-__" 
                        replacement={{ _: /\d/ }} 
                        type="tel" 
                        placeholder="Ваш номер телефона"
                        className="w-full h-14 mb-6 px-5 rounded-full text-[14px] font-bold bg-grey outline-none placeholder-shown:font-light"
                     />
                     <input 
                        type="tel" 
                        placeholder="Ваш адрес"
                        className="w-full h-14 mb-6 px-5 rounded-full text-[14px] font-bold bg-grey outline-none placeholder-shown:font-light"
                     />

                     <button className="flex items-center justify-center w-full h-[60px] mb-5 text-[16px]/[19px] font-bold text-white rounded-30 bg-button-green">Заказать смесь</button>
                     
                     <div className="flex justify-center">
                        <label className="flex items-center cursor-pointer">
                           <input
                              className="hidden peer" 
                              type="checkbox" 
                              autoComplete="off" 
                              checked={isChecked}
                              onChange={checking} 
                           />
                           <span className="peer-checked:bg-green flex items-center justify-center w-2.5 h-2.5 mr-1.5 rounded-full border relative"></span>
                           <span className="text-[10px]/[14px]">
                              Нажимая на кнопку, вы соглашаетесь с <br /> 
                              <a href="" className="underline hover:no-underline">политикой конфиденциальности</a>
                           </span>
                        </label>
                        </div>

                  </form>
            </div>

         </div>
      </div>,
      document.getElementById("modal-root") // Контейнер для модального окна
   );

};

export default Modal