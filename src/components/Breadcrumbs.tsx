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
    <nav aria-label="breadcrumbs" className="text-sm">
      <ul className="flex space-x-2">
        {/* Главная */}
        <li>
          <Link href="/" className="text-blue-500 hover:underline">
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
            <li key={href} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-500">{translatedValue}</span>
              ) : (
                <Link href={href} className="text-blue-500 hover:underline">
                  {translatedValue}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
