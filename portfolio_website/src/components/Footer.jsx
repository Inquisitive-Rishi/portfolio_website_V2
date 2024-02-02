import Subtitle from "./paragraphs/Subtitle";
import NavButton from "./NavButton";
import * as data from '../data'

export default function Footer() {
  return (
    <div className="bg-zinc-700">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">

        <div>
        <Subtitle text="Rishi Raj"/>
        <p>© {new Date().getFullYear()} Build and designed by <br /> Rishi Raj</p>
        </div>

        <div>
        <p>Links</p>
        <div className="max-w-[300px]">
        {data.btns.map(btn => <NavButton txt={btn} key={btn}/>)}
        </div>

        </div>
        </div>
    </div>
  )
}
