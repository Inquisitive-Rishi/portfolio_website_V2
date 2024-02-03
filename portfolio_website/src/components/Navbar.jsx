import NavButton from "./NavButton";
import * as data from '../data.js'
import hamImg from "../assets/hamburger.png"

function Navbar() {

    return (
        <div className="flex gap-8 justify-center p-2 items-center px-20 font-bold">
            <p className="mr-auto text-3xl">Rishi Raj</p>
            <div><img src={hamImg} className="md-[790px]:hidden" /></div>
            <div className="max-[790px]:hidden">
            {data.links.map(link => <NavButton txt={link} key={link}/>)}
            </div>
        </div>
    )
}

export default Navbar;