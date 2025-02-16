//

import ProductsClientComponent from "./ProductsClientComponent"

async function getProducts(){
  const res = await fetch('http://localhost:3000/api/products')
  if(!res.ok){
    throw new Error('Ошибка загрузки продукта')
  }
  return res.json()
}

export default async function ProductsServerComponent(){
  const products = await getProducts()
  const productsProps = products.map((product: any) => ({
    ...product,
    // id: product.id,
    // title: product.title,
    // content: product.content,
    // slug: product.slug 
  }));
  return <ProductsClientComponent products={productsProps} />
}