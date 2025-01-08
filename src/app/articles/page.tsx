import Breadcrumbs from "@/components/Breadcrumbs"
import PageTitle from "@/layouts/PageTitle"

import { articles } from "@/data/articles"

import Link from "next/link"
import Image from "next/image"
import Map from "@/sections/Map"

const Articles = () => {
  return(
    <div>
      <Breadcrumbs />

      <div className="container">
        <div className="pt-16 pb-16">
          <PageTitle>Полезные статьи</PageTitle>
          <ul className="relative z-[1] grid-auto-fit gap-3 lg:gap-7 ">
            {
              articles.map((item, index) => (
                  <li className="relative rounded-[10px] overflow-hidden" key={item.id}>
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
                  </li>
              ))
            }
          </ul>
        </div>
      </div>
      <Map />
    </div>
  )
}

export default Articles