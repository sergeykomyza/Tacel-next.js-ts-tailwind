import Image from "next/image"

const ContactsInfoBox = () => {
  return(
    <div className="relative lg:absolute z-[1] left-0 top-0 lg:-top-8 lg:max-w-[412px] w-full py-7 px-0 lg:px-7 bg-white rounded-xl lg:shadow-item">
      
      <h6 className="mb-10 text-[25px]/[30px] lg:text-[30px]/[35px] font-light">
        Как с нами 
        <b className="font-bold"> связаться</b>
      </h6>

      <ul>
        <li className="flex items-center">
          <Image
            className=""
            src={`/icon-marker.png`}
            alt="icon"
            width={54}
            height={62}
            priority
          />
          <span className="">115114, Москва, Павелецкая набережная, д. 2, стр. 2</span>
        </li>
        <li className="flex items-center">
          <Image
            className=""
            src={`/icon-phone.png`}
            alt="icon"
            width={54}
            height={62}
            priority
          />
          <a className="text-[20px]/[24px] lg:text-[24px]/[28px] font-bold" href="tel:+74951503073">+7 (495) 150-30-73</a>
        </li>
        <li className="flex items-center">
          <Image
            className=""
            src={`/icon-mail.png`}
            alt="icon"
            width={54}
            height={62}
            priority
          />
          <a className="text-[15px]/[18px] font-bold" href="mailto:tavel@gmail.com">tavel@gmail.com</a>
        </li>
      </ul>
    
    </div>
  )
}

export default ContactsInfoBox