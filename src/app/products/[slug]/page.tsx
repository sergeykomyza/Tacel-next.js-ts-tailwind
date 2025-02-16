import { notFound } from 'next/navigation';
import Image from 'next/image';
import ProductsTabs from '@/components/ProductsTabs';

async function getProduct(slug: string) {
  // Здесь fetch() выполняет HTTP-запрос к API. Поскольку запрос может занимать время, 
  // используется ключевое слово await, чтобы дождаться завершения операции.
  const res = await fetch('http://localhost:3000/api/products');
  // Проверка успешности ответа
  if (!res.ok) {
    throw new Error('Ошибка загрузки статей');
  }
  // Метод res.json() преобразует ответ сервера в JavaScript-объект. Здесь получается массив статей articles.
  const products = await res.json();
  // Метод find() возвращает первый элемент массива, соответствующий условию (product.slug === slug). 
  // Если подходящий элемент не найден, возвращается undefined.
  const product = products.find((product: any) => product.slug === slug);
  // Если статья не найдена, вызывается notFound() — функция Next.js, которая отображает страницу ошибки 404.
  if (!product) {
    notFound();
  }
  return product;
}

/*
 Ключевое слово async говорит о том, что функция будет возвращать Promise 
 и может использовать ключевое слово await для работы с асинхронными операциями внутри себя.

  Деструктуризация: { params } позволяет сразу получить значение свойства params из переданных аргументов. 
  Вместо этого:
  function ProductPage(props: { params: { slug?: string } }) {
    const params = props.params;
  }
  использовали это - {params}

  Типизация: { params: { slug?: string } - здесь указывается, что params — это объект, 
  который содержит необязательное (?) свойство slug, являющееся строкой (string).
  Знак ? указывает, что slug может быть undefined. Это полезно, так как параметры маршрута в Next.js могут отсутствовать.
*/
export default async function ProductPage({params}: { params: { slug?: string } }) {

  if (!params) notFound();

  /*
    const { slug } - это тоже Деструктуризация объекта. Она извлекает значение свойства slug из объекта params
    без деструктуризации код выглядел бы так -  const slug = (await Promise.resolve(params)).slug;

    Promise.resolve(params) - это обёртка, которая мгновенно создаёт успешно завершённый Promise с переданным значением (params).
    В данном случае это просто способ симулировать асинхронную операцию.
    Например, функция Promise.resolve({ slug: 'example' }) вернёт Promise, который сразу же разрешится с объектом { slug: 'example' }.
    await заставляет функцию дождаться выполнения Promise и получить результат.
  */
  const { slug } = await Promise.resolve(params);

  if (!slug) notFound();

  const product = await getProduct(slug);

  return (
    
    <div className='pt-10 pb-10'>
      <div className='container'>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 lg:mb-24 mb-10">

              <figure className='shrink-0 flex justify-center'>
                <Image
                  src={`/${product.img}`}
                  alt={product.title}
                  style={{ width: '400px', height: '400px' }}
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                />
              </figure>

              <div>
                <h5 className='mb-10 text-[25px]/[1] font-bold lg:text-[30px]/[1]'>{product.title}</h5>
                <p className='mb-7 text-[20px] font-light'>{product.content}</p>
                <p>{product.description}</p>
              </div>
            </div>

            <ProductsTabs descr={product.description} />

          </div>
    </div>

  );
}
