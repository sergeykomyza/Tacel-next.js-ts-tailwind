
import Image from "next/image"
import Link from "next/link"
import ProductsSlider from "./ProductsSlider"

async function getProducts(): Promise<IProduct[]>{
  const res = await fetch('http://localhost:3000/api/products')
  if(!res.ok){
    throw new Error('Ошибка загрузки продукта')
  }
  return res.json()
}

interface IProduct {
   id: number,
   title: string,
   content: string,
   slug: string
 }

export default async function ProductsSlides(){
  const products = await getProducts()
  const Slide: React.FC<{product: IProduct}> = ({product}) => {
    return(
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">
                  
        <figure className='shrink-0 flex justify-center'>
          <Image
            className=""
            src={`/slide-img.webp`}
            alt="logo"
            width={347}
            height={491}
            priority
          />
        </figure>
      
      <div>
        <h5 className='mb-10 text-[25px]/[1] font-bold lg:text-[30px]/[1]'>{product.title}</h5>
        <p className='mb-7 text-[20px] font-light'>{product.content}</p>
        <Link href={`/products/${product.slug}`} 
          className="flex items-center justify-center w-[244px] h-[60px] text-[16px]/[19px] font-bold text-white rounded-30 bg-button-green"
        >
          Подробнее
        </Link>
      </div>
    </div>
    )
  }
  const slide = products.map((product, i) => (

    <Slide key={i} product={product} />
  ))
  return <ProductsSlider products={slide} />
}