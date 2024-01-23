import Skills from "./Skills";
import ParagraphNormal from '../components/paragraphs/ParagraphNormal'
import SectionTitle from "./paragraphs/SectionTitle";

const skillDescription = "I started playing with computers when I was 11 years-old. Since then I have been tinkering with all sorts of technologies that in some way or another led me to work on music, photography, sound engineering, electric engineering, automation, video production, feature film post-production, VR games, and 3D sound."

function SkillsSection() {
    return (
        <div className="grid grid-cols-base grid-row-base  max-[790px]:flex max-[790px]:flex-col">
            <SectionTitle text="My Skills" customStyles="col-span-3"/>
            <div className=" bg-zinc-500 row-start-2 min-h-[300px] max-w-[300px]"></div>
            <div className="row-start-2 col-start-2">
            <Skills/>
            <p className="font-bold my-1">I love building stuff 📱</p>
            <ParagraphNormal text={skillDescription} style="text"/>
            <a href="www.google.com" className="font-bold text-red-500 hover:underline">keep reading my bio</a>
            </div>
        </div>  
    )
}

export default SkillsSection;