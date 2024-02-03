import NavButton from "./NavButton";
import * as data from '../data.js'

function Navbar() {

    return (
        <div className="flex gap-8 justify-center p-2 max-[790px]:flex-col items-center px-20 font-bold">
            <p className="mr-auto text-3xl">Rishi Raj</p>
            <div>
            {data.links.map(link => <NavButton txt={link} key={link}/>)}
            </div>
        </div>
    )
}

export default Navbar;