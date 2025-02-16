'use client'

import Image from 'next/image';
import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

interface IProduct {
  id: number,
  title: string,
  content: string,
  slug: string
}

export default function ProductsClientComponent({products}: {products: IProduct[]}) {
  
  return (

    <section className='pb-20'>
      <div className="container">
        
        <Swiper
          modules={[Pagination]}
          pagination={{clickable: true}}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >

          {
            products.map((product: any) => (
              <SwiperSlide key={product.id}>
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
              </SwiperSlide>
            ))
          }

        </Swiper>

      </div>
    </section>

  );
}