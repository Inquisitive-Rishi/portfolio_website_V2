import NavButton from "./NavButton";
import * as data from '../data.js'

function Navbar() {

    return (
        <div className="flex gap-8 bg-slate-500 justify-center p-2 max-[640px]:flex-col">
            {data.btns.map(btn => <NavButton txt={btn} key={btn}/>)}
        </div>
    )
}

export default Navbar;