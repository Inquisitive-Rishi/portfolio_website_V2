import NavButton from "./NavButton";
import * as data from '../data.js'

function Navbar() {

    return (
        <div className="flex gap-8 bg-slate-500 justify-center p-2 max-[790px]:flex-col">
            {data.links.map(link => <NavButton txt={link} key={link}/>)}
        </div>
    )
}

export default Navbar;