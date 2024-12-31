
import Products from "@/sections/Products";
import Present from "../sections/Present";
import Advantages from "@/sections/Advantages";
import Auditories from "@/sections/Auditories";
import Info from "@/sections/Info";

export default function Home() {
  return (

    <div>
      <Present />
      <Products />
      <Advantages />
      <Auditories />
      <Info />
    </div>

  );
}
