import Tabs from "./Tabs"

interface ITab {
  id: number,
  name: string,
  content: any
}

const ProductsTabs = (props) => {

  console.log(props)

  const tabs: ITab[] = [
    {id: 1, name: 'Описание',                content: <div>{props.descr}</div>},
    {id: 2, name: 'Инструкция',              content: <div>Инструкция</div>},
    {id: 3, name: 'Состав',                  content: <div>Состав</div>},
    {id: 4, name: 'Документы и сертификаты', content: <div>Документы и сертификаты</div>},
  ]

  return(
    <Tabs tabs={tabs} />
  )
}

export default ProductsTabs