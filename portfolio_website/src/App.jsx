import './App.css'
import Footer from "./components/Footer"
import Navbar from "../src/components/Navbar"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className=" text-white relative flex flex-col">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
