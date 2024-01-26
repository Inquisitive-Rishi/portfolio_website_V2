// everything below hero seciton goes in here
import BlogSection from "./BlogSection"
import ProjectSection from "./ProjectSection"
import SkillsSection from "./SkillsSection"

export default function Container() {
  return (
    <div className="max-w-[1200px] m-auto p-3 text-black">
    <SkillsSection/>
    <BlogSection/>
    <ProjectSection/>
    </div>
  )
}

