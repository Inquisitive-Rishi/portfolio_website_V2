import SectionTitle from "./paragraphs/SectionTitle";
import * as data from "../data"
import Subtitle from "./Subtitle";
import ParagraphNormal from "./paragraphs/ParagraphNormal";
import Link from './Link'

const featuredData = data.featuredSection;
console.log(featuredData);

function BlogSection() {
  return (
   <div className="min-h-[700px]"> 
    <SectionTitle text="Featured"/>
    {featuredData.map(data => {
        return (
            <>
            <Subtitle key={data.title} text={data.title}/>
            <div className="w-[200px] h-[250px] bg-slate-400"></div>
            <ParagraphNormal key={data.text} text={data.text}/>
            <Link text="Read the full story"/>
            </>
        )
    })}
   </div>
  )
}

export default BlogSection;
