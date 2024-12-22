
interface SectionTitleProps{
  title: string;
}

export default function SectionTitle({title}: SectionTitleProps){
  return(
    <h2 
      dangerouslySetInnerHTML={{ __html: title }} 
      className="mb-7 text-[25px] lg:text-[30px]/[1] text-center"
    />
  )
}