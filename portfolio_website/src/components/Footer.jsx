import Subtitle from "./paragraphs/Subtitle";
import * as data from '../data'
import NavButton from "./NavButton";

export default function Footer() {
  return (
    <div className="bg-zinc-700 p-10">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">

        <div>
          <Subtitle text="Rishi Raj"/>
          <p>© {new Date().getFullYear()} Build and designed by <br /> Rishi Raj</p>
        </div>

        <div>
          <p>Links</p>
          <div className="max-w-[200px] flex flex-wrap gap-2">
            {data.links.map(link => <NavButton txt={link.text} linkTo={link.link} key={link.text}/>)}
          </div>
        </div>

        <div>
          <Subtitle text="Let's get in touch"/>
        </div>

      </div>
    </div>
  )
}
