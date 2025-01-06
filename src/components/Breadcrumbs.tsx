// components/Breadcrumbs.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { articles } from "@/data/articles"; // Импортируем данные о статьях

// Словарь для перевода статичных сегментов пути
const translations: { [key: string]: string } = {
  articles: "Статьи",
};

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x); // Разделяем путь на части

  // Функция для получения названия статьи по ID
  const getTitleById = (slug: string): string | null => {
    const article = articles.find((article) => article.slug === slug); // Ищем статью по ID
    return article ? article.title : null; // Если нашли, возвращаем название
  };

  return (
    <nav aria-label="breadcrumbs" className="py-2 bg-[#EFF4F0]">

      <div className="container">

        <ul className="flex flex-wrap gap-4">
          {/* Главная */}
          <li className="flex gap-4 text-[12px] ">
            <Link href="/" className="">
              Главная
            </Link>
          </li>

          {/* Хлебные крошки */}
          {pathnames.map((value, index) => {
            const isLast = index === pathnames.length - 1; // Проверка на последний сегмент пути
            const href = `/${pathnames.slice(0, index + 1).join("/")}`;

            let translatedValue = translations[value] || value; // Переводим сегменты пути

            // Если это последний сегмент пути и это ID статьи, заменяем на название
            if (isLast) {
              const articleTitle = getTitleById(value); // Получаем название статьи по ID
              if (articleTitle) {
                translatedValue = articleTitle; // Подставляем название статьи
              }
            }

            return (
              <li key={href} className="flex gap-4">
                <span className="text-[12px]">/</span>
                {isLast ? (
                  <span className="text-[12px] font-bold text-[#2B4E2D]">{translatedValue}</span>
                ) : (
                  <Link href={href} className="text-[12px] ">
                    {translatedValue}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        
      </div>

    </nav>
  );
};

export default Breadcrumbs;
