import './App.css'
import Footer from "./components/Footer"
import Navbar from "../src/components/Navbar"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className=" text-white relative flex flex-col min-h-screen">
      <Navbar/>
      <div className='flex-1 flex flex-col'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
