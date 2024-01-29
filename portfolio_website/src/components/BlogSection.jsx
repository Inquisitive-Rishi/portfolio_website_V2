import SectionTitle from "./paragraphs/SectionTitle";
import * as data from "../data"
import Subtitle from "./Subtitle";
import ParagraphNormal from "./paragraphs/ParagraphNormal";
import Link from './Link'

const featuredData = data.featuredSection;

function BlogSection() {
  return (
   <div> 
    <SectionTitle text="Featured"/>
    <div className="flex justify-around max-[900px]:flex-col max-[900px]:items-center max-[900px]:text-center">
    {featuredData.map(data => {
        return (
            <div key={data.title} className="max-w-[250px]">
            <Subtitle key={data.title} text={data.title}/>
            <div className="w-[100%] h-[250px] bg-slate-400 my-2"></div>
            <ParagraphNormal key={data.text} text={data.text}/>
            <Link/>
            </div>
        )
    })}
    </div>
   </div>
  )
}

export default BlogSection;
