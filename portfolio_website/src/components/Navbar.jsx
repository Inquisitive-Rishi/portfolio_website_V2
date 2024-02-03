import NavButton from "./NavButton";
import * as data from '../data.js'

function Navbar() {

    return (
        <div className="flex gap-8 justify-center p-2 max-[790px]:flex-col font-bold">
            {data.links.map(link => <NavButton txt={link} key={link}/>)}
        </div>
    )
}

export default Navbar;