import { Link } from "react-router-dom";

function NavButton({txt, linkTo}) {
  return (
    <button className="relative px-4 py-2 text-base text-white bg-transparent border-none cursor-pointer group">
      <Link to={linkTo}>{txt}</Link>
      <span className="absolute inset-x-0 bottom-0 left-0 w-0 h-1 bg-blue-500 transition-width duration-300 group-hover:w-full"></span>
    </button>
  )
}

export default NavButton;