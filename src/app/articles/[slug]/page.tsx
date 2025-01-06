import { notFound } from 'next/navigation';
import Image from 'next/image';
import { articles } from '@/data/articles'; // Импортируем массив статей
import Breadcrumbs from '@/components/Breadcrumbs';
import PageTitle from '@/layouts/PageTitle';
import Map from '@/sections/Map';

interface ArticleProps {
  params: { slug: string };
}

const ArticlePage = ({ params }: ArticleProps) => {
  
  console.log(params)
  // Ищем статью по slug
  const article = articles.find(
    (item) => item.slug === params.slug
  );

  // Если статья не найдена, возвращаем 404
  if (!article) {
    return notFound();
  }

  return (
    <div className=''>

      <Breadcrumbs />

      <div className="container">

        <article className='pt-16 pb-16'>

          <PageTitle
            title={article.title}
          />

          <div className="flex flex-col lg:flex-row items-start gap-7">

            <div>
              <p
                className='text-[14px]/[1.2]'
                dangerouslySetInnerHTML={{ __html: article.content }}
              ></p>
            </div>

            <Image
              src={`/${article.img}`}
              alt={article.title}
              width={470}
              height={400}
              className="rounded-lg object-cover shrink-0"
            />

          </div>
        </article>
        
      </div>
      
      <Map />

    </div>
  );
};

export default ArticlePage;