'use client'

import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

interface ProductsSliderProps {
  products: React.ReactNode[]; 
}

export default function ProductsSlider({products}: ProductsSliderProps) {
  
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
            products.map((product, i: number) => (
              <SwiperSlide key={i}>
                {product}
              </SwiperSlide>
            ))
          }

        </Swiper>

      </div>
    </section>

  );
}