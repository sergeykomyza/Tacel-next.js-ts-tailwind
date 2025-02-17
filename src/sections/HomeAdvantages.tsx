import Image from "next/image"

const HomeAdvantages = () =>{
  const advantages = [
    '<b class="block font-bold">Низкий риск</b> контаминации',
    '<b class="block font-bold">Не содержит</b> лактозу',
    'Практичная и <b class="block font-bold">удобная упаковка</b>',
    '<b class="block font-bold">Прост в</b> употреблении'
  ]
  return(
    <ul className="relative z-[1] grid-auto-fit gap-3 lg:gap-7"> 
      {
        advantages.map((item, index)=>(
          <li
            key={index}
            className="flex items-center p-5 bg-white rounded-xl shadow-item"
          >
            <Image
              className="mr-5"
              src={`/icon-advantages-${index+1}.svg`}
              alt="icon"
              width={50}
              height={50}
              style={{ width: "auto", height: "auto" }}
            />
            <span 
              className="font-light text-[16px]/[1]" 
              dangerouslySetInnerHTML={{ __html: item }}
            >
            </span>
          </li>
        ))
      }
    </ul>
  )
}

export default HomeAdvantages