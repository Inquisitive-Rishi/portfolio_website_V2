import Link from "./Link";
import Skills from "./Skills";
import Subtitle from "./Subtitle";
import ParagraphNormal from "./paragraphs/ParagraphNormal";
import SectionTitle from "./paragraphs/SectionTitle";

const skillDescription = "I started playing with computers when I was 11 years-old. Since then I have been tinkering with all sorts of technologies that in some way or another led me to work on music, photography, sound engineering, electric engineering, automation, video production, feature film post-production, VR games, and 3D sound."

function SkillsSection() {
    return (
        <div className="grid grid-cols-base grid-row-base max-[790px]:flex max-[790px]:flex-col max-[790px]:gap-4 max-[790px]:items-center">
            <SectionTitle text="My Skills" customStyles="col-span-3"/>
            <div className=" bg-zinc-500 row-start-2 min-h-[150px] max-w-[100%] max-[790px]:w-[40%] max-[790px]:min-h-[300px] mr-5"></div>
            <div className="row-start-2 col-start-2">
            <Skills />
            <Subtitle text="I love building stuff 📱"/>
            <ParagraphNormal text={skillDescription} style="text max-[790px]:text-center"/>
            <Link text="keep reading my bio"/>
            </div>
        </div>  
    )
}

export default SkillsSection;