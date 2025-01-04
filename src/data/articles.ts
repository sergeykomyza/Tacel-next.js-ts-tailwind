interface Article {
  id: number,
  slug: string;
  title: string;
  date: string;
  img: string;
  content: string;
}

export const articles: Article[] = [
  {
    id: 1,
    slug: 'kak-ono-rabotaet',
    title: 'Как оно работает и кто в нем нуждается',
    date: '07.04.23',
    img: 'info-slide-1.webp',
    content: 'Эта статья подробно рассказывает о том, как работает энтеральное питание...',
  },
  {
    id: 2,
    slug: 'preimushchestva-pitaniya',
    title: 'Преимущества энтерального питания',
    date: '07.04.23',
    img: 'info-slide-2.webp',
    content: 'Энтеральное питание обладает множеством преимуществ...',
  },
  // Добавьте остальные статьи
];