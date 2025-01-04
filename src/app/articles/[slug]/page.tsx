import { notFound } from 'next/navigation';
import Image from 'next/image';
import { articles } from '@/data/articles'; // Импортируем массив статей

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
    <div>
      

      <article className="pt-16 ">
        <Image
          src={`/${article.img}`}
          alt={article.title}
          width={470}
          height={400}
          className="rounded-lg object-cover"
        />
      </article>
    </div>
  );
};

export default ArticlePage;