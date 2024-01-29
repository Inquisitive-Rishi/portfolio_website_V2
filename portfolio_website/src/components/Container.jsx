// everything below hero seciton goes in here
import BlogSection from "./BlogSection"
import ProjectSection from "./ProjectSection"
import SkillsSection from "./SkillsSection"
import MailSection from "./MailSection"

export default function Container() {
  return (
    <div className="max-w-[1200px] m-auto p-5 text-black">
    <SkillsSection/>
    <BlogSection/>
    <ProjectSection/>
    <MailSection/>
    </div>
  )
}

