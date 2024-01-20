import NavButton from "./NavButton";

function Navbar() {
    const btns = ['About', 'Blogs', 'Projects', 'Contacts']
    return (
        <div className="flex gap-8 bg-slate-500 justify-center p-2">
            {btns.map(btn => <NavButton txt={btn} key={btn}/>)}
        </div>
    )
}

export default Navbar;