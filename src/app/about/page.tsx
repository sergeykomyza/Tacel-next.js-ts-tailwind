import Breadcrumbs from "@/components/Breadcrumbs"
import PageTitle from "@/layouts/PageTitle"
import Map from "@/sections/Map"

import Image from "next/image"


const About = () => {
  return(
    <div>
      <Breadcrumbs />


      <div className="container">
        <div className="relative lg:pt-24 pt-10 lg:pb-36 pb-10 flex flex-col lg:items-start ">

          <div className="max-w-[670px] w-full mb-14">
            <PageTitle>О компании</PageTitle>
            <p className="mb-3">Иногда в период лечения и выздоровления дети с онкологическими заболеваниями не могут получать необходимые им калории и питательные вещества перорально. Питание через зонд, или энтеральное питание, обеспечивает питание в виде жидкости или смеси, подаваемой через трубку, которую вставляют в желудок или кишечник. По такой трубке (зонду) могут также подаваться некоторые лекарства.</p>
            <p className="mb-3">Чаще всего используются назогастральные зонды и гастростомические трубки. Но есть несколько типов зондов для энтерального питания, которые различаются по методу введения и расположению в пищеварительном тракте.</p>
            <p>Иногда пациент просто не в состоянии съесть достаточное количество калорий или белка. В этом нет ничьей вины. Важно помочь ребенку понять, что нутритивная поддержка не наказание. Большинство детей быстро привыкают к зонду для энтерального питания. Важно, чтобы ребенок не трогал и не тянул трубку. Соблюдайте инструкции по уходу за кожей в месте ввода зонда во избежание раздражения или инфекции.</p>
          </div>
          <button className="flex items-center justify-center w-[244px] h-[60px] text-[16px]/[19px] font-bold text-white rounded-30 bg-button-green">Купить смесь</button>

          <Image
            className="static lg:absolute -z-[2] -right-16 -top-4 -order-1 w-[43.4vw] 2xl:w-[576px] mx-auto"
            src="/about-img.webp"
            alt="product"
            width={576}
            height={747}
            priority
          />

        </div>
      </div>

      <Map />

    </div>
  )
}

export default About