

export default function Present(){
  return(
      <section className={`
        pb-60 
        pt-72
        overflow-x-hidden
        bg-present-gradient
      `}>
        <div className="container">
          <div className={`
            relative
            flex
            items-center
            mb-36  
          `}>
            <div className="relative z-[1]"> 
              <h1 className="mb-7 font-[family-name:var(--roboto-bold)] text-[35px]/[41px]">
                Новый продукт на основе мяса для <br/> энтерального питания- жидкая, <br/> готовая к употреблению, смесь
              </h1>
              <p className="home__text">
                Полученный от здоровых животных, которые были выращены без <br/> использования стимуляторов роста, гормональных препаратов и других <br/> нетрадиционных кормовых добавок
              </p>
              <div className="button-box home__buttons">
                <button className="button button-green">Купить смесь</button>
                <button className="button button-transparent">Скачать презентацию</button>
              </div>
            </div>
            {/* <img className="home__img" src="img/home-img.webp" alt=""> */}
          </div>
          <div className="home-advantages d-grid"> 
            <article className="home-advantages__item"> 
              {/* <img className="home-advantages__icon" src="img/icon-advantages-1.svg" alt="/"> */}
              <span className="home-advantages__text"><b>Низкий риск</b> контаминации</span>
            </article>
            <article className="home-advantages__item"> 
              {/* <img className="home-advantages__icon" src="img/icon-advantages-2.svg" alt="/"> */}
              <span className="home-advantages__text"><b>Не содержит</b> лактозу</span>
            </article>
            <article className="home-advantages__item"> 
              {/* <img className="home-advantages__icon" src="img/icon-advantages-3.svg" alt="/"> */}
              <span className="home-advantages__text">Практичная и <b>удобная упаковка</b></span>
            </article>
            <article className="home-advantages__item"> 
              {/* <img className="home-advantages__icon" src="img/icon-advantages-4.svg" alt="/"> */}
              <span className="home-advantages__text"><b>Прост в</b> употреблении</span>
            </article>
          </div>
        </div>
      </section>
    
  )
}