'use client'

import React, {useRef} from 'react'

import SectionTitle from "@/layouts/SectionTitle";

import { articles } from '@/data/articles';

import Image from 'next/image';
import Link from 'next/link';

import { Navigation, Pagination } from "swiper/modules";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Info = () => {

  const slides = articles;

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  console.log(slides)
  return(
    <section className="pb-20">
      <div className="container">
        <SectionTitle
          title="<b>Полезная</b> информация о продукте"
        />
        <div className='relative'>

          <button 
            className='absolute z-10 top-[45%] left-0 2xl:-left-14 flex items-center justify-center w-10 h-10 rounded-[50%] bg-white btn-box-shadow' 
            ref={prevRef}
          >
            <Image
              className=""
              src={`/prev.png`}
              alt="slide info"
              width={16}
              height={16}
              priority
            />
          </button>

          <button 
            className='absolute z-10 top-[45%] right-0 2xl:-right-14 flex items-center justify-center w-10 h-10 rounded-[50%] bg-white btn-box-shadow'
            ref={nextRef}
          >
            <Image
              className=""
              src={`/next.png`}
              alt="slide info"
              width={16}
              height={16}
              priority
            />
          </button>

          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              1100:{
                slidesPerView: 4
              },
              880:{
                slidesPerView: 3,
                spaceBetween: 30
              },
              480:{
                slidesPerView: 2
              }
            }}
            navigation={{
              prevEl: prevRef.current, // Привязка кнопок
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              const navigation = swiper.params.navigation as any;
              if (navigation) {
                navigation.prevEl = prevRef.current;
                navigation.nextEl = nextRef.current;
              }
            }}
            // onSwiper={(swiper)=> console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
          >
            {
              slides.map((item)=>(
                <SwiperSlide key={item.id}>
                  <div className="relative rounded-[10px] overflow-hidden">
                    <Link href={`/articles/${item.slug}`}>
                      <figure className="flex flex-col h-64 py-7 px-5 group cursor-pointer">
                        <Image
                          className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-[0.3s]"
                          src={`/${item.img}`}
                          alt="slide info"
                          width={270}
                          height={254}
                          priority
                        />
                        <figcaption className="relative mt-auto font-bold text-white">
                          {item.title}
                        </figcaption>
                      </figure>
                      <span className='absolute top-0 right-0 flex items-center justify-center bg-[#EDEEF1] w-20 h-6 text-[10px] font-bold rounded-bl-[10px]'>
                        {item.date}
                      </span>
                    </Link>
                  </div>
                </SwiperSlide>
              ))
            }

          </Swiper>
        </div>
        <div className='flex justify-center mt-10'>
          <button className="flex items-center justify-center w-full sm:w-[307px] h-[60px] text-[16px]/[19px] font-bold text-white rounded-30 bg-button-green">Смотреть больше статей</button>
        </div>
      </div>
    </section>
  )
}

export default Info;