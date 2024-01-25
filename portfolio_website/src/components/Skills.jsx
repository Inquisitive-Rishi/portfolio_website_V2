const skills = ['JavaScript','React','NextJS','TypeScript','NodeJS','HTML','CSS','MongoDB','GraphQL','MySQL','PostgreSQL','Firebase','Python']
  


export default function Skills() {
  return (
    <div className="flex flex-wrap max-w-[60%] gap-1 max-[790px]:justify-center max-[790px]:mx-auto">
        {skills.map(skill => <p key={skill} className="text-white font-bold bg-black p-1">{skill}</p>)}
    </div>
  )
}
