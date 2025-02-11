

import ProductsServerComponent from "@/components/ProductsServerComponent";
import Present from "../sections/Present";
import Advantages from "@/sections/Advantages";
import Auditories from "@/sections/Auditories";
import Info from "@/sections/Info";

export default function Home() {
  return (

    <main>
      <Present />
      <ProductsServerComponent />
      <Advantages />
      <Auditories />
      <Info />
    </main>

  );
}
