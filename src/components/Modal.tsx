import ReactDOM from "react-dom";
import { ReactNode } from "react";
import Image from "next/image";

interface ModalProps{
   isOpen: boolean
   onClose: () => void
   children: ReactNode
}

const Modal: React.FC<ModalProps>  = ({ isOpen, onClose, children }) => {

   if (!isOpen) return null;

   return ReactDOM.createPortal(
      <div
         className={`fixed z-10 top-0 left-0 w-full h-full transition-all duration-[0.3s] bg-overlayDark
         ${isOpen ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none"}  
      `}
         onClick={onClose}
      >
         <div
            className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] flex max-w-[718px] w-full h-[520px] bg-white rounded-xl"
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

            <div className='md:block hidden w-[50%] pt-9 px-5 bg-lightGreen rounded-s-xl'>
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
      </div>,
      document.getElementById("modal-root") // Контейнер для модального окна
   );

};

export default Modal