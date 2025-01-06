interface PageTitleProps{
  title: string;
}

export default function PageTitle({title}: PageTitleProps){
  return(
    <h1 
      dangerouslySetInnerHTML={{ __html: title }} 
      className="mb-7 text-[25px]/[1] lg:text-[35px]/[1] font-bold"
    />
  )
}