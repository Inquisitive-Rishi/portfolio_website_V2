import Skills from "./Skills";
import ParagraphNormal from '../components/paragraphs/ParagraphNormal'
import SectionTitle from "./paragraphs/SectionTitle";

const skillDescription = "I started playing with computers when I was 11 years-old. Since then I have been tinkering with all sorts of technologies that in some way or another led me to work on music, photography, sound engineering, electric engineering, automation, video production, feature film post-production, VR games, and 3D sound."

function SkillsSection() {
    return (
        <div className="flex">
            <div className="left w-[100%]">
            <SectionTitle text="My Skills"/>
            <div className="h-32 bg-zinc-500"></div>
            </div>
            <div className="right">
            <Skills/>
            <p className="font-bold">I love building stuff 📱</p>
            <ParagraphNormal text={skillDescription}/>
            <a href="">keep reading my bio</a>
            </div>
        </div>  
    )
}

export default SkillsSection;