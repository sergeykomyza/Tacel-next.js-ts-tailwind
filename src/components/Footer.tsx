import Image from "next/image";

const Footer = () => {
  return(
    <footer className="mt-auto py-7 bg-darkGreen">
      <div className="container">

        <div className="flex items-center justify-between flex-col md:flex-row gap-5">

          <a className="flex items-center gap-5" href="#">
            <Image
              className="dark:invert"
              src="/footer-logo.png"
              alt="logo"
              width={131}
              height={40}
              priority
            />
            <span className="hidden lg:block font-regular text-[10px]/[10px] text-white">Пищевой продукт <br/> для энтерального питания</span>
          </a>

          <div className="flex items-center gap-5 flex-col sm:flex-row">
            <a className="text-[10px] text-white underline" href="#">Пользавательское соглашение</a>
            <a className="text-[10px] text-white underline" href="#">Политика конфиденциальности</a>
          </div>

          <a className="text-[12px] text-white" href="#">Создание сайта - <b>SergeyKomyza</b> </a>
        
        </div>

      </div>
    </footer>
  )
}

export default Footer;