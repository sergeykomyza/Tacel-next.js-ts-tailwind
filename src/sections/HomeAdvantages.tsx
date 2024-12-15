import Image from "next/image"

export default function HomeAdvantages(){
  const advantages = [
    '<b class="block font-bold">Низкий риск</b> контаминации',
    '<b class="block font-bold">Не содержит</b> лактозу',
    'Практичная и <b class="block font-bold">удобная упаковка</b>',
    '<b class="block font-bold">Прост в</b> употреблении'
  ]
  return(
    <ul className="relative z-[1] grid grid-auto-fit gap-7"> 
      {
        advantages.map((item, index)=>(
          <li
            key={index}
            className="flex items-center p-5 bg-white rounded-xl shadow-item"
          >
            <Image
              className="mr-5"
              src={`/icon-advantages-${index+1}.svg`}
              alt="logo"
              width={50}
              height={50}
              priority
            />
            <span 
              className="font-light text-[16px]/[1]" 
              dangerouslySetInnerHTML={{ __html: item }}>
            </span>
          </li>
        ))
      }
      {/*<article className="home-advantages__item"> 
          <img className="home-advantages__icon" src="img/icon-advantages-1.svg" alt="/"> 
        <span className="home-advantages__text"><b>Низкий риск</b> контаминации</span>
      </article>
      <article className="home-advantages__item"> 
        <img className="home-advantages__icon" src="img/icon-advantages-2.svg" alt="/"> 
        <span className="home-advantages__text"><b>Не содержит</b> лактозу</span>
      </article>
      <article className="home-advantages__item"> 
        <img className="home-advantages__icon" src="img/icon-advantages-3.svg" alt="/"> 
        <span className="home-advantages__text">Практичная и <b>удобная упаковка</b></span>
      </article>
      <article className="home-advantages__item"> 
        <img className="home-advantages__icon" src="img/icon-advantages-4.svg" alt="/"> 
        <span className="home-advantages__text"><b>Прост в</b> употреблении</span>
      </article>*/}
    </ul>
  )
}