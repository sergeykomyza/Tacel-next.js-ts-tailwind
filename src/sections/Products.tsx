'use client'

import Image from 'next/image';
import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

interface ISlide{
  id: string,
  title: string,
  descr: string
}

const Products = () => {

  const slides: ISlide[] = [
    {id: '1', title: '«Энмит» энтеральное питание', descr: 'со вкусом говядины (200 мл)'},
    {id: '2', title: '«Энмит» энтеральное питание', descr: 'со вкусом лосося (250 мл)'},
    {id: '3', title: '«Энмит» энтеральное питание', descr: 'со вкусом курятины (300 мл)'},
  ],
  list: string[] = [
    'в наиболее полноценном белке',
    'в незаменимых аминокислотах',
    'в жиро- и водорастворимых витаминах',
    'в необходимых микроэлементах',
    'в легко усваиваемом гемовом железе'
  ]

  return (

    <section className='pb-20'>
      <div className="container">
        
        <Swiper
          modules={[Pagination]}
          pagination={{clickable: true}}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >

          {
            slides.map((item) => (
              <SwiperSlide key={item.id}>
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
                    <h5 className='text-[25px]/[1] font-bold lg:text-[30px]/[1]'>{item.title}</h5>
                    <p className='mb-7 text-[20px] font-light'>{item.descr}</p>
                    <p className='mb-2'>Инновационный продукт, уникальность которого состоит в том, что ключевым ингредиентом при производстве является охлажденное высококачественное мясо в оптимально подобранном сочетании с белками растительного происхождения и минерально-витаминным комплексом.</p>
                    <p className='mb-2'>Это позволяет при употреблении 1500-2000 мл. продукта обеспечить дневную потребность организма</p>
                    <ul className='my-4'>
                      {
                        list.map((elem, i)=>(
                          <li 
                            key={i}
                            className='relative pl-6 before:content-[" "] before:absolute before:left-0 before:top-1 before:w-[14px] before:h-[14px] before:bg-icon-arrow-list '
                          >
                            {elem}
                          </li>
                        ))
                      }
                    </ul>
                    <p className='mb-2'>Результат - ускоренное нарастание общего белка и альбумина, уровня суточного железа и увеличение количества лимфоцитов при отсутствии роста уровня сахара в крови.</p>
                    <p className='mb-2'>Может применяться в качестве основного или дополнительного источника питания, особенно в после- операционный период, и позволит решить проблему приедаемости пищи и расширить ассортимент предлагаемых продуктов для энтерального питания</p>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }

        </Swiper>

      </div>
    </section>

  );
}

export default Products