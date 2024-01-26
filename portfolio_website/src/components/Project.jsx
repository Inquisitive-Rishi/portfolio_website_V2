import * as data from '../data'
import Skilltab from './Skilltab';
import ParagraphNormal from './paragraphs/ParagraphNormal';
import ProjectTitle from "./paragraphs/ProjectTitle";

export default function Project() {
  return (
    <div className="flex justify-between">
        <div className="min-h-[300px] w-[400px] bg-slate-400"></div>
        <div className='max-w-[50%]'>
            <ProjectTitle title="Etch a sketch"/>
            <div className="flex flex-row-reverse flex-wrap ml-auto my-5 max-w-[70%] gap-1 max-[790px]:justify-center max-[790px]:mx-auto">
            {data.skills.map(skill => <Skilltab key={skill} text={skill}/>)}
            </div>
            <ParagraphNormal style="text-pretty text-right" text= "Assembled and lead a team of 8 developers to create core features and integrate third party APIs. Implemented CI/CD pipeline with Typescript type-checking, database migration, code linting and preview deploys." />
        </div>
    </div>
  )
}
