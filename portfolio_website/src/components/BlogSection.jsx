import SectionTitle from "./paragraphs/SectionTitle";
import * as data from "../data"
import Subtitle from "./Subtitle";
import ParagraphNormal from "./paragraphs/ParagraphNormal";
import Link from './Link'

const featuredData = data.featuredSection;
console.log(featuredData);

function BlogSection() {
  return (
   <div className="p-10"> 
    <SectionTitle text="Featured"/>
    <div className="flex justify-around  max-[900px]:flex-col">
    {featuredData.map(data => {
        return (
            <div key={data.title} className="w-[250px]">
            <Subtitle key={data.title} text={data.title}/>
            <div className="w-[250px] h-[250px] bg-slate-400 my-2"></div>
            <ParagraphNormal key={data.text} text={data.text}/>
            <Link text="Read the full story"/>
            </div>
        )
    })}
    </div>
   </div>
  )
}

export default BlogSection;
