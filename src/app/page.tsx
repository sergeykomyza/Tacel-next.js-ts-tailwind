

import ProductsSlides from "@/components/ProductsSlides";
import Present from "../sections/Present";
import Advantages from "@/sections/Advantages";
import Auditories from "@/sections/Auditories";
import Info from "@/sections/Info";

export default function Home() {
  return (

    <main>
      <Present />
      <ProductsSlides />
      <Advantages />
      <Auditories />
      <Info />
    </main>

  );
}
