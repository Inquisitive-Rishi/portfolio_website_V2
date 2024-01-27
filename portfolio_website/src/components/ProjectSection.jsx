import SectionTitle from '../components/paragraphs/SectionTitle'
import * as data from '../data'
import Skilltab from './Skilltab';
import ParagraphNormal from './paragraphs/ParagraphNormal';
import ProjectTitle from "./paragraphs/ProjectTitle";

const projects = data.projects;

export default function ProjectSection() {
  return (
    <div>
        <SectionTitle text="Projects"/>
        <div className='flex flex-col gap-20'>
        {projects.map(project => {
        return (
          <div key={project.id} className='flex justify-between' >
          <div className="min-h-[300px] w-[400px] bg-slate-400"></div>
          <div className='max-w-[50%]'>
               <ProjectTitle key={project.title} title={project.title}/>
               <div className="flex flex-row-reverse flex-wrap ml-auto my-5 max-w-[70%] gap-1 max-[790px]:justify-center max-[790px]:mx-auto">
               {project.stacks.map(skill => <Skilltab key={skill} text={skill}/>)}
               </div>
               <ParagraphNormal key={project.paragraph} style="text-pretty text-right" text={project.paragraph}/>
          </div> 
          </div>
          )})}
        </div>
    </div>
  )
}

{/* <div key={obj.id}>
<div className="min-h-[300px] w-[400px] bg-slate-400"></div>
  <div className='max-w-[50%]'>
      <ProjectTitle title={obj.title}/>
      <div className="flex flex-row-reverse flex-wrap ml-auto my-5 max-w-[70%] gap-1 max-[790px]:justify-center max-[790px]:mx-auto">
      {obj.stacks.map(skill => <Skilltab key={skill} text={skill}/>)}
      </div>
      <ParagraphNormal style="text-pretty text-right" text={obj.paragraph}/>
  </div>
</div> */}