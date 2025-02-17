import SectionTitle from "@/layouts/SectionTitle";

interface IAuditories{
  id: number,
  title: string,
  text: string
}
const Auditories = () => {

  const auditories: IAuditories[] = [
    {id: 1, title: 'Для энтерального питания людей в послеоперационный период', text: 'Энтеральное питание является важным компонентом восстановительного периода после операции. В такой период организм нуждается в правильном балансе питательных веществ, чтобы справиться с трудностями восстановления'},
    {id: 2, title: 'В состояниях, связанных с потерей аппетита', text: 'В таких состояниях важно предоставить организму необходимое количество питательных веществ, чтобы сохранить его работоспособность и укрепить иммунитет. Для этого можно использовать специальные диетические продукты'},
    {id: 3, title: 'В состояниях, связанных с челюстно- лицевыми, черепно- мозговыми, ожоговыми травмами', text: 'Такие травмы могут значительно повлиять на пищеварительную систему человека и его способность усваивать питательные вещества. Важно дать организму нужное количество белков и витаминов для восстановления поврежденных тканей'},
    {id: 4, title: 'При нарушениях функций глотания и жевания', text: 'При нарушениях функций глотания и жевания, вызванных различными заболеваниями или травмами, пациенты могут испытывать трудности с приемом пищи и получением достаточного количества питательных веществ'},
  ]

  return(
    <section className="py-16">

      <div className="container">
        <SectionTitle
          title="<b>Для кого</b> подходит смесь?"
        />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          {
            auditories.map((item, i)=>(
              <li
                key={item.id}
                className="flex flex-col gap-3 py-3 px-3 md:pt-5 md:pr-16 md:pb-8 md:pl-7 rounded-xl shadow-item"
              >
                <div className="flex items-center justify-center w-14 h-14 text-[20px] font-bold text-[#2B4E2D] bg-icon-num">
                  0{i+1}
                </div>
                <h6 className="font-bold">
                  {item.title}
                </h6>
                <p>
                  {item.text}
                </p>
              </li>
            ))
          }
        </ul>
      </div>

    </section>
  )
}

export default Auditories