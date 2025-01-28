import Breadcrumbs from "@/components/Breadcrumbs"
import Components from "@/components/Component"


const Contacts = () => {
  return(
    <div>
      <Breadcrumbs />
      <div className="container">
        <Components name="это пропс" descr="lorem lorem lorem"/>
      </div>
    </div>
  )
}

export default Contacts