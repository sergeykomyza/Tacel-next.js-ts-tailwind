import { notFound } from 'next/navigation';
import Image from 'next/image';
import { articles } from '@/data/articles'; // Импортируем массив статей

interface ArticleProps {
  params: { slug: string };
}

const ArticlePage = ({ params }: ArticleProps) => {
  // Ищем статью по slug
  const article = articles.find((item) => item.slug === params.slug);

  // Если статья не найдена, возвращаем 404
  if (!article) {
    return notFound();
  }

  return (
    <section className="container py-10">
      <div className="mb-6">
        <Image
          src={`/${article.img}`}
          alt={article.title}
          width={800}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-500 mb-8">{article.date}</p>
      <article className="text-lg leading-relaxed">{article.content}</article>
    </section>
  );
};

export default ArticlePage;