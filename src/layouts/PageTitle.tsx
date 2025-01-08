

interface PageTitleProps{
  children: React.ReactNode;
}

export default function PageTitle({children}: PageTitleProps){
  return(
    <h1 className="mb-7 font-bold text-lg lg:text-xl">
      {children}
    </h1>
  )
}