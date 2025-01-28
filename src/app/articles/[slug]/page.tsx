import { notFound } from 'next/navigation';
import Image from 'next/image';
import { articles } from '@/data/articles';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageTitle from '@/layouts/PageTitle';
import Map from '@/sections/Map';

interface ArticleProps {
  params: { slug: string };
}

// Генерация статических путей
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

const ArticlePage = async ({ params }: ArticleProps) => {
  // Явно используем params с async/await
  const { slug } = await Promise.resolve(params);

  // Поиск статьи по slug
  const article = articles.find((item) => item.slug === slug);

  // Если статья не найдена
  if (!article) {
    return notFound();
  }

  return (
    <div className="">
      <Breadcrumbs />
      <div className="container">
        <article className="pt-16 pb-16">
          <PageTitle>{article.title}</PageTitle>
          <div className="flex flex-col-reverse lg:flex-row items-start gap-7">
            <div>
              <p
                className="text-[14px]/[1.2]"
                dangerouslySetInnerHTML={{ __html: article.content }}
              ></p>
            </div>
            <figure className='shrink-0 max-w-[470px] w-full'>
              <Image
                className="rounded-lg object-cover"
                src={`/${article.img}`}
                alt={article.title}
                width={470}
                height={400}
              />
            </figure>
          </div>
        </article>
      </div>
      <Map />
    </div>
  );
};

export default ArticlePage;
