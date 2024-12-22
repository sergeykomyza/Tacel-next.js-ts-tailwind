import SectionTitle from "@/layouts/SectionTitle";

interface IAdvantages{
  id: number,
  name: string,
}

export default function Advantages(){

  const advantages: IAdvantages[] = [
    {id: '1', name: '<b>Низкая вязкость</b> <br> и хорошая текучесть'},
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
        <ul>
          {
            advantages.map((item, i)=>(
              <li
                key={item.id}
                className="flex items-center p-5 bg-white rounded-xl shadow-item"
              >
                <span>{`0${item.id}`}</span>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}