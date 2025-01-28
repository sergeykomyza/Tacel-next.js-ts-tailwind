import Image from "next/image";
import SectionTitle from "@/layouts/SectionTitle";

interface IAdvantages{
  id: number,
  name: string,
}

const Advantages = () => {

  const advantages: IAdvantages[] = [
    {id: 1, name: '<b>Низкая вязкость</b> <br> и хорошая текучесть'},
    {id: 2, name: '<b>Строго стандартизированный </b> <br> состав и осмолярность'},
    {id: 3, name: 'Низкий риск <br> <b>контаминации</b>'},
    {id: 4, name: 'Возможность<b> долговременного </b> <br> применения'},
    {id: 5, name: '<b>Более хорошая </b> <br> усвояемость'},
    {id: 6, name: 'Меньшие трудозатраты и<b> <br> экономия времени </b> персонала'},
    {id: 7, name: '<b>Высокое содержание </b> <br> энергии в малом объеме'},
    {id: 8, name: 'Пригоден для пациентов с<b> <br> целиакией</b>'}
  ]

  return(
    <div className="py-16 bg-grey">
      <div className="container">
        <SectionTitle 
          title="Преимущества готовых к употреблению <b>жидких смесей</b>"
        />
        <ul className="grid-auto-fit gap-3 lg:gap-7">
          {
            advantages.map((item, i)=>(
              <li
                key={item.id}
                className="relative pt-3 pr-3 pb-4 pl-3 bg-white rounded-xl shadow-item"
              >
                <Image
                  className="absolute top-0 left-0 object-cover object-right"
                  src={`/icon-advantages-${i+5}.png`}
                  alt="icon"
                  width={272}
                  height={108}
                  style={{ width: "auto", height: "auto" }}
                />
                <span className="flex mb-8 text-[14px]/[1] font-bold text-[#2B4E2D]">{`0${item.id}`}</span>
                <p
                  dangerouslySetInnerHTML={{ __html: item.name }}
                ></p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Advantages