import { NextResponse } from 'next/server';

interface IProducts {
  id: number,
  slug: string;
  title: string;
  price: number;
  img: string;
  content: string;
}


const articles: IProducts[] = [
  {
    id: 1,
    slug: 'smes-s-govyadinoy',
    title: '«Энмит» энтеральное питание Говядина',
    price: 1000,
    img: 'info-slide-1.webp',
    content: `
      Смесь с говядиной
    `,
  },
  {
    id: 2,
    slug: 'smes-s-kuricey',
    title: '«Энмит» энтеральное питание Курица',
    price: 900,
    img: 'info-slide-2.webp',
    content: `
      Смесь с курицей
    `,
  },
  {
    id: 3,
    slug: 'smes-s-lososem',
    title: '«Энмит» энтеральное питание Лосось',
    price: 1200,
    img: 'info-slide-3.webp',
    content: `
      Смесь с лососем
    `,
  },
];

export async function GET() {
  return NextResponse.json(articles);
}