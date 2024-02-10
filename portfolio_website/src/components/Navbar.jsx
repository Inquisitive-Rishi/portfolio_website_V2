import NavButton from "./NavButton";
import * as data from '../data.js'
import hamImg from "../assets/hamburger.png"
import closeNavImg from "../assets/close.png"
import { useState } from "react";
import gitImg from '../assets/git.png'
import { Link } from 'react-router-dom'


function Navbar() {
  const [open, setOpen] = useState(false)

  function toggleNavbar() {
    setOpen(prevState => !prevState)
  }

  return (
    <div className="flex gap-8 justify-center p-2 items-center px-20 font-bold bg-zinc-700">
      <p className="mr-auto text-3xl">Rishi Raj</p>
      {!open && <img src={hamImg} className="md-[790px]:hidden" onClick={toggleNavbar}/>}
      <div className="max-[790px]:hidden">
        {data.links.map(link => <NavButton txt={link.text} linkTo={link.link} key={link.text}/>)}
      </div>
      {open && 
      <div className=" backdrop-blur-lg h-screen w-[400px] flex flex-col gap-3 absolute right-0 top-0 px-10 py-10">
        <img src={closeNavImg} onClick={toggleNavbar} className="h-10 w-10 ml-auto"/>
        {data.links.map(link => <NavButton txt={link.text} linkTo={link.link} key={link.text}/>)}
      </div>
      }
      <button>
        <Link to="github" >
          <img src={gitImg} alt="git image" />
        </Link>
      </button>
    </div>
  )
}

export default Navbar;